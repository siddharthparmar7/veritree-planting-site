import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { MapboxTile } from './MapboxTile.entity';

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => MapboxTile, tile => tile.category)
    mapboxTiles: MapboxTile[];
}
