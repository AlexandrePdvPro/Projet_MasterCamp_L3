import { TypeOrmModuleOptions } from '@nestjs/typeorm';
const { DB_NAME, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD } = process.env;
export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  username: DB_USER,
  password: DB_PASSWORD,
  port: parseInt(DB_PORT),
  host: DB_HOST,
  database: DB_NAME,
  synchronize: true,
  entities: ['dist/**/*.entity.js'],
};
