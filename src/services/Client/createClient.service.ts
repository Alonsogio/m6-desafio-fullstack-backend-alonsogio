import AppDataSource from "../../data-source";
import Client from "../../entities/client.entity";
import { AppError } from "../../errors/appError";
import {
  IClientRequest,
  IClientResponse,
} from "../../interfaces/clients.interfaces";
import { clientSerializer } from "../../serializers/client.serializers";
import { hash } from "bcryptjs";

export const createClientService = async (
  clientData: IClientRequest
): Promise<IClientResponse> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const clientFind = await clientRepository.findAndCountBy({
    email: clientData.email,
  });

  const hashedPassword = await hash(clientData.password, 10);

  if (clientFind[1] > 0) {
    throw new AppError("Email already exists!", 409);
  }

  clientData.password = hashedPassword;

  const newClient = await clientRepository.save(clientData);

  const clientWithoutPassword = await clientSerializer.validate(newClient, {
    stripUnknown: true,
  });

  return clientWithoutPassword;
};
