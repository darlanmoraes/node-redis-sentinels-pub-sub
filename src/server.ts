import { newRedis } from './redis-factory';
import { Server } from 'http';
import { Router } from 'express';
import { properties } from './properties';
import * as express from 'express'
import * as http from 'http';
import * as bodyParser from 'body-parser';

export const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pub = newRedis();
const sub = newRedis();

app.get('/status', (req, res) => {
  res.sendStatus(200);
});

app.post('/users', (req, res) => 
  pub.publish('user', JSON.stringify(req.body)));

sub.on('user', (channel, message) => {
  console.log(message);
});

export const server = http.createServer(app);