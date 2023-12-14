// src/filter/internal.filter.ts
import { Catch, httpError, MidwayHttpError } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';

@Catch(httpError.NotFoundError)
export class NotFoundError {
  async catch(err: MidwayHttpError, ctx: Context) {
    console.log(err);
    
    // ...
    return 'got 404 error, ' + err.message;
  }
}