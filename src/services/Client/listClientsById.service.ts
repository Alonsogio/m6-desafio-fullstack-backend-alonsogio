import AppDataSource from "../../data-source";
import Client from "../../entities/client.entity";
import { AppError } from "../../errors/appError";

export const listClientByIdService = async (clientId: string) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const findClient = await clientRepository.findOneBy({
    id: clientId,
  });

  if (!findClient) {
    throw new AppError("invalid client id!", 404);
  }

  return findClient;
};
