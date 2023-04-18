import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  idUsu: string;

  @Column()
  login: string;

  @Column()
  senha: string;

  @Column()
  admin: boolean;
}
