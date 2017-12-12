curl -X POST -v \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-d '{
  "nickname": "nickname1",
  "username": "username1",
  "password": "password1",
  "name": "name1"
}' \
'http://45.55.212.38:3000/api/users'

curl -X POST -v \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-d '{
  "nickname": "nickname4",
  "username": "username4",
  "password": "password4",
  "name": "name4"
}' \
'http://localhost:3000/api/users'

curl -v -X POST \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-d '{
  "nickname": "nickname1",
  "password": "password"
}' \
'http://localhost:3000/api/users/authenticate'

curl -v -X POST \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6Im5pY2tuYW1lMSIsInZlcmlmaWVyIjoiVGh1IERlYyAwNyAyMDE3IDE0OjE5OjA4IEdNVCswMDAwIChVVEMpIiwiaWF0IjoxNTEyNjU2MzQ4fQ.JzzqlWOgyILxNkudoRvDT0Zg-Pm7G4vtBhefTevfgxc' \
-d '{ "externalId": "external-id-test", "token": "fcm-id-test" }' \
'http://localhost:3000/api/fcms'

curl -v -X PUT \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6IjU1NTExMjM0NTY3ODkiLCJ2ZXJpZmllciI6IlR1ZSBBdWcgMDEgMjAxNyAxNjo1MjozOSBHTVQtMDMwMCAoQlJUKSIsImlhdCI6MTUwMTYxNzE1OX0.MfpPXWSEz2FKVB3QGd9llxCO1FaGZFZSrtjvo772LI8' \
-d '{ "_id": "598083cf850da339145ef0eb", "externalId": "external-id-test2", "token": "fcm-id-test" }' \
'http://localhost:3000/api/fcms'

rm -rf skin-lottery-api.zip && zip -r skin-lottery-api.zip skin-lottery-api && scp -r /home/darlan/Mine/skin-lottery-api.zip root@45.55.212.38:/root/

export MONGO_URL=mongodb://skin-lottery-api:skin-lottery-api@ds133166.mlab.com:33166/skin-lottery-api

MONGO_URL=mongodb://skin-lottery-api:skin-lottery-api@ds133166.mlab.com:33166/skin-lottery-api node /root/skin-lottery-api/dist

db.raffles.insert({ type: 'OPEN', views: [ ] })

db.raffles.update({_id: ObjectId("5a2988bcfd98ce38a70f3c71")}, { type: 'OPEN', views: [ ObjectId("5a2983a6cf94719b9314536b"), ObjectId("5a2983a6cf94719b9314536b") ] })

db.raffles.update({_id: ObjectId("5a299f64adcdba0001bd024c")}, { type: 'OPEN', views: [ ObjectId("5a299edaadcdba0001bd0248"), ObjectId("5a299ee6adcdba0001bd0249"), ObjectId("5a299ef2adcdba0001bd024a") ] })

db.raffles.update({_id: ObjectId("5a299f64adcdba0001bd024c")}, { type: 'OPEN', views: [ ObjectId("5a299edaadcdba0001bd0248"), ObjectId("5a299ee6adcdba0001bd0249"), ObjectId("5a299ef2adcdba0001bd024a"), ObjectId("5a299f13adcdba0001bd024b") ] })


curl -X POST -v \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-d '{"externalId":"5a299edaadcdba0001bd0248","token":"fD1Z3SPEO0Q:APA91bGrYRb0ey2JYOkbWGlhQDZJOFnC55KWsRYkM5eCYI-Tb8lWR9mlOdymf3KSYcmv2swHE1zVhbInDH-Xw2_hj31guKt0kbBwCEk5zxXUvrUrmQ6C68knoGeNwXrXhxcHlI4ipJwg"}' \
'http://localhost:3000/api/fcms'