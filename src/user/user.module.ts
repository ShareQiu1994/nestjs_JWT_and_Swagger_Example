import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }), // user 采用jwt 保护策略(token 鉴权机制)
  ],
  controllers: [UserController],
})
export class UserModule {}
