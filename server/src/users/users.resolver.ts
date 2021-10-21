import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { UsersService } from './users.service';
import { User } from './entities/user';
import { NewUserInput } from './dto/new-user.input';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User])
  public async users(): Promise<User[]> {
    return await this.usersService.getAllUsers().catch((err) => {
      throw err;
    });
  }

  @Mutation(() => User)
  public async signUp(
    @Args('newUserData') newUserData: NewUserInput,
  ): Promise<User> {
    return await this.usersService.signUp(newUserData).catch((err) => {
      console.log(err);
      throw err;
    });
  }
}
