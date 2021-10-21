import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewPostInput } from './dto/new-post.input';
import { Post } from './entities/post';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}

  public async getPosts(): Promise<Post[]> {
    const posts = await this.postRepository.find({});
    if (!posts) throw new NotFoundException();

    return posts;
  }

  public async addPost(newPostData: NewPostInput): Promise<Post> {
    const newPost = this.postRepository.create(newPostData);
    await this.postRepository.save(newPost).catch((err) => {
      console.log(err);
      new InternalServerErrorException();
    });
    return newPost;
  }

  public async getNewArrivalPosts(): Promise<Post[]> {
    const posts = await this.postRepository.find({ take: 3 });
    if (!posts) throw new NotFoundException();

    return posts;
  }
}
