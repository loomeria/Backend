import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('info')
  async info(): Promise<{ name: string; version: string }> {
    return this.appService.info();
  }

  @Get('ping')
  async ping() {
    return this.appService.ping();
  }
}
