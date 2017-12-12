import * as joi from 'joi';

const envVarsSchema = joi.object({
  PORT: joi.number()
    .default(3000),
  MONGO_URL: joi.string()
    .default('mongodb://localhost:27017/db'),
  REDIS_NAME: joi.string()
    .default('redis-cluster'),
  REDIS_SENTINELS: joi.string()
    .default("sentinel-01:6379,sentinel-02:6379,sentinel-03:6379")
}).unknown()
  .required();

const validation = joi.validate(process.env, envVarsSchema);
if (validation.error) {
  throw new Error(`Config validation error: ${validation.error.message}`);
}

const envVars = validation.value;

export const vars = {
  server: {
    port: envVars.PORT
  },
  mongo: {
    url: envVars.MONGO_URL
  },
  redis: {
    sentinels: envVars.REDIS_SENTINELS,
    name: envVars.REDIS_NAME
  }
};