import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createConnection, getRepository, Repository } from 'typeorm';
import { User } from '../entity/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {
    createConnection({
      name: 'usersService',
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'abcd1234',
      database: 'Projet_MasterCamp_L3',
      entities: [User],
      synchronize: true,
    }).then(async (connection) => {
      console.log('Connexion établie');
      this.usersRepository = connection.getRepository(User);
      console.log('liste créée');
      console.log(this.usersRepository);
    });
  }

  findAll(): Promise<User[]> {
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
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
