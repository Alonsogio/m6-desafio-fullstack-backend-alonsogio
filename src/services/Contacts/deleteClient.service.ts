import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/appError";

export const deleteContactService = async (contactId: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const findContact: any = await contactRepository.findOneBy({
    id: contactId,
  });

  if (!findContact) {
    throw new AppError("invalid id!", 401);
  }

  await contactRepository.delete(findContact);

  return {};
};
