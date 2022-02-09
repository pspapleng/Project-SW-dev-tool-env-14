import { IsNotEmpty } from 'class-validator';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base/base.entity';

@Entity({ name: 'image' })
export class ImageEntity extends BaseEntity {
  @IsNotEmpty()
  @Column({ type: 'bytea', nullable: false })
  image: Buffer;
}
