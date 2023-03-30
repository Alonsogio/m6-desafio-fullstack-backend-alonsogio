import { Request, Response } from "express";
import { listContactsService } from "../../services/Contacts/listContacts.service";

export const listContactsController = async (req: Request, res: Response) => {
  const listContacts = await listContactsService();
  return res.status(200).json(listContacts);
};
