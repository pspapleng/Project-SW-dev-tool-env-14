import { Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { BaseEntity } from '../base/base.entity';
import { ImageEntity } from '../image/image.entity';
import { UserEntity } from '../user/user.entity';

@Entity({ name: 'happy_box' })
export class HappyBoxEntity extends BaseEntity {
  @ManyToOne(() => UserEntity, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @OneToOne(() => ImageEntity)
  @JoinColumn({ name: 'image_id' })
  image: ImageEntity;
}
