import {
  Controller,
  Get,
  UseGuards,
  Body,
  Post,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { UserAddDTO } from './DTO/user-add-dto';
import { UserUpdateDTO } from './DTO/user-update-dto';

@ApiTags('user')
@ApiBearerAuth() // 在线文档增加登录鉴权 (Swagger)
@UseGuards(AuthGuard()) // 整个类的方法都是 401鉴权的
@Controller('user')
export class UserController {
  // 获取user列表
  @Get()
  getUser() {
    return [
      {
        name: '刘博方',
        age: 25,
      },
      {
        name: '秋秋',
        age: 18,
      },
    ];
  }

  // 获取user指定ID
  @Get(':id')
  @ApiParam({
    name: 'id',
    description: '参数id',
  })
  getUserId(@Param('id') id: Number) {
    return {
      name: '刘博方',
      age: 25,
      id: id,
    };
  }

  // 新增用户
  @Post()
  addUser(@Body() UserAddDTO: UserAddDTO) {
    return {
      UserAddDTO,
    };
  }

  // 修改用户
  @Put()
  updateUser(@Body() UserUpdateDTO: UserUpdateDTO) {
    return {
      UserUpdateDTO,
    };
  }

  // 删除用户
  @Delete(':id')
  @ApiParam({
    name: 'id',
    description: '参数id',
  })
  deleteUser(@Param('id') id: Number) {
    return {
      name: '刘博方',
      age: 25,
      id: id,
    };
  }
}
