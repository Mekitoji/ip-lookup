import { Module } from '@nestjs/common';
import { IpWhoIsService } from './ipwhois.service';
import { IpController } from './ip.controller';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { IP, IpSchema } from './ip.schema';
import { IpService } from './ip.service';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://ipwho.is/',
    }),
    MongooseModule.forFeature([
      {
        name: IP,
        schema: IpSchema,
      },
    ]),
  ],
  providers: [IpWhoIsService, IpService],
  controllers: [IpController],
})
export class IpModule {}
