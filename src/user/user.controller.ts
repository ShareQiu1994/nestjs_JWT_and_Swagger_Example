import { Controller, Get, UseGuards, Headers, Query } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiQuery, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('user')
// @ApiHeader({
//   name: 'Authorization',
//   description: 'Auth token',
// }) // 已经被ApiBearerAuth替代
@ApiBearerAuth() // 必须注入 authorization 才可以访问
@Controller('user')
export class UserController {
  @Get()
  @ApiQuery({
    name: 'id',
  })
  @UseGuards(AuthGuard())
  getUser(@Query('id') id, @Headers('authorization') authorization) {
    console.log(id, authorization);
    return {
      text: 'this is user, id is' + id,
    };
  }
}
