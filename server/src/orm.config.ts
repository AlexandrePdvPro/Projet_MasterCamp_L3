import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserEntity } from './users/entity/user.entity';
import { Vote } from './votes/entity/vote.entity';
import * as dotenv from 'dotenv';
dotenv.config();

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  username: 'postgres',
  password: 'abcd1234',
  port: parseInt(process.env.DB_PORT),
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  synchronize: true,
  entities: [UserEntity, Vote],
};
