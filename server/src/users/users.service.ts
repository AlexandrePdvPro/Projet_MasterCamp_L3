import { Repository } from 'typeorm';
import { UserEntity } from '../entity/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  findOne(id: string): Promise<UserEntity> {
    return this.userRepository.findOne(id);
  }
}
