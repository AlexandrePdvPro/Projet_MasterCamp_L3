import { UsersService } from '../users/users.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(numeroIdentite: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(numeroIdentite);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { numeroIdentite: user.numero_identite, sub: user.user_id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
