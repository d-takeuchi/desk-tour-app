import { Query, Resolver } from '@nestjs/graphql';
import { Tag } from './entities/tag';
import { TagsService } from './tags.service';

@Resolver()
export class TagsResolver {
  constructor(private readonly tagsService: TagsService) {}

  @Query(() => [Tag])
  public async tags(): Promise<Tag[]> {
    return await this.tagsService.getAllTags().catch((err) => {
      throw err;
    });
  }
}
