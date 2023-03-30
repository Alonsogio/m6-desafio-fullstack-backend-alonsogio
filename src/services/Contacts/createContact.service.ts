import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import { Contact } from "../../entities/contact.entity";
import { IContactRequest } from "../../interfaces/contacts.interfaces";
import Client from "../../entities/client.entity";
import { contactSerializer } from "../../serializers/contacts.serializers";

export const createContactService = async (
  contactData: IContactRequest,
  clientReqId
) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const clientRepository = AppDataSource.getRepository(Client);

  const contactFind = await contactRepository.findAndCountBy({
    email: contactData.email,
  });

  if (contactFind[1] > 0) {
    throw new AppError("Email already exists!", 409);
  }

  const clientFind: any = await clientRepository.findAndCountBy({
    id: clientReqId,
  });

  if (!clientFind) {
    throw new AppError("client not exists!", 409);
  }

  const contactCreate = contactRepository.create({
    ...contactData,
    client: clientReqId,
  });

  const newContact = await contactRepository.save(contactCreate);

  const clientWithoutPassword = await contactSerializer.validate(newContact, {
    stripUnknown: true,
  });

  return clientWithoutPassword;
};
