import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BikeModule } from './bike/bike.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo:27017/bicycle-service'),
    BikeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
