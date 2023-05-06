import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { BikeService } from './bike.service';
import { CreateBikeDto } from './dto/create-bike.dto';
import { UpdateBikeDto } from './dto/update-bike.dto';
import { Bike } from './interfaces/bike.interface';

@Controller('bikes')
export class BikeController {
  constructor(private readonly bikeService: BikeService) {}

  @Post()
  async create(@Body() createBikeDto: CreateBikeDto): Promise<Bike> {
    return this.bikeService.create(createBikeDto);
  }

  @Get()
  async findAll(): Promise<Bike[]> {
    return this.bikeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Bike> {
    return this.bikeService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBikeDto: UpdateBikeDto,
  ): Promise<Bike> {
    return this.bikeService.update(id, updateBikeDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Bike> {
    return this.bikeService.delete(id);
  }
}
