import { EntityRepository, Repository } from 'typeorm';
import { HappyBoxEntity } from './happy-box.entity';

@EntityRepository(HappyBoxEntity)
export class HappyBoxRepository extends Repository<HappyBoxEntity> {}
