import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { NewPostInput } from './dto/new-post.input';
import { Post } from './entities/post';
import { PostsService } from './posts.service';

@Resolver()
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Query(() => [Post])
  public async posts() {
    return await this.postsService.getPosts().catch((err) => {
      throw err;
    });
  }

  @Mutation(() => Post)
  @UseGuards(GqlAuthGuard)
  public async addNewPost(
    @Args('newPostData') newPostData: NewPostInput,
  ): Promise<Post> {
    return await this.postsService.addPost(newPostData).catch((err) => {
      throw err;
    });
  }

  @Query(() => [Post])
  public async getNewArrivalPosts() {
    return await this.postsService.getNewArrivalPosts().catch((err) => {
      throw err;
    });
  }
}
