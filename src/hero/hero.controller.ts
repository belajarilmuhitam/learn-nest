import { Controller, Get, HttpCode, Post, Req, Res } from '@nestjs/common';

@Controller('hero')
export class HeroController {
  @Get('index')
  @HttpCode(200)
  index(@Res() response): void {
    const responseObject = {
      title: 'hero index',
      description: 'this is description',
    };
    return response.json(responseObject);
  }

  @Get('create')
  create(@Res({ passthrough: true }) response): string {
    response.cookie('name', 'baledemia');
    return 'create index';
  }

  @Post('store')
  store(@Req() request) {
    return {
      data: request.body,
    };
  }

  @Get('*')
  all() {
    return 'yaya';
  }
}
