import { Entity, PrimaryColumn, ManyToOne, Column } from 'typeorm';
import { PlantingSite } from './PlantingSite.entity';
import { Category } from './Category.entity';

@Entity()
export class MapboxTile {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @ManyToOne(() => PlantingSite, site => site.mapboxTiles)
    plantingSite: PlantingSite;

    @ManyToOne(() => Category, category => category.mapboxTiles)
    category: Category;
}
