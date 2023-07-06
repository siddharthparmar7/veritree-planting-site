import { Entity, Column, OneToMany, PrimaryColumn } from 'typeorm';
import { MapboxTile } from './MapboxTile.entity';

@Entity()
export class PlantingSite {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => MapboxTile, tile => tile.plantingSite)
    mapboxTiles: MapboxTile[];
}
