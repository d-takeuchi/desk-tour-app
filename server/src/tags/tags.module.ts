import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from './entities/tag';
import { TagsResolver } from './tags.resolver';
import { TagsService } from './tags.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tag])],
  providers: [TagsResolver, TagsService],
  exports: [TagsService],
})
export class TagsModule {}
