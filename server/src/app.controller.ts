import { Controller, Request, Post, UseGuards, Get, Put } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get('test')
  getTest(@Request() req) {
    console.log('calling authService in app.controller...');
    return this.authService.getUser();
  }

  @Put('add/user')
  async addUser(@Request() req) {
    console.log('req.query: ', req.query);
    console.log('calling authService in app.controller...');
    await this.authService.addUser(req.query);
  }
}
