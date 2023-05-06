import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Bike as BikeDocument, BikeSchema } from './schemas/bike.schema';
import { BikeController } from './bike.controller';
import { BikeService } from './bike.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BikeDocument.name, schema: BikeSchema },
    ]),
  ],
  controllers: [BikeController],
  providers: [BikeService],
})
export class BikeModule {}
