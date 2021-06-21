import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'numero_identite', passwordField: 'password' });
  }

  async validate(numero_identite: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(numero_identite, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}