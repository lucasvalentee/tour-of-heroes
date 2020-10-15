import { Hero } from './hero';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class HeroService {

  constructor(@InjectModel('Hero') private readonly heroModel: Model<Hero>) { }

	async getAll() {
	 return await this.heroModel.find().exec();
	}

	async getById(id: string) {
		return await this.heroModel.findById(id).exec();
	}

  async getByName(name: string) {
    return await this.heroModel.find({'name': {'$regex': name, '$options': 'i'}});
  }

	async create(hero: Hero) {
    const createdHero = new this.heroModel(hero);
    return await createdHero.save();
	}

	async update(id: string, hero: Hero) {
    await this.heroModel.updateOne({ _id: id }, hero).exec();
    return this.getById(id);
	}

	async delete(id: string) {
    return await this.heroModel.deleteOne({ _id: id }).exec();
	}

}
