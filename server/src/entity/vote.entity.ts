import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class VoteEntity {
  @PrimaryGeneratedColumn()
  vote_id: number;

  @Column()
  cle_transaction: string;

  @Column()
  objet: string;

  @Column()
  valeur: string;

  @Column()
  votant_id: number;
}
