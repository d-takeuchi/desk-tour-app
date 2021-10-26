import { Field, ObjectType } from '@nestjs/graphql';
import { Post } from 'src/posts/entities/post';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import * as bcrypt from 'bcrypt';

enum UserRole {
  ADMIN = 1,
  GENERAL = 2,
}

@Entity({ name: 'users' })
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field()
  readonly id: number;

  @Column({ nullable: true })
  @Field()
  name: string;

  @Column({ nullable: true })
  @Field()
  email: string;

  @Column({ nullable: true })
  @Field()
  password: string;

  @Column({ nullable: true })
  @Field()
  image: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.GENERAL,
  })
  @Field()
  roleId: UserRole;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  //登録・更新が走るタイミングでパスワードを暗号化
  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    if (!!this.password) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }
}
