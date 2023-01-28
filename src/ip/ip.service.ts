import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IP, IpDocument } from './ip.schema';
import { IpWhoIsService } from './ipwhois.service';

@Injectable()
export class IpService {
  constructor(
    @InjectModel(IP) protected model: Model<IpDocument>,
    private whoisService: IpWhoIsService,
  ) {}

  async findOrCreate(ipAddress: string): Promise<IpDocument> {
    try {
      const result = await this.model.findOne({ ipAddress }, { _id: 0 });
      if (!result) {
        const { data } = await this.whoisService.fetchData(ipAddress);

        await this.model.create({
          ipAddress,
          data,
        });

        return await this.model.findOne({ ipAddress }, { _id: 0 });
      }

      return result;
    } catch (err) {
      console.error(err);
      throw new InternalServerErrorException('Opps! Something went wront!');
    }
  }

  async remove(ipAddress: string): Promise<void> {
    try {
      await this.model.deleteOne({ ipAddress });
    } catch (err) {
      console.error(err);
      throw new InternalServerErrorException(
        'Opps! Failed to delete a document!',
      );
    }
  }
}
