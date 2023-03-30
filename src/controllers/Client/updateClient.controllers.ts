import { Request, Response } from "express";
import { IClientUpdate } from "../../interfaces/clients.interfaces";
import { updateClientService } from "../../services/Client/updateClient.service";

export const updateClientController = async (req: Request, res: Response) => {
  const clientData: IClientUpdate = req.body;
  const clientId = req.params.id;
  const updatedClient = await updateClientService(clientData, clientId);
  return res.json(updatedClient);
};
