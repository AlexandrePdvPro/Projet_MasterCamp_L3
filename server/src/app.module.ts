import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './orm.config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { Vote } from './votes/entity/vote.entity';
import { UserEntity } from './users/entity/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    AuthModule,
    UsersModule,
    TypeOrmModule.forFeature([UserEntity, Vote]),
  ],
  controllers: [AppController],
})
export class AppModule {}
