import 'reflect-metadata';
import { DataSource } from 'typeorm';
import entities from './entities';
import migrations from './migrations';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'login-sample',
  synchronize: false,
  logging: true,
  entities: entities,
  migrations: migrations,
  subscribers: []
});
