import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { PostsController } from './posts.controller ';
import { PostsStore } from './posts.store';

// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [],
  controllers : [UsersController,PostsController],
  providers: [PostsStore],

  // providers: [{provide: "STORE", useClass: PostsStore}],
  // providers: [{provide: PostsStore, useClass: PostsStore}],
  // controllers: [AppController],
  // providers: [AppService],

})
export class AppModule {}
