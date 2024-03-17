import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'location' })
export class Location {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: true, length: 10 })
  building: string;

  @Column({ nullable: true, length: 20 })
  location_name: string;

  @Column({ nullable: true, length: 20 })
  location_number: string;

  @Column({ nullable: true })
  area: number;

  @Column({ nullable: true })
  path: string;
}
