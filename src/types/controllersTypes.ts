import { Request, Response } from "express";
export type TControllers = (req: Request, res: Response) => Promise<any>;
