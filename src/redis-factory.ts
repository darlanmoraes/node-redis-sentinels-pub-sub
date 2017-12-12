import * as Redis from 'ioredis';
import { properties } from './properties';

export const newRedis = () : Redis => {
  return new Redis({
    sentinels: properties.redis.sentinels.split(',').map(e => { 
      const data = e.split(':');
      return { host: data[0], port: parseInt(data[1]) };
    }),
    name: properties.redis.name
  });
}
