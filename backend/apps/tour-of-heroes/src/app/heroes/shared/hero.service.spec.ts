import { Test, TestingModule } from '@nestjs/testing';
import { HeroService } from './hero.service';

describe('HeroService', () => {
  let provider: HeroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HeroService],
    }).compile();

    provider = module.get<HeroService>(HeroService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
