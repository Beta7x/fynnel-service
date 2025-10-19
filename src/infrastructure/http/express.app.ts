import express, { Application } from "express";
import userRouter from "./routes/user.route";

const app: Application = express();

app.use(express.json());
app.use("/users", userRouter);

export { app };

