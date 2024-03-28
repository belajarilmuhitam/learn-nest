import { Controller, Get } from '@nestjs/common';

@Controller()
export class HeroController {
  @Get('/hero/index')
  index() {
    return 'hero index';
  }

  @Get('/hero/create')
  create() {
    return 'create index';
  }

  @Get('*')
  all() {
    return 'yaya';
  }
}
