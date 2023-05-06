import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bike as BikeDocument } from './schemas/bike.schema';
import { Bike } from './interfaces/bike.interface';
import { CreateBikeDto } from './dto/create-bike.dto';
import { UpdateBikeDto } from './dto/update-bike.dto';

@Injectable()
export class BikeService {
  constructor(
    @InjectModel(BikeDocument.name) private bikeModel: Model<BikeDocument>,
  ) {}

  async create(createBikeDto: CreateBikeDto): Promise<Bike> {
    const createdBike = new this.bikeModel(createBikeDto);
    return createdBike.save();
  }

  async findAll(): Promise<Bike[]> {
    return this.bikeModel.find().exec();
  }

  async findOne(id: string): Promise<Bike> {
    return this.bikeModel.findById(id).exec();
  }

  async update(id: string, updateBikeDto: UpdateBikeDto): Promise<Bike> {
    return this.bikeModel
      .findByIdAndUpdate(id, updateBikeDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Bike> {
    return this.bikeModel.findByIdAndDelete(id).exec();
  }
}
