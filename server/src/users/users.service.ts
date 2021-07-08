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

  async findOne(user_id: string): Promise<UserEntity | undefined> {
    console.log('findOne...');
    const user = this.usersRepository.findOne(user_id);
    console.log('user: ', user);
    return user;
  }

  async getAllUsers(): Promise<UserEntity[]> {
    console.log('getAll...');
    return await UserEntity.find();
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
          numero_identite: await user.numero_id,
          password: await this.hashIt(user.password),
          email: await user.email,
          admin: false,
        },
      ])
      .execute();
    console.log('User added');
  }

  async getUser(params: any): Promise<UserEntity> {
    console.log('usersService    user: ', params);
    const user = await getRepository(UserEntity)
      .createQueryBuilder('user')
      .where('user.email = :email', { email: params.email })
      .getOne();
    return user;
  }

  async hashIt(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(6);
    const hashed = await bcrypt.hash(password, salt);
    return hashed;
  }
}
