import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { NewPostInput } from './dto/new-post.input';
import { Post } from './entities/post';
import { PostsService } from './posts.service';

@Resolver()
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Query(() => [Post])
  public async posts() {
    return await this.postsService.getAllPosts().catch((err) => {
      throw err;
    });
  }

  @Mutation(() => Post)
  public async addNewPost(
    @Args('newPostData') newPostData: NewPostInput,
  ): Promise<Post> {
    return await this.postsService.addPost(newPostData).catch((err) => {
      throw err;
    });
  }
}
