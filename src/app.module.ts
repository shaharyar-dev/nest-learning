import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';

// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [],
  controllers : [UsersController],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
