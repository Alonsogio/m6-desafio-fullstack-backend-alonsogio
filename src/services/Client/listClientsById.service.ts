import AppDataSource from "../../data-source";
import Client from "../../entities/client.entity";
import { AppError } from "../../errors/appError";

export const listClientByIdService = async (clientId: string) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const clientfind = await clientRepository.findOne({
    where: { id: clientId },
    relations: { contacts: true },
  });

  if (!clientfind) {
    throw new AppError("invalid client id!", 404);
  }

  return clientfind;
};
