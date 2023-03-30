import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";
import { Contact } from "./entities/contact.entity";
import Client from "./entities/client.entity";
import { addClient1680036897271 } from "./migrations/1680036897271-addClient";

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "db.sqlite3",
  logging: true,
  synchronize: false,
  entities: [Client, Contact],
  migrations: [addClient1680036897271],
});

export default AppDataSource;
