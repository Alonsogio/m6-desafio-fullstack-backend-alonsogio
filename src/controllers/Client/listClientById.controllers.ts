import { Request, Response } from "express";
import { listClientByIdService } from "../../services/Client/listClientsById.service";

export const listClientByIdController = async (req: Request, res: Response) => {
  const clientId = req.params.id;
  const client = await listClientByIdService(clientId);
  return res.json(client);
};
