import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    // private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(): Promise<string> {
    // In the real-world app you shouldn't expose this method publicly
    // instead, return a token once you verify user credentials
    const user = { email: 'user@email.com' };
    return this.jwtService.sign(user);
  }

  async validateUser(payload: any): Promise<any> {
    // return await this.usersService.findOneByEmail(payload.email);
    console.log(payload);
    return {};
  }
}
