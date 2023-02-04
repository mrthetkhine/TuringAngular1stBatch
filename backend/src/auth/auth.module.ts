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

@Module({
  imports: [
    UserModule, PassportModule,
    JwtModule.register({
    secret: 'E/w*^(GqKcEO*1I',
    signOptions: { expiresIn: '60s' },
  }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  providers: [AuthService,UserService,LocalStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
