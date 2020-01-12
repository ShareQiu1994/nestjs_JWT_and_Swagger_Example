import { Get, Controller, Post, Body, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags, ApiQuery } from '@nestjs/swagger';
import { AuthTokenDto } from './DTO/auth-token-dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signInToken') // 注册token
  async createToken(@Body() authTokenDto: AuthTokenDto): Promise<any> {
    return await this.authService.signIn(authTokenDto);
  }

  @Get('verifyToken') // 解析token
  @ApiQuery({
    name: 'token',
    description: '请输入token',
  })
  async analysisToken(@Query('token') token: string): Promise<any> {
    return await this.authService.verify(token);
  }
}
