import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tag } from './entities/tag';

@Injectable()
export class TagsService {
  constructor(@InjectRepository(Tag) private tagRepository: Repository<Tag>) {}

  public async getAllTags(): Promise<Tag[]> {
    const tags = await this.tagRepository.find({});

    if (!tags) throw new NotFoundException();

    return tags;
  }
}
