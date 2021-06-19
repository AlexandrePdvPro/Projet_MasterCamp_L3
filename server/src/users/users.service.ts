import { Entity, Column, PrimaryGeneratedColumn, getManager } from 'typeorm';
import { inspect } from 'util';
import { User } from '../entity/user';
import { Injectable } from '@nestjs/common';

@Injectable()
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

  async findOne(username: string): Promise<User | undefined> {
    const entityManager = getManager();
    const targetUser = await entityManager.findOne(User, 1);
    return targetUser;
  }
}
