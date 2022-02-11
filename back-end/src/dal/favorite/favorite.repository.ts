import { Repository } from 'typeorm';
import { FavoriteEntity } from './favorite.entity';

export class FavoriteRepository extends Repository<FavoriteEntity> {}
