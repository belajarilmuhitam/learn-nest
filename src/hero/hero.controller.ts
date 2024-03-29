import { Controller, Get, HttpCode, Post, Req, Res } from '@nestjs/common';

interface Hero {
  id: number;
  nama: string;
  type: string;
  gambar: string;
}

@Controller('hero')
export class HeroController {
  private heroes: Hero[] = [];

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
  store(@Req() request): { data: Hero } {
    const { id, nama, type, gambar } = request.body;
    this.heroes.push({ id, nama, type, gambar });
    return {
      data: request.body,
    };
  }

  @Get('*')
  all() {
    return 'yaya';
  }
}
