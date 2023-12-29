import { Controller, Get, App, Post, Inject } from '@midwayjs/core';
import { RedisService } from '@midwayjs/redis';
import { Application, Context } from '@midwayjs/koa';
import { LoginService } from '../service/login.service';
import {InjectEntityModel} from '@midwayjs/typeorm';
import { User } from '../entity/user.entity';
import { Repository} from 'typeorm';
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


  /**
   * 注入实体模型
   */
  @InjectEntityModel(User)
  userModel: Repository<User>;
  /**
   * 获取
   * @param options 
   * @returns 
   */
  @Get('/user')
  async getUser() {
    let userLists= await this.userModel.findOne({
            where: {
                id: 1524
            }
        });
    return  userLists;
  }


  @Inject()
  redisService: RedisService;
  @Get('/captcha')
  async getCaptcha(){
    let result = await this.redisService.get('user:info:user_info_10000067');
    
    // result =  Buffer.from( result || '', 'base64').toString()
    console.log(result, 'result');
    
    return result;
  }
}
