import { HeroService } from './shared/hero.service';
import { HeroesController } from './heroes.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [
    HeroesController
  ],
  providers: [
    HeroService
  ]
})
export class HeroesModule {}
