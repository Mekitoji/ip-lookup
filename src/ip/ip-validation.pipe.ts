import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class IpValidationPipe implements PipeTransform {
  private validateIpv4Address(ip: string): boolean {
    const regex =
      /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
    return regex.test(ip);
  }
  private validateIpv6Address(ip: string): boolean {
    const regex =
      /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
    return regex.test(ip);
  }

  transform(value: unknown): string {
    if (typeof value !== 'string') {
      throw new BadRequestException('validation faild');
    }

    if (!this.validateIpv4Address(value) && !this.validateIpv6Address(value)) {
      throw new BadRequestException('validation faild');
    }

    return value;
  }
}
