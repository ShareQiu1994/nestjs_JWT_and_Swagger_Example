import { ApiProperty } from '@nestjs/swagger';

export class UserUpdateDTO {
  @ApiProperty({
    maxLength: 10,
    description: 'Username',
  })
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  id: number;
}
