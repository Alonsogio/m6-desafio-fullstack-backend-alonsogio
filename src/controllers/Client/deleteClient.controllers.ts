import { Request, Response } from "express";
import { deleteClientService } from "../../services/Client/deleteClient.service";

export const deleteClientController = async (req: Request, res: Response) => {
  const clientId = req.params.id;
  const deleteClient = await deleteClientService(clientId);
  return res.status(204).json(deleteClient);
};
