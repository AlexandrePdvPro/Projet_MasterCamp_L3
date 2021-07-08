import {
  Controller,
  Request,
  Get,
  UseGuards,
  Put,
  Param, Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserEntity } from './entity/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('get/users')
  getAll() {
    return this.usersService.findAll();
  }

  @Put('add/user')
  async addUser(@Request() req) {
    console.log('req.body: ', req.body);
    await this.usersService.addOne(req.body);
  }

  @Get('test')
  getTest(@Request() req) {
    console.log('calling authService in app.controller...');
    return this.usersService.findAll();
  }

  @Get('get/user_id')
  async getUserId(@Query("email") mail,@Request() req): Promise<UserEntity> {
    console.log('calling usersService...');
    console.log('mail : ' , mail);
    console.log('req : ' , req);
    return await this.usersService.getUser(mail);
  }

  @Get('get/user')
  async getUser(@Request() req): Promise<UserEntity> {
    return await this.usersService.findOne(req.params);
  }
}
