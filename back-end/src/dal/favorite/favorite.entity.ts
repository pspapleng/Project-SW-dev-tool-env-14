import { ServiceCenterEntity } from './../service-center/service-center.entity';
import { Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { BaseEntity } from '../base/base.entity';
import { UserEntity } from '../user/user.entity';

@Entity({ name: 'favorite' })
export class FavoriteEntity extends BaseEntity {
  @ManyToOne(() => UserEntity, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @OneToOne(() => ServiceCenterEntity)
  @JoinColumn({ name: 'service_center_id' })
  serviceCenter: ServiceCenterEntity;
}
