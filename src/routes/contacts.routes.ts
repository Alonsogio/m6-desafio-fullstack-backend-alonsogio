import { Router } from "express";
import { createContactController } from "../controllers/Contacts/createContact.controllers";
import { deleteContactController } from "../controllers/Contacts/deleteContact.controllers";
import { listContactsController } from "../controllers/Contacts/listContacts.controllers";
import { updateContactController } from "../controllers/Contacts/updateContact.controllers";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { contactSerializer } from "../serializers/contacts.serializers";

export const contactsRoutes = Router();

contactsRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(contactSerializer),
  createContactController
);

contactsRoutes.get("", ensureAuthMiddleware, listContactsController);

contactsRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(contactSerializer),
  updateContactController
);

contactsRoutes.delete("/:id", ensureAuthMiddleware, deleteContactController);
