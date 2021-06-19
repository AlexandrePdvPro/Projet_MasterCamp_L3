import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  username: 'postgres',
  password: 'abcd',
  port: 5432,
  host: '127.0.0.1',
  database: 'Projet_MasterCamp_L3',
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
};
