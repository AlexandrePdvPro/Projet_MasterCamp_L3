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

  async validateUser(user_id: string, pass: string): Promise<any> {
    console.log('checking user credentials...');
    const user = this.usersService.findOne(user_id);
    console.log('user: ', user);
    if (user && this.comparePwd(pass, (await user).password)) {
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

  async comparePwd(password: string, hashedPassword: string) {
    const validPassword = await bcrypt.compare(password, hashedPassword);
  }
}
