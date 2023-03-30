import jwt from "jsonwebtoken";
import AppDataSource from "../../data-source";
import "dotenv/config";
import Client from "../../entities/client.entity";
import { AppError } from "../../errors/appError";
import { IClientLogin } from "../../interfaces/clients.interfaces";
import { compare } from "bcrypt";

export const createSessionService = async ({
  email,
  password,
}: IClientLogin): Promise<string> => {
  const clientRepository = AppDataSource.getRepository(Client);
  const client = await clientRepository.findOneBy({
    email: email,
  });

  if (!client) {
    throw new AppError("Email or password invalid!", 403);
  }

  const passwordMatch = await compare(password, client.password);

  if (!passwordMatch) {
    throw new AppError("Email or password invalid!", 403);
  }

  const token = jwt.sign({}, process.env.SECRET_KEY, {
    subject: client.id,
    expiresIn: "24h",
  });
  return token;
};
