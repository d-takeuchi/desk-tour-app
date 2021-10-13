import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    GraphQLModule.forRoot({
      playground: true,
      debug: true,
      // 下記に設定したファイル名でスキーマファイルが書き出されます
      autoSchemaFile: 'schema.graphql',
    }),
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
