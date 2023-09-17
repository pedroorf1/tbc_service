import express from "express";
const server = express();

// import userRouter from "../routers/userRouter";
// import authRouter from "../routers/authRouter";
import homeRouter from "../routers/homeRouter";
// import perfilRouter from "../routers/perfilRouter";

// server.use("/", userRouter);
// server.use("/", authRouter);
server.use("/", homeRouter);
// server.use("/", perfilRouter);

export default server;
