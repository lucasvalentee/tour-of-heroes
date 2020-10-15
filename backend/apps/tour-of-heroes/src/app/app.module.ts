import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesModule } from './heroes/heroes.module';

import { MongooseModule } from '@nestjs/mongoose';

import { MONGO_CONFIG } from './database.config';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://${MONGO_CONFIG.user}:${MONGO_CONFIG.password}@clusterforapi.ndoyw.gcp.mongodb.net/${MONGO_CONFIG.database}?retryWrites=true&w=majority`),
    HeroesModule
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}
