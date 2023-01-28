import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { AxiosResponse } from 'axios';
import { IpData } from './types';

@Injectable()
export class IpWhoIsService {
  constructor(private httpService: HttpService) {}

  async fetchData(ipAdress: string): Promise<AxiosResponse<IpData>> {
    return firstValueFrom(this.httpService.get(ipAdress));
  }
}
