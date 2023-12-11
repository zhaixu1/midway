import { Controller, Get } from '@midwayjs/core';

@Controller('/person')
export class HomeController {
  @Get('/')
  async home(): Promise<string> {
    return'34334';
  }
}
