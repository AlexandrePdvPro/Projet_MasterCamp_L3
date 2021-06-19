import { UsersService } from '../users/users.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(numeroIdentite: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(numeroIdentite);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
