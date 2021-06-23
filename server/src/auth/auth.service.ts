import { UsersService } from '../users/users.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../users/entity/user.entity';
import bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(user_id: number, pass: string): Promise<any> {
    console.log('checking user credentials...');
    const user = await this.usersService.findOne(user_id);
    console.log('user: ', user);
    if (user && this.comparePwd(pass, user.password)) {
      console.log('Comparing password...');
      console.log('User authenticated');
      return user;
    }
    console.log('échec');
    return null;
  }

  async login(user: any) {
    const payload = {
      password: user.password,
      sub: user.user_id,
    };
    console.log('Sending jwt to sign()');
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  getUser(): Promise<UserEntity> {
    console.log('Calling usersService on auth.service...');
    const res = this.usersService.findAll()[0];
    return res;
  }

  addUser(user: any): Promise<any> {
    console.log('auth.service    user: ', user);
    console.log('Calling usersService on auth.service...');
    return this.usersService.addOne(user);
  }

  async comparePwd(password: string, hashedPassword: string) {
    const validPassword = await bcrypt.compare(password, hashedPassword);
  }
}
