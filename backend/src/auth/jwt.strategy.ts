import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { SECERET_KEY } from './JwtConfig';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: SECERET_KEY,
    });
    console.log('JWT strategy constructor');
  }
  validate(payload: any) :any{
    console.log('JWT payload ',payload);
    return { username: payload.username, sub: payload._id };
  }
}