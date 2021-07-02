import { Controller, Request, Get, UseGuards, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('get/users')
  getAll() {
    return this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('find/user')
  getOne(@Request() req) {
    return this.usersService.getOne(req.user);
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
}
