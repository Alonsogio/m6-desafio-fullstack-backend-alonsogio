import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import { IContactRequest } from "../../interfaces/contacts.interfaces";
import { Contact } from "../../entities/contact.entity";
import { contactSerializer } from "../../serializers/contacts.serializers";

export const updateContactService = async (
  contactData: IContactRequest,
  contactId: string
) => {
  const contactsRepository = AppDataSource.getRepository(Contact);

  const findContact = await contactsRepository.findOneBy({
    id: contactId,
  });

  if (!findContact) {
    throw new AppError("invalid id!", 401);
  }

  const findKeys = Object.keys(contactData);

  if (findKeys.includes("id")) {
    throw new AppError("Can't update id", 401);
  }

  const updatedContact = contactsRepository.create({
    ...findContact,
    ...contactData,
  });

  await contactsRepository.save(updatedContact);

  const updatedContactWithoutPassword = await contactSerializer.validate(
    updatedContact,
    {
      stripUnknown: true,
    }
  );

  return updatedContactWithoutPassword;
};
