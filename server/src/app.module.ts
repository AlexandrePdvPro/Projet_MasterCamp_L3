import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UserEntity } from './users/entity/user.entity';
import { Connection } from 'typeorm';
import { UserHttpModule } from './users/users-http.module';
import { SessionModule } from './session/session.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuthModule,
    UserHttpModule,
    TypeOrmModule.forFeature([UserEntity]),
    SessionModule,
  ],
  controllers: [AppController],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
