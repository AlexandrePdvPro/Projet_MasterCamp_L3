import { UsersService } from '../users/users.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(numero_identite: string, pass: string): Promise<any> {
    console.log('checking user credentials...');
    const user = await this.usersService.findOne(numero_identite);
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
}
