import { Controller, Get } from '@nestjs/common';

@Controller('hero')
export class HeroController {
  @Get('index')
  index() {
    return 'hero index';
  }

  @Get('create')
  create() {
    return 'create index';
  }

  @Get('*')
  all() {
    return 'yaya';
  }
}
