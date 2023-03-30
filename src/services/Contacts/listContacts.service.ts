import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { IClientResponse } from "../../interfaces/clients.interfaces";

export const listContactsService = async (): Promise<IClientResponse[]> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const listContact = await contactRepository.find({
    select: {
      id: true,
      fullName: true,
      email: true,
      contact: true,
      createdAt: true,
    },
    relations: {
      client: true,
    },
  });

  return listContact;
};
