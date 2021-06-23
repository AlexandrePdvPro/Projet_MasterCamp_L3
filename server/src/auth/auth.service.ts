import { UsersService } from '../users/users.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../users/entity/user.entity';

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
    if (user && user.password === pass) {
      console.log('Comparing password...');
      const { password, ...result } = user;
      console.log('User authenticated');
      return result;
    }
    console.log('échec');
    return null;
  }

  async login(user: any) {
    const payload = {
      numero_identite: user.numero_identite,
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
}
