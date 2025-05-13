import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    try {
      console.log('Chay ok roi ne');
      return 'Hello Duy from demo-app-be!';
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  healthCheck(): string {
    try {
      console.log('healthCheck ok nha');
      return 'Health check ok roi';
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
