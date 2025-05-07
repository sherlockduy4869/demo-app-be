import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(id: number): string {
    return `This action returns a #${id} user`;
  }
}
