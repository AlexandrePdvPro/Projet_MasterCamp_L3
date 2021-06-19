import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  getManager,
  createConnection,
  Repository,
} from 'typeorm';
import { UserEntity } from '../entity/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
const { DB_NAME, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD } = process.env;

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
/*@Entity()
export class UsersService {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  nom: string;

  @Column('text')
  prenom: string;

  @Column('text')
  numeroIdentite: string;

  @Column()
  admin: boolean;

  async findOne(numeroIdentite: string): Promise<UserEntity | undefined> {
    const entityManager = getManager();
    const targetUser = await entityManager.findOne(UserEntity, numeroIdentite);
    return targetUser;
  }

  async loadUsersFromDB() {
    createConnection({
      type: 'postgres',
      host: DB_HOST,
      port: parseInt(DB_PORT),
      username: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      entities: [__dirname + '/entity/!*.js'],
      synchronize: true,
    })
      .then((connection) => {
        const allUsers = connection.manager.find(UserEntity);
        return allUsers;
      })
      .catch((error) => console.log(error));
  }
}*/
