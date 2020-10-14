import { Hero } from './shared/hero';
import { HeroService } from './shared/hero.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('heroes')
export class HeroesController {

  constructor(
    private heroService: HeroService
  ) { }

  @Get()
  async getAll(): Promise<Hero[]> {
    return this.heroService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<Hero|Boolean> {
    return this.heroService.getById(id);
  }

  @Post()
  async create(@Body() hero: Hero): Promise<Hero> {
    return this.heroService.create(hero);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() hero: Hero): Promise<Hero|Boolean> {
    hero.id = id;
    return this.heroService.update(hero);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    this.heroService.delete(id);
  }

}
