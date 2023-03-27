import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";
import { Contact } from "./entities/contact.entity";
import Client from "./entities/client.entity";
import path from "path";
import { addClient1679925188459 } from "./migrations/1679925188459-addClient";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.PGHOST,
  port: parseInt(process.env.PGPORT!),
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  logging: true,
  synchronize: false,
  entities: [Contact, Client],
  migrations: [addClient1679925188459],
});
