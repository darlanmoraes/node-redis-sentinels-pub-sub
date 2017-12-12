import * as Redis from 'ioredis';
import { vars } from './environment-vars';

export const newRedis = () : Redis => {
  return new Redis({
    sentinels: vars.redis.sentinels.split(',').map(e => { 
      const data = e.split(':');
      return { host: data[0], port: parseInt(data[1]) };
    }),
    name: vars.redis.name
  });
}
