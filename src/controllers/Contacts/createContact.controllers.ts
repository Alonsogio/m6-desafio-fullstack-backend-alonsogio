import { Request, Response } from "express";
import { IContactRequest } from "../../interfaces/contacts.interfaces";
import { createContactService } from "../../services/Contacts/createContact.service";

export const createContactController = async (req: Request, res: Response) => {
  const contactData: IContactRequest = req.body;
  const clientReqId = req.client.id;
  const newContact = await createContactService(contactData, clientReqId);
  return res.status(201).json(newContact);
};
