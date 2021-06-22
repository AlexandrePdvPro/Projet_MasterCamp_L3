import { Controller, Request, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { LocalAuthGuard } from '../auth/local-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(LocalAuthGuard)
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  @UseGuards(LocalAuthGuard)
  @Get('/one')
  getOne(@Request() req) {
    return this.usersService.getOne(req.user);
  }
}
