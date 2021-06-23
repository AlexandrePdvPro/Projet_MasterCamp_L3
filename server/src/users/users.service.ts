import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import 'reflect-metadata';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    console.log('calling usersRepository...');
    return await this.usersRepository.find();
  }

  async findOne(id: number): Promise<UserEntity> {
    console.log('findOne...');
    return await this.usersRepository.findOne(id);
  }

  async getAllUsers(): Promise<UserEntity[]> {
    console.log('getAll...');
    return await UserEntity.find();
  }

  async getOne(user: any): Promise<UserEntity> {
    console.log('fetching...');
    const fetchedUser = await UserEntity.findOne(user.user_id);
    return fetchedUser;
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
