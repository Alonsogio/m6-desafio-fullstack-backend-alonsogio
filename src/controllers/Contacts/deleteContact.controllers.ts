import { Request, Response } from "express";
import { deleteContactService } from "../../services/Contacts/deleteClient.service";

export const deleteContactController = async (req: Request, res: Response) => {
  const contactId = req.params.id;
  const deleteContact = await deleteContactService(contactId);
  return res.status(204).json(deleteContact);
};
