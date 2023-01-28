import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IpModule } from './ip/ip.module';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongo:27017/ip';

@Module({
  imports: [IpModule, MongooseModule.forRoot(MONGO_URI)],
  controllers: [],
  providers: [],
})
export class AppModule {}
