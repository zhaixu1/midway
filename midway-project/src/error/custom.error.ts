// src/error/custom.error.ts
// 自定义业务异常
import { HttpStatus, MidwayHttpError } from '@midwayjs/core';

export class CustomHttpError extends MidwayHttpError {
  constructor() {
    super('error', HttpStatus.BAD_REQUEST);
  }
}