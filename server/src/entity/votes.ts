import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Vote {
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
