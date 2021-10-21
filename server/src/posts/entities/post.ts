import { Field, ObjectType } from '@nestjs/graphql';
import { AfterLoad, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  // @AfterLoad()
  // blobToString() {
  //   this.deskImage = Buffer.from(this.deskImage).toString('base64');
  // }
}
