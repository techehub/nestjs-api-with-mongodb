import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import {BlogModule} from './blog/blog.module'


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-blog', { useNewUrlParser: true }),
    BlogModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
