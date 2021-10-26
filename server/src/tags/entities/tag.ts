import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'tags' })
@ObjectType()
export class Tag {
  @PrimaryColumn()
  @Field()
  readonly id: number;

  @Column()
  @Field()
  readonly name: string;
}
