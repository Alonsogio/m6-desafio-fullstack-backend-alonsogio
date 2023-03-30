import AppDataSource from "../../data-source";
import { IClientUpdate } from "../../interfaces/clients.interfaces";
import Client from "../../entities/client.entity";
import { AppError } from "../../errors/appError";
import { clientSerializer } from "../../serializers/client.serializers";

export const updateClientService = async (
  clientData: IClientUpdate,
  clientId: string
) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const findClient = await clientRepository.findOneBy({
    id: clientId,
  });

  if (!findClient) {
    throw new AppError("invalid id!", 401);
  }

  const findKeys = Object.keys(clientData);

  if (findKeys.includes("id")) {
    throw new AppError("Can't update id", 401);
  }

  const updatedClient = clientRepository.create({
    ...findClient,
    ...clientData,
  });

  await clientRepository.save(updatedClient);

  const updatedClientWithoutPassword = await clientSerializer.validate(
    updatedClient,
    {
      stripUnknown: true,
    }
  );

  return updatedClientWithoutPassword;
};
