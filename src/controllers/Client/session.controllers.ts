import { Request, Response } from "express";
import { IClientLogin } from "../../interfaces/clients.interfaces";
import { createSessionService } from "../../services/Sessions/createSession.service";

export const createSessionController = async (req: Request, res: Response) => {
  const sessionData: IClientLogin = req.body;
  const token = await createSessionService(sessionData);
  return res.json({ token });
};
