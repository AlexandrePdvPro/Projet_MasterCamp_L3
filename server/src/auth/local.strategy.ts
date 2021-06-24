import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'user_id', passwordField: 'password' });
  }

  async validate(user_id: number, password: string): Promise<any> {
    console.log('user_id: ', user_id);
    console.log('password: ', password);
    const user = await this.authService.validateUser(user_id, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
