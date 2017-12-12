import { User } from './user-schema';
import { newRedis } from './redis-factory';
import { Server } from 'http';
import { Router } from 'express';
import * as express from 'express'
import * as http from 'http';
import * as bodyParser from 'body-parser';
import * as os from 'os';

export const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// connections to redis
const pub = newRedis();
const sub = newRedis();
sub.subscribe('users', (error, count) => 
  console.log(`I'm waiting for new users.`));

app.get('/status', (req, res) => {
  res.sendStatus(200);
});

// publish the body received on redis
app.post('/users', (req, res) => {
  pub.publish('users', JSON.stringify(req.body));
  res.sendStatus(200);
});

// wait for redis message and save to mongo db
sub.on('message', (channel, message) => {
  if (channel === 'users') {
    const body = JSON.parse(message);
    const user = new User(body);
    user.save()
      .then(document => console.log(`${os.hostname()}: Document saved. ${JSON.stringify(document.toObject())}`))
      .catch(error => console.log(`${os.hostname()}: Can't save document.`, error));
  }
});

export const server = http.createServer(app);