import config from 'config';
import express from 'express';
import { getClient } from './lib/redis';

const port = config.get<number>('port');
const app = express();

app.use('/hello', async (_, res) => {
  const client = getClient();
  await client.incr('hits');
  const hits = await client.getAsync('hits');
  res.send(`Hello World! I have been seen ${hits} times.`)
});

app.listen(port);
