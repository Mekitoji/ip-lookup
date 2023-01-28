import { Controller, Delete, Get, Param } from '@nestjs/common';
import { IpValidationPipe } from './ip-validation.pipe';
import { IpDocument } from './ip.schema';
import { IpService } from './ip.service';

@Controller('ip')
export class IpController {
  constructor(private ipService: IpService) {}

  @Get(':ip')
  public async find(
    @Param('ip', new IpValidationPipe()) ip: string,
  ): Promise<IpDocument> {
    return this.ipService.findOrCreate(ip);
  }

  @Delete(':ip')
  public async remove(
    @Param('ip', new IpValidationPipe()) ip: string,
  ): Promise<void> {
    await this.ipService.remove(ip);
  }
}
