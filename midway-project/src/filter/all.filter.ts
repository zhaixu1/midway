// src/filter/all.filter.ts
import { Catch } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';

@Catch()
export class AllErrorFilter {
  async catch(err: Error, ctx: Context) {
    // ...
  }
}