import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vote } from './entity/vote.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VotesService {
  constructor(
    @InjectRepository(Vote)
    private votesRepository: Repository<Vote>,
  ) {}

  findAll(): Promise<Vote[]> {
    console.log('calling votesReppsitory...');
    return this.votesRepository.find();
  }
}
