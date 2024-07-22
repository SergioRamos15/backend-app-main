import { DataSource } from "typeorm";
import { Usuario } from "../models/entities/User";
import { Proveedor } from "../models/entities/Proveedor";

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'admin',
  database: 'bytransload_node',
  synchronize: false,
  logging: false,
  entities: [Usuario, Proveedor],
  migrations: [],
  subscribers: [],
})