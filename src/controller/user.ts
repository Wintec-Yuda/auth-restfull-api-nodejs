import { Request, Response } from "express";
import userService from "../service/user";
import bcrypt from "bcrypt";
import userValidation from "../validation/user";
import jwt from "jsonwebtoken";

const userController = {
  async register(req: Request, res: Response) {
    try {
      const { value, error } = userValidation.register.validate(req.body);

      if (error) return res.status(400).json({ message: error?.message || "Bad request" });

      const { password } = value;

      const hashPassword = await bcrypt.hash(password, 10);

      const newUser = {
        name: value.name,
        email: value.email,
        password: hashPassword,
        role: value.role || "user",
      };

      const data = await userService.register(newUser);

      return res.status(201).json({
        message: "Created successfully",
        data,
      });
    } catch (error: any) {
      return res.status(500).json({
        message: error.message || "Internal server error",
      });
    }
  },
  async login(req: Request, res: Response) {
    try {
      const { value, error } = userValidation.login.validate(req.body);

      if (error) return res.status(400).json({ message: error?.message || "Bad request" });

      const data = await userService.login(value.email);

      if (!data) {
        return res.status(400).json({ message: "Invalid email or password" });
      }

      const passwordMatch = await bcrypt.compare(value.password, data.password);

      if (!passwordMatch) {
        return res.status(400).json({ message: "Invalid email or password" });
      }

      const token = jwt.sign(data, process.env.SECRET_KEY || "");

      return res.status(201).json({
        message: "Created successfully",
        data,
        token,
      });
    } catch (error: any) {
      return res.status(500).json({
        message: error.message || "Internal server error",
      });
    }
  },
  async getUsers(req: Request, res: Response) {
    try {
      const data = await userService.getAll();
      return res.status(200).json(data);
    } catch (error: any) {
      return res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },
  async deleteUserById(req: Request, res: Response) {
    try {
      const data = await userService.delete(req.params.id);
      if (!data) {
        return res.status(404).json({
          message: "User not found",
        });
      }
      return res.status(200).json({
        message: "Deleted successfully",
      });
    } catch (error: any) {
      return res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },
};

export default userController;
