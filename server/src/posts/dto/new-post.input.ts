import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewPostInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  deskImage: string;

  @Field()
  userId: string;
}
