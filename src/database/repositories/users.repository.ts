import { AppDataSource } from '../data-source';
import { Users } from '../entities/Users/Users';

// Instancia uma nova classe do repositóro de usuários extendendo o AppDataSource
const usersRepository = AppDataSource.getRepository(Users).extend({});
