import { MongooseModule } from '@nestjs/mongoose';
import { HeroService } from './shared/hero.service';
import { HeroesController } from './heroes.controller';
import { Module } from '@nestjs/common';

import { HeroSchema } from './schemas/hero.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Hero', schema: HeroSchema }
    ])
  ],
  controllers: [
    HeroesController
  ],
  providers: [
    HeroService
  ]
})
export class HeroesModule {}
