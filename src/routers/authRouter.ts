import express from "express";
const router = express();
import * as auth from "../controllers/authController";

router.post("/signin", auth.atuthenticate);

export default router;
