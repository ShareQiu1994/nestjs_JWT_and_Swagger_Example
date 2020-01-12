import { ApiProperty } from '@nestjs/swagger';

export class UserDTO {
  @ApiProperty({
    maxLength: 10,
    description: 'Username',
  })
  name: string;

  @ApiProperty()
  age: number;
}
