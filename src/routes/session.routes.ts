import { Router } from "express";
import { createSessionController } from "../controllers/Client/session.controllers";

export const sessionRoutes = Router();

sessionRoutes.post("", createSessionController);
