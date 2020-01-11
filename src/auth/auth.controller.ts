// import { Controller, Post, Body } from '@nestjs/common';
// import { AuthService } from './auth.service';

import { Get, Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('getToken')
  async createToken(): Promise<any> {
    return await this.authService.signIn();
  }
}
