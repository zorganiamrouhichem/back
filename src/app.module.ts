import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ImagesModule } from './images/images.module';


@Module({
  imports: [ConfigModule.forRoot({
      isGlobal: true, // Makes it accessible everywhere
    }),
  ImagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
