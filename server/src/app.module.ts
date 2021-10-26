import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    GraphQLModule.forRoot({
      playground: true,
      debug: true,
      // 下記に設定したファイル名でスキーマファイルが書き出される
      autoSchemaFile: 'schema.graphql',
    }),
    PostsModule,
    AuthModule,
    TagsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
