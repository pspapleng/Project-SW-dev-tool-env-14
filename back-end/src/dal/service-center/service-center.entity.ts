import { ReviewEntity } from './../review/review.entity';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { Column, Entity, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { BaseEntity } from '../base/base.entity';
import { ImageEntity } from '../image/image.entity';
import { ServiceTypeEnum } from './service-type.enum';

@Entity({ name: 'service_center' })
export class ServiceCenterEntity extends BaseEntity {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @IsString()
  @Column({ type: 'text' })
  description: string;

  @IsNotEmpty()
  @Column({ type: 'enum', enum: ServiceTypeEnum })
  type: ServiceTypeEnum;

  @IsString()
  @Column({ type: 'text' })
  address: string;

  @IsString()
  @MaxLength(255)
  @Column({ type: 'varchar', length: 255 })
  province: string;

  @IsString()
  @Column({ type: 'text' })
  website: string;

  @IsString()
  @Column({ type: 'text' })
  facebook: string;

  @IsString()
  @MaxLength(255)
  @Column({ type: 'varchar', length: 255 })
  phone: string;

  @IsString()
  @MaxLength(255)
  @Column({ type: 'varchar', length: 255 })
  email: string;

  @IsString()
  @MaxLength(255)
  @Column({ type: 'varchar', length: 255 })
  office_hours: string;

  @IsString()
  @MaxLength(255)
  @Column({ type: 'varchar', length: 255 })
  cost: string;

  @IsNotEmpty()
  @Column({ type: 'numeric' })
  latitude: number;

  @IsNotEmpty()
  @Column({ type: 'numeric' })
  longitude: number;

  @OneToOne(() => ImageEntity)
  @JoinColumn({ name: 'image_id' })
  image: ImageEntity;

  @OneToMany(() => ReviewEntity, (review) => review.id)
  @JoinColumn({ name: 'review_id' })
  review: ReviewEntity;
}
