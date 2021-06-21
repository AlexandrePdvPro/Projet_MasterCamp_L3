import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './entity/user.entity';

const { DB_NAME, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD } = process.env;
export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  username: 'postgres',
  password: 'abcd1234',
  port: 5432,
  host: '127.0.0.1',
  database: 'Projet_MasterCamp_L3',
  synchronize: true,
  entities: [User],
};
