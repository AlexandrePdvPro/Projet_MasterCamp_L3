import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createConnection, getRepository, Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import 'reflect-metadata';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return await User.find();
  }

  async getOne(user: any): Promise<User> {
    return await User.findOne(user.user_id);
  }

  /*findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(numero_identite: string): Promise<User> {
    const user = this.usersRepository
      .createQueryBuilder('user')
      .where('user.numero_identite = :numero_identite', {
        numero_identite: numero_identite,
      })
      .getOne();
    return user;
  }*/

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
