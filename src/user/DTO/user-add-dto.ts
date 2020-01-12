import { ApiProperty } from '@nestjs/swagger';

export class UserAddDTO {
  @ApiProperty({
    maxLength: 10,
    description: 'Username',
  })
  name: string;

  @ApiProperty()
  age: number;
}
