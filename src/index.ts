import app from "./app";

const port = 3000;

app.listen(port, () => {
  console.info(`Server is running on http://localhost:${port}`);
});
