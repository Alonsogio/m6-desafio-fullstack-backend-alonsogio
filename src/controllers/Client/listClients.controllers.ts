import { Request, Response } from "express";
import { listClientsService } from "../../services/Client/listClients.service";

export const listClientsController = async (req: Request, res: Response) => {
  const listClients = await listClientsService();
  return res.status(200).json(listClients);
};
