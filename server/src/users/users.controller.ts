import {
  Controller,
  Request,
  Get,
  UseGuards,
  Put,
  Param,
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

  @Put('users/add/user')
  async addUser(@Request() req) {
    console.log('req.body: ', req.body);
    await this.usersService.addOne(req.body);
  }

  @Get('test')
  getTest(@Request() req) {
    console.log('calling authService in app.controller...');
    return this.usersService.findAll();
  }

  @Get('user_id')
  async getUserID(@Request() req): Promise<UserEntity> {
    console.log('calling usersService...');
    return await this.usersService.getUser(req.params);
  }
}
