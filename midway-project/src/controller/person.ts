import { Controller, Get, App } from '@midwayjs/core';
import { Application } from '@midwayjs/koa';

@Controller('/person')
export class HomeController {

  @App()
  app: Application;

  @Get('/')
  async home(): Promise<string> {
    console.log(this.app.getConfig(), 'this.app');
    let app = this.app.getEnv()
    return app;
  }
}
