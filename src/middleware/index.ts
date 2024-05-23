import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "Token is required" });
  }

  jwt.verify(token, process.env.SECRET_KEY || "", (err: any, decoded: any) => {
    if (err) return res.status(401).json({ message: "Unauthorized" });

    (req as any).user = decoded;
    next();
  });
};

const verifyOnlyAdmin = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "Token is required" });
  }

  jwt.verify(token, process.env.SECRET_KEY || "", (err: any, decoded: any) => {
    if (err) return res.status(401).json({ message: "Unauthorized" });

    if (decoded?.role !== "admin") return res.status(403).json({ message: "Forbidden" });

    (req as any).user = decoded;
    next();
  });
};

export { verifyToken, verifyOnlyAdmin };
