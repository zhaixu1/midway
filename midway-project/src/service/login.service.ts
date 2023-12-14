import { Provide } from '@midwayjs/core';
import { IUser } from '../interface';
import { v4 as uuidv4 } from 'uuid';
// import { MidwayHttpError } from '@midwayjs/core';
// import { CustomHttpError } from '../error/custom.error';

@Provide()
export class LoginService {
  async getUser(options: IUser) {
    console.log(options, 'options');
    // if (options?.username!== 'admin' || options?.password!== '123456') {
    //   // throw new MidwayHttpError('my custom error', 23);
    //   throw new CustomHttpError();
    // }
    // TODO: 登录逻辑,这里返回一个uuid
    return {
      uid: uuidv4(),
      loginTime: new Date().getTime(),
    };
  }
}
