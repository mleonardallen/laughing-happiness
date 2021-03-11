import bluebird from 'bluebird';
import config from 'config';
import redis from 'redis';

interface IPromisifiedRedisClient extends redis.RedisClient {
  getAsync(key: string): Promise<string | null>;
}

let client: IPromisifiedRedisClient | undefined;

export function getClient() {
  if (client) return client;
  const { host, port } = config.get<{ 
    host: string;
    port: number
  }>('redis');
  const redisClientSync = redis.createClient({ host, port });
  client = bluebird.promisifyAll(redisClientSync) as IPromisifiedRedisClient;
  return client;
}
