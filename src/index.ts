import { Promise } from 'bluebird';
import * as mongoose from 'mongoose';
import { server } from './server-router';
import { vars } from './environment-vars';

function connect() {
  (<any> mongoose).Promise = Promise;
  mongoose.connect(vars.mongo.url, { useMongoClient: true });
  mongoose.connection.once('open', function() {
    console.log(`Mongo on: ${vars.mongo.url}`);
  });
};

export const listen = () => {
  server.listen(vars.server.port, () => {
    console.log(`Server on: http://localhost:${vars.server.port}`);
    connect();
  });
};

process.on('uncaughtException', error => console.log(`I will not die here.`));

listen();