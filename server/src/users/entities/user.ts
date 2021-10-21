import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

enum UserRole {
  ADMIN = 1,
  GENERAL = 2,
}

@Entity({ name: 'users' })
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

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
}
