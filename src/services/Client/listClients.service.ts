import AppDataSource from "../../data-source";
import Client from "../../entities/client.entity";
import { IClientResponse } from "../../interfaces/clients.interfaces";

export const listClientsService = async (): Promise<IClientResponse[]> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const listClients = await clientRepository.find({
    select: {
      id: true,
      fullName: true,
      email: true,
      contact: true,
      createdAt: true,
    },
    relations: {
      contacts: true,
    },
  });

  return listClients;
};
