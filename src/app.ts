import "express-async-errors";
import "reflect-metadata";
import express from "express";
import { clientRoutes } from "./routes/client.routes";
import handleError from "./errors/handleErrors";
import { sessionRoutes } from "./routes/session.routes";
import { contactsRoutes } from "./routes/contacts.routes";

const app = express();

app.use(express.json());
app.use("/clients", clientRoutes);
app.use("/contacts", contactsRoutes);
app.use("/login", sessionRoutes);

app.use(handleError);

export default app;
