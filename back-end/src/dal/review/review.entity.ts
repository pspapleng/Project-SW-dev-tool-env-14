import { ServiceCenterEntity } from './../service-center/service-center.entity';
import { IsString } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { BaseEntity } from '../base/base.entity';
import { UserEntity } from '../user/user.entity';

@Entity({ name: 'review' })
export class ReviewEntity extends BaseEntity {
  @OneToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => ServiceCenterEntity, (serviceCenter) => serviceCenter.id)
  @JoinColumn({ name: 'service_center_id' })
  serviceCenter: ServiceCenterEntity;

  @IsString()
  @Column({ type: 'text' })
  content: string;
}
