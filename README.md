# Node with Redis Sentinels Pub/Sub
This example shows how you can create 6 Redis instances with 3 sentinels, 1 master and 2 slaves. The project is using Redis as broadcast, so all Node instances will handle the requests. Even if the Redis master is down, one of the slaves will be elected and the proccess you work. It is possible to redirect messages to specific servers, using pub/sub channels differents for requests.

## Running
```
chmod a+w node-0*/*
docker-compose -f docker-compose.yml rm
docker-compose -f docker-compose.yml up --build
```

## CURL
This request will put the object on Redis. All the instances listening the channel used to publish will receive the object and will save it to Mongo DB.
```
curl -X POST -v \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-d '{
  "username": "username1",
  "password": "password1",
  "age": 20
}' \
'http://localhost:4001/users'
```