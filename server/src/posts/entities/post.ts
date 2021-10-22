import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/entities/user';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'posts' })
@ObjectType()
export class Post {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  description: string;

  @Column('mediumtext')
  @Field()
  deskImage: string;

  @Column()
  @Field()
  userId: number;

  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn({ name: 'userId' })
  user: User;

  // @OneToMany(() => Likes, (likes) => likes.user)
  // likes: Likes[];
}
