import { IsString } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../base/base.entity';
import { UserEntity } from '../user/user.entity';

@Entity({ name: 'happy_box' })
export class HappyBoxEntity extends BaseEntity {
  @ManyToOne(() => UserEntity, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @IsString()
  @Column({ type: 'text' })
  imageUrl: string;
}
