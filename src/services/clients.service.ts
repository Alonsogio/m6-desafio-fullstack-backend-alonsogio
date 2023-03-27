import { AppDataSource } from "../data-source";
import Client from "../entities/client.entity";
import { AppError } from "../errors/appError";
import { IClientRequest } from "../interfaces/clients.interfaces";

export const createClientService = async (
  clientData: IClientRequest
): Promise<IClientRequest> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const clientFind = await clientRepository.findAndCountBy({
    email: clientData.email,
  });

  console.log("oiiiiii");

  // if (clientFind[1] > 0) {
  //   throw new AppError("Email already exists!", 409);
  // }

  const newClient = await clientRepository.save(clientData);
  console.log(clientData);

  return newClient;
};
