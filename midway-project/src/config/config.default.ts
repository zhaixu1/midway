import { MidwayConfig } from '@midwayjs/core';
import { User } from '../entity/user.entity';
export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1702304087513_1252',
  koa: {
    port: 7001,
  },
  redis: {
    client: {
      port: 30009, // Redis port
      host: "39.106.40.109", // Redis host
      password: "8ql6,yhY",
      db: 0,
    },
  },
  typeorm: {
    dataSource: {
      default: {
        /**
         * 单数据库实例
         */
        type: 'mysql',  // 数据库类型
        //driver: require('mysql2'),
        host: '39.107.136.31',  // 主机ip
        port: 3306, // 端口 
        username: 'dev_user', // 登录账号
        password: 'ce9Xy_0w5xqezN',
        database: 'auth_test',
        synchronize: false,     // 如果第一次使用，不存在表，有同步的需求可以写 true，注意会丢数据
        logging: false,

        // 配置实体模型
        entities: [User],
      }
    }
  },
} as MidwayConfig;
