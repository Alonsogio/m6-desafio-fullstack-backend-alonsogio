import { Any } from "typeorm";
import AppDataSource from "../../data-source";
import Client from "../../entities/client.entity";
import { AppError } from "../../errors/appError";

export const deleteClientService = async (clientId: string) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const findClient: any = await clientRepository.findOneBy({
    id: clientId,
  });

  if (!findClient) {
    throw new AppError("invalid id!", 401);
  }

  await clientRepository.delete(findClient);

  return {};
};
