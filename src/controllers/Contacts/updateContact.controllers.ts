import { Request, Response } from "express";
import { IContactRequest } from "../../interfaces/contacts.interfaces";
import { updateContactService } from "../../services/Contacts/updateContact.service";

export const updateContactController = async (req: Request, res: Response) => {
  const contactData: IContactRequest = req.body;
  const contactId = req.params.id;
  const updatedContact = await updateContactService(contactData, contactId);
  return res.json(updatedContact);
};
