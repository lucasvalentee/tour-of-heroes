import { Hero } from './hero';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HeroService {
	heroes: Hero[] = [
		{ id: 1 , name: 'Dr Nice' },
		{ id: 2 , name: 'Narco' },
		{ id: 3 , name: 'Bombasto' },
		{ id: 4 , name: 'Celeritas' },
		{ id: 5 , name: 'Magneta' },
		{ id: 6 , name: 'RubberMan' },
		{ id: 7 , name: 'Dynama' },
		{ id: 8 , name: 'Dr IQ' },
		{ id: 9 , name: 'Magma' },
		{ id: 10, name: 'Tornado' }
	];

	getAll(): Hero[] {
		return this.heroes;
	}

	getById(id: number): Hero | boolean {
		return this.heroes.find(value => value.id == id) || false;
	}

	create(hero: Hero): Hero {
		hero.id = (this.heroes.length > 0 ? Math.max(...this.heroes.map(currentHero => currentHero.id)) + 1 : 1);
		this.heroes.push(hero);

		return hero;
	}

	update(hero: Hero): Hero | boolean {
    let heroToUpdate = this.getById(hero.id);

    if(typeof heroToUpdate !== 'boolean') {
      heroToUpdate.name = hero.name;
    }

    return heroToUpdate;
	}

	delete(id: number): void {
    let indexOfHero = this.heroes.findIndex(hero => hero.id == id);

    if(indexOfHero >= 0) {
      this.heroes.splice(indexOfHero, 1);
    }
	}

}
