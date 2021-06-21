import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './orm.config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), AuthModule, UsersModule],
  controllers: [AppController],
})
export class AppModule {}
