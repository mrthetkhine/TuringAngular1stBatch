import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { User,UserSchema } from '../schemas/user.schema';
import { UserService } from '../user/user.service';
import { LocalStrategy } from './local.auth';
import { SECERET_KEY } from './JwtConfig';
import { JwtStrategy } from './jwt.strategy';
import { JwtGuard } from './jwt.guard';

@Module({
  imports: [
    UserModule, PassportModule,
    JwtModule.register({
    secret: SECERET_KEY,
    signOptions: { expiresIn: '30d' },
  }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  providers: [AuthService,UserService,LocalStrategy,JwtStrategy,JwtGuard],
  controllers: [AuthController]
})
export class AuthModule {}
