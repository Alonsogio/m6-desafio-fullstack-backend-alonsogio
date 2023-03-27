import { Router } from "express";
import { createClientController } from "../controllers/clients.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { clientSerializer } from "../serializers/client.serializers";

export const clientRoutes = Router();

clientRoutes.post(
  "",
  ensureDataIsValidMiddleware(clientSerializer),
  createClientController
);
