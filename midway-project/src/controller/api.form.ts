import { Controller, Get, App, Post, Inject } from '@midwayjs/core';
import { Application, Context } from '@midwayjs/koa';
import { LoginService } from '../service/login.service';
const url = require('url');
const querystring = require('querystring');

let todoList = {};
@Controller('/formapi')
export class HomeController {


  @Inject()
  loginService: LoginService;

  @Inject()
  ctx: Context

  @App()
  app: Application;

  // POST /api/todo
  @Post('/todo')
  async addTodo() {
    let parsedUrl = url.parse(this.ctx.url);
    let parsedQuery = querystring.parse(parsedUrl.query);
    let obj =await this.loginService.getUser(parsedQuery);
    todoList = {...parsedQuery, ...obj};
    return 'ok'; 
  }

  // GET /api/todo
  @Get('/todo')
  async getTodo() {
    
    
    return todoList;
  }
}
