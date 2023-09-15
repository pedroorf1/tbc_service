import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
dotenv.config();

let server_path = process.env.SERVER_PATH || "http://localhost";
import server from "./src/server";
const app = express();

app.use(server);
server.use(express.json({ limit: "10mb" }));
const corsOptions = {
  origin: server_path,
  optionsSuccessStatus: 200, // for some legacy browsers
};

server.use(cors(corsOptions));

server.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
server.use(bodyParser.json({ limit: "10mb", type: "application/json" }));

const PORT = process.env.PORT || 3500;

if (server_path === "http://localhost") {
  server_path = `${server_path}:${PORT}`;
}

server.use(
  (
    error: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const us = {
      _id: "",
      email: "",
    };
    res.json({ message: error.message });
  }
);

app.listen(PORT, () => {
  console.info(`app started on ${server_path}`);
});
