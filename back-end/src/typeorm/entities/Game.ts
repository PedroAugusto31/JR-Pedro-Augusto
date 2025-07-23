import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'games' })
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
  @Column()
  releaseYear: number;
  @Column()
  platforms: string;
  @Column()
  rating: number;
}
