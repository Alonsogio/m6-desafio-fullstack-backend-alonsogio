import * as yup from "yup";
import { SchemaOf } from "yup";
import { IClientRequest } from "../interfaces/clients.interfaces";

export const clientSerializer: SchemaOf<IClientRequest> = yup.object().shape({
  id: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  fullName: yup.string().notRequired(),
  contact: yup.string().notRequired(),
  createdAt: yup.date().notRequired(),
});
