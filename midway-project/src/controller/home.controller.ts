import { Controller, Get, Post } from '@midwayjs/core';
import { ReportMiddleware } from '../middleware/report.middleware';

// 路由使用 中间件
@Controller('/')
export class HomeController {
  @Get('/', { middleware: [ReportMiddleware]})
  async home(): Promise<any> {
    console.log('home');
    return 'Hello 111!';
  }
  @Post('/update')
  async updateData() {
    return 'This is a post method'
  }
}
