import "reflect-metadata";
import express from "express";
import { clientRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());
app.use("/clients", clientRoutes);

app.listen(3000, () => {
  console.log("Server running in port 3000");
});
