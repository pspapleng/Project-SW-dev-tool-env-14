import { Exclude } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import { BaseEntity } from '../base/base.entity';
import { FavoriteEntity } from './../favorite/favorite.entity';
import { HappyBoxEntity } from './../happy-box/happy-box.entity';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @Column({ type: 'varchar', length: 255, nullable: false })
  email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @Column({ type: 'varchar', length: 255, nullable: false })
  username: string;

  @IsString()
  @IsNotEmpty()
  @Exclude({ toPlainOnly: true })
  @Column({ type: 'text', nullable: false })
  password: string;

  @IsString()
  @Column({ type: 'text' })
  bio: string;

  @IsString()
  @Column({ type: 'text' })
  profileImageUrl: string;

  @IsString()
  @Column({ type: 'text' })
  coverImageUrl: string;

  @OneToMany(() => FavoriteEntity, (favorite) => favorite.id)
  @JoinColumn({ name: 'favorite_id' })
  favorite: FavoriteEntity;

  @OneToMany(() => HappyBoxEntity, (happyBox) => happyBox.id)
  @JoinColumn({ name: 'happy_box_id' })
  happyBox: HappyBoxEntity;
}
