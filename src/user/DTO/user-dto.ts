import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UserDTO {
  @ApiProperty()
  @IsNotEmpty({ message: 'name字段不能为空!' }) //  nest逻辑层验证
  name: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'age字段不能为空!' }) //  nest逻辑层验证
  age: number;
}
