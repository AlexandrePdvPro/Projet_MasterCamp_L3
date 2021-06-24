import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, getRepository, Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import 'reflect-metadata';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require('bcrypt');

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  findAll(): Promise<UserEntity[]> {
    console.log('calling usersRepository...');
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<UserEntity> {
    console.log('findOne...');
    return this.usersRepository.findOne(id);
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

  async addOne(user: any): Promise<void> {
    console.log('users.service    user: ', user);
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(UserEntity)
      .values([
        {
          nom: await user.nom,
          prenom: await user.prenom,
          numero_identite: await user.numero_identite,
          password: await this.hashIt(user.password),
          admin: false,
        },
      ])
      .execute();
    console.log('User added');
  }

  async hashIt(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(6);
    const hashed = await bcrypt.hash(password, salt);
    return hashed;
  }
}
