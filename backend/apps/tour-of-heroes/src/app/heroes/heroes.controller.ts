import { Hero } from './shared/hero';
import { HeroService } from './shared/hero.service';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('heroes')
export class HeroesController {

  constructor(
    private heroService: HeroService
  ) { }

  @Get()
  async getAll(@Query('name') name?: string): Promise<Hero[]> {
    return (name ? this.heroService.getByName(name) : this.heroService.getAll());
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Hero> {
    return this.heroService.getById(id);
  }

  @Get(':name')
  async getByName(@Param('name') name: string): Promise<Hero[]> {
    return this.heroService.getByName(name);
  }

  @Post()
  async create(@Body() hero: Hero): Promise<Hero> {
    return this.heroService.create(hero);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() hero: Hero): Promise<Hero> {
    return this.heroService.update(id, hero);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.heroService.delete(id);
  }

}
