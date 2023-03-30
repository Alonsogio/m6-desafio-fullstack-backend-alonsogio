import * as yup from "yup";
import { SchemaOf } from "yup";
import { IContactResponse } from "../interfaces/contacts.interfaces";

export const contactSerializer: SchemaOf<IContactResponse> = yup
  .object()
  .shape({
    id: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    fullName: yup.string().notRequired(),
    contact: yup.string().notRequired(),
    createdAt: yup.date().notRequired(),
    client: yup.string().notRequired(),
  });
