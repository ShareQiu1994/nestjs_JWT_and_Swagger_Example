import { ApiProperty } from '@nestjs/swagger';

export class AuthTokenDto {
  @ApiProperty({
    maxLength: 10,
    description: 'Username',
  })
  userName: string;
}
