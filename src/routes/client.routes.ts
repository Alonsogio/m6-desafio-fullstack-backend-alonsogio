import { Router } from "express";
import { createClientController } from "../controllers/Client/createClient.controllers";
import { deleteClientController } from "../controllers/Client/deleteClient.controllers";
import { listClientsController } from "../controllers/Client/listClients.controllers";
import { updateClientController } from "../controllers/Client/updateClient.controllers";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import {
  clientSerializer,
  clientSerializerPass,
} from "../serializers/client.serializers";
import { listClientByIdController } from "../controllers/Client/listClientById.controllers";

export const clientRoutes = Router();

clientRoutes.post(
  "",
  ensureDataIsValidMiddleware(clientSerializerPass),
  createClientController
);

clientRoutes.get("", ensureAuthMiddleware, listClientsController);

clientRoutes.get("/:id", listClientByIdController);

clientRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(clientSerializer),
  updateClientController
);

clientRoutes.delete("/:id", ensureAuthMiddleware, deleteClientController);
