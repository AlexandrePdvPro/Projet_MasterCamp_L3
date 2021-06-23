import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './orm.config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UserEntity } from './users/entity/user.entity';
import { Connection } from 'typeorm';
import { UserHttpModule } from './users/users-http.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    AuthModule,
    UsersModule,
    UserHttpModule,
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [AppController],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
