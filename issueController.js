[Restored contents truncated]
{ error: duplicate key value violates unique constraint "Users_username_key"
 at Connection.parseE (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:545:11)
 at Connection.parseMessage (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:370:19)
 at Socket.<anonymous> (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:113:22)
 at emitOne (events.js:116:13)
 at Socket.emit (events.js:211:7)
 at addChunk (_stream_readable.js:263:12)
 at readableAddChunk (_stream_readable.js:250:11)
 at Socket.Readable.push (_stream_readable.js:208:10)
 at TCP.onread (net.js:601:20)
  name: 'error',
  length: 209,
  severity: 'ERROR',
  code: '23505',
  detail: 'Key (username)=(michelle) already exists.',
  hint: undefined,
  position: undefined,
  internalPosition: undefined,
  internalQuery: undefined,
  where: undefined,
  schema: 'public',
  table: 'Users',
  column: undefined,
  dataType: undefined,
  constraint: 'Users_username_key',
  file: 'nbtinsert.c',
  line: '434',
  routine: '_bt_check_unique',
  sql: 'INSERT INTO "Users" ("id","username","email","password","createdAt","updatedAt") VALUES (DEFAULT,\'michelle\',\'michelle@example.com\',\'$2a$10$WwPhPzHKU4UNFfb4xoEPGeHsA/dmUEwqjc97he01mWopF5Nnp7fjG\',\'2018-12-05 23:32:30.223 +00:00\',\'2018-12-05 23:32:30.223 +00:00\') RETURNING *;' },
original: 
{ error: duplicate key value violates unique constraint "Users_username_key"
 at Connection.parseE (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:545:11)
 at Connection.parseMessage (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:370:19)
 at Socket.<anonymous> (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:113:22)
 at emitOne (events.js:116:13)
 at Socket.emit (events.js:211:7)
 at addChunk (_stream_readable.js:263:12)
 at readableAddChunk (_stream_readable.js:250:11)
 at Socket.Readable.push (_stream_readable.js:208:10)
 at TCP.onread (net.js:601:20)
  name: 'error',
  length: 209,
  severity: 'ERROR',
  code: '23505',
  detail: 'Key (username)=(michelle) already exists.',
  hint: undefined,
  position: undefined,
  internalPosition: undefined,
  internalQuery: undefined,
  where: undefined,
  schema: 'public',
  table: 'Users',
  column: undefined,
  dataType: undefined,
  constraint: 'Users_username_key',
  file: 'nbtinsert.c',
  line: '434',
  routine: '_bt_check_unique',
  sql: 'INSERT INTO "Users" ("id","username","email","password","createdAt","updatedAt") VALUES (DEFAULT,\'michelle\',\'michelle@example.com\',\'$2a$10$WwPhPzHKU4UNFfb4xoEPGeHsA/dmUEwqjc97he01mWopF5Nnp7fjG\',\'2018-12-05 23:32:30.223 +00:00\',\'2018-12-05 23:32:30.223 +00:00\') RETURNING *;' },
sql: 'INSERT INTO "Users" ("id","username","email","password","createdAt","updatedAt") VALUES (DEFAULT,\'michelle\',\'michelle@example.com\',\'$2a$10$WwPhPzHKU4UNFfb4xoEPGeHsA/dmUEwqjc97he01mWopF5Nnp7fjG\',\'2018-12-05 23:32:30.223 +00:00\',\'2018-12-05 23:32:30.223 +00:00\') RETURNING *;' }
POST /users/signup 302 190.142 ms - 70
GET /users/signup 200 3.930 ms - 3351
^C
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ npm test

> blocipedia-node@1.0.0 test /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node
> export NODE_ENV=test&& jasmine

Started
server is listening for requests on port 3000
GET / 200 24.133 ms - 2667
.GET /users/signup 200 4.586 ms - 2876
.POST /users/signup 302 242.515 ms - 23
Found. Redirecting to /
.error in userController
{ SequelizeValidationError: Validation error: must be a valid email
 at Promise.all.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/sequelize/lib/instance-validator.js:77:15)
 at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
 at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at Promise._fulfill (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:638:18)
 at PromiseArray._resolve (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:126:19)
 at PromiseArray._promiseFulfilled (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:144:14)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:574:26)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
 at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
 at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
 at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
 at runCallback (timers.js:810:20)
 at tryOnImmediate (timers.js:768:5)
 at processImmediate [as _immediateCallback] (timers.js:745:5)
name: 'SequelizeValidationError',
errors: 
[ ValidationErrorItem {
    message: 'must be a valid email',
    type: 'Validation error',
    path: 'email',
    value: 'no',
    origin: 'FUNCTION',
    instance: [Object],
    validatorKey: 'isEmail',
    validatorName: 'isEmail',
    validatorArgs: [Array],
    __raw: [Object] } ] }
POST /users/signup 302 103.229 ms - 35
....


7 specs, 0 failures
Finished in 0.617 seconds
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ npm test

> blocipedia-node@1.0.0 test /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node
> export NODE_ENV=test&& jasmine

Started
server is listening for requests on port 3000
GET / 200 15.348 ms - 2667
.GET /users/signup 200 2.804 ms - 2876
.POST /users/signup 302 247.523 ms - 23
Found. Redirecting to /
.error in userController
{ SequelizeValidationError: Validation error: must be a valid email
 at Promise.all.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/sequelize/lib/instance-validator.js:77:15)
 at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
 at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at Promise._fulfill (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:638:18)
 at PromiseArray._resolve (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:126:19)
 at PromiseArray._promiseFulfilled (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:144:14)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:574:26)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
 at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
 at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
 at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
 at runCallback (timers.js:810:20)
 at tryOnImmediate (timers.js:768:5)
 at processImmediate [as _immediateCallback] (timers.js:745:5)
name: 'SequelizeValidationError',
errors: 
[ ValidationErrorItem {
    message: 'must be a valid email',
    type: 'Validation error',
    path: 'email',
    value: 'no',
    origin: 'FUNCTION',
    instance: [Object],
    validatorKey: 'isEmail',
    validatorName: 'isEmail',
    validatorArgs: [Array],
    __raw: [Object] } ] }
POST /users/signup 302 96.974 ms - 35
....


7 specs, 0 failures
Finished in 0.556 seconds
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ npm start

> blocipedia-node@1.0.0 start /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node
> node src/server.js

server is listening for requests on port 3000
GET /users/signup 200 17.388 ms - 2876
error in userController
{ SequelizeUniqueConstraintError: Validation error
 at Query.formatError (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/sequelize/lib/dialects/postgres/query.js:325:18)
 at query.catch.err (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/sequelize/lib/dialects/postgres/query.js:86:18)
 at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
 at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:690:18)
 at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
 at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
 at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
 at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
 at runCallback (timers.js:810:20)
 at tryOnImmediate (timers.js:768:5)
 at processImmediate [as _immediateCallback] (timers.js:745:5)
name: 'SequelizeUniqueConstraintError',
errors: 
[ ValidationErrorItem {
    message: 'username must be unique',
    type: 'unique violation',
    path: 'username',
    value: 'michelle',
    origin: 'DB',
    instance: [Object],
    validatorKey: 'not_unique',
    validatorName: null,
    validatorArgs: [] } ],
fields: { username: 'michelle' },
parent: 
{ error: duplicate key value violates unique constraint "Users_username_key"
 at Connection.parseE (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:545:11)
 at Connection.parseMessage (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:370:19)
 at Socket.<anonymous> (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:113:22)
 at emitOne (events.js:116:13)
 at Socket.emit (events.js:211:7)
 at addChunk (_stream_readable.js:263:12)
 at readableAddChunk (_stream_readable.js:250:11)
 at Socket.Readable.push (_stream_readable.js:208:10)
 at TCP.onread (net.js:601:20)
  name: 'error',
  length: 209,
  severity: 'ERROR',
  code: '23505',
  detail: 'Key (username)=(michelle) already exists.',
  hint: undefined,
  position: undefined,
  internalPosition: undefined,
  internalQuery: undefined,
  where: undefined,
  schema: 'public',
  table: 'Users',
  column: undefined,
  dataType: undefined,
  constraint: 'Users_username_key',
  file: 'nbtinsert.c',
  line: '434',
  routine: '_bt_check_unique',
  sql: 'INSERT INTO "Users" ("id","username","email","password","createdAt","updatedAt") VALUES (DEFAULT,\'michelle\',\'michelle@examples.com\',\'$2a$10$UtKvCK6.jP2kQBkKbv6CpuM9w3h/EbouOCKCclMo4Z4EfcwxszDja\',\'2018-12-05 23:33:39.532 +00:00\',\'2018-12-05 23:33:39.532 +00:00\') RETURNING *;' },
original: 
{ error: duplicate key value violates unique constraint "Users_username_key"
 at Connection.parseE (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:545:11)
 at Connection.parseMessage (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:370:19)
 at Socket.<anonymous> (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:113:22)
 at emitOne (events.js:116:13)
 at Socket.emit (events.js:211:7)
 at addChunk (_stream_readable.js:263:12)
 at readableAddChunk (_stream_readable.js:250:11)
 at Socket.Readable.push (_stream_readable.js:208:10)
 at TCP.onread (net.js:601:20)
  name: 'error',
  length: 209,
  severity: 'ERROR',
  code: '23505',
  detail: 'Key (username)=(michelle) already exists.',
  hint: undefined,
  position: undefined,
  internalPosition: undefined,
  internalQuery: undefined,
  where: undefined,
  schema: 'public',
  table: 'Users',
  column: undefined,
  dataType: undefined,
  constraint: 'Users_username_key',
  file: 'nbtinsert.c',
  line: '434',
  routine: '_bt_check_unique',
  sql: 'INSERT INTO "Users" ("id","username","email","password","createdAt","updatedAt") VALUES (DEFAULT,\'michelle\',\'michelle@examples.com\',\'$2a$10$UtKvCK6.jP2kQBkKbv6CpuM9w3h/EbouOCKCclMo4Z4EfcwxszDja\',\'2018-12-05 23:33:39.532 +00:00\',\'2018-12-05 23:33:39.532 +00:00\') RETURNING *;' },
sql: 'INSERT INTO "Users" ("id","username","email","password","createdAt","updatedAt") VALUES (DEFAULT,\'michelle\',\'michelle@examples.com\',\'$2a$10$UtKvCK6.jP2kQBkKbv6CpuM9w3h/EbouOCKCclMo4Z4EfcwxszDja\',\'2018-12-05 23:33:39.532 +00:00\',\'2018-12-05 23:33:39.532 +00:00\') RETURNING *;' }
POST /users/signup 302 193.190 ms - 70
GET /users/signup 200 3.433 ms - 3351
^C  
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ npm test

> blocipedia-node@1.0.0 test /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node
> export NODE_ENV=test&& jasmine

Started
server is listening for requests on port 3000
GET / 200 15.722 ms - 2667
.GET /users/signup 200 3.787 ms - 2876
.POST /users/signup 302 223.213 ms - 23
Found. Redirecting to /
.error in userController
{ SequelizeValidationError: Validation error: must be a valid email
 at Promise.all.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/sequelize/lib/instance-validator.js:77:15)
 at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
 at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at Promise._fulfill (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:638:18)
 at PromiseArray._resolve (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:126:19)
 at PromiseArray._promiseFulfilled (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:144:14)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:574:26)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
 at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
 at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
 at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
 at runCallback (timers.js:810:20)
 at tryOnImmediate (timers.js:768:5)
 at processImmediate [as _immediateCallback] (timers.js:745:5)
name: 'SequelizeValidationError',
errors: 
[ ValidationErrorItem {
    message: 'must be a valid email',
    type: 'Validation error',
    path: 'email',
    value: 'no',
    origin: 'FUNCTION',
    instance: [Object],
    validatorKey: 'isEmail',
    validatorName: 'isEmail',
    validatorArgs: [Array],
    __raw: [Object] } ] }
POST /users/signup 302 97.714 ms - 35
....


7 specs, 0 failures
Finished in 0.533 seconds
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ npm test

> blocipedia-node@1.0.0 test /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node
> export NODE_ENV=test&& jasmine

Started
server is listening for requests on port 3000
GET / 200 13.886 ms - 2667
.GET /users/signup 200 3.436 ms - 2876
.POST /users/signup 302 233.298 ms - 23
Found. Redirecting to /
.error in userController
{ SequelizeValidationError: Validation error: must be a valid email
 at Promise.all.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/sequelize/lib/instance-validator.js:77:15)
 at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
 at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at Promise._fulfill (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:638:18)
 at PromiseArray._resolve (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:126:19)
 at PromiseArray._promiseFulfilled (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:144:14)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:574:26)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
 at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
 at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
 at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
 at runCallback (timers.js:810:20)
 at tryOnImmediate (timers.js:768:5)
 at processImmediate [as _immediateCallback] (timers.js:745:5)
name: 'SequelizeValidationError',
errors: 
[ ValidationErrorItem {
    message: 'must be a valid email',
    type: 'Validation error',
    path: 'email',
    value: 'no',
    origin: 'FUNCTION',
    instance: [Object],
    validatorKey: 'isEmail',
    validatorName: 'isEmail',
    validatorArgs: [Array],
    __raw: [Object] } ] }
POST /users/signup 302 100.272 ms - 35
....


7 specs, 0 failures
Finished in 0.564 seconds
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ npm start

> blocipedia-node@1.0.0 start /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node
> node src/server.js

server is listening for requests on port 3000
GET /users/signup 200 24.450 ms - 2876
error in userController
{ SequelizeUniqueConstraintError: Validation error
 at Query.formatError (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/sequelize/lib/dialects/postgres/query.js:325:18)
 at query.catch.err (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/sequelize/lib/dialects/postgres/query.js:86:18)
 at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
 at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:690:18)
 at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
 at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
 at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
 at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
 at runCallback (timers.js:810:20)
 at tryOnImmediate (timers.js:768:5)
 at processImmediate [as _immediateCallback] (timers.js:745:5)
name: 'SequelizeUniqueConstraintError',
errors: 
[ ValidationErrorItem {
    message: 'username must be unique',
    type: 'unique violation',
    path: 'username',
    value: 'michelle',
    origin: 'DB',
    instance: [Object],
    validatorKey: 'not_unique',
    validatorName: null,
    validatorArgs: [] } ],
fields: { username: 'michelle' },
parent: 
{ error: duplicate key value violates unique constraint "Users_username_key"
 at Connection.parseE (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:545:11)
 at Connection.parseMessage (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:370:19)
 at Socket.<anonymous> (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:113:22)
 at emitOne (events.js:116:13)
 at Socket.emit (events.js:211:7)
 at addChunk (_stream_readable.js:263:12)
 at readableAddChunk (_stream_readable.js:250:11)
 at Socket.Readable.push (_stream_readable.js:208:10)
 at TCP.onread (net.js:601:20)
  name: 'error',
  length: 209,
  severity: 'ERROR',
  code: '23505',
  detail: 'Key (username)=(michelle) already exists.',
  hint: undefined,
  position: undefined,
  internalPosition: undefined,
  internalQuery: undefined,
  where: undefined,
  schema: 'public',
  table: 'Users',
  column: undefined,
  dataType: undefined,
  constraint: 'Users_username_key',
  file: 'nbtinsert.c',
  line: '434',
  routine: '_bt_check_unique',
  sql: 'INSERT INTO "Users" ("id","username","email","password","createdAt","updatedAt") VALUES (DEFAULT,\'michelle\',\'michelle@example.com\',\'$2a$10$2/5Ma7rAODmrysbbEOI1QO/S7MNwX.szcQ.XUnfAR7PuQ2U9OFNAa\',\'2018-12-05 23:38:07.271 +00:00\',\'2018-12-05 23:38:07.271 +00:00\') RETURNING *;' },
original: 
{ error: duplicate key value violates unique constraint "Users_username_key"
 at Connection.parseE (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:545:11)
 at Connection.parseMessage (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:370:19)
 at Socket.<anonymous> (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:113:22)
 at emitOne (events.js:116:13)
 at Socket.emit (events.js:211:7)
 at addChunk (_stream_readable.js:263:12)
 at readableAddChunk (_stream_readable.js:250:11)
 at Socket.Readable.push (_stream_readable.js:208:10)
 at TCP.onread (net.js:601:20)
  name: 'error',
  length: 209,
  severity: 'ERROR',
  code: '23505',
  detail: 'Key (username)=(michelle) already exists.',
  hint: undefined,
  position: undefined,
  internalPosition: undefined,
  internalQuery: undefined,
  where: undefined,
  schema: 'public',
  table: 'Users',
  column: undefined,
  dataType: undefined,
  constraint: 'Users_username_key',
  file: 'nbtinsert.c',
  line: '434',
  routine: '_bt_check_unique',
  sql: 'INSERT INTO "Users" ("id","username","email","password","createdAt","updatedAt") VALUES (DEFAULT,\'michelle\',\'michelle@example.com\',\'$2a$10$2/5Ma7rAODmrysbbEOI1QO/S7MNwX.szcQ.XUnfAR7PuQ2U9OFNAa\',\'2018-12-05 23:38:07.271 +00:00\',\'2018-12-05 23:38:07.271 +00:00\') RETURNING *;' },
sql: 'INSERT INTO "Users" ("id","username","email","password","createdAt","updatedAt") VALUES (DEFAULT,\'michelle\',\'michelle@example.com\',\'$2a$10$2/5Ma7rAODmrysbbEOI1QO/S7MNwX.szcQ.XUnfAR7PuQ2U9OFNAa\',\'2018-12-05 23:38:07.271 +00:00\',\'2018-12-05 23:38:07.271 +00:00\') RETURNING *;' }
POST /users/signup 302 217.416 ms - 70
GET /users/signup 200 2.815 ms - 3351
GET /users/signup 200 8.206 ms - 2876
GET /users/signup 304 1.802 ms - -
error in userController
{ SequelizeUniqueConstraintError: Validation error
 at Query.formatError (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/sequelize/lib/dialects/postgres/query.js:325:18)
 at query.catch.err (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/sequelize/lib/dialects/postgres/query.js:86:18)
 at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
 at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:690:18)
 at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
 at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
 at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
 at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
 at runCallback (timers.js:810:20)
 at tryOnImmediate (timers.js:768:5)
 at processImmediate [as _immediateCallback] (timers.js:745:5)
name: 'SequelizeUniqueConstraintError',
errors: 
[ ValidationErrorItem {
    message: 'username must be unique',
    type: 'unique violation',
    path: 'username',
    value: 'michelle',
    origin: 'DB',
    instance: [Object],
    validatorKey: 'not_unique',
    validatorName: null,
    validatorArgs: [] } ],
fields: { username: 'michelle' },
parent: 
{ error: duplicate key value violates unique constraint "Users_username_key"
 at Connection.parseE (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:545:11)
 at Connection.parseMessage (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:370:19)
 at Socket.<anonymous> (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:113:22)
 at emitOne (events.js:116:13)
 at Socket.emit (events.js:211:7)
 at addChunk (_stream_readable.js:263:12)
 at readableAddChunk (_stream_readable.js:250:11)
 at Socket.Readable.push (_stream_readable.js:208:10)
 at TCP.onread (net.js:601:20)
  name: 'error',
  length: 209,
  severity: 'ERROR',
  code: '23505',
  detail: 'Key (username)=(michelle) already exists.',
  hint: undefined,
  position: undefined,
  internalPosition: undefined,
  internalQuery: undefined,
  where: undefined,
  schema: 'public',
  table: 'Users',
  column: undefined,
  dataType: undefined,
  constraint: 'Users_username_key',
  file: 'nbtinsert.c',
  line: '434',
  routine: '_bt_check_unique',
  sql: 'INSERT INTO "Users" ("id","username","email","password","createdAt","updatedAt") VALUES (DEFAULT,\'michelle\',\'michelle@example.com\',\'$2a$10$qCuyEPJl.LT8BS.4NevwxOsJOT8mVS4VHI9EXHzGZAuJo4y.HraJW\',\'2018-12-05 23:38:34.436 +00:00\',\'2018-12-05 23:38:34.436 +00:00\') RETURNING *;' },
original: 
{ error: duplicate key value violates unique constraint "Users_username_key"
 at Connection.parseE (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:545:11)
 at Connection.parseMessage (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:370:19)
 at Socket.<anonymous> (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:113:22)
 at emitOne (events.js:116:13)
 at Socket.emit (events.js:211:7)
 at addChunk (_stream_readable.js:263:12)
 at readableAddChunk (_stream_readable.js:250:11)
 at Socket.Readable.push (_stream_readable.js:208:10)
 at TCP.onread (net.js:601:20)
  name: 'error',
  length: 209,
  severity: 'ERROR',
  code: '23505',
  detail: 'Key (username)=(michelle) already exists.',
  hint: undefined,
  position: undefined,
  internalPosition: undefined,
  internalQuery: undefined,
  where: undefined,
  schema: 'public',
  table: 'Users',
  column: undefined,
  dataType: undefined,
  constraint: 'Users_username_key',
  file: 'nbtinsert.c',
  line: '434',
  routine: '_bt_check_unique',
  sql: 'INSERT INTO "Users" ("id","username","email","password","createdAt","updatedAt") VALUES (DEFAULT,\'michelle\',\'michelle@example.com\',\'$2a$10$qCuyEPJl.LT8BS.4NevwxOsJOT8mVS4VHI9EXHzGZAuJo4y.HraJW\',\'2018-12-05 23:38:34.436 +00:00\',\'2018-12-05 23:38:34.436 +00:00\') RETURNING *;' },
sql: 'INSERT INTO "Users" ("id","username","email","password","createdAt","updatedAt") VALUES (DEFAULT,\'michelle\',\'michelle@example.com\',\'$2a$10$qCuyEPJl.LT8BS.4NevwxOsJOT8mVS4VHI9EXHzGZAuJo4y.HraJW\',\'2018-12-05 23:38:34.436 +00:00\',\'2018-12-05 23:38:34.436 +00:00\') RETURNING *;' }
POST /users/signup 302 158.309 ms - 70
GET /users/signup 200 1.694 ms - 3351
^C
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ npm test

> blocipedia-node@1.0.0 test /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node
> export NODE_ENV=test&& jasmine

Started
server is listening for requests on port 3000
GET / 200 13.654 ms - 2667
.GET /users/signup 200 3.528 ms - 2876
.POST /users/signup 302 246.661 ms - 23
Found. Redirecting to /
.error in userController
{ SequelizeValidationError: Validation error: must be a valid email
 at Promise.all.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/sequelize/lib/instance-validator.js:77:15)
 at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
 at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at Promise._fulfill (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:638:18)
 at PromiseArray._resolve (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:126:19)
 at PromiseArray._promiseFulfilled (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:144:14)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:574:26)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
 at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
 at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
 at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
 at runCallback (timers.js:810:20)
 at tryOnImmediate (timers.js:768:5)
 at processImmediate [as _immediateCallback] (timers.js:745:5)
name: 'SequelizeValidationError',
errors: 
[ ValidationErrorItem {
    message: 'must be a valid email',
    type: 'Validation error',
    path: 'email',
    value: 'no',
    origin: 'FUNCTION',
    instance: [Object],
    validatorKey: 'isEmail',
    validatorName: 'isEmail',
    validatorArgs: [Array],
    __raw: [Object] } ] }
POST /users/signup 302 103.143 ms - 35
....


7 specs, 0 failures
Finished in 0.569 seconds
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ npm test

> blocipedia-node@1.0.0 test /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node
> export NODE_ENV=test&& jasmine

Started
server is listening for requests on port 3000
GET / 200 13.729 ms - 2667
.GET /users/signup 200 2.064 ms - 2876
.POST /users/signup 302 252.589 ms - 23
Found. Redirecting to /
.error in userController
{ SequelizeValidationError: Validation error: must be a valid email
 at Promise.all.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/sequelize/lib/instance-validator.js:77:15)
 at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
 at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at Promise._fulfill (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:638:18)
 at PromiseArray._resolve (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:126:19)
 at PromiseArray._promiseFulfilled (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:144:14)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:574:26)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
 at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
 at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
 at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
 at runCallback (timers.js:810:20)
 at tryOnImmediate (timers.js:768:5)
 at processImmediate [as _immediateCallback] (timers.js:745:5)
name: 'SequelizeValidationError',
errors: 
[ ValidationErrorItem {
    message: 'must be a valid email',
    type: 'Validation error',
    path: 'email',
    value: 'no',
    origin: 'FUNCTION',
    instance: [Object],
    validatorKey: 'isEmail',
    validatorName: 'isEmail',
    validatorArgs: [Array],
    __raw: [Object] } ] }
POST /users/signup 302 107.036 ms - 35
....


7 specs, 0 failures
Finished in 0.58 seconds
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ npm test

> blocipedia-node@1.0.0 test /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node
> export NODE_ENV=test&& jasmine

Started
server is listening for requests on port 3000
GET / 200 14.110 ms - 2667
.GET /users/signup 200 2.998 ms - 2876
.POST /users/signup 302 223.352 ms - 23
Found. Redirecting to /
.error in userController
{ SequelizeValidationError: Validation error: must be a valid email
 at Promise.all.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/sequelize/lib/instance-validator.js:77:15)
 at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
 at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at Promise._fulfill (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:638:18)
 at PromiseArray._resolve (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:126:19)
 at PromiseArray._promiseFulfilled (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:144:14)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:574:26)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
 at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
 at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
 at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
 at runCallback (timers.js:810:20)
 at tryOnImmediate (timers.js:768:5)
 at processImmediate [as _immediateCallback] (timers.js:745:5)
name: 'SequelizeValidationError',
errors: 
[ ValidationErrorItem {
    message: 'must be a valid email',
    type: 'Validation error',
    path: 'email',
    value: 'no',
    origin: 'FUNCTION',
    instance: [Object],
    validatorKey: 'isEmail',
    validatorName: 'isEmail',
    validatorArgs: [Array],
    __raw: [Object] } ] }
POST /users/signup 302 87.569 ms - 35
....


7 specs, 0 failures
Finished in 0.514 seconds
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ npm test

> blocipedia-node@1.0.0 test /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node
> export NODE_ENV=test&& jasmine

Started
server is listening for requests on port 3000
GET / 200 13.993 ms - 2667
.GET /users/signup 200 2.900 ms - 2876
.error in userController
{ SequelizeValidationError: notNull Violation: User.username cannot be null
 at Promise.all.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/sequelize/lib/instance-validator.js:77:15)
 at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
 at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at Promise._fulfill (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:638:18)
 at PromiseArray._resolve (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:126:19)
 at PromiseArray._promiseFulfilled (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:144:14)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:574:26)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
 at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
 at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
 at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
 at runCallback (timers.js:810:20)
 at tryOnImmediate (timers.js:768:5)
 at processImmediate [as _immediateCallback] (timers.js:745:5)
name: 'SequelizeValidationError',
errors: 
[ ValidationErrorItem {
    message: 'User.username cannot be null',
    type: 'notNull Violation',
    path: 'username',
    value: null,
    origin: 'CORE',
    instance: [Object],
    validatorKey: 'is_null',
    validatorName: null,
    validatorArgs: [] } ] }
POST /users/signup 302 122.805 ms - 35
Found. Redirecting to /users/signup
TypeError: Cannot read property 'email' of null
 at User.findOne.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/spec/integration/users_spec.js:52:29)
 at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
 at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
 at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
 at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
 at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
 at runCallback (timers.js:810:20)
 at tryOnImmediate (timers.js:768:5)
 at processImmediate [as _immediateCallback] (timers.js:745:5)
Ferror in userController
{ SequelizeValidationError: notNull Violation: User.username cannot be null,
Validation error: must be a valid email
 at Promise.all.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/sequelize/lib/instance-validator.js:77:15)
 at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
 at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at Promise._fulfill (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:638:18)
 at PromiseArray._resolve (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:126:19)
 at PromiseArray._promiseFulfilled (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:144:14)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:574:26)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
 at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
 at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
 at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
 at runCallback (timers.js:810:20)
 at tryOnImmediate (timers.js:768:5)
 at processImmediate [as _immediateCallback] (timers.js:745:5)
name: 'SequelizeValidationError',
errors: 
[ ValidationErrorItem {
    message: 'User.username cannot be null',
    type: 'notNull Violation',
    path: 'username',
    value: null,
    origin: 'CORE',
    instance: [Object],
    validatorKey: 'is_null',
    validatorName: null,
    validatorArgs: [] },
  ValidationErrorItem {
    message: 'must be a valid email',
    type: 'Validation error',
    path: 'email',
    value: 'no',
    origin: 'FUNCTION',
    instance: [Object],
    validatorKey: 'isEmail',
    validatorName: 'isEmail',
    validatorArgs: [Array],
    __raw: [Object] } ] }
POST /users/signup 302 105.468 ms - 35
....

Failures:
1) routes : users POST /users/signup should create a new user with valid values and redirect
Message:
 Expected null to be truthy.
Stack:
 Error: Expected null to be truthy.
     at <Jasmine>
     at User.findOne.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/spec/integration/users_spec.js:51:30)
     at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
     at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
     at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
     at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
     at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
     at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
     at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
     at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
     at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
     at runCallback (timers.js:810:20)
     at tryOnImmediate (timers.js:768:5)
     at processImmediate [as _immediateCallback] (timers.js:745:5)

7 specs, 1 failure
Finished in 0.475 seconds
npm ERR! Test failed.  See above for more details.
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ npm start

> blocipedia-node@1.0.0 start /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node
> node src/server.js

server is listening for requests on port 3000
GET /users/signup 200 22.659 ms - 2876
POST /users/signup 302 287.814 ms - 46
GET / 200 8.899 ms - 3081
^C
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ npm test

> blocipedia-node@1.0.0 test /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node
> export NODE_ENV=test&& jasmine

Started
server is listening for requests on port 3000
GET / 200 18.104 ms - 2667
.GET /users/signup 200 3.545 ms - 2876
.error in userController
{ SequelizeValidationError: notNull Violation: User.username cannot be null
 at Promise.all.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/sequelize/lib/instance-validator.js:77:15)
 at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
 at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at Promise._fulfill (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:638:18)
 at PromiseArray._resolve (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:126:19)
 at PromiseArray._promiseFulfilled (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:144:14)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:574:26)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
 at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
 at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
 at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
 at runCallback (timers.js:810:20)
 at tryOnImmediate (timers.js:768:5)
 at processImmediate [as _immediateCallback] (timers.js:745:5)
name: 'SequelizeValidationError',
errors: 
[ ValidationErrorItem {
    message: 'User.username cannot be null',
    type: 'notNull Violation',
    path: 'username',
    value: null,
    origin: 'CORE',
    instance: [Object],
    validatorKey: 'is_null',
    validatorName: null,
    validatorArgs: [] } ] }
POST /users/signup 302 117.807 ms - 35
Found. Redirecting to /users/signup
TypeError: Cannot read property 'email' of null
 at User.findOne.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/spec/integration/users_spec.js:52:29)
 at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
 at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
 at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
 at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
 at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
 at runCallback (timers.js:810:20)
 at tryOnImmediate (timers.js:768:5)
 at processImmediate [as _immediateCallback] (timers.js:745:5)
Ferror in userController
{ SequelizeValidationError: notNull Violation: User.username cannot be null,
Validation error: must be a valid email
 at Promise.all.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/sequelize/lib/instance-validator.js:77:15)
 at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
 at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at Promise._fulfill (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:638:18)
 at PromiseArray._resolve (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:126:19)
 at PromiseArray._promiseFulfilled (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:144:14)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:574:26)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
 at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
 at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
 at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
 at runCallback (timers.js:810:20)
 at tryOnImmediate (timers.js:768:5)
 at processImmediate [as _immediateCallback] (timers.js:745:5)
name: 'SequelizeValidationError',
errors: 
[ ValidationErrorItem {
    message: 'User.username cannot be null',
    type: 'notNull Violation',
    path: 'username',
    value: null,
    origin: 'CORE',
    instance: [Object],
    validatorKey: 'is_null',
    validatorName: null,
    validatorArgs: [] },
  ValidationErrorItem {
    message: 'must be a valid email',
    type: 'Validation error',
    path: 'email',
    value: 'no',
    origin: 'FUNCTION',
    instance: [Object],
    validatorKey: 'isEmail',
    validatorName: 'isEmail',
    validatorArgs: [Array],
    __raw: [Object] } ] }
POST /users/signup 302 91.340 ms - 35
....

Failures:
1) routes : users POST /users/signup should create a new user with valid values and redirect
Message:
 Expected null to be truthy.
Stack:
 Error: Expected null to be truthy.
     at <Jasmine>
     at User.findOne.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/spec/integration/users_spec.js:51:30)
     at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
     at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
     at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
     at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
     at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
     at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
     at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
     at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
     at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
     at runCallback (timers.js:810:20)
     at tryOnImmediate (timers.js:768:5)
     at processImmediate [as _immediateCallback] (timers.js:745:5)

7 specs, 1 failure
Finished in 0.449 seconds
npm ERR! Test failed.  See above for more details.
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ npm start

> blocipedia-node@1.0.0 start /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node
> node src/server.js

server is listening for requests on port 3000
GET /users/signup 200 15.921 ms - 2876
error in userController
{ SequelizeUniqueConstraintError: Validation error
 at Query.formatError (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/sequelize/lib/dialects/postgres/query.js:325:18)
 at query.catch.err (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/sequelize/lib/dialects/postgres/query.js:86:18)
 at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
 at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:690:18)
 at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
 at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
 at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
 at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
 at runCallback (timers.js:810:20)
 at tryOnImmediate (timers.js:768:5)
 at processImmediate [as _immediateCallback] (timers.js:745:5)
name: 'SequelizeUniqueConstraintError',
errors: 
[ ValidationErrorItem {
    message: 'username must be unique',
    type: 'unique violation',
    path: 'username',
    value: 'michelle',
    origin: 'DB',
    instance: [Object],
    validatorKey: 'not_unique',
    validatorName: null,
    validatorArgs: [] } ],
fields: { username: 'michelle' },
parent: 
{ error: duplicate key value violates unique constraint "Users_username_key"
 at Connection.parseE (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:545:11)
 at Connection.parseMessage (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:370:19)
 at Socket.<anonymous> (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:113:22)
 at emitOne (events.js:116:13)
 at Socket.emit (events.js:211:7)
 at addChunk (_stream_readable.js:263:12)
 at readableAddChunk (_stream_readable.js:250:11)
 at Socket.Readable.push (_stream_readable.js:208:10)
 at TCP.onread (net.js:601:20)
  name: 'error',
  length: 209,
  severity: 'ERROR',
  code: '23505',
  detail: 'Key (username)=(michelle) already exists.',
  hint: undefined,
  position: undefined,
  internalPosition: undefined,
  internalQuery: undefined,
  where: undefined,
  schema: 'public',
  table: 'Users',
  column: undefined,
  dataType: undefined,
  constraint: 'Users_username_key',
  file: 'nbtinsert.c',
  line: '434',
  routine: '_bt_check_unique',
  sql: 'INSERT INTO "Users" ("id","username","email","password","createdAt","updatedAt") VALUES (DEFAULT,\'michelle\',\'michelle@test.com\',\'$2a$10$.4D1tpPTWKEDSciSMu6xbex9DWuITDFalv8nrnyY1t8n6ZKvzLcSG\',\'2018-12-05 23:42:47.118 +00:00\',\'2018-12-05 23:42:47.118 +00:00\') RETURNING *;' },
original: 
{ error: duplicate key value violates unique constraint "Users_username_key"
 at Connection.parseE (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:545:11)
 at Connection.parseMessage (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:370:19)
 at Socket.<anonymous> (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:113:22)
 at emitOne (events.js:116:13)
 at Socket.emit (events.js:211:7)
 at addChunk (_stream_readable.js:263:12)
 at readableAddChunk (_stream_readable.js:250:11)
 at Socket.Readable.push (_stream_readable.js:208:10)
 at TCP.onread (net.js:601:20)
  name: 'error',
  length: 209,
  severity: 'ERROR',
  code: '23505',
  detail: 'Key (username)=(michelle) already exists.',
  hint: undefined,
  position: undefined,
  internalPosition: undefined,
  internalQuery: undefined,
  where: undefined,
  schema: 'public',
  table: 'Users',
  column: undefined,
  dataType: undefined,
  constraint: 'Users_username_key',
  file: 'nbtinsert.c',
  line: '434',
  routine: '_bt_check_unique',
  sql: 'INSERT INTO "Users" ("id","username","email","password","createdAt","updatedAt") VALUES (DEFAULT,\'michelle\',\'michelle@test.com\',\'$2a$10$.4D1tpPTWKEDSciSMu6xbex9DWuITDFalv8nrnyY1t8n6ZKvzLcSG\',\'2018-12-05 23:42:47.118 +00:00\',\'2018-12-05 23:42:47.118 +00:00\') RETURNING *;' },
sql: 'INSERT INTO "Users" ("id","username","email","password","createdAt","updatedAt") VALUES (DEFAULT,\'michelle\',\'michelle@test.com\',\'$2a$10$.4D1tpPTWKEDSciSMu6xbex9DWuITDFalv8nrnyY1t8n6ZKvzLcSG\',\'2018-12-05 23:42:47.118 +00:00\',\'2018-12-05 23:42:47.118 +00:00\') RETURNING *;' }
POST /users/signup 302 195.197 ms - 70
GET /users/signup 200 2.610 ms - 3351
^C
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ npm start

> blocipedia-node@1.0.0 start /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node
> node src/server.js

server is listening for requests on port 3000
GET /users/signup 200 22.060 ms - 2876
error in userController
{ SequelizeUniqueConstraintError: Validation error
 at Query.formatError (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/sequelize/lib/dialects/postgres/query.js:325:18)
 at query.catch.err (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/sequelize/lib/dialects/postgres/query.js:86:18)
 at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
 at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:690:18)
 at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
 at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
 at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
 at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
 at runCallback (timers.js:810:20)
 at tryOnImmediate (timers.js:768:5)
 at processImmediate [as _immediateCallback] (timers.js:745:5)
name: 'SequelizeUniqueConstraintError',
errors: 
[ ValidationErrorItem {
    message: 'username must be unique',
    type: 'unique violation',
    path: 'username',
    value: 'michelle',
    origin: 'DB',
    instance: [Object],
    validatorKey: 'not_unique',
    validatorName: null,
    validatorArgs: [] } ],
fields: { username: 'michelle' },
parent: 
{ error: duplicate key value violates unique constraint "Users_username_key"
 at Connection.parseE (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:545:11)
 at Connection.parseMessage (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:370:19)
 at Socket.<anonymous> (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:113:22)
 at emitOne (events.js:116:13)
 at Socket.emit (events.js:211:7)
 at addChunk (_stream_readable.js:263:12)
 at readableAddChunk (_stream_readable.js:250:11)
 at Socket.Readable.push (_stream_readable.js:208:10)
 at TCP.onread (net.js:601:20)
  name: 'error',
  length: 209,
  severity: 'ERROR',
  code: '23505',
  detail: 'Key (username)=(michelle) already exists.',
  hint: undefined,
  position: undefined,
  internalPosition: undefined,
  internalQuery: undefined,
  where: undefined,
  schema: 'public',
  table: 'Users',
  column: undefined,
  dataType: undefined,
  constraint: 'Users_username_key',
  file: 'nbtinsert.c',
  line: '434',
  routine: '_bt_check_unique',
  sql: 'INSERT INTO "Users" ("id","username","email","password","createdAt","updatedAt") VALUES (DEFAULT,\'michelle\',\'michelle@example.com\',\'$2a$10$nK..zSfDR98dnv5tMCjq0eIChtOcZsholWtSYN1Fij/nEUej6.8EW\',\'2018-12-05 23:43:15.055 +00:00\',\'2018-12-05 23:43:15.055 +00:00\') RETURNING *;' },
original: 
{ error: duplicate key value violates unique constraint "Users_username_key"
 at Connection.parseE (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:545:11)
 at Connection.parseMessage (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:370:19)
 at Socket.<anonymous> (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:113:22)
 at emitOne (events.js:116:13)
 at Socket.emit (events.js:211:7)
 at addChunk (_stream_readable.js:263:12)
 at readableAddChunk (_stream_readable.js:250:11)
 at Socket.Readable.push (_stream_readable.js:208:10)
 at TCP.onread (net.js:601:20)
  name: 'error',
  length: 209,
  severity: 'ERROR',
  code: '23505',
  detail: 'Key (username)=(michelle) already exists.',
  hint: undefined,
  position: undefined,
  internalPosition: undefined,
  internalQuery: undefined,
  where: undefined,
  schema: 'public',
  table: 'Users',
  column: undefined,
  dataType: undefined,
  constraint: 'Users_username_key',
  file: 'nbtinsert.c',
  line: '434',
  routine: '_bt_check_unique',
  sql: 'INSERT INTO "Users" ("id","username","email","password","createdAt","updatedAt") VALUES (DEFAULT,\'michelle\',\'michelle@example.com\',\'$2a$10$nK..zSfDR98dnv5tMCjq0eIChtOcZsholWtSYN1Fij/nEUej6.8EW\',\'2018-12-05 23:43:15.055 +00:00\',\'2018-12-05 23:43:15.055 +00:00\') RETURNING *;' },
sql: 'INSERT INTO "Users" ("id","username","email","password","createdAt","updatedAt") VALUES (DEFAULT,\'michelle\',\'michelle@example.com\',\'$2a$10$nK..zSfDR98dnv5tMCjq0eIChtOcZsholWtSYN1Fij/nEUej6.8EW\',\'2018-12-05 23:43:15.055 +00:00\',\'2018-12-05 23:43:15.055 +00:00\') RETURNING *;' }
POST /users/signup 302 196.127 ms - 70
GET /users/signup 200 2.053 ms - 3351
^C
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ npm start

> blocipedia-node@1.0.0 start /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node
> node src/server.js

server is listening for requests on port 3000
GET /users/signup 200 16.564 ms - 2876
POST /users/signup 302 310.125 ms - 46
GET / 304 11.266 ms - -
^C
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ npm test

> blocipedia-node@1.0.0 test /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node
> export NODE_ENV=test&& jasmine

Started
server is listening for requests on port 3000
GET / 200 15.561 ms - 2667
.GET /users/signup 200 2.399 ms - 2876
.error in userController
{ SequelizeValidationError: notNull Violation: User.username cannot be null
 at Promise.all.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/sequelize/lib/instance-validator.js:77:15)
 at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
 at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at Promise._fulfill (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:638:18)
 at PromiseArray._resolve (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:126:19)
 at PromiseArray._promiseFulfilled (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:144:14)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:574:26)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
 at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
 at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
 at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
 at runCallback (timers.js:810:20)
 at tryOnImmediate (timers.js:768:5)
 at processImmediate [as _immediateCallback] (timers.js:745:5)
name: 'SequelizeValidationError',
errors: 
[ ValidationErrorItem {
    message: 'User.username cannot be null',
    type: 'notNull Violation',
    path: 'username',
    value: null,
    origin: 'CORE',
    instance: [Object],
    validatorKey: 'is_null',
    validatorName: null,
    validatorArgs: [] } ] }
POST /users/signup 302 119.964 ms - 35
Found. Redirecting to /users/signup
TypeError: Cannot read property 'email' of null
 at User.findOne.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/spec/integration/users_spec.js:52:29)
 at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
 at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
 at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
 at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
 at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
 at runCallback (timers.js:810:20)
 at tryOnImmediate (timers.js:768:5)
 at processImmediate [as _immediateCallback] (timers.js:745:5)
Ferror in userController
{ SequelizeValidationError: notNull Violation: User.username cannot be null,
Validation error: must be a valid email
 at Promise.all.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/sequelize/lib/instance-validator.js:77:15)
 at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
 at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at Promise._fulfill (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:638:18)
 at PromiseArray._resolve (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:126:19)
 at PromiseArray._promiseFulfilled (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:144:14)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:574:26)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
 at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
 at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
 at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
 at runCallback (timers.js:810:20)
 at tryOnImmediate (timers.js:768:5)
 at processImmediate [as _immediateCallback] (timers.js:745:5)
name: 'SequelizeValidationError',
errors: 
[ ValidationErrorItem {
    message: 'User.username cannot be null',
    type: 'notNull Violation',
    path: 'username',
    value: null,
    origin: 'CORE',
    instance: [Object],
    validatorKey: 'is_null',
    validatorName: null,
    validatorArgs: [] },
  ValidationErrorItem {
    message: 'must be a valid email',
    type: 'Validation error',
    path: 'email',
    value: 'no',
    origin: 'FUNCTION',
    instance: [Object],
    validatorKey: 'isEmail',
    validatorName: 'isEmail',
    validatorArgs: [Array],
    __raw: [Object] } ] }
POST /users/signup 302 101.121 ms - 35
....

Failures:
1) routes : users POST /users/signup should create a new user with valid values and redirect
Message:
 Expected null to be truthy.
Stack:
 Error: Expected null to be truthy.
     at <Jasmine>
     at User.findOne.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/spec/integration/users_spec.js:51:30)
     at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
     at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
     at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
     at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
     at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
     at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
     at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
     at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
     at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
     at runCallback (timers.js:810:20)
     at tryOnImmediate (timers.js:768:5)
     at processImmediate [as _immediateCallback] (timers.js:745:5)

7 specs, 1 failure
Finished in 0.469 seconds
npm ERR! Test failed.  See above for more details.
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ npm start

> blocipedia-node@1.0.0 start /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node
> node src/server.js

server is listening for requests on port 3000
GET / 200 12.968 ms - 2667
GET /users/signup 200 2.449 ms - 2876
error in userController
{ SequelizeUniqueConstraintError: Validation error
 at Query.formatError (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/sequelize/lib/dialects/postgres/query.js:325:18)
 at query.catch.err (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/sequelize/lib/dialects/postgres/query.js:86:18)
 at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
 at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:690:18)
 at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
 at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
 at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
 at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
 at runCallback (timers.js:810:20)
 at tryOnImmediate (timers.js:768:5)
 at processImmediate [as _immediateCallback] (timers.js:745:5)
name: 'SequelizeUniqueConstraintError',
errors: 
[ ValidationErrorItem {
    message: 'username must be unique',
    type: 'unique violation',
    path: 'username',
    value: 'michelle',
    origin: 'DB',
    instance: [Object],
    validatorKey: 'not_unique',
    validatorName: null,
    validatorArgs: [] } ],
fields: { username: 'michelle' },
parent: 
{ error: duplicate key value violates unique constraint "Users_username_key"
 at Connection.parseE (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:545:11)
 at Connection.parseMessage (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:370:19)
 at Socket.<anonymous> (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:113:22)
 at emitOne (events.js:116:13)
 at Socket.emit (events.js:211:7)
 at addChunk (_stream_readable.js:263:12)
 at readableAddChunk (_stream_readable.js:250:11)
 at Socket.Readable.push (_stream_readable.js:208:10)
 at TCP.onread (net.js:601:20)
  name: 'error',
  length: 209,
  severity: 'ERROR',
  code: '23505',
  detail: 'Key (username)=(michelle) already exists.',
  hint: undefined,
  position: undefined,
  internalPosition: undefined,
  internalQuery: undefined,
  where: undefined,
  schema: 'public',
  table: 'Users',
  column: undefined,
  dataType: undefined,
  constraint: 'Users_username_key',
  file: 'nbtinsert.c',
  line: '434',
  routine: '_bt_check_unique',
  sql: 'INSERT INTO "Users" ("id","username","email","password","createdAt","updatedAt") VALUES (DEFAULT,\'michelle\',\'michelle@example.com\',\'$2a$10$Jv/f16TS5btyjhC2Vhl8EutbacJu.JnfZRa.BQ72X2kpiKpnd3Vh2\',\'2018-12-05 23:45:14.968 +00:00\',\'2018-12-05 23:45:14.968 +00:00\') RETURNING *;' },
original: 
{ error: duplicate key value violates unique constraint "Users_username_key"
 at Connection.parseE (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:545:11)
 at Connection.parseMessage (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:370:19)
 at Socket.<anonymous> (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/pg/lib/connection.js:113:22)
 at emitOne (events.js:116:13)
 at Socket.emit (events.js:211:7)
 at addChunk (_stream_readable.js:263:12)
 at readableAddChunk (_stream_readable.js:250:11)
 at Socket.Readable.push (_stream_readable.js:208:10)
 at TCP.onread (net.js:601:20)
  name: 'error',
  length: 209,
  severity: 'ERROR',
  code: '23505',
  detail: 'Key (username)=(michelle) already exists.',
  hint: undefined,
  position: undefined,
  internalPosition: undefined,
  internalQuery: undefined,
  where: undefined,
  schema: 'public',
  table: 'Users',
  column: undefined,
  dataType: undefined,
  constraint: 'Users_username_key',
  file: 'nbtinsert.c',
  line: '434',
  routine: '_bt_check_unique',
  sql: 'INSERT INTO "Users" ("id","username","email","password","createdAt","updatedAt") VALUES (DEFAULT,\'michelle\',\'michelle@example.com\',\'$2a$10$Jv/f16TS5btyjhC2Vhl8EutbacJu.JnfZRa.BQ72X2kpiKpnd3Vh2\',\'2018-12-05 23:45:14.968 +00:00\',\'2018-12-05 23:45:14.968 +00:00\') RETURNING *;' },
sql: 'INSERT INTO "Users" ("id","username","email","password","createdAt","updatedAt") VALUES (DEFAULT,\'michelle\',\'michelle@example.com\',\'$2a$10$Jv/f16TS5btyjhC2Vhl8EutbacJu.JnfZRa.BQ72X2kpiKpnd3Vh2\',\'2018-12-05 23:45:14.968 +00:00\',\'2018-12-05 23:45:14.968 +00:00\') RETURNING *;' }
POST /users/signup 302 191.578 ms - 70
GET /users/signup 200 2.043 ms - 3351
POST /users/signup 302 235.733 ms - 46
GET / 200 8.401 ms - 3081
^C
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ clear

Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ npm test

> blocipedia-node@1.0.0 test /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node
> export NODE_ENV=test&& jasmine

Started
server is listening for requests on port 3000
GET / 200 14.602 ms - 2667
.GET /users/signup 200 2.126 ms - 2876
.POST /users/signup 500 1.604 ms - 3244
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>TypeError: Converting circular structure to JSON<br> &nbsp; &nbsp;at JSON.stringify (&lt;anonymous&gt;)<br> &nbsp; &nbsp;at create (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/src/controllers/userController.js:5:34)<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at next (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/route.js:137:13)<br> &nbsp; &nbsp;at Route.dispatch (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/route.js:112:3)<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:281:22<br> &nbsp; &nbsp;at Function.process_params (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:335:12)<br> &nbsp; &nbsp;at next (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:275:10)<br> &nbsp; &nbsp;at Function.handle (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:174:3)<br> &nbsp; &nbsp;at router (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:47:12)<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at trim_prefix (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:317:13)<br> &nbsp; &nbsp;at /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:284:7<br> &nbsp; &nbsp;at Function.process_params (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:335:12)<br> &nbsp; &nbsp;at next (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:275:10)<br> &nbsp; &nbsp;at /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:635:15<br> &nbsp; &nbsp;at next (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:260:14)<br> &nbsp; &nbsp;at Function.handle (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:174:3)<br> &nbsp; &nbsp;at router (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:47:12)<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at trim_prefix (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:317:13)</pre>
</body>
</html>

TypeError: Cannot read property 'email' of null
 at User.findOne.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/spec/integration/users_spec.js:52:29)
 at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
 at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
 at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
 at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
 at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
 at runCallback (timers.js:810:20)
 at tryOnImmediate (timers.js:768:5)
 at processImmediate [as _immediateCallback] (timers.js:745:5)
FPOST /users/signup 500 0.992 ms - 3244
....

Failures:
1) routes : users POST /users/signup should create a new user with valid values and redirect
Message:
 Expected null to be truthy.
Stack:
 Error: Expected null to be truthy.
     at <Jasmine>
     at User.findOne.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/spec/integration/users_spec.js:51:30)
     at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
     at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
     at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
     at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
     at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
     at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
     at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
     at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
     at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
     at runCallback (timers.js:810:20)
     at tryOnImmediate (timers.js:768:5)
     at processImmediate [as _immediateCallback] (timers.js:745:5)

7 specs, 1 failure
Finished in 0.309 seconds
npm ERR! Test failed.  See above for more details.
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ clear

Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ npm start

> blocipedia-node@1.0.0 start /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node
> node src/server.js

server is listening for requests on port 3000
GET /users/signup 200 17.822 ms - 2876
TypeError: Converting circular structure to JSON
 at JSON.stringify (<anonymous>)
 at create (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/src/controllers/userController.js:5:34)
 at Layer.handle [as handle_request] (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/layer.js:95:5)
 at next (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/route.js:137:13)
 at Route.dispatch (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/route.js:112:3)
 at Layer.handle [as handle_request] (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/layer.js:95:5)
 at /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:281:22
 at Function.process_params (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:335:12)
 at next (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:275:10)
 at Function.handle (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:174:3)
 at router (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:47:12)
 at Layer.handle [as handle_request] (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/layer.js:95:5)
 at trim_prefix (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:317:13)
 at /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:284:7
 at Function.process_params (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:335:12)
 at next (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:275:10)
 at /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:635:15
 at next (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:260:14)
 at Function.handle (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:174:3)
 at router (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:47:12)
 at Layer.handle [as handle_request] (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/layer.js:95:5)
 at trim_prefix (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:317:13)
POST /users/signup 500 2.523 ms - 3244
^C
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ npm start

> blocipedia-node@1.0.0 start /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node
> node src/server.js

server is listening for requests on port 3000
POST /users/signup 500 6.289 ms - 3244
TypeError: Converting circular structure to JSON
 at JSON.stringify (<anonymous>)
 at create (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/src/controllers/userController.js:5:34)
 at Layer.handle [as handle_request] (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/layer.js:95:5)
 at next (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/route.js:137:13)
 at Route.dispatch (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/route.js:112:3)
 at Layer.handle [as handle_request] (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/layer.js:95:5)
 at /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:281:22
 at Function.process_params (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:335:12)
 at next (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:275:10)
 at Function.handle (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:174:3)
 at router (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:47:12)
 at Layer.handle [as handle_request] (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/layer.js:95:5)
 at trim_prefix (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:317:13)
 at /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:284:7
 at Function.process_params (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:335:12)
 at next (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:275:10)
 at /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:635:15
 at next (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:260:14)
 at Function.handle (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:174:3)
 at router (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:47:12)
 at Layer.handle [as handle_request] (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/layer.js:95:5)
 at trim_prefix (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:317:13)
POST /users/signup 500 1.386 ms - 3244
TypeError: Converting circular structure to JSON
 at JSON.stringify (<anonymous>)
 at create (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/src/controllers/userController.js:5:34)
 at Layer.handle [as handle_request] (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/layer.js:95:5)
 at next (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/route.js:137:13)
 at Route.dispatch (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/route.js:112:3)
 at Layer.handle [as handle_request] (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/layer.js:95:5)
 at /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:281:22
 at Function.process_params (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:335:12)
 at next (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:275:10)
 at Function.handle (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:174:3)
 at router (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:47:12)
 at Layer.handle [as handle_request] (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/layer.js:95:5)
 at trim_prefix (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:317:13)
 at /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:284:7
 at Function.process_params (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:335:12)
 at next (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:275:10)
 at /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:635:15
 at next (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:260:14)
 at Function.handle (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:174:3)
 at router (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:47:12)
 at Layer.handle [as handle_request] (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/layer.js:95:5)
 at trim_prefix (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/router/index.js:317:13)
clear
^C
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ clear

Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ npm test

> blocipedia-node@1.0.0 test /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node
> export NODE_ENV=test&& jasmine

Started
server is listening for requests on port 3000
GET / 200 16.073 ms - 2667
.GET /users/signup 200 1.943 ms - 2876
.IncomingMessage {
_readableState: 
ReadableState {
  objectMode: false,
  highWaterMark: 16384,
  buffer: BufferList { head: null, tail: null, length: 0 },
  length: 0,
  pipes: null,
  pipesCount: 0,
  flowing: true,
  ended: true,
  endEmitted: true,
  reading: false,
  sync: false,
  needReadable: false,
  emittedReadable: false,
  readableListening: false,
  resumeScheduled: false,
  destroyed: false,
  defaultEncoding: 'utf8',
  awaitDrain: 0,
  readingMore: false,
  decoder: null,
  encoding: null },
readable: false,
domain: null,
_events: {},
_eventsCount: 0,
_maxListeners: undefined,
socket: 
Socket {
  connecting: false,
  _hadError: false,
  _handle: 
   TCP {
     reading: true,
     owner: [Circular],
     onread: [Function: onread],
     onconnection: null,
     writeQueueSize: 0,
     _consumed: true },
  _parent: null,
  _host: null,
  _readableState: 
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [Object],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: false,
     endEmitted: false,
     reading: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: 
   { end: [Array],
     _socketEnd: [Function: onSocketEnd],
     drain: [Array],
     timeout: [Function: socketOnTimeout],
     data: [Function: bound socketOnData],
     error: [Array],
     close: [Array],
     resume: [Function: onSocketResume],
     pause: [Function: onSocketPause] },
  _eventsCount: 9,
  _maxListeners: undefined,
  _writableState: 
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     finalCalled: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     destroyed: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function: bound onwrite],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree: [Object] },
  writable: true,
  allowHalfOpen: true,
  _bytesDispatched: 0,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _idleTimeout: 120000,
  _idleNext: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idlePrev: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idleStart: 1234,
  _destroyed: false,
  parser: 
   HTTPParser {
     '0': [Function: parserOnHeaders],
     '1': [Function: parserOnHeadersComplete],
     '2': [Function: parserOnBody],
     '3': [Function: parserOnMessageComplete],
     '4': [Function: bound onParserExecute],
     _headers: [],
     _url: '',
     _consumed: true,
     socket: [Circular],
     incoming: [Circular],
     outgoing: null,
     maxHeaderPairs: 2000,
     onIncoming: [Function: bound parserOnIncoming] },
  on: [Function: socketOnWrap],
  _paused: false,
  _httpMessage: 
   ServerResponse {
     domain: null,
     _events: [Object],
     _eventsCount: 2,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: false,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket: [Circular],
     connection: [Circular],
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: [Object],
     _startAt: undefined,
     _startTime: undefined,
     writeHead: [Function: writeHead],
     __onFinished: [Object],
     end: [Function: end],
     render: [Function],
     [Symbol(outHeadersKey)]: [Object] },
  _peername: { address: '::ffff:127.0.0.1', family: 'IPv6', port: 53080 },
  [Symbol(asyncId)]: 238,
  [Symbol(bytesRead)]: 0,
  [Symbol(asyncId)]: 239,
  [Symbol(triggerAsyncId)]: 238 },
connection: 
Socket {
  connecting: false,
  _hadError: false,
  _handle: 
   TCP {
     reading: true,
     owner: [Circular],
     onread: [Function: onread],
     onconnection: null,
     writeQueueSize: 0,
     _consumed: true },
  _parent: null,
  _host: null,
  _readableState: 
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [Object],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: false,
     endEmitted: false,
     reading: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: 
   { end: [Array],
     _socketEnd: [Function: onSocketEnd],
     drain: [Array],
     timeout: [Function: socketOnTimeout],
     data: [Function: bound socketOnData],
     error: [Array],
     close: [Array],
     resume: [Function: onSocketResume],
     pause: [Function: onSocketPause] },
  _eventsCount: 9,
  _maxListeners: undefined,
  _writableState: 
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     finalCalled: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     destroyed: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function: bound onwrite],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree: [Object] },
  writable: true,
  allowHalfOpen: true,
  _bytesDispatched: 0,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _idleTimeout: 120000,
  _idleNext: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idlePrev: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idleStart: 1234,
  _destroyed: false,
  parser: 
   HTTPParser {
     '0': [Function: parserOnHeaders],
     '1': [Function: parserOnHeadersComplete],
     '2': [Function: parserOnBody],
     '3': [Function: parserOnMessageComplete],
     '4': [Function: bound onParserExecute],
     _headers: [],
     _url: '',
     _consumed: true,
     socket: [Circular],
     incoming: [Circular],
     outgoing: null,
     maxHeaderPairs: 2000,
     onIncoming: [Function: bound parserOnIncoming] },
  on: [Function: socketOnWrap],
  _paused: false,
  _httpMessage: 
   ServerResponse {
     domain: null,
     _events: [Object],
     _eventsCount: 2,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: false,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket: [Circular],
     connection: [Circular],
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: [Object],
     _startAt: undefined,
     _startTime: undefined,
     writeHead: [Function: writeHead],
     __onFinished: [Object],
     end: [Function: end],
     render: [Function],
     [Symbol(outHeadersKey)]: [Object] },
  _peername: { address: '::ffff:127.0.0.1', family: 'IPv6', port: 53080 },
  [Symbol(asyncId)]: 238,
  [Symbol(bytesRead)]: 0,
  [Symbol(asyncId)]: 239,
  [Symbol(triggerAsyncId)]: 238 },
httpVersionMajor: 1,
httpVersionMinor: 1,
httpVersion: '1.1',
complete: true,
headers: 
{ host: 'localhost:3000',
  'content-type': 'application/x-www-form-urlencoded',
  'content-length': '76',
  connection: 'close' },
rawHeaders: 
[ 'host',
  'localhost:3000',
  'content-type',
  'application/x-www-form-urlencoded',
  'content-length',
  '76',
  'Connection',
  'close' ],
trailers: {},
rawTrailers: [],
upgrade: false,
url: '/users/signup',
method: 'POST',
statusCode: null,
statusMessage: null,
client: 
Socket {
  connecting: false,
  _hadError: false,
  _handle: 
   TCP {
     reading: true,
     owner: [Circular],
     onread: [Function: onread],
     onconnection: null,
     writeQueueSize: 0,
     _consumed: true },
  _parent: null,
  _host: null,
  _readableState: 
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [Object],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: false,
     endEmitted: false,
     reading: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: 
   { end: [Array],
     _socketEnd: [Function: onSocketEnd],
     drain: [Array],
     timeout: [Function: socketOnTimeout],
     data: [Function: bound socketOnData],
     error: [Array],
     close: [Array],
     resume: [Function: onSocketResume],
     pause: [Function: onSocketPause] },
  _eventsCount: 9,
  _maxListeners: undefined,
  _writableState: 
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     finalCalled: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     destroyed: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function: bound onwrite],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree: [Object] },
  writable: true,
  allowHalfOpen: true,
  _bytesDispatched: 0,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _idleTimeout: 120000,
  _idleNext: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idlePrev: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idleStart: 1234,
  _destroyed: false,
  parser: 
   HTTPParser {
     '0': [Function: parserOnHeaders],
     '1': [Function: parserOnHeadersComplete],
     '2': [Function: parserOnBody],
     '3': [Function: parserOnMessageComplete],
     '4': [Function: bound onParserExecute],
     _headers: [],
     _url: '',
     _consumed: true,
     socket: [Circular],
     incoming: [Circular],
     outgoing: null,
     maxHeaderPairs: 2000,
     onIncoming: [Function: bound parserOnIncoming] },
  on: [Function: socketOnWrap],
  _paused: false,
  _httpMessage: 
   ServerResponse {
     domain: null,
     _events: [Object],
     _eventsCount: 2,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: false,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket: [Circular],
     connection: [Circular],
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: [Object],
     _startAt: undefined,
     _startTime: undefined,
     writeHead: [Function: writeHead],
     __onFinished: [Object],
     end: [Function: end],
     render: [Function],
     [Symbol(outHeadersKey)]: [Object] },
  _peername: { address: '::ffff:127.0.0.1', family: 'IPv6', port: 53080 },
  [Symbol(asyncId)]: 238,
  [Symbol(bytesRead)]: 0,
  [Symbol(asyncId)]: 239,
  [Symbol(triggerAsyncId)]: 238 },
_consuming: true,
_dumped: false,
next: [Function: next],
baseUrl: '',
originalUrl: '/users/signup',
_parsedUrl: 
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: '/users/signup',
  path: '/users/signup',
  href: '/users/signup',
  _raw: '/users/signup' },
params: {},
query: {},
res: 
ServerResponse {
  domain: null,
  _events: { finish: [Array], end: [Function: onevent] },
  _eventsCount: 2,
  _maxListeners: undefined,
  output: [],
  outputEncodings: [],
  outputCallbacks: [],
  outputSize: 0,
  writable: true,
  _last: false,
  upgrading: false,
  chunkedEncoding: false,
  shouldKeepAlive: false,
  useChunkedEncodingByDefault: true,
  sendDate: true,
  _removedConnection: false,
  _removedContLen: false,
  _removedTE: false,
  _contentLength: null,
  _hasBody: true,
  _trailer: '',
  finished: false,
  _headerSent: false,
  socket: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: [Object],
     _parent: null,
     _host: null,
     _readableState: [Object],
     readable: true,
     domain: null,
     _events: [Object],
     _eventsCount: 9,
     _maxListeners: undefined,
     _writableState: [Object],
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: [Object],
     _server: [Object],
     _idleTimeout: 120000,
     _idleNext: [Object],
     _idlePrev: [Object],
     _idleStart: 1234,
     _destroyed: false,
     parser: [Object],
     on: [Function: socketOnWrap],
     _paused: false,
     _httpMessage: [Circular],
     _peername: [Object],
     [Symbol(asyncId)]: 238,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 239,
     [Symbol(triggerAsyncId)]: 238 },
  connection: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: [Object],
     _parent: null,
     _host: null,
     _readableState: [Object],
     readable: true,
     domain: null,
     _events: [Object],
     _eventsCount: 9,
     _maxListeners: undefined,
     _writableState: [Object],
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: [Object],
     _server: [Object],
     _idleTimeout: 120000,
     _idleNext: [Object],
     _idlePrev: [Object],
     _idleStart: 1234,
     _destroyed: false,
     parser: [Object],
     on: [Function: socketOnWrap],
     _paused: false,
     _httpMessage: [Circular],
     _peername: [Object],
     [Symbol(asyncId)]: 238,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 239,
     [Symbol(triggerAsyncId)]: 238 },
  _header: null,
  _onPendingData: [Function: bound updateOutgoingData],
  _sent100: false,
  _expect_continue: false,
  req: [Circular],
  locals: { currentUser: undefined },
  _startAt: undefined,
  _startTime: undefined,
  writeHead: [Function: writeHead],
  __onFinished: { [Function: listener] queue: [Array] },
  end: [Function: end],
  render: [Function],
  [Symbol(outHeadersKey)]: { 'x-powered-by': [Array] } },
body: 
{ email: 'user@example.com',
  password: '1234567890',
  passwordConfirmation: '1234567890' },
_body: true,
length: undefined,
read: [Function],
_startAt: [ 230941, 831024218 ],
_startTime: 2018-12-05T23:52:48.035Z,
_remoteAddress: '::ffff:127.0.0.1',
_validationCustomMethods: { sanitizers: {}, validators: {} },
_validationErrors: [],
_asyncValidationErrors: [],
validationErrors: [Function],
asyncValidationErrors: [Function],
getValidationResult: [Function],
sanitizeBody: [Function],
sanitizeParams: [Function],
sanitizeQuery: [Function],
sanitizeCookies: [Function],
sanitizeHeaders: [Function],
sanitize: [Function],
checkBody: [Function],
checkParams: [Function],
checkQuery: [Function],
checkCookies: [Function],
checkHeaders: [Function],
check: [Function],
filter: [Function],
assert: [Function],
validate: [Function],
_parsedOriginalUrl: 
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: '/users/signup',
  path: '/users/signup',
  href: '/users/signup',
  _raw: '/users/signup' },
sessionStore: 
MemoryStore {
  domain: null,
  _events: 
   { disconnect: [Function: ondisconnect],
     connect: [Function: onconnect] },
  _eventsCount: 2,
  _maxListeners: undefined,
  sessions: 
   { zhQ7xQ9NJGBgseskqiqMCYmhEdWgPKig: '{"cookie":{"originalMaxAge":1210000000,"expires":"2018-12-19T23:59:27.922Z","httpOnly":true,"path":"/"},"flash":{}}',
     ZBK1FR9uHzXcDSQfIz4wZAlKdzTV7ZSI: '{"cookie":{"originalMaxAge":1210000000,"expires":"2018-12-19T23:59:27.998Z","httpOnly":true,"path":"/"},"flash":{}}' },
  generate: [Function] },
sessionID: 'U7DMFmV8XWuS2C8_MnpLlD2TCFsXKjyU',
session: 
Session {
  cookie: 
   { path: '/',
     _expires: 2018-12-19T23:59:28.036Z,
     originalMaxAge: 1210000000,
     httpOnly: true } },
flash: [Function: _flash],
_passport: 
{ instance: 
   Authenticator {
     _key: 'passport',
     _strategies: [Object],
     _serializers: [Array],
     _deserializers: [Array],
     _infoTransformers: [],
     _framework: [Object],
     _userProperty: 'user',
     _sm: [Object],
     Authenticator: [Function: Authenticator],
     Passport: [Function: Authenticator],
     Strategy: [Object],
     strategies: [Object] } },
route: 
Route {
  path: '/users/signup',
  stack: [ [Object] ],
  methods: { post: true } } }
error in userController
{ SequelizeValidationError: notNull Violation: User.username cannot be null
 at Promise.all.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/sequelize/lib/instance-validator.js:77:15)
 at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
 at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at Promise._fulfill (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:638:18)
 at PromiseArray._resolve (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:126:19)
 at PromiseArray._promiseFulfilled (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:144:14)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:574:26)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
 at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
 at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
 at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
 at runCallback (timers.js:810:20)
 at tryOnImmediate (timers.js:768:5)
 at processImmediate [as _immediateCallback] (timers.js:745:5)
name: 'SequelizeValidationError',
errors: 
[ ValidationErrorItem {
    message: 'User.username cannot be null',
    type: 'notNull Violation',
    path: 'username',
    value: null,
    origin: 'CORE',
    instance: [Object],
    validatorKey: 'is_null',
    validatorName: null,
    validatorArgs: [] } ] }
POST /users/signup 302 140.733 ms - 35
Found. Redirecting to /users/signup
TypeError: Cannot read property 'email' of null
 at User.findOne.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/spec/integration/users_spec.js:52:29)
 at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
 at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
 at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
 at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
 at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
 at runCallback (timers.js:810:20)
 at tryOnImmediate (timers.js:768:5)
 at processImmediate [as _immediateCallback] (timers.js:745:5)
FIncomingMessage {
_readableState: 
ReadableState {
  objectMode: false,
  highWaterMark: 16384,
  buffer: BufferList { head: null, tail: null, length: 0 },
  length: 0,
  pipes: null,
  pipesCount: 0,
  flowing: true,
  ended: true,
  endEmitted: true,
  reading: false,
  sync: false,
  needReadable: false,
  emittedReadable: false,
  readableListening: false,
  resumeScheduled: false,
  destroyed: false,
  defaultEncoding: 'utf8',
  awaitDrain: 0,
  readingMore: false,
  decoder: null,
  encoding: null },
readable: false,
domain: null,
_events: {},
_eventsCount: 0,
_maxListeners: undefined,
socket: 
Socket {
  connecting: false,
  _hadError: false,
  _handle: 
   TCP {
     reading: true,
     owner: [Circular],
     onread: [Function: onread],
     onconnection: null,
     writeQueueSize: 0,
     _consumed: true },
  _parent: null,
  _host: null,
  _readableState: 
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [Object],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: false,
     endEmitted: false,
     reading: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: 
   { end: [Array],
     _socketEnd: [Function: onSocketEnd],
     drain: [Array],
     timeout: [Function: socketOnTimeout],
     data: [Function: bound socketOnData],
     error: [Array],
     close: [Array],
     resume: [Function: onSocketResume],
     pause: [Function: onSocketPause] },
  _eventsCount: 9,
  _maxListeners: undefined,
  _writableState: 
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     finalCalled: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     destroyed: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function: bound onwrite],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree: [Object] },
  writable: true,
  allowHalfOpen: true,
  _bytesDispatched: 0,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _idleTimeout: 120000,
  _idleNext: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idlePrev: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idleStart: 1401,
  _destroyed: false,
  parser: 
   HTTPParser {
     '0': [Function: parserOnHeaders],
     '1': [Function: parserOnHeadersComplete],
     '2': [Function: parserOnBody],
     '3': [Function: parserOnMessageComplete],
     '4': [Function: bound onParserExecute],
     _headers: [],
     _url: '',
     _consumed: true,
     socket: [Circular],
     incoming: [Circular],
     outgoing: null,
     maxHeaderPairs: 2000,
     onIncoming: [Function: bound parserOnIncoming] },
  on: [Function: socketOnWrap],
  _paused: false,
  _httpMessage: 
   ServerResponse {
     domain: null,
     _events: [Object],
     _eventsCount: 2,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: false,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket: [Circular],
     connection: [Circular],
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: [Object],
     _startAt: undefined,
     _startTime: undefined,
     writeHead: [Function: writeHead],
     __onFinished: [Object],
     end: [Function: end],
     render: [Function],
     [Symbol(outHeadersKey)]: [Object] },
  _peername: { address: '::ffff:127.0.0.1', family: 'IPv6', port: 53081 },
  [Symbol(asyncId)]: 332,
  [Symbol(bytesRead)]: 0,
  [Symbol(asyncId)]: 333,
  [Symbol(triggerAsyncId)]: 332 },
connection: 
Socket {
  connecting: false,
  _hadError: false,
  _handle: 
   TCP {
     reading: true,
     owner: [Circular],
     onread: [Function: onread],
     onconnection: null,
     writeQueueSize: 0,
     _consumed: true },
  _parent: null,
  _host: null,
  _readableState: 
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [Object],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: false,
     endEmitted: false,
     reading: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: 
   { end: [Array],
     _socketEnd: [Function: onSocketEnd],
     drain: [Array],
     timeout: [Function: socketOnTimeout],
     data: [Function: bound socketOnData],
     error: [Array],
     close: [Array],
     resume: [Function: onSocketResume],
     pause: [Function: onSocketPause] },
  _eventsCount: 9,
  _maxListeners: undefined,
  _writableState: 
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     finalCalled: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     destroyed: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function: bound onwrite],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree: [Object] },
  writable: true,
  allowHalfOpen: true,
  _bytesDispatched: 0,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _idleTimeout: 120000,
  _idleNext: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idlePrev: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idleStart: 1401,
  _destroyed: false,
  parser: 
   HTTPParser {
     '0': [Function: parserOnHeaders],
     '1': [Function: parserOnHeadersComplete],
     '2': [Function: parserOnBody],
     '3': [Function: parserOnMessageComplete],
     '4': [Function: bound onParserExecute],
     _headers: [],
     _url: '',
     _consumed: true,
     socket: [Circular],
     incoming: [Circular],
     outgoing: null,
     maxHeaderPairs: 2000,
     onIncoming: [Function: bound parserOnIncoming] },
  on: [Function: socketOnWrap],
  _paused: false,
  _httpMessage: 
   ServerResponse {
     domain: null,
     _events: [Object],
     _eventsCount: 2,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: false,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket: [Circular],
     connection: [Circular],
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: [Object],
     _startAt: undefined,
     _startTime: undefined,
     writeHead: [Function: writeHead],
     __onFinished: [Object],
     end: [Function: end],
     render: [Function],
     [Symbol(outHeadersKey)]: [Object] },
  _peername: { address: '::ffff:127.0.0.1', family: 'IPv6', port: 53081 },
  [Symbol(asyncId)]: 332,
  [Symbol(bytesRead)]: 0,
  [Symbol(asyncId)]: 333,
  [Symbol(triggerAsyncId)]: 332 },
httpVersionMajor: 1,
httpVersionMinor: 1,
httpVersion: '1.1',
complete: true,
headers: 
{ host: 'localhost:3000',
  'content-type': 'application/x-www-form-urlencoded',
  'content-length': '60',
  connection: 'close' },
rawHeaders: 
[ 'host',
  'localhost:3000',
  'content-type',
  'application/x-www-form-urlencoded',
  'content-length',
  '60',
  'Connection',
  'close' ],
trailers: {},
rawTrailers: [],
upgrade: false,
url: '/users/signup',
method: 'POST',
statusCode: null,
statusMessage: null,
client: 
Socket {
  connecting: false,
  _hadError: false,
  _handle: 
   TCP {
     reading: true,
     owner: [Circular],
     onread: [Function: onread],
     onconnection: null,
     writeQueueSize: 0,
     _consumed: true },
  _parent: null,
  _host: null,
  _readableState: 
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [Object],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: false,
     endEmitted: false,
     reading: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: 
   { end: [Array],
     _socketEnd: [Function: onSocketEnd],
     drain: [Array],
     timeout: [Function: socketOnTimeout],
     data: [Function: bound socketOnData],
     error: [Array],
     close: [Array],
     resume: [Function: onSocketResume],
     pause: [Function: onSocketPause] },
  _eventsCount: 9,
  _maxListeners: undefined,
  _writableState: 
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     finalCalled: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     destroyed: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function: bound onwrite],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree: [Object] },
  writable: true,
  allowHalfOpen: true,
  _bytesDispatched: 0,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _idleTimeout: 120000,
  _idleNext: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idlePrev: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idleStart: 1401,
  _destroyed: false,
  parser: 
   HTTPParser {
     '0': [Function: parserOnHeaders],
     '1': [Function: parserOnHeadersComplete],
     '2': [Function: parserOnBody],
     '3': [Function: parserOnMessageComplete],
     '4': [Function: bound onParserExecute],
     _headers: [],
     _url: '',
     _consumed: true,
     socket: [Circular],
     incoming: [Circular],
     outgoing: null,
     maxHeaderPairs: 2000,
     onIncoming: [Function: bound parserOnIncoming] },
  on: [Function: socketOnWrap],
  _paused: false,
  _httpMessage: 
   ServerResponse {
     domain: null,
     _events: [Object],
     _eventsCount: 2,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: false,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket: [Circular],
     connection: [Circular],
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: [Object],
     _startAt: undefined,
     _startTime: undefined,
     writeHead: [Function: writeHead],
     __onFinished: [Object],
     end: [Function: end],
     render: [Function],
     [Symbol(outHeadersKey)]: [Object] },
  _peername: { address: '::ffff:127.0.0.1', family: 'IPv6', port: 53081 },
  [Symbol(asyncId)]: 332,
  [Symbol(bytesRead)]: 0,
  [Symbol(asyncId)]: 333,
  [Symbol(triggerAsyncId)]: 332 },
_consuming: true,
_dumped: false,
next: [Function: next],
baseUrl: '',
originalUrl: '/users/signup',
_parsedUrl: 
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: '/users/signup',
  path: '/users/signup',
  href: '/users/signup',
  _raw: '/users/signup' },
params: {},
query: {},
res: 
ServerResponse {
  domain: null,
  _events: { finish: [Array], end: [Function: onevent] },
  _eventsCount: 2,
  _maxListeners: undefined,
  output: [],
  outputEncodings: [],
  outputCallbacks: [],
  outputSize: 0,
  writable: true,
  _last: false,
  upgrading: false,
  chunkedEncoding: false,
  shouldKeepAlive: false,
  useChunkedEncodingByDefault: true,
  sendDate: true,
  _removedConnection: false,
  _removedContLen: false,
  _removedTE: false,
  _contentLength: null,
  _hasBody: true,
  _trailer: '',
  finished: false,
  _headerSent: false,
  socket: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: [Object],
     _parent: null,
     _host: null,
     _readableState: [Object],
     readable: true,
     domain: null,
     _events: [Object],
     _eventsCount: 9,
     _maxListeners: undefined,
     _writableState: [Object],
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: [Object],
     _server: [Object],
     _idleTimeout: 120000,
     _idleNext: [Object],
     _idlePrev: [Object],
     _idleStart: 1401,
     _destroyed: false,
     parser: [Object],
     on: [Function: socketOnWrap],
     _paused: false,
     _httpMessage: [Circular],
     _peername: [Object],
     [Symbol(asyncId)]: 332,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 333,
     [Symbol(triggerAsyncId)]: 332 },
  connection: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: [Object],
     _parent: null,
     _host: null,
     _readableState: [Object],
     readable: true,
     domain: null,
     _events: [Object],
     _eventsCount: 9,
     _maxListeners: undefined,
     _writableState: [Object],
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: [Object],
     _server: [Object],
     _idleTimeout: 120000,
     _idleNext: [Object],
     _idlePrev: [Object],
     _idleStart: 1401,
     _destroyed: false,
     parser: [Object],
     on: [Function: socketOnWrap],
     _paused: false,
     _httpMessage: [Circular],
     _peername: [Object],
     [Symbol(asyncId)]: 332,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 333,
     [Symbol(triggerAsyncId)]: 332 },
  _header: null,
  _onPendingData: [Function: bound updateOutgoingData],
  _sent100: false,
  _expect_continue: false,
  req: [Circular],
  locals: { currentUser: undefined },
  _startAt: undefined,
  _startTime: undefined,
  writeHead: [Function: writeHead],
  __onFinished: { [Function: listener] queue: [Array] },
  end: [Function: end],
  render: [Function],
  [Symbol(outHeadersKey)]: { 'x-powered-by': [Array] } },
body: 
{ email: 'no',
  password: '1234567890',
  passwordConfirmation: '1234567890' },
_body: true,
length: undefined,
read: [Function],
_startAt: [ 230941, 996143805 ],
_startTime: 2018-12-05T23:52:48.201Z,
_remoteAddress: '::ffff:127.0.0.1',
_validationCustomMethods: { sanitizers: {}, validators: {} },
_validationErrors: [],
_asyncValidationErrors: [],
validationErrors: [Function],
asyncValidationErrors: [Function],
getValidationResult: [Function],
sanitizeBody: [Function],
sanitizeParams: [Function],
sanitizeQuery: [Function],
sanitizeCookies: [Function],
sanitizeHeaders: [Function],
sanitize: [Function],
checkBody: [Function],
checkParams: [Function],
checkQuery: [Function],
checkCookies: [Function],
checkHeaders: [Function],
check: [Function],
filter: [Function],
assert: [Function],
validate: [Function],
_parsedOriginalUrl: 
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: '/users/signup',
  path: '/users/signup',
  href: '/users/signup',
  _raw: '/users/signup' },
sessionStore: 
MemoryStore {
  domain: null,
  _events: 
   { disconnect: [Function: ondisconnect],
     connect: [Function: onconnect] },
  _eventsCount: 2,
  _maxListeners: undefined,
  sessions: 
   { zhQ7xQ9NJGBgseskqiqMCYmhEdWgPKig: '{"cookie":{"originalMaxAge":1210000000,"expires":"2018-12-19T23:59:27.922Z","httpOnly":true,"path":"/"},"flash":{}}',
     ZBK1FR9uHzXcDSQfIz4wZAlKdzTV7ZSI: '{"cookie":{"originalMaxAge":1210000000,"expires":"2018-12-19T23:59:27.998Z","httpOnly":true,"path":"/"},"flash":{}}',
     U7DMFmV8XWuS2C8_MnpLlD2TCFsXKjyU: '{"cookie":{"originalMaxAge":1210000000,"expires":"2018-12-19T23:59:28.176Z","httpOnly":true,"path":"/"},"flash":{"error":[{"name":"SequelizeValidationError","errors":[{"message":"User.username cannot be null","type":"notNull Violation","path":"username","value":null,"origin":"CORE","instance":{"id":null,"email":"user@example.com","password":"$2a$10$XX8Nr6QOs.8K/eJfPIPeW.8seXjCndqAfYveofaZpCABOSNqiwZHK","updatedAt":"2018-12-05T23:52:48.162Z","createdAt":"2018-12-05T23:52:48.162Z"},"validatorKey":"is_null","validatorName":null,"validatorArgs":[]}]}]}}' },
  generate: [Function] },
sessionID: 'fs2Dm8oJmW2SEVVo6LdJlnQhaOGE0Fg-',
session: 
Session {
  cookie: 
   { path: '/',
     _expires: 2018-12-19T23:59:28.201Z,
     originalMaxAge: 1210000000,
     httpOnly: true } },
flash: [Function: _flash],
_passport: 
{ instance: 
   Authenticator {
     _key: 'passport',
     _strategies: [Object],
     _serializers: [Array],
     _deserializers: [Array],
     _infoTransformers: [],
     _framework: [Object],
     _userProperty: 'user',
     _sm: [Object],
     Authenticator: [Function: Authenticator],
     Passport: [Function: Authenticator],
     Strategy: [Object],
     strategies: [Object] } },
route: 
Route {
  path: '/users/signup',
  stack: [ [Object] ],
  methods: { post: true } } }
error in userController
{ SequelizeValidationError: notNull Violation: User.username cannot be null,
Validation error: must be a valid email
 at Promise.all.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/sequelize/lib/instance-validator.js:77:15)
 at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
 at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at Promise._fulfill (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:638:18)
 at PromiseArray._resolve (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:126:19)
 at PromiseArray._promiseFulfilled (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:144:14)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:574:26)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
 at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
 at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
 at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
 at runCallback (timers.js:810:20)
 at tryOnImmediate (timers.js:768:5)
 at processImmediate [as _immediateCallback] (timers.js:745:5)
name: 'SequelizeValidationError',
errors: 
[ ValidationErrorItem {
    message: 'User.username cannot be null',
    type: 'notNull Violation',
    path: 'username',
    value: null,
    origin: 'CORE',
    instance: [Object],
    validatorKey: 'is_null',
    validatorName: null,
    validatorArgs: [] },
  ValidationErrorItem {
    message: 'must be a valid email',
    type: 'Validation error',
    path: 'email',
    value: 'no',
    origin: 'FUNCTION',
    instance: [Object],
    validatorKey: 'isEmail',
    validatorName: 'isEmail',
    validatorArgs: [Array],
    __raw: [Object] } ] }
POST /users/signup 302 137.588 ms - 35
....

Failures:
1) routes : users POST /users/signup should create a new user with valid values and redirect
Message:
 Expected null to be truthy.
Stack:
 Error: Expected null to be truthy.
     at <Jasmine>
     at User.findOne.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/spec/integration/users_spec.js:51:30)
     at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
     at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
     at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
     at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
     at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
     at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
     at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
     at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
     at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
     at runCallback (timers.js:810:20)
     at tryOnImmediate (timers.js:768:5)
     at processImmediate [as _immediateCallback] (timers.js:745:5)

7 specs, 1 failure
Finished in 0.516 seconds
npm ERR! Test failed.  See above for more details.
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ npm start

> blocipedia-node@1.0.0 start /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node
> node src/server.js

server is listening for requests on port 3000
IncomingMessage {
_readableState: 
ReadableState {
  objectMode: false,
  highWaterMark: 16384,
  buffer: BufferList { head: null, tail: null, length: 0 },
  length: 0,
  pipes: null,
  pipesCount: 0,
  flowing: true,
  ended: true,
  endEmitted: true,
  reading: false,
  sync: false,
  needReadable: false,
  emittedReadable: false,
  readableListening: false,
  resumeScheduled: false,
  destroyed: false,
  defaultEncoding: 'utf8',
  awaitDrain: 0,
  readingMore: false,
  decoder: null,
  encoding: null },
readable: false,
domain: null,
_events: {},
_eventsCount: 0,
_maxListeners: undefined,
socket: 
Socket {
  connecting: false,
  _hadError: false,
  _handle: 
   TCP {
     reading: true,
     owner: [Circular],
     onread: [Function: onread],
     onconnection: null,
     writeQueueSize: 0,
     _consumed: true },
  _parent: null,
  _host: null,
  _readableState: 
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [Object],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: false,
     endEmitted: false,
     reading: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: 
   { end: [Array],
     _socketEnd: [Function: onSocketEnd],
     drain: [Array],
     timeout: [Function: socketOnTimeout],
     data: [Function: bound socketOnData],
     error: [Array],
     close: [Array],
     resume: [Function: onSocketResume],
     pause: [Function: onSocketPause] },
  _eventsCount: 9,
  _maxListeners: undefined,
  _writableState: 
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     finalCalled: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     destroyed: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function: bound onwrite],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree: [Object] },
  writable: true,
  allowHalfOpen: true,
  _bytesDispatched: 0,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 2,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 2,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _idleTimeout: 120000,
  _idleNext: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: [Object],
     _parent: null,
     _host: null,
     _readableState: [Object],
     readable: true,
     domain: null,
     _events: [Object],
     _eventsCount: 9,
     _maxListeners: undefined,
     _writableState: [Object],
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: [Object],
     _server: [Object],
     _idleTimeout: 120000,
     _idleNext: [Object],
     _idlePrev: [Circular],
     _idleStart: 30354,
     _destroyed: false,
     parser: [Object],
     on: [Function: socketOnWrap],
     _paused: false,
     [Symbol(asyncId)]: 15,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 16,
     [Symbol(triggerAsyncId)]: 15 },
  _idlePrev: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Object],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idleStart: 30376,
  _destroyed: false,
  parser: 
   HTTPParser {
     '0': [Function: parserOnHeaders],
     '1': [Function: parserOnHeadersComplete],
     '2': [Function: parserOnBody],
     '3': [Function: parserOnMessageComplete],
     '4': [Function: bound onParserExecute],
     _headers: [],
     _url: '',
     _consumed: true,
     socket: [Circular],
     incoming: [Circular],
     outgoing: null,
     maxHeaderPairs: 2000,
     onIncoming: [Function: bound parserOnIncoming] },
  on: [Function: socketOnWrap],
  _paused: false,
  _httpMessage: 
   ServerResponse {
     domain: null,
     _events: [Object],
     _eventsCount: 2,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: true,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket: [Circular],
     connection: [Circular],
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: [Object],
     _startAt: undefined,
     _startTime: undefined,
     writeHead: [Function: writeHead],
     __onFinished: [Object],
     end: [Function: end],
     render: [Function],
     [Symbol(outHeadersKey)]: [Object] },
  _peername: { address: '::1', family: 'IPv6', port: 53083 },
  [Symbol(asyncId)]: 9,
  [Symbol(bytesRead)]: 0,
  [Symbol(asyncId)]: 11,
  [Symbol(triggerAsyncId)]: 9 },
connection: 
Socket {
  connecting: false,
  _hadError: false,
  _handle: 
   TCP {
     reading: true,
     owner: [Circular],
     onread: [Function: onread],
     onconnection: null,
     writeQueueSize: 0,
     _consumed: true },
  _parent: null,
  _host: null,
  _readableState: 
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [Object],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: false,
     endEmitted: false,
     reading: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: 
   { end: [Array],
     _socketEnd: [Function: onSocketEnd],
     drain: [Array],
     timeout: [Function: socketOnTimeout],
     data: [Function: bound socketOnData],
     error: [Array],
     close: [Array],
     resume: [Function: onSocketResume],
     pause: [Function: onSocketPause] },
  _eventsCount: 9,
  _maxListeners: undefined,
  _writableState: 
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     finalCalled: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     destroyed: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function: bound onwrite],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree: [Object] },
  writable: true,
  allowHalfOpen: true,
  _bytesDispatched: 0,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 2,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 2,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _idleTimeout: 120000,
  _idleNext: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: [Object],
     _parent: null,
     _host: null,
     _readableState: [Object],
     readable: true,
     domain: null,
     _events: [Object],
     _eventsCount: 9,
     _maxListeners: undefined,
     _writableState: [Object],
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: [Object],
     _server: [Object],
     _idleTimeout: 120000,
     _idleNext: [Object],
     _idlePrev: [Circular],
     _idleStart: 30354,
     _destroyed: false,
     parser: [Object],
     on: [Function: socketOnWrap],
     _paused: false,
     [Symbol(asyncId)]: 15,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 16,
     [Symbol(triggerAsyncId)]: 15 },
  _idlePrev: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Object],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idleStart: 30376,
  _destroyed: false,
  parser: 
   HTTPParser {
     '0': [Function: parserOnHeaders],
     '1': [Function: parserOnHeadersComplete],
     '2': [Function: parserOnBody],
     '3': [Function: parserOnMessageComplete],
     '4': [Function: bound onParserExecute],
     _headers: [],
     _url: '',
     _consumed: true,
     socket: [Circular],
     incoming: [Circular],
     outgoing: null,
     maxHeaderPairs: 2000,
     onIncoming: [Function: bound parserOnIncoming] },
  on: [Function: socketOnWrap],
  _paused: false,
  _httpMessage: 
   ServerResponse {
     domain: null,
     _events: [Object],
     _eventsCount: 2,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: true,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket: [Circular],
     connection: [Circular],
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: [Object],
     _startAt: undefined,
     _startTime: undefined,
     writeHead: [Function: writeHead],
     __onFinished: [Object],
     end: [Function: end],
     render: [Function],
     [Symbol(outHeadersKey)]: [Object] },
  _peername: { address: '::1', family: 'IPv6', port: 53083 },
  [Symbol(asyncId)]: 9,
  [Symbol(bytesRead)]: 0,
  [Symbol(asyncId)]: 11,
  [Symbol(triggerAsyncId)]: 9 },
httpVersionMajor: 1,
httpVersionMinor: 1,
httpVersion: '1.1',
complete: true,
headers: 
{ host: 'localhost:3000',
  connection: 'keep-alive',
  'content-length': '99',
  'cache-control': 'max-age=0',
  'upgrade-insecure-requests': '1',
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36',
  origin: 'http://localhost:3000',
  'content-type': 'application/x-www-form-urlencoded',
  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  referer: 'http://localhost:3000/users/signup',
  'accept-encoding': 'gzip, deflate, br',
  'accept-language': 'en-US,en;q=0.9',
  cookie: 'connect.sid=s%3A7aboGr2G1zD3u384zQM1xu__bOKAyvaI.04e5HotENi2qV1jyue99WudC51D30ATMVF6cmHnbVYM' },
rawHeaders: 
[ 'Host',
  'localhost:3000',
  'Connection',
  'keep-alive',
  'Content-Length',
  '99',
  'Cache-Control',
  'max-age=0',
  'Upgrade-Insecure-Requests',
  '1',
  'User-Agent',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36',
  'Origin',
  'http://localhost:3000',
  'Content-Type',
  'application/x-www-form-urlencoded',
  'Accept',
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  'Referer',
  'http://localhost:3000/users/signup',
  'Accept-Encoding',
  'gzip, deflate, br',
  'Accept-Language',
  'en-US,en;q=0.9',
  'Cookie',
  'connect.sid=s%3A7aboGr2G1zD3u384zQM1xu__bOKAyvaI.04e5HotENi2qV1jyue99WudC51D30ATMVF6cmHnbVYM' ],
trailers: {},
rawTrailers: [],
upgrade: false,
url: '/users/signup',
method: 'POST',
statusCode: null,
statusMessage: null,
client: 
Socket {
  connecting: false,
  _hadError: false,
  _handle: 
   TCP {
     reading: true,
     owner: [Circular],
     onread: [Function: onread],
     onconnection: null,
     writeQueueSize: 0,
     _consumed: true },
  _parent: null,
  _host: null,
  _readableState: 
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [Object],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: false,
     endEmitted: false,
     reading: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: 
   { end: [Array],
     _socketEnd: [Function: onSocketEnd],
     drain: [Array],
     timeout: [Function: socketOnTimeout],
     data: [Function: bound socketOnData],
     error: [Array],
     close: [Array],
     resume: [Function: onSocketResume],
     pause: [Function: onSocketPause] },
  _eventsCount: 9,
  _maxListeners: undefined,
  _writableState: 
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     finalCalled: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     destroyed: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function: bound onwrite],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree: [Object] },
  writable: true,
  allowHalfOpen: true,
  _bytesDispatched: 0,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 2,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 2,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _idleTimeout: 120000,
  _idleNext: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: [Object],
     _parent: null,
     _host: null,
     _readableState: [Object],
     readable: true,
     domain: null,
     _events: [Object],
     _eventsCount: 9,
     _maxListeners: undefined,
     _writableState: [Object],
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: [Object],
     _server: [Object],
     _idleTimeout: 120000,
     _idleNext: [Object],
     _idlePrev: [Circular],
     _idleStart: 30354,
     _destroyed: false,
     parser: [Object],
     on: [Function: socketOnWrap],
     _paused: false,
     [Symbol(asyncId)]: 15,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 16,
     [Symbol(triggerAsyncId)]: 15 },
  _idlePrev: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Object],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idleStart: 30376,
  _destroyed: false,
  parser: 
   HTTPParser {
     '0': [Function: parserOnHeaders],
     '1': [Function: parserOnHeadersComplete],
     '2': [Function: parserOnBody],
     '3': [Function: parserOnMessageComplete],
     '4': [Function: bound onParserExecute],
     _headers: [],
     _url: '',
     _consumed: true,
     socket: [Circular],
     incoming: [Circular],
     outgoing: null,
     maxHeaderPairs: 2000,
     onIncoming: [Function: bound parserOnIncoming] },
  on: [Function: socketOnWrap],
  _paused: false,
  _httpMessage: 
   ServerResponse {
     domain: null,
     _events: [Object],
     _eventsCount: 2,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: true,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket: [Circular],
     connection: [Circular],
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: [Object],
     _startAt: undefined,
     _startTime: undefined,
     writeHead: [Function: writeHead],
     __onFinished: [Object],
     end: [Function: end],
     render: [Function],
     [Symbol(outHeadersKey)]: [Object] },
  _peername: { address: '::1', family: 'IPv6', port: 53083 },
  [Symbol(asyncId)]: 9,
  [Symbol(bytesRead)]: 0,
  [Symbol(asyncId)]: 11,
  [Symbol(triggerAsyncId)]: 9 },
_consuming: true,
_dumped: false,
next: [Function: next],
baseUrl: '',
originalUrl: '/users/signup',
_parsedUrl: 
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: '/users/signup',
  path: '/users/signup',
  href: '/users/signup',
  _raw: '/users/signup' },
params: {},
query: {},
res: 
ServerResponse {
  domain: null,
  _events: { finish: [Array], end: [Function: onevent] },
  _eventsCount: 2,
  _maxListeners: undefined,
  output: [],
  outputEncodings: [],
  outputCallbacks: [],
  outputSize: 0,
  writable: true,
  _last: false,
  upgrading: false,
  chunkedEncoding: false,
  shouldKeepAlive: true,
  useChunkedEncodingByDefault: true,
  sendDate: true,
  _removedConnection: false,
  _removedContLen: false,
  _removedTE: false,
  _contentLength: null,
  _hasBody: true,
  _trailer: '',
  finished: false,
  _headerSent: false,
  socket: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: [Object],
     _parent: null,
     _host: null,
     _readableState: [Object],
     readable: true,
     domain: null,
     _events: [Object],
     _eventsCount: 9,
     _maxListeners: undefined,
     _writableState: [Object],
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: [Object],
     _server: [Object],
     _idleTimeout: 120000,
     _idleNext: [Object],
     _idlePrev: [Object],
     _idleStart: 30376,
     _destroyed: false,
     parser: [Object],
     on: [Function: socketOnWrap],
     _paused: false,
     _httpMessage: [Circular],
     _peername: [Object],
     [Symbol(asyncId)]: 9,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 11,
     [Symbol(triggerAsyncId)]: 9 },
  connection: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: [Object],
     _parent: null,
     _host: null,
     _readableState: [Object],
     readable: true,
     domain: null,
     _events: [Object],
     _eventsCount: 9,
     _maxListeners: undefined,
     _writableState: [Object],
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: [Object],
     _server: [Object],
     _idleTimeout: 120000,
     _idleNext: [Object],
     _idlePrev: [Object],
     _idleStart: 30376,
     _destroyed: false,
     parser: [Object],
     on: [Function: socketOnWrap],
     _paused: false,
     _httpMessage: [Circular],
     _peername: [Object],
     [Symbol(asyncId)]: 9,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 11,
     [Symbol(triggerAsyncId)]: 9 },
  _header: null,
  _onPendingData: [Function: bound updateOutgoingData],
  _sent100: false,
  _expect_continue: false,
  req: [Circular],
  locals: { currentUser: undefined },
  _startAt: undefined,
  _startTime: undefined,
  writeHead: [Function: writeHead],
  __onFinished: { [Function: listener] queue: [Array] },
  end: [Function: end],
  render: [Function],
  [Symbol(outHeadersKey)]: { 'x-powered-by': [Array] } },
body: 
{ username: 'michellleeew',
  email: 'michellleeew@test.com',
  password: 'password',
  passwordConfirmation: 'password' },
_body: true,
length: undefined,
read: [Function],
_startAt: [ 231022, 523811155 ],
_startTime: 2018-12-05T23:54:08.729Z,
_remoteAddress: '::1',
_validationCustomMethods: { sanitizers: {}, validators: {} },
_validationErrors: [],
_asyncValidationErrors: [],
validationErrors: [Function],
asyncValidationErrors: [Function],
getValidationResult: [Function],
sanitizeBody: [Function],
sanitizeParams: [Function],
sanitizeQuery: [Function],
sanitizeCookies: [Function],
sanitizeHeaders: [Function],
sanitize: [Function],
checkBody: [Function],
checkParams: [Function],
checkQuery: [Function],
checkCookies: [Function],
checkHeaders: [Function],
check: [Function],
filter: [Function],
assert: [Function],
validate: [Function],
_parsedOriginalUrl: 
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: '/users/signup',
  path: '/users/signup',
  href: '/users/signup',
  _raw: '/users/signup' },
sessionStore: 
MemoryStore {
  domain: null,
  _events: 
   { disconnect: [Function: ondisconnect],
     connect: [Function: onconnect] },
  _eventsCount: 2,
  _maxListeners: undefined,
  sessions: {},
  generate: [Function] },
sessionID: 'tK9T8SMF0gn0M-jPGEt9QiSDQVn7Aekj',
session: 
Session {
  cookie: 
   { path: '/',
     _expires: 2018-12-20T00:00:48.734Z,
     originalMaxAge: 1210000000,
     httpOnly: true } },
flash: [Function: _flash],
_passport: 
{ instance: 
   Authenticator {
     _key: 'passport',
     _strategies: [Object],
     _serializers: [Array],
     _deserializers: [Array],
     _infoTransformers: [],
     _framework: [Object],
     _userProperty: 'user',
     _sm: [Object],
     Authenticator: [Function: Authenticator],
     Passport: [Function: Authenticator],
     Strategy: [Object],
     strategies: [Object] } },
route: 
Route {
  path: '/users/signup',
  stack: [ [Object] ],
  methods: { post: true } } }
error in userController
{ SequelizeValidationError: notNull Violation: User.username cannot be null
 at Promise.all.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/sequelize/lib/instance-validator.js:77:15)
 at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
 at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at Promise._fulfill (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:638:18)
 at PromiseArray._resolve (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:126:19)
 at PromiseArray._promiseFulfilled (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:144:14)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:574:26)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
 at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
 at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
 at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
 at runCallback (timers.js:810:20)
 at tryOnImmediate (timers.js:768:5)
 at processImmediate [as _immediateCallback] (timers.js:745:5)
name: 'SequelizeValidationError',
errors: 
[ ValidationErrorItem {
    message: 'User.username cannot be null',
    type: 'notNull Violation',
    path: 'username',
    value: null,
    origin: 'CORE',
    instance: [Object],
    validatorKey: 'is_null',
    validatorName: null,
    validatorArgs: [] } ] }
POST /users/signup 302 156.478 ms - 70
GET /users/signup 200 14.137 ms - 3351
GET /users/signup 200 1.939 ms - 2876
IncomingMessage {
_readableState: 
ReadableState {
  objectMode: false,
  highWaterMark: 16384,
  buffer: BufferList { head: null, tail: null, length: 0 },
  length: 0,
  pipes: null,
  pipesCount: 0,
  flowing: true,
  ended: true,
  endEmitted: true,
  reading: false,
  sync: false,
  needReadable: false,
  emittedReadable: false,
  readableListening: false,
  resumeScheduled: false,
  destroyed: false,
  defaultEncoding: 'utf8',
  awaitDrain: 0,
  readingMore: false,
  decoder: null,
  encoding: null },
readable: false,
domain: null,
_events: {},
_eventsCount: 0,
_maxListeners: undefined,
socket: 
Socket {
  connecting: false,
  _hadError: false,
  _handle: 
   TCP {
     reading: true,
     owner: [Circular],
     onread: [Function: onread],
     onconnection: null,
     writeQueueSize: 0,
     _consumed: true },
  _parent: null,
  _host: null,
  _readableState: 
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [Object],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: false,
     endEmitted: false,
     reading: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: 
   { end: [Array],
     _socketEnd: [Function: onSocketEnd],
     drain: [Array],
     timeout: [Function: socketOnTimeout],
     data: [Function: bound socketOnData],
     error: [Array],
     close: [Array],
     resume: [Function: onSocketResume],
     pause: [Function: onSocketPause] },
  _eventsCount: 9,
  _maxListeners: undefined,
  _writableState: 
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     finalCalled: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     destroyed: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function: bound onwrite],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree: [Object] },
  writable: true,
  allowHalfOpen: true,
  _bytesDispatched: 0,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 2,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 2,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _idleTimeout: 120000,
  _idleNext: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: [Object],
     _parent: null,
     _host: null,
     _readableState: [Object],
     readable: true,
     domain: null,
     _events: [Object],
     _eventsCount: 9,
     _maxListeners: undefined,
     _writableState: [Object],
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: [Object],
     _server: [Object],
     _idleTimeout: 120000,
     _idleNext: [Object],
     _idlePrev: [Circular],
     _idleStart: 47971,
     _destroyed: false,
     parser: [Object],
     on: [Function: socketOnWrap],
     _paused: false,
     [Symbol(asyncId)]: 90,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 91,
     [Symbol(triggerAsyncId)]: 90 },
  _idlePrev: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Object],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idleStart: 47972,
  _destroyed: false,
  parser: 
   HTTPParser {
     '0': [Function: parserOnHeaders],
     '1': [Function: parserOnHeadersComplete],
     '2': [Function: parserOnBody],
     '3': [Function: parserOnMessageComplete],
     '4': [Function: bound onParserExecute],
     _headers: [],
     _url: '',
     _consumed: true,
     socket: [Circular],
     incoming: [Circular],
     outgoing: null,
     maxHeaderPairs: 2000,
     onIncoming: [Function: bound parserOnIncoming] },
  on: [Function: socketOnWrap],
  _paused: false,
  _httpMessage: 
   ServerResponse {
     domain: null,
     _events: [Object],
     _eventsCount: 2,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: true,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket: [Circular],
     connection: [Circular],
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: [Object],
     _startAt: undefined,
     _startTime: undefined,
     writeHead: [Function: writeHead],
     __onFinished: [Object],
     end: [Function: end],
     render: [Function],
     [Symbol(outHeadersKey)]: [Object] },
  _peername: { address: '::1', family: 'IPv6', port: 53087 },
  [Symbol(asyncId)]: 86,
  [Symbol(bytesRead)]: 0,
  [Symbol(asyncId)]: 87,
  [Symbol(triggerAsyncId)]: 86 },
connection: 
Socket {
  connecting: false,
  _hadError: false,
  _handle: 
   TCP {
     reading: true,
     owner: [Circular],
     onread: [Function: onread],
     onconnection: null,
     writeQueueSize: 0,
     _consumed: true },
  _parent: null,
  _host: null,
  _readableState: 
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [Object],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: false,
     endEmitted: false,
     reading: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: 
   { end: [Array],
     _socketEnd: [Function: onSocketEnd],
     drain: [Array],
     timeout: [Function: socketOnTimeout],
     data: [Function: bound socketOnData],
     error: [Array],
     close: [Array],
     resume: [Function: onSocketResume],
     pause: [Function: onSocketPause] },
  _eventsCount: 9,
  _maxListeners: undefined,
  _writableState: 
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     finalCalled: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     destroyed: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function: bound onwrite],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree: [Object] },
  writable: true,
  allowHalfOpen: true,
  _bytesDispatched: 0,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 2,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 2,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _idleTimeout: 120000,
  _idleNext: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: [Object],
     _parent: null,
     _host: null,
     _readableState: [Object],
     readable: true,
     domain: null,
     _events: [Object],
     _eventsCount: 9,
     _maxListeners: undefined,
     _writableState: [Object],
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: [Object],
     _server: [Object],
     _idleTimeout: 120000,
     _idleNext: [Object],
     _idlePrev: [Circular],
     _idleStart: 47971,
     _destroyed: false,
     parser: [Object],
     on: [Function: socketOnWrap],
     _paused: false,
     [Symbol(asyncId)]: 90,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 91,
     [Symbol(triggerAsyncId)]: 90 },
  _idlePrev: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Object],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idleStart: 47972,
  _destroyed: false,
  parser: 
   HTTPParser {
     '0': [Function: parserOnHeaders],
     '1': [Function: parserOnHeadersComplete],
     '2': [Function: parserOnBody],
     '3': [Function: parserOnMessageComplete],
     '4': [Function: bound onParserExecute],
     _headers: [],
     _url: '',
     _consumed: true,
     socket: [Circular],
     incoming: [Circular],
     outgoing: null,
     maxHeaderPairs: 2000,
     onIncoming: [Function: bound parserOnIncoming] },
  on: [Function: socketOnWrap],
  _paused: false,
  _httpMessage: 
   ServerResponse {
     domain: null,
     _events: [Object],
     _eventsCount: 2,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: true,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket: [Circular],
     connection: [Circular],
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: [Object],
     _startAt: undefined,
     _startTime: undefined,
     writeHead: [Function: writeHead],
     __onFinished: [Object],
     end: [Function: end],
     render: [Function],
     [Symbol(outHeadersKey)]: [Object] },
  _peername: { address: '::1', family: 'IPv6', port: 53087 },
  [Symbol(asyncId)]: 86,
  [Symbol(bytesRead)]: 0,
  [Symbol(asyncId)]: 87,
  [Symbol(triggerAsyncId)]: 86 },
httpVersionMajor: 1,
httpVersionMinor: 1,
httpVersion: '1.1',
complete: true,
headers: 
{ host: 'localhost:3000',
  connection: 'keep-alive',
  'content-length': '96',
  'cache-control': 'max-age=0',
  origin: 'http://localhost:3000',
  'upgrade-insecure-requests': '1',
  'content-type': 'application/x-www-form-urlencoded',
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36',
  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  referer: 'http://localhost:3000/users/signup',
  'accept-encoding': 'gzip, deflate, br',
  'accept-language': 'en-US,en;q=0.9',
  cookie: 'connect.sid=s%3AtK9T8SMF0gn0M-jPGEt9QiSDQVn7Aekj.Hg2Ng3H%2BqSaTvEJ2%2FWlvpOyebadf3zoXTfcli9Qyfvc' },
rawHeaders: 
[ 'Host',
  'localhost:3000',
  'Connection',
  'keep-alive',
  'Content-Length',
  '96',
  'Cache-Control',
  'max-age=0',
  'Origin',
  'http://localhost:3000',
  'Upgrade-Insecure-Requests',
  '1',
  'Content-Type',
  'application/x-www-form-urlencoded',
  'User-Agent',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36',
  'Accept',
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  'Referer',
  'http://localhost:3000/users/signup',
  'Accept-Encoding',
  'gzip, deflate, br',
  'Accept-Language',
  'en-US,en;q=0.9',
  'Cookie',
  'connect.sid=s%3AtK9T8SMF0gn0M-jPGEt9QiSDQVn7Aekj.Hg2Ng3H%2BqSaTvEJ2%2FWlvpOyebadf3zoXTfcli9Qyfvc' ],
trailers: {},
rawTrailers: [],
upgrade: false,
url: '/users/signup',
method: 'POST',
statusCode: null,
statusMessage: null,
client: 
Socket {
  connecting: false,
  _hadError: false,
  _handle: 
   TCP {
     reading: true,
     owner: [Circular],
     onread: [Function: onread],
     onconnection: null,
     writeQueueSize: 0,
     _consumed: true },
  _parent: null,
  _host: null,
  _readableState: 
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [Object],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: false,
     endEmitted: false,
     reading: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: 
   { end: [Array],
     _socketEnd: [Function: onSocketEnd],
     drain: [Array],
     timeout: [Function: socketOnTimeout],
     data: [Function: bound socketOnData],
     error: [Array],
     close: [Array],
     resume: [Function: onSocketResume],
     pause: [Function: onSocketPause] },
  _eventsCount: 9,
  _maxListeners: undefined,
  _writableState: 
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     finalCalled: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     destroyed: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function: bound onwrite],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree: [Object] },
  writable: true,
  allowHalfOpen: true,
  _bytesDispatched: 0,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 2,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 2,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _idleTimeout: 120000,
  _idleNext: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: [Object],
     _parent: null,
     _host: null,
     _readableState: [Object],
     readable: true,
     domain: null,
     _events: [Object],
     _eventsCount: 9,
     _maxListeners: undefined,
     _writableState: [Object],
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: [Object],
     _server: [Object],
     _idleTimeout: 120000,
     _idleNext: [Object],
     _idlePrev: [Circular],
     _idleStart: 47971,
     _destroyed: false,
     parser: [Object],
     on: [Function: socketOnWrap],
     _paused: false,
     [Symbol(asyncId)]: 90,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 91,
     [Symbol(triggerAsyncId)]: 90 },
  _idlePrev: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Object],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idleStart: 47972,
  _destroyed: false,
  parser: 
   HTTPParser {
     '0': [Function: parserOnHeaders],
     '1': [Function: parserOnHeadersComplete],
     '2': [Function: parserOnBody],
     '3': [Function: parserOnMessageComplete],
     '4': [Function: bound onParserExecute],
     _headers: [],
     _url: '',
     _consumed: true,
     socket: [Circular],
     incoming: [Circular],
     outgoing: null,
     maxHeaderPairs: 2000,
     onIncoming: [Function: bound parserOnIncoming] },
  on: [Function: socketOnWrap],
  _paused: false,
  _httpMessage: 
   ServerResponse {
     domain: null,
     _events: [Object],
     _eventsCount: 2,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: true,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket: [Circular],
     connection: [Circular],
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: [Object],
     _startAt: undefined,
     _startTime: undefined,
     writeHead: [Function: writeHead],
     __onFinished: [Object],
     end: [Function: end],
     render: [Function],
     [Symbol(outHeadersKey)]: [Object] },
  _peername: { address: '::1', family: 'IPv6', port: 53087 },
  [Symbol(asyncId)]: 86,
  [Symbol(bytesRead)]: 0,
  [Symbol(asyncId)]: 87,
  [Symbol(triggerAsyncId)]: 86 },
_consuming: true,
_dumped: false,
next: [Function: next],
baseUrl: '',
originalUrl: '/users/signup',
_parsedUrl: 
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: '/users/signup',
  path: '/users/signup',
  href: '/users/signup',
  _raw: '/users/signup' },
params: {},
query: {},
res: 
ServerResponse {
  domain: null,
  _events: { finish: [Array], end: [Function: onevent] },
  _eventsCount: 2,
  _maxListeners: undefined,
  output: [],
  outputEncodings: [],
  outputCallbacks: [],
  outputSize: 0,
  writable: true,
  _last: false,
  upgrading: false,
  chunkedEncoding: false,
  shouldKeepAlive: true,
  useChunkedEncodingByDefault: true,
  sendDate: true,
  _removedConnection: false,
  _removedContLen: false,
  _removedTE: false,
  _contentLength: null,
  _hasBody: true,
  _trailer: '',
  finished: false,
  _headerSent: false,
  socket: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: [Object],
     _parent: null,
     _host: null,
     _readableState: [Object],
     readable: true,
     domain: null,
     _events: [Object],
     _eventsCount: 9,
     _maxListeners: undefined,
     _writableState: [Object],
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: [Object],
     _server: [Object],
     _idleTimeout: 120000,
     _idleNext: [Object],
     _idlePrev: [Object],
     _idleStart: 47972,
     _destroyed: false,
     parser: [Object],
     on: [Function: socketOnWrap],
     _paused: false,
     _httpMessage: [Circular],
     _peername: [Object],
     [Symbol(asyncId)]: 86,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 87,
     [Symbol(triggerAsyncId)]: 86 },
  connection: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: [Object],
     _parent: null,
     _host: null,
     _readableState: [Object],
     readable: true,
     domain: null,
     _events: [Object],
     _eventsCount: 9,
     _maxListeners: undefined,
     _writableState: [Object],
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: [Object],
     _server: [Object],
     _idleTimeout: 120000,
     _idleNext: [Object],
     _idlePrev: [Object],
     _idleStart: 47972,
     _destroyed: false,
     parser: [Object],
     on: [Function: socketOnWrap],
     _paused: false,
     _httpMessage: [Circular],
     _peername: [Object],
     [Symbol(asyncId)]: 86,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 87,
     [Symbol(triggerAsyncId)]: 86 },
  _header: null,
  _onPendingData: [Function: bound updateOutgoingData],
  _sent100: false,
  _expect_continue: false,
  req: [Circular],
  locals: { currentUser: undefined },
  _startAt: undefined,
  _startTime: undefined,
  writeHead: [Function: writeHead],
  __onFinished: { [Function: listener] queue: [Array] },
  end: [Function: end],
  render: [Function],
  [Symbol(outHeadersKey)]: { 'x-powered-by': [Array] } },
body: 
{ username: 'michellllle',
  email: 'michelllle@test.com',
  password: 'password',
  passwordConfirmation: 'password' },
_body: true,
length: undefined,
read: [Function],
_startAt: [ 231040, 117993785 ],
_startTime: 2018-12-05T23:54:26.323Z,
_remoteAddress: '::1',
_validationCustomMethods: { sanitizers: {}, validators: {} },
_validationErrors: [],
_asyncValidationErrors: [],
validationErrors: [Function],
asyncValidationErrors: [Function],
getValidationResult: [Function],
sanitizeBody: [Function],
sanitizeParams: [Function],
sanitizeQuery: [Function],
sanitizeCookies: [Function],
sanitizeHeaders: [Function],
sanitize: [Function],
checkBody: [Function],
checkParams: [Function],
checkQuery: [Function],
checkCookies: [Function],
checkHeaders: [Function],
check: [Function],
filter: [Function],
assert: [Function],
validate: [Function],
_parsedOriginalUrl: 
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: '/users/signup',
  path: '/users/signup',
  href: '/users/signup',
  _raw: '/users/signup' },
sessionStore: 
MemoryStore {
  domain: null,
  _events: 
   { disconnect: [Function: ondisconnect],
     connect: [Function: onconnect] },
  _eventsCount: 2,
  _maxListeners: undefined,
  sessions: 
   { 'tK9T8SMF0gn0M-jPGEt9QiSDQVn7Aekj': '{"cookie":{"originalMaxAge":1210000000,"expires":"2018-12-20T00:00:50.491Z","httpOnly":true,"path":"/"},"flash":{}}' },
  generate: [Function] },
sessionID: 'tK9T8SMF0gn0M-jPGEt9QiSDQVn7Aekj',
session: 
Session {
  cookie: 
   { path: '/',
     _expires: 2018-12-20T00:00:50.491Z,
     originalMaxAge: 1210000000,
     httpOnly: true },
  flash: {} },
flash: [Function: _flash],
_passport: 
{ instance: 
   Authenticator {
     _key: 'passport',
     _strategies: [Object],
     _serializers: [Array],
     _deserializers: [Array],
     _infoTransformers: [],
     _framework: [Object],
     _userProperty: 'user',
     _sm: [Object],
     Authenticator: [Function: Authenticator],
     Passport: [Function: Authenticator],
     Strategy: [Object],
     strategies: [Object] } },
route: 
Route {
  path: '/users/signup',
  stack: [ [Object] ],
  methods: { post: true } } }
error in userController
{ SequelizeValidationError: notNull Violation: User.username cannot be null
 at Promise.all.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/sequelize/lib/instance-validator.js:77:15)
 at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
 at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at Promise._fulfill (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:638:18)
 at PromiseArray._resolve (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:126:19)
 at PromiseArray._promiseFulfilled (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:144:14)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:574:26)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
 at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
 at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
 at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
 at runCallback (timers.js:810:20)
 at tryOnImmediate (timers.js:768:5)
 at processImmediate [as _immediateCallback] (timers.js:745:5)
name: 'SequelizeValidationError',
errors: 
[ ValidationErrorItem {
    message: 'User.username cannot be null',
    type: 'notNull Violation',
    path: 'username',
    value: null,
    origin: 'CORE',
    instance: [Object],
    validatorKey: 'is_null',
    validatorName: null,
    validatorArgs: [] } ] }
POST /users/signup 302 126.114 ms - 70
GET /users/signup 200 3.770 ms - 3351
^C
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ sudo lsof -i tcp:3000 
Password:
Sorry, try again.
Password:
Sorry, try again.
Password:
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ sudo lsof -i tcp:3000 
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ 
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ sudo lsof -i tcp:3000 
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ sudo lsof -i tcp:3000 
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ lsof -i tcp:3000 
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ 
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ npm start

> blocipedia-node@1.0.0 start /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node
> node src/server.js

server is listening for requests on port 3000
GET /users/signup 200 20.866 ms - 2876
IncomingMessage {
_readableState: 
ReadableState {
  objectMode: false,
  highWaterMark: 16384,
  buffer: BufferList { head: null, tail: null, length: 0 },
  length: 0,
  pipes: null,
  pipesCount: 0,
  flowing: true,
  ended: true,
  endEmitted: true,
  reading: false,
  sync: false,
  needReadable: false,
  emittedReadable: false,
  readableListening: false,
  resumeScheduled: false,
  destroyed: false,
  defaultEncoding: 'utf8',
  awaitDrain: 0,
  readingMore: false,
  decoder: null,
  encoding: null },
readable: false,
domain: null,
_events: {},
_eventsCount: 0,
_maxListeners: undefined,
socket: 
Socket {
  connecting: false,
  _hadError: false,
  _handle: 
   TCP {
     reading: true,
     owner: [Circular],
     onread: [Function: onread],
     onconnection: null,
     writeQueueSize: 0,
     _consumed: true },
  _parent: null,
  _host: null,
  _readableState: 
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [Object],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: false,
     endEmitted: false,
     reading: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: 
   { end: [Array],
     _socketEnd: [Function: onSocketEnd],
     drain: [Array],
     timeout: [Function: socketOnTimeout],
     data: [Function: bound socketOnData],
     error: [Array],
     close: [Array],
     resume: [Function: onSocketResume],
     pause: [Function: onSocketPause] },
  _eventsCount: 9,
  _maxListeners: undefined,
  _writableState: 
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     finalCalled: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     destroyed: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function: bound onwrite],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree: [Object] },
  writable: true,
  allowHalfOpen: true,
  _bytesDispatched: 0,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 2,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 2,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _idleTimeout: 120000,
  _idleNext: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: [Object],
     _parent: null,
     _host: null,
     _readableState: [Object],
     readable: true,
     domain: null,
     _events: [Object],
     _eventsCount: 9,
     _maxListeners: undefined,
     _writableState: [Object],
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: [Object],
     _server: [Object],
     _idleTimeout: 120000,
     _idleNext: [Object],
     _idlePrev: [Circular],
     _idleStart: 34629,
     _destroyed: false,
     parser: [Object],
     on: [Function: socketOnWrap],
     _paused: false,
     [Symbol(asyncId)]: 52,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 53,
     [Symbol(triggerAsyncId)]: 52 },
  _idlePrev: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Object],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idleStart: 34650,
  _destroyed: false,
  parser: 
   HTTPParser {
     '0': [Function: parserOnHeaders],
     '1': [Function: parserOnHeadersComplete],
     '2': [Function: parserOnBody],
     '3': [Function: parserOnMessageComplete],
     '4': [Function: bound onParserExecute],
     _headers: [],
     _url: '',
     _consumed: true,
     socket: [Circular],
     incoming: [Circular],
     outgoing: null,
     maxHeaderPairs: 2000,
     onIncoming: [Function: bound parserOnIncoming] },
  on: [Function: socketOnWrap],
  _paused: false,
  _httpMessage: 
   ServerResponse {
     domain: null,
     _events: [Object],
     _eventsCount: 2,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: true,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket: [Circular],
     connection: [Circular],
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: [Object],
     _startAt: undefined,
     _startTime: undefined,
     writeHead: [Function: writeHead],
     __onFinished: [Object],
     end: [Function: end],
     render: [Function],
     [Symbol(outHeadersKey)]: [Object] },
  _peername: { address: '::1', family: 'IPv6', port: 53096 },
  [Symbol(asyncId)]: 48,
  [Symbol(bytesRead)]: 0,
  [Symbol(asyncId)]: 49,
  [Symbol(triggerAsyncId)]: 48 },
connection: 
Socket {
  connecting: false,
  _hadError: false,
  _handle: 
   TCP {
     reading: true,
     owner: [Circular],
     onread: [Function: onread],
     onconnection: null,
     writeQueueSize: 0,
     _consumed: true },
  _parent: null,
  _host: null,
  _readableState: 
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [Object],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: false,
     endEmitted: false,
     reading: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: 
   { end: [Array],
     _socketEnd: [Function: onSocketEnd],
     drain: [Array],
     timeout: [Function: socketOnTimeout],
     data: [Function: bound socketOnData],
     error: [Array],
     close: [Array],
     resume: [Function: onSocketResume],
     pause: [Function: onSocketPause] },
  _eventsCount: 9,
  _maxListeners: undefined,
  _writableState: 
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     finalCalled: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     destroyed: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function: bound onwrite],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree: [Object] },
  writable: true,
  allowHalfOpen: true,
  _bytesDispatched: 0,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 2,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 2,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _idleTimeout: 120000,
  _idleNext: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: [Object],
     _parent: null,
     _host: null,
     _readableState: [Object],
     readable: true,
     domain: null,
     _events: [Object],
     _eventsCount: 9,
     _maxListeners: undefined,
     _writableState: [Object],
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: [Object],
     _server: [Object],
     _idleTimeout: 120000,
     _idleNext: [Object],
     _idlePrev: [Circular],
     _idleStart: 34629,
     _destroyed: false,
     parser: [Object],
     on: [Function: socketOnWrap],
     _paused: false,
     [Symbol(asyncId)]: 52,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 53,
     [Symbol(triggerAsyncId)]: 52 },
  _idlePrev: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Object],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idleStart: 34650,
  _destroyed: false,
  parser: 
   HTTPParser {
     '0': [Function: parserOnHeaders],
     '1': [Function: parserOnHeadersComplete],
     '2': [Function: parserOnBody],
     '3': [Function: parserOnMessageComplete],
     '4': [Function: bound onParserExecute],
     _headers: [],
     _url: '',
     _consumed: true,
     socket: [Circular],
     incoming: [Circular],
     outgoing: null,
     maxHeaderPairs: 2000,
     onIncoming: [Function: bound parserOnIncoming] },
  on: [Function: socketOnWrap],
  _paused: false,
  _httpMessage: 
   ServerResponse {
     domain: null,
     _events: [Object],
     _eventsCount: 2,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: true,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket: [Circular],
     connection: [Circular],
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: [Object],
     _startAt: undefined,
     _startTime: undefined,
     writeHead: [Function: writeHead],
     __onFinished: [Object],
     end: [Function: end],
     render: [Function],
     [Symbol(outHeadersKey)]: [Object] },
  _peername: { address: '::1', family: 'IPv6', port: 53096 },
  [Symbol(asyncId)]: 48,
  [Symbol(bytesRead)]: 0,
  [Symbol(asyncId)]: 49,
  [Symbol(triggerAsyncId)]: 48 },
httpVersionMajor: 1,
httpVersionMinor: 1,
httpVersion: '1.1',
complete: true,
headers: 
{ host: 'localhost:3000',
  connection: 'keep-alive',
  'content-length': '93',
  'cache-control': 'max-age=0',
  origin: 'http://localhost:3000',
  'upgrade-insecure-requests': '1',
  'content-type': 'application/x-www-form-urlencoded',
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36',
  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  referer: 'http://localhost:3000/users/signup',
  'accept-encoding': 'gzip, deflate, br',
  'accept-language': 'en-US,en;q=0.9',
  cookie: 'connect.sid=s%3ATCLFltrEDyBbjUHAGiPNVUZM68pFYWX9.v3fhw73k5kN5Fbh3jQ8XaI6f6sgOnv%2Fp3wzgaNB06M4' },
rawHeaders: 
[ 'Host',
  'localhost:3000',
  'Connection',
  'keep-alive',
  'Content-Length',
  '93',
  'Cache-Control',
  'max-age=0',
  'Origin',
  'http://localhost:3000',
  'Upgrade-Insecure-Requests',
  '1',
  'Content-Type',
  'application/x-www-form-urlencoded',
  'User-Agent',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36',
  'Accept',
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  'Referer',
  'http://localhost:3000/users/signup',
  'Accept-Encoding',
  'gzip, deflate, br',
  'Accept-Language',
  'en-US,en;q=0.9',
  'Cookie',
  'connect.sid=s%3ATCLFltrEDyBbjUHAGiPNVUZM68pFYWX9.v3fhw73k5kN5Fbh3jQ8XaI6f6sgOnv%2Fp3wzgaNB06M4' ],
trailers: {},
rawTrailers: [],
upgrade: false,
url: '/users/signup',
method: 'POST',
statusCode: null,
statusMessage: null,
client: 
Socket {
  connecting: false,
  _hadError: false,
  _handle: 
   TCP {
     reading: true,
     owner: [Circular],
     onread: [Function: onread],
     onconnection: null,
     writeQueueSize: 0,
     _consumed: true },
  _parent: null,
  _host: null,
  _readableState: 
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [Object],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: false,
     endEmitted: false,
     reading: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: 
   { end: [Array],
     _socketEnd: [Function: onSocketEnd],
     drain: [Array],
     timeout: [Function: socketOnTimeout],
     data: [Function: bound socketOnData],
     error: [Array],
     close: [Array],
     resume: [Function: onSocketResume],
     pause: [Function: onSocketPause] },
  _eventsCount: 9,
  _maxListeners: undefined,
  _writableState: 
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     finalCalled: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     destroyed: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function: bound onwrite],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree: [Object] },
  writable: true,
  allowHalfOpen: true,
  _bytesDispatched: 0,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 2,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 2,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _idleTimeout: 120000,
  _idleNext: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: [Object],
     _parent: null,
     _host: null,
     _readableState: [Object],
     readable: true,
     domain: null,
     _events: [Object],
     _eventsCount: 9,
     _maxListeners: undefined,
     _writableState: [Object],
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: [Object],
     _server: [Object],
     _idleTimeout: 120000,
     _idleNext: [Object],
     _idlePrev: [Circular],
     _idleStart: 34629,
     _destroyed: false,
     parser: [Object],
     on: [Function: socketOnWrap],
     _paused: false,
     [Symbol(asyncId)]: 52,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 53,
     [Symbol(triggerAsyncId)]: 52 },
  _idlePrev: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Object],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idleStart: 34650,
  _destroyed: false,
  parser: 
   HTTPParser {
     '0': [Function: parserOnHeaders],
     '1': [Function: parserOnHeadersComplete],
     '2': [Function: parserOnBody],
     '3': [Function: parserOnMessageComplete],
     '4': [Function: bound onParserExecute],
     _headers: [],
     _url: '',
     _consumed: true,
     socket: [Circular],
     incoming: [Circular],
     outgoing: null,
     maxHeaderPairs: 2000,
     onIncoming: [Function: bound parserOnIncoming] },
  on: [Function: socketOnWrap],
  _paused: false,
  _httpMessage: 
   ServerResponse {
     domain: null,
     _events: [Object],
     _eventsCount: 2,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: true,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket: [Circular],
     connection: [Circular],
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: [Object],
     _startAt: undefined,
     _startTime: undefined,
     writeHead: [Function: writeHead],
     __onFinished: [Object],
     end: [Function: end],
     render: [Function],
     [Symbol(outHeadersKey)]: [Object] },
  _peername: { address: '::1', family: 'IPv6', port: 53096 },
  [Symbol(asyncId)]: 48,
  [Symbol(bytesRead)]: 0,
  [Symbol(asyncId)]: 49,
  [Symbol(triggerAsyncId)]: 48 },
_consuming: true,
_dumped: false,
next: [Function: next],
baseUrl: '',
originalUrl: '/users/signup',
_parsedUrl: 
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: '/users/signup',
  path: '/users/signup',
  href: '/users/signup',
  _raw: '/users/signup' },
params: {},
query: {},
res: 
ServerResponse {
  domain: null,
  _events: { finish: [Array], end: [Function: onevent] },
  _eventsCount: 2,
  _maxListeners: undefined,
  output: [],
  outputEncodings: [],
  outputCallbacks: [],
  outputSize: 0,
  writable: true,
  _last: false,
  upgrading: false,
  chunkedEncoding: false,
  shouldKeepAlive: true,
  useChunkedEncodingByDefault: true,
  sendDate: true,
  _removedConnection: false,
  _removedContLen: false,
  _removedTE: false,
  _contentLength: null,
  _hasBody: true,
  _trailer: '',
  finished: false,
  _headerSent: false,
  socket: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: [Object],
     _parent: null,
     _host: null,
     _readableState: [Object],
     readable: true,
     domain: null,
     _events: [Object],
     _eventsCount: 9,
     _maxListeners: undefined,
     _writableState: [Object],
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: [Object],
     _server: [Object],
     _idleTimeout: 120000,
     _idleNext: [Object],
     _idlePrev: [Object],
     _idleStart: 34650,
     _destroyed: false,
     parser: [Object],
     on: [Function: socketOnWrap],
     _paused: false,
     _httpMessage: [Circular],
     _peername: [Object],
     [Symbol(asyncId)]: 48,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 49,
     [Symbol(triggerAsyncId)]: 48 },
  connection: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: [Object],
     _parent: null,
     _host: null,
     _readableState: [Object],
     readable: true,
     domain: null,
     _events: [Object],
     _eventsCount: 9,
     _maxListeners: undefined,
     _writableState: [Object],
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: [Object],
     _server: [Object],
     _idleTimeout: 120000,
     _idleNext: [Object],
     _idlePrev: [Object],
     _idleStart: 34650,
     _destroyed: false,
     parser: [Object],
     on: [Function: socketOnWrap],
     _paused: false,
     _httpMessage: [Circular],
     _peername: [Object],
     [Symbol(asyncId)]: 48,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 49,
     [Symbol(triggerAsyncId)]: 48 },
  _header: null,
  _onPendingData: [Function: bound updateOutgoingData],
  _sent100: false,
  _expect_continue: false,
  req: [Circular],
  locals: { currentUser: undefined },
  _startAt: undefined,
  _startTime: undefined,
  writeHead: [Function: writeHead],
  __onFinished: { [Function: listener] queue: [Array] },
  end: [Function: end],
  render: [Function],
  [Symbol(outHeadersKey)]: { 'x-powered-by': [Array] } },
body: 
{ username: 'mmichelle',
  email: 'mmichelle@test.com',
  password: 'password',
  passwordConfirmation: 'password' },
_body: true,
length: undefined,
read: [Function],
_startAt: [ 231198, 688201671 ],
_startTime: 2018-12-05T23:57:04.895Z,
_remoteAddress: '::1',
_validationCustomMethods: { sanitizers: {}, validators: {} },
_validationErrors: [],
_asyncValidationErrors: [],
validationErrors: [Function],
asyncValidationErrors: [Function],
getValidationResult: [Function],
sanitizeBody: [Function],
sanitizeParams: [Function],
sanitizeQuery: [Function],
sanitizeCookies: [Function],
sanitizeHeaders: [Function],
sanitize: [Function],
checkBody: [Function],
checkParams: [Function],
checkQuery: [Function],
checkCookies: [Function],
checkHeaders: [Function],
check: [Function],
filter: [Function],
assert: [Function],
validate: [Function],
_parsedOriginalUrl: 
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: '/users/signup',
  path: '/users/signup',
  href: '/users/signup',
  _raw: '/users/signup' },
sessionStore: 
MemoryStore {
  domain: null,
  _events: 
   { disconnect: [Function: ondisconnect],
     connect: [Function: onconnect] },
  _eventsCount: 2,
  _maxListeners: undefined,
  sessions: 
   { TCLFltrEDyBbjUHAGiPNVUZM68pFYWX9: '{"cookie":{"originalMaxAge":1210000000,"expires":"2018-12-20T00:03:15.769Z","httpOnly":true,"path":"/"},"flash":{}}' },
  generate: [Function] },
sessionID: 'TCLFltrEDyBbjUHAGiPNVUZM68pFYWX9',
session: 
Session {
  cookie: 
   { path: '/',
     _expires: 2018-12-20T00:03:15.769Z,
     originalMaxAge: 1210000000,
     httpOnly: true },
  flash: {} },
flash: [Function: _flash],
_passport: 
{ instance: 
   Authenticator {
     _key: 'passport',
     _strategies: [Object],
     _serializers: [Array],
     _deserializers: [Array],
     _infoTransformers: [],
     _framework: [Object],
     _userProperty: 'user',
     _sm: [Object],
     Authenticator: [Function: Authenticator],
     Passport: [Function: Authenticator],
     Strategy: [Object],
     strategies: [Object] } },
route: 
Route {
  path: '/users/signup',
  stack: [ [Object] ],
  methods: { post: true } } }
error in userController
{ SequelizeValidationError: notNull Violation: User.username cannot be null
 at Promise.all.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/sequelize/lib/instance-validator.js:77:15)
 at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
 at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at Promise._fulfill (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:638:18)
 at PromiseArray._resolve (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:126:19)
 at PromiseArray._promiseFulfilled (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:144:14)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:574:26)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
 at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
 at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
 at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
 at runCallback (timers.js:810:20)
 at tryOnImmediate (timers.js:768:5)
 at processImmediate [as _immediateCallback] (timers.js:745:5)
name: 'SequelizeValidationError',
errors: 
[ ValidationErrorItem {
    message: 'User.username cannot be null',
    type: 'notNull Violation',
    path: 'username',
    value: null,
    origin: 'CORE',
    instance: [Object],
    validatorKey: 'is_null',
    validatorName: null,
    validatorArgs: [] } ] }
POST /users/signup 302 181.297 ms - 70
GET /users/signup 200 6.419 ms - 3351
GET /users/signup 200 4.622 ms - 2876
IncomingMessage {
_readableState: 
ReadableState {
  objectMode: false,
  highWaterMark: 16384,
  buffer: BufferList { head: null, tail: null, length: 0 },
  length: 0,
  pipes: null,
  pipesCount: 0,
  flowing: true,
  ended: true,
  endEmitted: true,
  reading: false,
  sync: false,
  needReadable: false,
  emittedReadable: false,
  readableListening: false,
  resumeScheduled: false,
  destroyed: false,
  defaultEncoding: 'utf8',
  awaitDrain: 0,
  readingMore: false,
  decoder: null,
  encoding: null },
readable: false,
domain: null,
_events: {},
_eventsCount: 0,
_maxListeners: undefined,
socket: 
Socket {
  connecting: false,
  _hadError: false,
  _handle: 
   TCP {
     reading: true,
     owner: [Circular],
     onread: [Function: onread],
     onconnection: null,
     writeQueueSize: 0,
     _consumed: true },
  _parent: null,
  _host: null,
  _readableState: 
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [Object],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: false,
     endEmitted: false,
     reading: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: 
   { end: [Array],
     _socketEnd: [Function: onSocketEnd],
     drain: [Array],
     timeout: [Function: socketOnTimeout],
     data: [Function: bound socketOnData],
     error: [Array],
     close: [Array],
     resume: [Function: onSocketResume],
     pause: [Function: onSocketPause] },
  _eventsCount: 9,
  _maxListeners: undefined,
  _writableState: 
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     finalCalled: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     destroyed: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function: bound onwrite],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree: [Object] },
  writable: true,
  allowHalfOpen: true,
  _bytesDispatched: 0,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 2,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 2,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _idleTimeout: 120000,
  _idleNext: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: [Object],
     _parent: null,
     _host: null,
     _readableState: [Object],
     readable: true,
     domain: null,
     _events: [Object],
     _eventsCount: 9,
     _maxListeners: undefined,
     _writableState: [Object],
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: [Object],
     _server: [Object],
     _idleTimeout: 120000,
     _idleNext: [Object],
     _idlePrev: [Circular],
     _idleStart: 132991,
     _destroyed: false,
     parser: [Object],
     on: [Function: socketOnWrap],
     _paused: false,
     [Symbol(asyncId)]: 136,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 137,
     [Symbol(triggerAsyncId)]: 136 },
  _idlePrev: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Object],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idleStart: 132994,
  _destroyed: false,
  parser: 
   HTTPParser {
     '0': [Function: parserOnHeaders],
     '1': [Function: parserOnHeadersComplete],
     '2': [Function: parserOnBody],
     '3': [Function: parserOnMessageComplete],
     '4': [Function: bound onParserExecute],
     _headers: [],
     _url: '',
     _consumed: true,
     socket: [Circular],
     incoming: [Circular],
     outgoing: null,
     maxHeaderPairs: 2000,
     onIncoming: [Function: bound parserOnIncoming] },
  on: [Function: socketOnWrap],
  _paused: false,
  _httpMessage: 
   ServerResponse {
     domain: null,
     _events: [Object],
     _eventsCount: 2,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: true,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket: [Circular],
     connection: [Circular],
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: [Object],
     _startAt: undefined,
     _startTime: undefined,
     writeHead: [Function: writeHead],
     __onFinished: [Object],
     end: [Function: end],
     render: [Function],
     [Symbol(outHeadersKey)]: [Object] },
  _peername: { address: '::1', family: 'IPv6', port: 53111 },
  [Symbol(asyncId)]: 132,
  [Symbol(bytesRead)]: 0,
  [Symbol(asyncId)]: 133,
  [Symbol(triggerAsyncId)]: 132 },
connection: 
Socket {
  connecting: false,
  _hadError: false,
  _handle: 
   TCP {
     reading: true,
     owner: [Circular],
     onread: [Function: onread],
     onconnection: null,
     writeQueueSize: 0,
     _consumed: true },
  _parent: null,
  _host: null,
  _readableState: 
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [Object],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: false,
     endEmitted: false,
     reading: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: 
   { end: [Array],
     _socketEnd: [Function: onSocketEnd],
     drain: [Array],
     timeout: [Function: socketOnTimeout],
     data: [Function: bound socketOnData],
     error: [Array],
     close: [Array],
     resume: [Function: onSocketResume],
     pause: [Function: onSocketPause] },
  _eventsCount: 9,
  _maxListeners: undefined,
  _writableState: 
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     finalCalled: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     destroyed: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function: bound onwrite],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree: [Object] },
  writable: true,
  allowHalfOpen: true,
  _bytesDispatched: 0,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 2,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 2,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _idleTimeout: 120000,
  _idleNext: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: [Object],
     _parent: null,
     _host: null,
     _readableState: [Object],
     readable: true,
     domain: null,
     _events: [Object],
     _eventsCount: 9,
     _maxListeners: undefined,
     _writableState: [Object],
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: [Object],
     _server: [Object],
     _idleTimeout: 120000,
     _idleNext: [Object],
     _idlePrev: [Circular],
     _idleStart: 132991,
     _destroyed: false,
     parser: [Object],
     on: [Function: socketOnWrap],
     _paused: false,
     [Symbol(asyncId)]: 136,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 137,
     [Symbol(triggerAsyncId)]: 136 },
  _idlePrev: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Object],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idleStart: 132994,
  _destroyed: false,
  parser: 
   HTTPParser {
     '0': [Function: parserOnHeaders],
     '1': [Function: parserOnHeadersComplete],
     '2': [Function: parserOnBody],
     '3': [Function: parserOnMessageComplete],
     '4': [Function: bound onParserExecute],
     _headers: [],
     _url: '',
     _consumed: true,
     socket: [Circular],
     incoming: [Circular],
     outgoing: null,
     maxHeaderPairs: 2000,
     onIncoming: [Function: bound parserOnIncoming] },
  on: [Function: socketOnWrap],
  _paused: false,
  _httpMessage: 
   ServerResponse {
     domain: null,
     _events: [Object],
     _eventsCount: 2,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: true,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket: [Circular],
     connection: [Circular],
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: [Object],
     _startAt: undefined,
     _startTime: undefined,
     writeHead: [Function: writeHead],
     __onFinished: [Object],
     end: [Function: end],
     render: [Function],
     [Symbol(outHeadersKey)]: [Object] },
  _peername: { address: '::1', family: 'IPv6', port: 53111 },
  [Symbol(asyncId)]: 132,
  [Symbol(bytesRead)]: 0,
  [Symbol(asyncId)]: 133,
  [Symbol(triggerAsyncId)]: 132 },
httpVersionMajor: 1,
httpVersionMinor: 1,
httpVersion: '1.1',
complete: true,
headers: 
{ host: 'localhost:3000',
  connection: 'keep-alive',
  'content-length': '89',
  'cache-control': 'max-age=0',
  origin: 'http://localhost:3000',
  'upgrade-insecure-requests': '1',
  'content-type': 'application/x-www-form-urlencoded',
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36',
  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  referer: 'http://localhost:3000/users/signup',
  'accept-encoding': 'gzip, deflate, br',
  'accept-language': 'en-US,en;q=0.9',
  cookie: 'connect.sid=s%3ATCLFltrEDyBbjUHAGiPNVUZM68pFYWX9.v3fhw73k5kN5Fbh3jQ8XaI6f6sgOnv%2Fp3wzgaNB06M4' },
rawHeaders: 
[ 'Host',
  'localhost:3000',
  'Connection',
  'keep-alive',
  'Content-Length',
  '89',
  'Cache-Control',
  'max-age=0',
  'Origin',
  'http://localhost:3000',
  'Upgrade-Insecure-Requests',
  '1',
  'Content-Type',
  'application/x-www-form-urlencoded',
  'User-Agent',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36',
  'Accept',
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  'Referer',
  'http://localhost:3000/users/signup',
  'Accept-Encoding',
  'gzip, deflate, br',
  'Accept-Language',
  'en-US,en;q=0.9',
  'Cookie',
  'connect.sid=s%3ATCLFltrEDyBbjUHAGiPNVUZM68pFYWX9.v3fhw73k5kN5Fbh3jQ8XaI6f6sgOnv%2Fp3wzgaNB06M4' ],
trailers: {},
rawTrailers: [],
upgrade: false,
url: '/users/signup',
method: 'POST',
statusCode: null,
statusMessage: null,
client: 
Socket {
  connecting: false,
  _hadError: false,
  _handle: 
   TCP {
     reading: true,
     owner: [Circular],
     onread: [Function: onread],
     onconnection: null,
     writeQueueSize: 0,
     _consumed: true },
  _parent: null,
  _host: null,
  _readableState: 
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [Object],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: false,
     endEmitted: false,
     reading: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: 
   { end: [Array],
     _socketEnd: [Function: onSocketEnd],
     drain: [Array],
     timeout: [Function: socketOnTimeout],
     data: [Function: bound socketOnData],
     error: [Array],
     close: [Array],
     resume: [Function: onSocketResume],
     pause: [Function: onSocketPause] },
  _eventsCount: 9,
  _maxListeners: undefined,
  _writableState: 
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     finalCalled: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     destroyed: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function: bound onwrite],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree: [Object] },
  writable: true,
  allowHalfOpen: true,
  _bytesDispatched: 0,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 2,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 2,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _idleTimeout: 120000,
  _idleNext: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: [Object],
     _parent: null,
     _host: null,
     _readableState: [Object],
     readable: true,
     domain: null,
     _events: [Object],
     _eventsCount: 9,
     _maxListeners: undefined,
     _writableState: [Object],
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: [Object],
     _server: [Object],
     _idleTimeout: 120000,
     _idleNext: [Object],
     _idlePrev: [Circular],
     _idleStart: 132991,
     _destroyed: false,
     parser: [Object],
     on: [Function: socketOnWrap],
     _paused: false,
     [Symbol(asyncId)]: 136,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 137,
     [Symbol(triggerAsyncId)]: 136 },
  _idlePrev: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Object],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idleStart: 132994,
  _destroyed: false,
  parser: 
   HTTPParser {
     '0': [Function: parserOnHeaders],
     '1': [Function: parserOnHeadersComplete],
     '2': [Function: parserOnBody],
     '3': [Function: parserOnMessageComplete],
     '4': [Function: bound onParserExecute],
     _headers: [],
     _url: '',
     _consumed: true,
     socket: [Circular],
     incoming: [Circular],
     outgoing: null,
     maxHeaderPairs: 2000,
     onIncoming: [Function: bound parserOnIncoming] },
  on: [Function: socketOnWrap],
  _paused: false,
  _httpMessage: 
   ServerResponse {
     domain: null,
     _events: [Object],
     _eventsCount: 2,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: true,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket: [Circular],
     connection: [Circular],
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: [Object],
     _startAt: undefined,
     _startTime: undefined,
     writeHead: [Function: writeHead],
     __onFinished: [Object],
     end: [Function: end],
     render: [Function],
     [Symbol(outHeadersKey)]: [Object] },
  _peername: { address: '::1', family: 'IPv6', port: 53111 },
  [Symbol(asyncId)]: 132,
  [Symbol(bytesRead)]: 0,
  [Symbol(asyncId)]: 133,
  [Symbol(triggerAsyncId)]: 132 },
_consuming: true,
_dumped: false,
next: [Function: next],
baseUrl: '',
originalUrl: '/users/signup',
_parsedUrl: 
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: '/users/signup',
  path: '/users/signup',
  href: '/users/signup',
  _raw: '/users/signup' },
params: {},
query: {},
res: 
ServerResponse {
  domain: null,
  _events: { finish: [Array], end: [Function: onevent] },
  _eventsCount: 2,
  _maxListeners: undefined,
  output: [],
  outputEncodings: [],
  outputCallbacks: [],
  outputSize: 0,
  writable: true,
  _last: false,
  upgrading: false,
  chunkedEncoding: false,
  shouldKeepAlive: true,
  useChunkedEncodingByDefault: true,
  sendDate: true,
  _removedConnection: false,
  _removedContLen: false,
  _removedTE: false,
  _contentLength: null,
  _hasBody: true,
  _trailer: '',
  finished: false,
  _headerSent: false,
  socket: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: [Object],
     _parent: null,
     _host: null,
     _readableState: [Object],
     readable: true,
     domain: null,
     _events: [Object],
     _eventsCount: 9,
     _maxListeners: undefined,
     _writableState: [Object],
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: [Object],
     _server: [Object],
     _idleTimeout: 120000,
     _idleNext: [Object],
     _idlePrev: [Object],
     _idleStart: 132994,
     _destroyed: false,
     parser: [Object],
     on: [Function: socketOnWrap],
     _paused: false,
     _httpMessage: [Circular],
     _peername: [Object],
     [Symbol(asyncId)]: 132,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 133,
     [Symbol(triggerAsyncId)]: 132 },
  connection: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: [Object],
     _parent: null,
     _host: null,
     _readableState: [Object],
     readable: true,
     domain: null,
     _events: [Object],
     _eventsCount: 9,
     _maxListeners: undefined,
     _writableState: [Object],
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: [Object],
     _server: [Object],
     _idleTimeout: 120000,
     _idleNext: [Object],
     _idlePrev: [Object],
     _idleStart: 132994,
     _destroyed: false,
     parser: [Object],
     on: [Function: socketOnWrap],
     _paused: false,
     _httpMessage: [Circular],
     _peername: [Object],
     [Symbol(asyncId)]: 132,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 133,
     [Symbol(triggerAsyncId)]: 132 },
  _header: null,
  _onPendingData: [Function: bound updateOutgoingData],
  _sent100: false,
  _expect_continue: false,
  req: [Circular],
  locals: { currentUser: undefined },
  _startAt: undefined,
  _startTime: undefined,
  writeHead: [Function: writeHead],
  __onFinished: { [Function: listener] queue: [Array] },
  end: [Function: end],
  render: [Function],
  [Symbol(outHeadersKey)]: { 'x-powered-by': [Array] } },
body: 
{ username: 'michlle',
  email: 'michlle@test.com',
  password: 'password',
  passwordConfirmation: 'password' },
_body: true,
length: undefined,
read: [Function],
_startAt: [ 231297, 30558268 ],
_startTime: 2018-12-05T23:58:43.238Z,
_remoteAddress: '::1',
_validationCustomMethods: { sanitizers: {}, validators: {} },
_validationErrors: [],
_asyncValidationErrors: [],
validationErrors: [Function],
asyncValidationErrors: [Function],
getValidationResult: [Function],
sanitizeBody: [Function],
sanitizeParams: [Function],
sanitizeQuery: [Function],
sanitizeCookies: [Function],
sanitizeHeaders: [Function],
sanitize: [Function],
checkBody: [Function],
checkParams: [Function],
checkQuery: [Function],
checkCookies: [Function],
checkHeaders: [Function],
check: [Function],
filter: [Function],
assert: [Function],
validate: [Function],
_parsedOriginalUrl: 
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: '/users/signup',
  path: '/users/signup',
  href: '/users/signup',
  _raw: '/users/signup' },
sessionStore: 
MemoryStore {
  domain: null,
  _events: 
   { disconnect: [Function: ondisconnect],
     connect: [Function: onconnect] },
  _eventsCount: 2,
  _maxListeners: undefined,
  sessions: 
   { TCLFltrEDyBbjUHAGiPNVUZM68pFYWX9: '{"cookie":{"originalMaxAge":1210000000,"expires":"2018-12-20T00:05:06.068Z","httpOnly":true,"path":"/"},"flash":{}}' },
  generate: [Function] },
sessionID: 'TCLFltrEDyBbjUHAGiPNVUZM68pFYWX9',
session: 
Session {
  cookie: 
   { path: '/',
     _expires: 2018-12-20T00:05:06.068Z,
     originalMaxAge: 1210000000,
     httpOnly: true },
  flash: {} },
flash: [Function: _flash],
_passport: 
{ instance: 
   Authenticator {
     _key: 'passport',
     _strategies: [Object],
     _serializers: [Array],
     _deserializers: [Array],
     _infoTransformers: [],
     _framework: [Object],
     _userProperty: 'user',
     _sm: [Object],
     Authenticator: [Function: Authenticator],
     Passport: [Function: Authenticator],
     Strategy: [Object],
     strategies: [Object] } },
route: 
Route {
  path: '/users/signup',
  stack: [ [Object] ],
  methods: { post: true } } }
error in userController
{ SequelizeValidationError: notNull Violation: User.username cannot be null
 at Promise.all.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/sequelize/lib/instance-validator.js:77:15)
 at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
 at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at Promise._fulfill (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:638:18)
 at PromiseArray._resolve (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:126:19)
 at PromiseArray._promiseFulfilled (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise_array.js:144:14)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:574:26)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
 at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
 at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
 at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
 at runCallback (timers.js:810:20)
 at tryOnImmediate (timers.js:768:5)
 at processImmediate [as _immediateCallback] (timers.js:745:5)
name: 'SequelizeValidationError',
errors: 
[ ValidationErrorItem {
    message: 'User.username cannot be null',
    type: 'notNull Violation',
    path: 'username',
    value: null,
    origin: 'CORE',
    instance: [Object],
    validatorKey: 'is_null',
    validatorName: null,
    validatorArgs: [] } ] }
POST /users/signup 302 156.348 ms - 70
GET /users/signup 200 4.320 ms - 3351
^CMichelles-MacBook-Pro:blocipedia-node michellebeauregard$ npm test

> blocipedia-node@1.0.0 test /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node
> export NODE_ENV=test&& jasmine

Started
server is listening for requests on port 3000
GET / 200 15.132 ms - 2667
.GET /users/signup 200 2.178 ms - 2876
.POST /users/signup 302 121.898 ms - 35
Found. Redirecting to /users/signup
TypeError: Cannot read property 'email' of null
 at User.findOne.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/spec/integration/users_spec.js:52:29)
 at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
 at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
 at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
 at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
 at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
 at runCallback (timers.js:810:20)
 at tryOnImmediate (timers.js:768:5)
 at processImmediate [as _immediateCallback] (timers.js:745:5)
FPOST /users/signup 302 95.334 ms - 35
....

Failures:
1) routes : users POST /users/signup should create a new user with valid values and redirect
Message:
 Expected null to be truthy.
Stack:
 Error: Expected null to be truthy.
     at <Jasmine>
     at User.findOne.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/spec/integration/users_spec.js:51:30)
     at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
     at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
     at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
     at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
     at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
     at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
     at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
     at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
     at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
     at runCallback (timers.js:810:20)
     at tryOnImmediate (timers.js:768:5)
     at processImmediate [as _immediateCallback] (timers.js:745:5)

7 specs, 1 failure
Finished in 0.456 seconds
npm ERR! Test failed.  See above for more details.
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ npm start

> blocipedia-node@1.0.0 start /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node
> node src/server.js

server is listening for requests on port 3000
GET /users/signup 200 20.243 ms - 2876
POST /users/signup 302 322.160 ms - 46
GET / 304 7.700 ms - -
^C
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ git add .
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ git commit -m "sign-in working"
[master 02266ef] sign-in working
2 files changed, 10 insertions(+), 12 deletions(-)
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ git push
To github.com:mcbeauregard/blocipedia-node.git
! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'git@github.com:mcbeauregard/blocipedia-node.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ npm test

> blocipedia-node@1.0.0 test /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node
> export NODE_ENV=test&& jasmine

Started
server is listening for requests on port 3000
GET / 200 18.492 ms - 2667
.GET /users/signup 200 3.004 ms - 2876
.IncomingMessage {
_readableState: 
ReadableState {
  objectMode: false,
  highWaterMark: 16384,
  buffer: BufferList { head: null, tail: null, length: 0 },
  length: 0,
  pipes: null,
  pipesCount: 0,
  flowing: true,
  ended: true,
  endEmitted: true,
  reading: false,
  sync: false,
  needReadable: false,
  emittedReadable: false,
  readableListening: false,
  resumeScheduled: false,
  destroyed: false,
  defaultEncoding: 'utf8',
  awaitDrain: 0,
  readingMore: false,
  decoder: null,
  encoding: null },
readable: false,
domain: null,
_events: {},
_eventsCount: 0,
_maxListeners: undefined,
socket: 
Socket {
  connecting: false,
  _hadError: false,
  _handle: 
   TCP {
     reading: true,
     owner: [Circular],
     onread: [Function: onread],
     onconnection: null,
     writeQueueSize: 0,
     _consumed: true },
  _parent: null,
  _host: null,
  _readableState: 
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [Object],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: false,
     endEmitted: false,
     reading: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: 
   { end: [Array],
     _socketEnd: [Function: onSocketEnd],
     drain: [Array],
     timeout: [Function: socketOnTimeout],
     data: [Function: bound socketOnData],
     error: [Array],
     close: [Array],
     resume: [Function: onSocketResume],
     pause: [Function: onSocketPause] },
  _eventsCount: 9,
  _maxListeners: undefined,
  _writableState: 
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     finalCalled: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     destroyed: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function: bound onwrite],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree: [Object] },
  writable: true,
  allowHalfOpen: true,
  _bytesDispatched: 0,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _idleTimeout: 120000,
  _idleNext: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idlePrev: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idleStart: 1217,
  _destroyed: false,
  parser: 
   HTTPParser {
     '0': [Function: parserOnHeaders],
     '1': [Function: parserOnHeadersComplete],
     '2': [Function: parserOnBody],
     '3': [Function: parserOnMessageComplete],
     '4': [Function: bound onParserExecute],
     _headers: [],
     _url: '',
     _consumed: true,
     socket: [Circular],
     incoming: [Circular],
     outgoing: null,
     maxHeaderPairs: 2000,
     onIncoming: [Function: bound parserOnIncoming] },
  on: [Function: socketOnWrap],
  _paused: false,
  _httpMessage: 
   ServerResponse {
     domain: null,
     _events: [Object],
     _eventsCount: 2,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: false,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket: [Circular],
     connection: [Circular],
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: [Object],
     _startAt: undefined,
     _startTime: undefined,
     writeHead: [Function: writeHead],
     __onFinished: [Object],
     end: [Function: end],
     render: [Function],
     [Symbol(outHeadersKey)]: [Object] },
  _peername: { address: '::ffff:127.0.0.1', family: 'IPv6', port: 53137 },
  [Symbol(asyncId)]: 238,
  [Symbol(bytesRead)]: 0,
  [Symbol(asyncId)]: 239,
  [Symbol(triggerAsyncId)]: 238 },
connection: 
Socket {
  connecting: false,
  _hadError: false,
  _handle: 
   TCP {
     reading: true,
     owner: [Circular],
     onread: [Function: onread],
     onconnection: null,
     writeQueueSize: 0,
     _consumed: true },
  _parent: null,
  _host: null,
  _readableState: 
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [Object],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: false,
     endEmitted: false,
     reading: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: 
   { end: [Array],
     _socketEnd: [Function: onSocketEnd],
     drain: [Array],
     timeout: [Function: socketOnTimeout],
     data: [Function: bound socketOnData],
     error: [Array],
     close: [Array],
     resume: [Function: onSocketResume],
     pause: [Function: onSocketPause] },
  _eventsCount: 9,
  _maxListeners: undefined,
  _writableState: 
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     finalCalled: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     destroyed: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function: bound onwrite],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree: [Object] },
  writable: true,
  allowHalfOpen: true,
  _bytesDispatched: 0,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _idleTimeout: 120000,
  _idleNext: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idlePrev: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idleStart: 1217,
  _destroyed: false,
  parser: 
   HTTPParser {
     '0': [Function: parserOnHeaders],
     '1': [Function: parserOnHeadersComplete],
     '2': [Function: parserOnBody],
     '3': [Function: parserOnMessageComplete],
     '4': [Function: bound onParserExecute],
     _headers: [],
     _url: '',
     _consumed: true,
     socket: [Circular],
     incoming: [Circular],
     outgoing: null,
     maxHeaderPairs: 2000,
     onIncoming: [Function: bound parserOnIncoming] },
  on: [Function: socketOnWrap],
  _paused: false,
  _httpMessage: 
   ServerResponse {
     domain: null,
     _events: [Object],
     _eventsCount: 2,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: false,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket: [Circular],
     connection: [Circular],
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: [Object],
     _startAt: undefined,
     _startTime: undefined,
     writeHead: [Function: writeHead],
     __onFinished: [Object],
     end: [Function: end],
     render: [Function],
     [Symbol(outHeadersKey)]: [Object] },
  _peername: { address: '::ffff:127.0.0.1', family: 'IPv6', port: 53137 },
  [Symbol(asyncId)]: 238,
  [Symbol(bytesRead)]: 0,
  [Symbol(asyncId)]: 239,
  [Symbol(triggerAsyncId)]: 238 },
httpVersionMajor: 1,
httpVersionMinor: 1,
httpVersion: '1.1',
complete: true,
headers: 
{ host: 'localhost:3000',
  'content-type': 'application/x-www-form-urlencoded',
  'content-length': '76',
  connection: 'close' },
rawHeaders: 
[ 'host',
  'localhost:3000',
  'content-type',
  'application/x-www-form-urlencoded',
  'content-length',
  '76',
  'Connection',
  'close' ],
trailers: {},
rawTrailers: [],
upgrade: false,
url: '/users/signup',
method: 'POST',
statusCode: null,
statusMessage: null,
client: 
Socket {
  connecting: false,
  _hadError: false,
  _handle: 
   TCP {
     reading: true,
     owner: [Circular],
     onread: [Function: onread],
     onconnection: null,
     writeQueueSize: 0,
     _consumed: true },
  _parent: null,
  _host: null,
  _readableState: 
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [Object],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: false,
     endEmitted: false,
     reading: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: 
   { end: [Array],
     _socketEnd: [Function: onSocketEnd],
     drain: [Array],
     timeout: [Function: socketOnTimeout],
     data: [Function: bound socketOnData],
     error: [Array],
     close: [Array],
     resume: [Function: onSocketResume],
     pause: [Function: onSocketPause] },
  _eventsCount: 9,
  _maxListeners: undefined,
  _writableState: 
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     finalCalled: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     destroyed: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function: bound onwrite],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree: [Object] },
  writable: true,
  allowHalfOpen: true,
  _bytesDispatched: 0,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _idleTimeout: 120000,
  _idleNext: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idlePrev: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idleStart: 1217,
  _destroyed: false,
  parser: 
   HTTPParser {
     '0': [Function: parserOnHeaders],
     '1': [Function: parserOnHeadersComplete],
     '2': [Function: parserOnBody],
     '3': [Function: parserOnMessageComplete],
     '4': [Function: bound onParserExecute],
     _headers: [],
     _url: '',
     _consumed: true,
     socket: [Circular],
     incoming: [Circular],
     outgoing: null,
     maxHeaderPairs: 2000,
     onIncoming: [Function: bound parserOnIncoming] },
  on: [Function: socketOnWrap],
  _paused: false,
  _httpMessage: 
   ServerResponse {
     domain: null,
     _events: [Object],
     _eventsCount: 2,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: false,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket: [Circular],
     connection: [Circular],
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: [Object],
     _startAt: undefined,
     _startTime: undefined,
     writeHead: [Function: writeHead],
     __onFinished: [Object],
     end: [Function: end],
     render: [Function],
     [Symbol(outHeadersKey)]: [Object] },
  _peername: { address: '::ffff:127.0.0.1', family: 'IPv6', port: 53137 },
  [Symbol(asyncId)]: 238,
  [Symbol(bytesRead)]: 0,
  [Symbol(asyncId)]: 239,
  [Symbol(triggerAsyncId)]: 238 },
_consuming: true,
_dumped: false,
next: [Function: next],
baseUrl: '',
originalUrl: '/users/signup',
_parsedUrl: 
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: '/users/signup',
  path: '/users/signup',
  href: '/users/signup',
  _raw: '/users/signup' },
params: {},
query: {},
res: 
ServerResponse {
  domain: null,
  _events: { finish: [Array], end: [Function: onevent] },
  _eventsCount: 2,
  _maxListeners: undefined,
  output: [],
  outputEncodings: [],
  outputCallbacks: [],
  outputSize: 0,
  writable: true,
  _last: false,
  upgrading: false,
  chunkedEncoding: false,
  shouldKeepAlive: false,
  useChunkedEncodingByDefault: true,
  sendDate: true,
  _removedConnection: false,
  _removedContLen: false,
  _removedTE: false,
  _contentLength: null,
  _hasBody: true,
  _trailer: '',
  finished: false,
  _headerSent: false,
  socket: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: [Object],
     _parent: null,
     _host: null,
     _readableState: [Object],
     readable: true,
     domain: null,
     _events: [Object],
     _eventsCount: 9,
     _maxListeners: undefined,
     _writableState: [Object],
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: [Object],
     _server: [Object],
     _idleTimeout: 120000,
     _idleNext: [Object],
     _idlePrev: [Object],
     _idleStart: 1217,
     _destroyed: false,
     parser: [Object],
     on: [Function: socketOnWrap],
     _paused: false,
     _httpMessage: [Circular],
     _peername: [Object],
     [Symbol(asyncId)]: 238,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 239,
     [Symbol(triggerAsyncId)]: 238 },
  connection: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: [Object],
     _parent: null,
     _host: null,
     _readableState: [Object],
     readable: true,
     domain: null,
     _events: [Object],
     _eventsCount: 9,
     _maxListeners: undefined,
     _writableState: [Object],
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: [Object],
     _server: [Object],
     _idleTimeout: 120000,
     _idleNext: [Object],
     _idlePrev: [Object],
     _idleStart: 1217,
     _destroyed: false,
     parser: [Object],
     on: [Function: socketOnWrap],
     _paused: false,
     _httpMessage: [Circular],
     _peername: [Object],
     [Symbol(asyncId)]: 238,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 239,
     [Symbol(triggerAsyncId)]: 238 },
  _header: null,
  _onPendingData: [Function: bound updateOutgoingData],
  _sent100: false,
  _expect_continue: false,
  req: [Circular],
  locals: { currentUser: undefined },
  _startAt: undefined,
  _startTime: undefined,
  writeHead: [Function: writeHead],
  __onFinished: { [Function: listener] queue: [Array] },
  end: [Function: end],
  render: [Function],
  [Symbol(outHeadersKey)]: { 'x-powered-by': [Array] } },
body: 
{ email: 'user@example.com',
  password: '1234567890',
  passwordConfirmation: '1234567890' },
_body: true,
length: undefined,
read: [Function],
_startAt: [ 231413, 92363399 ],
_startTime: 2018-12-06T00:00:39.301Z,
_remoteAddress: '::ffff:127.0.0.1',
_validationCustomMethods: { sanitizers: {}, validators: {} },
_validationErrors: [],
_asyncValidationErrors: [],
validationErrors: [Function],
asyncValidationErrors: [Function],
getValidationResult: [Function],
sanitizeBody: [Function],
sanitizeParams: [Function],
sanitizeQuery: [Function],
sanitizeCookies: [Function],
sanitizeHeaders: [Function],
sanitize: [Function],
checkBody: [Function],
checkParams: [Function],
checkQuery: [Function],
checkCookies: [Function],
checkHeaders: [Function],
check: [Function],
filter: [Function],
assert: [Function],
validate: [Function],
_parsedOriginalUrl: 
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: '/users/signup',
  path: '/users/signup',
  href: '/users/signup',
  _raw: '/users/signup' },
sessionStore: 
MemoryStore {
  domain: null,
  _events: 
   { disconnect: [Function: ondisconnect],
     connect: [Function: onconnect] },
  _eventsCount: 2,
  _maxListeners: undefined,
  sessions: 
   { 'Q0f4VNxbesHoxheN-uqQTssn_cbFYQ4E': '{"cookie":{"originalMaxAge":1210000000,"expires":"2018-12-20T00:07:19.162Z","httpOnly":true,"path":"/"},"flash":{}}',
     bZpc7NkHybouWhhMcP8Pp5Dshb4vex9W: '{"cookie":{"originalMaxAge":1210000000,"expires":"2018-12-20T00:07:19.272Z","httpOnly":true,"path":"/"},"flash":{}}' },
  generate: [Function] },
sessionID: 'mlx2WGxgYOAPcxKB0PAKACu5TiYvmKHH',
session: 
Session {
  cookie: 
   { path: '/',
     _expires: 2018-12-20T00:07:19.302Z,
     originalMaxAge: 1210000000,
     httpOnly: true } },
flash: [Function: _flash],
_passport: 
{ instance: 
   Authenticator {
     _key: 'passport',
     _strategies: [Object],
     _serializers: [Array],
     _deserializers: [Array],
     _infoTransformers: [],
     _framework: [Object],
     _userProperty: 'user',
     _sm: [Object],
     Authenticator: [Function: Authenticator],
     Passport: [Function: Authenticator],
     Strategy: [Object],
     strategies: [Object] } },
route: 
Route {
  path: '/users/signup',
  stack: [ [Object] ],
  methods: { post: true } } }
POST /users/signup 302 142.873 ms - 35
Found. Redirecting to /users/signup
TypeError: Cannot read property 'email' of null
 at User.findOne.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/spec/integration/users_spec.js:52:29)
 at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
 at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
 at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
 at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
 at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
 at runCallback (timers.js:810:20)
 at tryOnImmediate (timers.js:768:5)
 at processImmediate [as _immediateCallback] (timers.js:745:5)
FIncomingMessage {
_readableState: 
ReadableState {
  objectMode: false,
  highWaterMark: 16384,
  buffer: BufferList { head: null, tail: null, length: 0 },
  length: 0,
  pipes: null,
  pipesCount: 0,
  flowing: true,
  ended: true,
  endEmitted: true,
  reading: false,
  sync: false,
  needReadable: false,
  emittedReadable: false,
  readableListening: false,
  resumeScheduled: false,
  destroyed: false,
  defaultEncoding: 'utf8',
  awaitDrain: 0,
  readingMore: false,
  decoder: null,
  encoding: null },
readable: false,
domain: null,
_events: {},
_eventsCount: 0,
_maxListeners: undefined,
socket: 
Socket {
  connecting: false,
  _hadError: false,
  _handle: 
   TCP {
     reading: true,
     owner: [Circular],
     onread: [Function: onread],
     onconnection: null,
     writeQueueSize: 0,
     _consumed: true },
  _parent: null,
  _host: null,
  _readableState: 
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [Object],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: false,
     endEmitted: false,
     reading: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: 
   { end: [Array],
     _socketEnd: [Function: onSocketEnd],
     drain: [Array],
     timeout: [Function: socketOnTimeout],
     data: [Function: bound socketOnData],
     error: [Array],
     close: [Array],
     resume: [Function: onSocketResume],
     pause: [Function: onSocketPause] },
  _eventsCount: 9,
  _maxListeners: undefined,
  _writableState: 
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     finalCalled: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     destroyed: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function: bound onwrite],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree: [Object] },
  writable: true,
  allowHalfOpen: true,
  _bytesDispatched: 0,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _idleTimeout: 120000,
  _idleNext: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idlePrev: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idleStart: 1384,
  _destroyed: false,
  parser: 
   HTTPParser {
     '0': [Function: parserOnHeaders],
     '1': [Function: parserOnHeadersComplete],
     '2': [Function: parserOnBody],
     '3': [Function: parserOnMessageComplete],
     '4': [Function: bound onParserExecute],
     _headers: [],
     _url: '',
     _consumed: true,
     socket: [Circular],
     incoming: [Circular],
     outgoing: null,
     maxHeaderPairs: 2000,
     onIncoming: [Function: bound parserOnIncoming] },
  on: [Function: socketOnWrap],
  _paused: false,
  _httpMessage: 
   ServerResponse {
     domain: null,
     _events: [Object],
     _eventsCount: 2,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: false,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket: [Circular],
     connection: [Circular],
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: [Object],
     _startAt: undefined,
     _startTime: undefined,
     writeHead: [Function: writeHead],
     __onFinished: [Object],
     end: [Function: end],
     render: [Function],
     [Symbol(outHeadersKey)]: [Object] },
  _peername: { address: '::ffff:127.0.0.1', family: 'IPv6', port: 53138 },
  [Symbol(asyncId)]: 330,
  [Symbol(bytesRead)]: 0,
  [Symbol(asyncId)]: 331,
  [Symbol(triggerAsyncId)]: 330 },
connection: 
Socket {
  connecting: false,
  _hadError: false,
  _handle: 
   TCP {
     reading: true,
     owner: [Circular],
     onread: [Function: onread],
     onconnection: null,
     writeQueueSize: 0,
     _consumed: true },
  _parent: null,
  _host: null,
  _readableState: 
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [Object],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: false,
     endEmitted: false,
     reading: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: 
   { end: [Array],
     _socketEnd: [Function: onSocketEnd],
     drain: [Array],
     timeout: [Function: socketOnTimeout],
     data: [Function: bound socketOnData],
     error: [Array],
     close: [Array],
     resume: [Function: onSocketResume],
     pause: [Function: onSocketPause] },
  _eventsCount: 9,
  _maxListeners: undefined,
  _writableState: 
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     finalCalled: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     destroyed: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function: bound onwrite],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree: [Object] },
  writable: true,
  allowHalfOpen: true,
  _bytesDispatched: 0,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _idleTimeout: 120000,
  _idleNext: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idlePrev: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idleStart: 1384,
  _destroyed: false,
  parser: 
   HTTPParser {
     '0': [Function: parserOnHeaders],
     '1': [Function: parserOnHeadersComplete],
     '2': [Function: parserOnBody],
     '3': [Function: parserOnMessageComplete],
     '4': [Function: bound onParserExecute],
     _headers: [],
     _url: '',
     _consumed: true,
     socket: [Circular],
     incoming: [Circular],
     outgoing: null,
     maxHeaderPairs: 2000,
     onIncoming: [Function: bound parserOnIncoming] },
  on: [Function: socketOnWrap],
  _paused: false,
  _httpMessage: 
   ServerResponse {
     domain: null,
     _events: [Object],
     _eventsCount: 2,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: false,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket: [Circular],
     connection: [Circular],
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: [Object],
     _startAt: undefined,
     _startTime: undefined,
     writeHead: [Function: writeHead],
     __onFinished: [Object],
     end: [Function: end],
     render: [Function],
     [Symbol(outHeadersKey)]: [Object] },
  _peername: { address: '::ffff:127.0.0.1', family: 'IPv6', port: 53138 },
  [Symbol(asyncId)]: 330,
  [Symbol(bytesRead)]: 0,
  [Symbol(asyncId)]: 331,
  [Symbol(triggerAsyncId)]: 330 },
httpVersionMajor: 1,
httpVersionMinor: 1,
httpVersion: '1.1',
complete: true,
headers: 
{ host: 'localhost:3000',
  'content-type': 'application/x-www-form-urlencoded',
  'content-length': '60',
  connection: 'close' },
rawHeaders: 
[ 'host',
  'localhost:3000',
  'content-type',
  'application/x-www-form-urlencoded',
  'content-length',
  '60',
  'Connection',
  'close' ],
trailers: {},
rawTrailers: [],
upgrade: false,
url: '/users/signup',
method: 'POST',
statusCode: null,
statusMessage: null,
client: 
Socket {
  connecting: false,
  _hadError: false,
  _handle: 
   TCP {
     reading: true,
     owner: [Circular],
     onread: [Function: onread],
     onconnection: null,
     writeQueueSize: 0,
     _consumed: true },
  _parent: null,
  _host: null,
  _readableState: 
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [Object],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: false,
     endEmitted: false,
     reading: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: 
   { end: [Array],
     _socketEnd: [Function: onSocketEnd],
     drain: [Array],
     timeout: [Function: socketOnTimeout],
     data: [Function: bound socketOnData],
     error: [Array],
     close: [Array],
     resume: [Function: onSocketResume],
     pause: [Function: onSocketPause] },
  _eventsCount: 9,
  _maxListeners: undefined,
  _writableState: 
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     finalCalled: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     destroyed: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function: bound onwrite],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree: [Object] },
  writable: true,
  allowHalfOpen: true,
  _bytesDispatched: 0,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _idleTimeout: 120000,
  _idleNext: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idlePrev: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idleStart: 1384,
  _destroyed: false,
  parser: 
   HTTPParser {
     '0': [Function: parserOnHeaders],
     '1': [Function: parserOnHeadersComplete],
     '2': [Function: parserOnBody],
     '3': [Function: parserOnMessageComplete],
     '4': [Function: bound onParserExecute],
     _headers: [],
     _url: '',
     _consumed: true,
     socket: [Circular],
     incoming: [Circular],
     outgoing: null,
     maxHeaderPairs: 2000,
     onIncoming: [Function: bound parserOnIncoming] },
  on: [Function: socketOnWrap],
  _paused: false,
  _httpMessage: 
   ServerResponse {
     domain: null,
     _events: [Object],
     _eventsCount: 2,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: false,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket: [Circular],
     connection: [Circular],
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: [Object],
     _startAt: undefined,
     _startTime: undefined,
     writeHead: [Function: writeHead],
     __onFinished: [Object],
     end: [Function: end],
     render: [Function],
     [Symbol(outHeadersKey)]: [Object] },
  _peername: { address: '::ffff:127.0.0.1', family: 'IPv6', port: 53138 },
  [Symbol(asyncId)]: 330,
  [Symbol(bytesRead)]: 0,
  [Symbol(asyncId)]: 331,
  [Symbol(triggerAsyncId)]: 330 },
_consuming: true,
_dumped: false,
next: [Function: next],
baseUrl: '',
originalUrl: '/users/signup',
_parsedUrl: 
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: '/users/signup',
  path: '/users/signup',
  href: '/users/signup',
  _raw: '/users/signup' },
params: {},
query: {},
res: 
ServerResponse {
  domain: null,
  _events: { finish: [Array], end: [Function: onevent] },
  _eventsCount: 2,
  _maxListeners: undefined,
  output: [],
  outputEncodings: [],
  outputCallbacks: [],
  outputSize: 0,
  writable: true,
  _last: false,
  upgrading: false,
  chunkedEncoding: false,
  shouldKeepAlive: false,
  useChunkedEncodingByDefault: true,
  sendDate: true,
  _removedConnection: false,
  _removedContLen: false,
  _removedTE: false,
  _contentLength: null,
  _hasBody: true,
  _trailer: '',
  finished: false,
  _headerSent: false,
  socket: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: [Object],
     _parent: null,
     _host: null,
     _readableState: [Object],
     readable: true,
     domain: null,
     _events: [Object],
     _eventsCount: 9,
     _maxListeners: undefined,
     _writableState: [Object],
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: [Object],
     _server: [Object],
     _idleTimeout: 120000,
     _idleNext: [Object],
     _idlePrev: [Object],
     _idleStart: 1384,
     _destroyed: false,
     parser: [Object],
     on: [Function: socketOnWrap],
     _paused: false,
     _httpMessage: [Circular],
     _peername: [Object],
     [Symbol(asyncId)]: 330,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 331,
     [Symbol(triggerAsyncId)]: 330 },
  connection: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: [Object],
     _parent: null,
     _host: null,
     _readableState: [Object],
     readable: true,
     domain: null,
     _events: [Object],
     _eventsCount: 9,
     _maxListeners: undefined,
     _writableState: [Object],
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: [Object],
     _server: [Object],
     _idleTimeout: 120000,
     _idleNext: [Object],
     _idlePrev: [Object],
     _idleStart: 1384,
     _destroyed: false,
     parser: [Object],
     on: [Function: socketOnWrap],
     _paused: false,
     _httpMessage: [Circular],
     _peername: [Object],
     [Symbol(asyncId)]: 330,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 331,
     [Symbol(triggerAsyncId)]: 330 },
  _header: null,
  _onPendingData: [Function: bound updateOutgoingData],
  _sent100: false,
  _expect_continue: false,
  req: [Circular],
  locals: { currentUser: undefined },
  _startAt: undefined,
  _startTime: undefined,
  writeHead: [Function: writeHead],
  __onFinished: { [Function: listener] queue: [Array] },
  end: [Function: end],
  render: [Function],
  [Symbol(outHeadersKey)]: { 'x-powered-by': [Array] } },
body: 
{ email: 'no',
  password: '1234567890',
  passwordConfirmation: '1234567890' },
_body: true,
length: undefined,
read: [Function],
_startAt: [ 231413, 258168174 ],
_startTime: 2018-12-06T00:00:39.467Z,
_remoteAddress: '::ffff:127.0.0.1',
_validationCustomMethods: { sanitizers: {}, validators: {} },
_validationErrors: [],
_asyncValidationErrors: [],
validationErrors: [Function],
asyncValidationErrors: [Function],
getValidationResult: [Function],
sanitizeBody: [Function],
sanitizeParams: [Function],
sanitizeQuery: [Function],
sanitizeCookies: [Function],
sanitizeHeaders: [Function],
sanitize: [Function],
checkBody: [Function],
checkParams: [Function],
checkQuery: [Function],
checkCookies: [Function],
checkHeaders: [Function],
check: [Function],
filter: [Function],
assert: [Function],
validate: [Function],
_parsedOriginalUrl: 
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: '/users/signup',
  path: '/users/signup',
  href: '/users/signup',
  _raw: '/users/signup' },
sessionStore: 
MemoryStore {
  domain: null,
  _events: 
   { disconnect: [Function: ondisconnect],
     connect: [Function: onconnect] },
  _eventsCount: 2,
  _maxListeners: undefined,
  sessions: 
   { 'Q0f4VNxbesHoxheN-uqQTssn_cbFYQ4E': '{"cookie":{"originalMaxAge":1210000000,"expires":"2018-12-20T00:07:19.162Z","httpOnly":true,"path":"/"},"flash":{}}',
     bZpc7NkHybouWhhMcP8Pp5Dshb4vex9W: '{"cookie":{"originalMaxAge":1210000000,"expires":"2018-12-20T00:07:19.272Z","httpOnly":true,"path":"/"},"flash":{}}',
     mlx2WGxgYOAPcxKB0PAKACu5TiYvmKHH: '{"cookie":{"originalMaxAge":1210000000,"expires":"2018-12-20T00:07:19.444Z","httpOnly":true,"path":"/"},"flash":{"error":[{"name":"SequelizeValidationError","errors":[{"message":"User.username cannot be null","type":"notNull Violation","path":"username","value":null,"origin":"CORE","instance":{"id":null,"email":"user@example.com","password":"$2a$10$hAjR4P3jttFxLGP8qoKjCefrNErEXxJNO5C5a7A6LmgDvU/bUcGOW","updatedAt":"2018-12-06T00:00:39.431Z","createdAt":"2018-12-06T00:00:39.431Z"},"validatorKey":"is_null","validatorName":null,"validatorArgs":[]}]}]}}' },
  generate: [Function] },
sessionID: '70vljhRTY5YZJXsfwP6soHDwNmZXHxUH',
session: 
Session {
  cookie: 
   { path: '/',
     _expires: 2018-12-20T00:07:19.467Z,
     originalMaxAge: 1210000000,
     httpOnly: true } },
flash: [Function: _flash],
_passport: 
{ instance: 
   Authenticator {
     _key: 'passport',
     _strategies: [Object],
     _serializers: [Array],
     _deserializers: [Array],
     _infoTransformers: [],
     _framework: [Object],
     _userProperty: 'user',
     _sm: [Object],
     Authenticator: [Function: Authenticator],
     Passport: [Function: Authenticator],
     Strategy: [Object],
     strategies: [Object] } },
route: 
Route {
  path: '/users/signup',
  stack: [ [Object] ],
  methods: { post: true } } }
POST /users/signup 302 110.186 ms - 35
....

Failures:
1) routes : users POST /users/signup should create a new user with valid values and redirect
Message:
 Expected null to be truthy.
Stack:
 Error: Expected null to be truthy.
     at <Jasmine>
     at User.findOne.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/spec/integration/users_spec.js:51:30)
     at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
     at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
     at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
     at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
     at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
     at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
     at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
     at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
     at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
     at runCallback (timers.js:810:20)
     at tryOnImmediate (timers.js:768:5)
     at processImmediate [as _immediateCallback] (timers.js:745:5)

7 specs, 1 failure
Finished in 0.504 seconds
npm ERR! Test failed.  See above for more details.
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ npm start

> blocipedia-node@1.0.0 start /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node
> node src/server.js

server is listening for requests on port 3000
GET / 200 27.377 ms - 2667
GET /users/signup 200 6.981 ms - 2876
POST /users/signup 302 288.569 ms - 46
GET / 200 4.922 ms - 3081

[Restored Dec 5, 2018, 4:03:29 PM]
Last login: Wed Dec  5 16:03:24 on console
Restored session: Wed  5 Dec 2018 16:02:39 PST
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ npm start

> blocipedia-node@1.0.0 start /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node
> node src/server.js

server is listening for requests on port 3000
GET / 200 40.066 ms - 2667
GET /favicon.ico 404 2.644 ms - 150
GET /users/signup 200 3.384 ms - 2876
POST /users/signup 302 248.516 ms - 70
GET /users/signup 200 4.813 ms - 3351
POST /users/signup 302 246.230 ms - 46
GET / 200 9.127 ms - 3081
^C  
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ npm test

> blocipedia-node@1.0.0 test /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node
> export NODE_ENV=test&& jasmine

Started
server is listening for requests on port 3000
GET / 200 15.855 ms - 2667
.GET /users/signup 200 2.443 ms - 2876
.POST /users/signup 302 134.267 ms - 35
Found. Redirecting to /users/signup
TypeError: Cannot read property 'email' of null
 at User.findOne.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/spec/integration/users_spec.js:52:29)
 at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
 at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
 at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
 at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
 at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
 at runCallback (timers.js:810:20)
 at tryOnImmediate (timers.js:768:5)
 at processImmediate [as _immediateCallback] (timers.js:745:5)
FPOST /users/signup 302 93.537 ms - 35
....

Failures:
1) routes : users POST /users/signup should create a new user with valid values and redirect
Message:
 Expected null to be truthy.
Stack:
 Error: Expected null to be truthy.
     at <Jasmine>
     at User.findOne.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/spec/integration/users_spec.js:51:30)
     at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
     at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
     at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
     at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
     at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
     at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
     at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
     at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
     at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
     at runCallback (timers.js:810:20)
     at tryOnImmediate (timers.js:768:5)
     at processImmediate [as _immediateCallback] (timers.js:745:5)

7 specs, 1 failure
Finished in 0.561 seconds
npm ERR! Test failed.  See above for more details.
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ clear

Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ npm start

> blocipedia-node@1.0.0 start /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node
> node src/server.js

server is listening for requests on port 3000
GET /users/signup 200 19.403 ms - 2876
IncomingMessage {
_readableState: 
ReadableState {
  objectMode: false,
  highWaterMark: 16384,
  buffer: BufferList { head: null, tail: null, length: 0 },
  length: 0,
  pipes: null,
  pipesCount: 0,
  flowing: true,
  ended: true,
  endEmitted: true,
  reading: false,
  sync: false,
  needReadable: false,
  emittedReadable: false,
  readableListening: false,
  resumeScheduled: false,
  destroyed: false,
  defaultEncoding: 'utf8',
  awaitDrain: 0,
  readingMore: false,
  decoder: null,
  encoding: null },
readable: false,
domain: null,
_events: {},
_eventsCount: 0,
_maxListeners: undefined,
socket: 
Socket {
  connecting: false,
  _hadError: false,
  _handle: 
   TCP {
     reading: true,
     owner: [Circular],
     onread: [Function: onread],
     onconnection: null,
     writeQueueSize: 0,
     _consumed: true },
  _parent: null,
  _host: null,
  _readableState: 
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [Object],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: false,
     endEmitted: false,
     reading: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: 
   { end: [Array],
     _socketEnd: [Function: onSocketEnd],
     drain: [Array],
     timeout: [Function: socketOnTimeout],
     data: [Function: bound socketOnData],
     error: [Array],
     close: [Array],
     resume: [Function: onSocketResume],
     pause: [Function: onSocketPause] },
  _eventsCount: 9,
  _maxListeners: undefined,
  _writableState: 
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     finalCalled: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     destroyed: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function: bound onwrite],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree: [Object] },
  writable: true,
  allowHalfOpen: true,
  _bytesDispatched: 0,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _idleTimeout: 120000,
  _idleNext: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idlePrev: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idleStart: 39655,
  _destroyed: false,
  parser: 
   HTTPParser {
     '0': [Function: parserOnHeaders],
     '1': [Function: parserOnHeadersComplete],
     '2': [Function: parserOnBody],
     '3': [Function: parserOnMessageComplete],
     '4': [Function: bound onParserExecute],
     _headers: [],
     _url: '',
     _consumed: true,
     socket: [Circular],
     incoming: [Circular],
     outgoing: null,
     maxHeaderPairs: 2000,
     onIncoming: [Function: bound parserOnIncoming] },
  on: [Function: socketOnWrap],
  _paused: false,
  _httpMessage: 
   ServerResponse {
     domain: null,
     _events: [Object],
     _eventsCount: 2,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: true,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket: [Circular],
     connection: [Circular],
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: [Object],
     _startAt: undefined,
     _startTime: undefined,
     writeHead: [Function: writeHead],
     __onFinished: [Object],
     end: [Function: end],
     render: [Function],
     [Symbol(outHeadersKey)]: [Object] },
  _peername: { address: '::1', family: 'IPv6', port: 51037 },
  [Symbol(asyncId)]: 40,
  [Symbol(bytesRead)]: 0,
  [Symbol(asyncId)]: 41,
  [Symbol(triggerAsyncId)]: 40 },
connection: 
Socket {
  connecting: false,
  _hadError: false,
  _handle: 
   TCP {
     reading: true,
     owner: [Circular],
     onread: [Function: onread],
     onconnection: null,
     writeQueueSize: 0,
     _consumed: true },
  _parent: null,
  _host: null,
  _readableState: 
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [Object],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: false,
     endEmitted: false,
     reading: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: 
   { end: [Array],
     _socketEnd: [Function: onSocketEnd],
     drain: [Array],
     timeout: [Function: socketOnTimeout],
     data: [Function: bound socketOnData],
     error: [Array],
     close: [Array],
     resume: [Function: onSocketResume],
     pause: [Function: onSocketPause] },
  _eventsCount: 9,
  _maxListeners: undefined,
  _writableState: 
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     finalCalled: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     destroyed: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function: bound onwrite],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree: [Object] },
  writable: true,
  allowHalfOpen: true,
  _bytesDispatched: 0,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _idleTimeout: 120000,
  _idleNext: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idlePrev: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idleStart: 39655,
  _destroyed: false,
  parser: 
   HTTPParser {
     '0': [Function: parserOnHeaders],
     '1': [Function: parserOnHeadersComplete],
     '2': [Function: parserOnBody],
     '3': [Function: parserOnMessageComplete],
     '4': [Function: bound onParserExecute],
     _headers: [],
     _url: '',
     _consumed: true,
     socket: [Circular],
     incoming: [Circular],
     outgoing: null,
     maxHeaderPairs: 2000,
     onIncoming: [Function: bound parserOnIncoming] },
  on: [Function: socketOnWrap],
  _paused: false,
  _httpMessage: 
   ServerResponse {
     domain: null,
     _events: [Object],
     _eventsCount: 2,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: true,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket: [Circular],
     connection: [Circular],
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: [Object],
     _startAt: undefined,
     _startTime: undefined,
     writeHead: [Function: writeHead],
     __onFinished: [Object],
     end: [Function: end],
     render: [Function],
     [Symbol(outHeadersKey)]: [Object] },
  _peername: { address: '::1', family: 'IPv6', port: 51037 },
  [Symbol(asyncId)]: 40,
  [Symbol(bytesRead)]: 0,
  [Symbol(asyncId)]: 41,
  [Symbol(triggerAsyncId)]: 40 },
httpVersionMajor: 1,
httpVersionMinor: 1,
httpVersion: '1.1',
complete: true,
headers: 
{ host: 'localhost:3000',
  connection: 'keep-alive',
  'content-length': '87',
  'cache-control': 'max-age=0',
  origin: 'http://localhost:3000',
  'upgrade-insecure-requests': '1',
  'content-type': 'application/x-www-form-urlencoded',
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36',
  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  referer: 'http://localhost:3000/users/signup',
  'accept-encoding': 'gzip, deflate, br',
  'accept-language': 'en-US,en;q=0.9',
  cookie: 'connect.sid=s%3ATUDPPQHAjMDVqMABXMk8UbXGiNXjKoqA.7rGHfFRwNcHWWzkbOkLxHtZWVHkWqBBJw9jNWsmQgRA' },
rawHeaders: 
[ 'Host',
  'localhost:3000',
  'Connection',
  'keep-alive',
  'Content-Length',
  '87',
  'Cache-Control',
  'max-age=0',
  'Origin',
  'http://localhost:3000',
  'Upgrade-Insecure-Requests',
  '1',
  'Content-Type',
  'application/x-www-form-urlencoded',
  'User-Agent',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36',
  'Accept',
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  'Referer',
  'http://localhost:3000/users/signup',
  'Accept-Encoding',
  'gzip, deflate, br',
  'Accept-Language',
  'en-US,en;q=0.9',
  'Cookie',
  'connect.sid=s%3ATUDPPQHAjMDVqMABXMk8UbXGiNXjKoqA.7rGHfFRwNcHWWzkbOkLxHtZWVHkWqBBJw9jNWsmQgRA' ],
trailers: {},
rawTrailers: [],
upgrade: false,
url: '/users/signup',
method: 'POST',
statusCode: null,
statusMessage: null,
client: 
Socket {
  connecting: false,
  _hadError: false,
  _handle: 
   TCP {
     reading: true,
     owner: [Circular],
     onread: [Function: onread],
     onconnection: null,
     writeQueueSize: 0,
     _consumed: true },
  _parent: null,
  _host: null,
  _readableState: 
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [Object],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: false,
     endEmitted: false,
     reading: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: 
   { end: [Array],
     _socketEnd: [Function: onSocketEnd],
     drain: [Array],
     timeout: [Function: socketOnTimeout],
     data: [Function: bound socketOnData],
     error: [Array],
     close: [Array],
     resume: [Function: onSocketResume],
     pause: [Function: onSocketPause] },
  _eventsCount: 9,
  _maxListeners: undefined,
  _writableState: 
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     finalCalled: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     destroyed: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function: bound onwrite],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree: [Object] },
  writable: true,
  allowHalfOpen: true,
  _bytesDispatched: 0,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _idleTimeout: 120000,
  _idleNext: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idlePrev: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idleStart: 39655,
  _destroyed: false,
  parser: 
   HTTPParser {
     '0': [Function: parserOnHeaders],
     '1': [Function: parserOnHeadersComplete],
     '2': [Function: parserOnBody],
     '3': [Function: parserOnMessageComplete],
     '4': [Function: bound onParserExecute],
     _headers: [],
     _url: '',
     _consumed: true,
     socket: [Circular],
     incoming: [Circular],
     outgoing: null,
     maxHeaderPairs: 2000,
     onIncoming: [Function: bound parserOnIncoming] },
  on: [Function: socketOnWrap],
  _paused: false,
  _httpMessage: 
   ServerResponse {
     domain: null,
     _events: [Object],
     _eventsCount: 2,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: true,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket: [Circular],
     connection: [Circular],
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: [Object],
     _startAt: undefined,
     _startTime: undefined,
     writeHead: [Function: writeHead],
     __onFinished: [Object],
     end: [Function: end],
     render: [Function],
     [Symbol(outHeadersKey)]: [Object] },
  _peername: { address: '::1', family: 'IPv6', port: 51037 },
  [Symbol(asyncId)]: 40,
  [Symbol(bytesRead)]: 0,
  [Symbol(asyncId)]: 41,
  [Symbol(triggerAsyncId)]: 40 },
_consuming: true,
_dumped: false,
next: [Function: next],
baseUrl: '',
originalUrl: '/users/signup',
_parsedUrl: 
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: '/users/signup',
  path: '/users/signup',
  href: '/users/signup',
  _raw: '/users/signup' },
params: {},
query: {},
res: 
ServerResponse {
  domain: null,
  _events: { finish: [Array], end: [Function: onevent] },
  _eventsCount: 2,
  _maxListeners: undefined,
  output: [],
  outputEncodings: [],
  outputCallbacks: [],
  outputSize: 0,
  writable: true,
  _last: false,
  upgrading: false,
  chunkedEncoding: false,
  shouldKeepAlive: true,
  useChunkedEncodingByDefault: true,
  sendDate: true,
  _removedConnection: false,
  _removedContLen: false,
  _removedTE: false,
  _contentLength: null,
  _hasBody: true,
  _trailer: '',
  finished: false,
  _headerSent: false,
  socket: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: [Object],
     _parent: null,
     _host: null,
     _readableState: [Object],
     readable: true,
     domain: null,
     _events: [Object],
     _eventsCount: 9,
     _maxListeners: undefined,
     _writableState: [Object],
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: [Object],
     _server: [Object],
     _idleTimeout: 120000,
     _idleNext: [Object],
     _idlePrev: [Object],
     _idleStart: 39655,
     _destroyed: false,
     parser: [Object],
     on: [Function: socketOnWrap],
     _paused: false,
     _httpMessage: [Circular],
     _peername: [Object],
     [Symbol(asyncId)]: 40,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 41,
     [Symbol(triggerAsyncId)]: 40 },
  connection: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: [Object],
     _parent: null,
     _host: null,
     _readableState: [Object],
     readable: true,
     domain: null,
     _events: [Object],
     _eventsCount: 9,
     _maxListeners: undefined,
     _writableState: [Object],
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: [Object],
     _server: [Object],
     _idleTimeout: 120000,
     _idleNext: [Object],
     _idlePrev: [Object],
     _idleStart: 39655,
     _destroyed: false,
     parser: [Object],
     on: [Function: socketOnWrap],
     _paused: false,
     _httpMessage: [Circular],
     _peername: [Object],
     [Symbol(asyncId)]: 40,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 41,
     [Symbol(triggerAsyncId)]: 40 },
  _header: null,
  _onPendingData: [Function: bound updateOutgoingData],
  _sent100: false,
  _expect_continue: false,
  req: [Circular],
  locals: { currentUser: undefined },
  _startAt: undefined,
  _startTime: undefined,
  writeHead: [Function: writeHead],
  __onFinished: { [Function: listener] queue: [Array] },
  end: [Function: end],
  render: [Function],
  [Symbol(outHeadersKey)]: { 'x-powered-by': [Array] } },
body: 
{ username: 'george',
  email: 'george@test.com',
  password: 'password',
  passwordConfirmation: 'password' },
_body: true,
length: undefined,
read: [Function],
_startAt: [ 366, 176086928 ],
_startTime: 2018-12-06T00:09:24.446Z,
_remoteAddress: '::1',
_validationCustomMethods: { sanitizers: {}, validators: {} },
_validationErrors: [],
_asyncValidationErrors: [],
validationErrors: [Function],
asyncValidationErrors: [Function],
getValidationResult: [Function],
sanitizeBody: [Function],
sanitizeParams: [Function],
sanitizeQuery: [Function],
sanitizeCookies: [Function],
sanitizeHeaders: [Function],
sanitize: [Function],
checkBody: [Function],
checkParams: [Function],
checkQuery: [Function],
checkCookies: [Function],
checkHeaders: [Function],
check: [Function],
filter: [Function],
assert: [Function],
validate: [Function],
_parsedOriginalUrl: 
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: '/users/signup',
  path: '/users/signup',
  href: '/users/signup',
  _raw: '/users/signup' },
sessionStore: 
MemoryStore {
  domain: null,
  _events: 
   { disconnect: [Function: ondisconnect],
     connect: [Function: onconnect] },
  _eventsCount: 2,
  _maxListeners: undefined,
  sessions: 
   { TUDPPQHAjMDVqMABXMk8UbXGiNXjKoqA: '{"cookie":{"originalMaxAge":1210000000,"expires":"2018-12-20T00:15:33.924Z","httpOnly":true,"path":"/"},"flash":{}}' },
  generate: [Function] },
sessionID: 'TUDPPQHAjMDVqMABXMk8UbXGiNXjKoqA',
session: 
Session {
  cookie: 
   { path: '/',
     _expires: 2018-12-20T00:15:33.924Z,
     originalMaxAge: 1210000000,
     httpOnly: true },
  flash: {} },
flash: [Function: _flash],
_passport: 
{ instance: 
   Authenticator {
     _key: 'passport',
     _strategies: [Object],
     _serializers: [Array],
     _deserializers: [Array],
     _infoTransformers: [],
     _framework: [Object],
     _userProperty: 'user',
     _sm: [Object],
     Authenticator: [Function: Authenticator],
     Passport: [Function: Authenticator],
     Strategy: [Object],
     strategies: [Object] } },
route: 
Route {
  path: '/users/signup',
  stack: [ [Object] ],
  methods: { post: true } } }
POST /users/signup 302 304.743 ms - 46
GET / 304 8.794 ms - -
^C
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ npm start

> blocipedia-node@1.0.0 start /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node
> node src/server.js

server is listening for requests on port 3000
^C
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ npm test

> blocipedia-node@1.0.0 test /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node
> export NODE_ENV=test&& jasmine

Started
server is listening for requests on port 3000
GET / 200 25.889 ms - 2667
.GET /users/signup 200 2.618 ms - 2876
.IncomingMessage {
_readableState: 
ReadableState {
  objectMode: false,
  highWaterMark: 16384,
  buffer: BufferList { head: null, tail: null, length: 0 },
  length: 0,
  pipes: null,
  pipesCount: 0,
  flowing: true,
  ended: true,
  endEmitted: true,
  reading: false,
  sync: false,
  needReadable: false,
  emittedReadable: false,
  readableListening: false,
  resumeScheduled: false,
  destroyed: false,
  defaultEncoding: 'utf8',
  awaitDrain: 0,
  readingMore: false,
  decoder: null,
  encoding: null },
readable: false,
domain: null,
_events: {},
_eventsCount: 0,
_maxListeners: undefined,
socket: 
Socket {
  connecting: false,
  _hadError: false,
  _handle: 
   TCP {
     reading: true,
     owner: [Circular],
     onread: [Function: onread],
     onconnection: null,
     writeQueueSize: 0,
     _consumed: true },
  _parent: null,
  _host: null,
  _readableState: 
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [Object],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: false,
     endEmitted: false,
     reading: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: 
   { end: [Array],
     _socketEnd: [Function: onSocketEnd],
     drain: [Array],
     timeout: [Function: socketOnTimeout],
     data: [Function: bound socketOnData],
     error: [Array],
     close: [Array],
     resume: [Function: onSocketResume],
     pause: [Function: onSocketPause] },
  _eventsCount: 9,
  _maxListeners: undefined,
  _writableState: 
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     finalCalled: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     destroyed: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function: bound onwrite],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree: [Object] },
  writable: true,
  allowHalfOpen: true,
  _bytesDispatched: 0,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _idleTimeout: 120000,
  _idleNext: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idlePrev: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idleStart: 830,
  _destroyed: false,
  parser: 
   HTTPParser {
     '0': [Function: parserOnHeaders],
     '1': [Function: parserOnHeadersComplete],
     '2': [Function: parserOnBody],
     '3': [Function: parserOnMessageComplete],
     '4': [Function: bound onParserExecute],
     _headers: [],
     _url: '',
     _consumed: true,
     socket: [Circular],
     incoming: [Circular],
     outgoing: null,
     maxHeaderPairs: 2000,
     onIncoming: [Function: bound parserOnIncoming] },
  on: [Function: socketOnWrap],
  _paused: false,
  _httpMessage: 
   ServerResponse {
     domain: null,
     _events: [Object],
     _eventsCount: 2,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: false,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket: [Circular],
     connection: [Circular],
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: [Object],
     _startAt: undefined,
     _startTime: undefined,
     writeHead: [Function: writeHead],
     __onFinished: [Object],
     end: [Function: end],
     render: [Function],
     [Symbol(outHeadersKey)]: [Object] },
  _peername: { address: '::ffff:127.0.0.1', family: 'IPv6', port: 51145 },
  [Symbol(asyncId)]: 238,
  [Symbol(bytesRead)]: 0,
  [Symbol(asyncId)]: 239,
  [Symbol(triggerAsyncId)]: 238 },
connection: 
Socket {
  connecting: false,
  _hadError: false,
  _handle: 
   TCP {
     reading: true,
     owner: [Circular],
     onread: [Function: onread],
     onconnection: null,
     writeQueueSize: 0,
     _consumed: true },
  _parent: null,
  _host: null,
  _readableState: 
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [Object],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: false,
     endEmitted: false,
     reading: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: 
   { end: [Array],
     _socketEnd: [Function: onSocketEnd],
     drain: [Array],
     timeout: [Function: socketOnTimeout],
     data: [Function: bound socketOnData],
     error: [Array],
     close: [Array],
     resume: [Function: onSocketResume],
     pause: [Function: onSocketPause] },
  _eventsCount: 9,
  _maxListeners: undefined,
  _writableState: 
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     finalCalled: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     destroyed: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function: bound onwrite],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree: [Object] },
  writable: true,
  allowHalfOpen: true,
  _bytesDispatched: 0,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _idleTimeout: 120000,
  _idleNext: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idlePrev: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idleStart: 830,
  _destroyed: false,
  parser: 
   HTTPParser {
     '0': [Function: parserOnHeaders],
     '1': [Function: parserOnHeadersComplete],
     '2': [Function: parserOnBody],
     '3': [Function: parserOnMessageComplete],
     '4': [Function: bound onParserExecute],
     _headers: [],
     _url: '',
     _consumed: true,
     socket: [Circular],
     incoming: [Circular],
     outgoing: null,
     maxHeaderPairs: 2000,
     onIncoming: [Function: bound parserOnIncoming] },
  on: [Function: socketOnWrap],
  _paused: false,
  _httpMessage: 
   ServerResponse {
     domain: null,
     _events: [Object],
     _eventsCount: 2,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: false,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket: [Circular],
     connection: [Circular],
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: [Object],
     _startAt: undefined,
     _startTime: undefined,
     writeHead: [Function: writeHead],
     __onFinished: [Object],
     end: [Function: end],
     render: [Function],
     [Symbol(outHeadersKey)]: [Object] },
  _peername: { address: '::ffff:127.0.0.1', family: 'IPv6', port: 51145 },
  [Symbol(asyncId)]: 238,
  [Symbol(bytesRead)]: 0,
  [Symbol(asyncId)]: 239,
  [Symbol(triggerAsyncId)]: 238 },
httpVersionMajor: 1,
httpVersionMinor: 1,
httpVersion: '1.1',
complete: true,
headers: 
{ host: 'localhost:3000',
  'content-type': 'application/x-www-form-urlencoded',
  'content-length': '76',
  connection: 'close' },
rawHeaders: 
[ 'host',
  'localhost:3000',
  'content-type',
  'application/x-www-form-urlencoded',
  'content-length',
  '76',
  'Connection',
  'close' ],
trailers: {},
rawTrailers: [],
upgrade: false,
url: '/users/signup',
method: 'POST',
statusCode: null,
statusMessage: null,
client: 
Socket {
  connecting: false,
  _hadError: false,
  _handle: 
   TCP {
     reading: true,
     owner: [Circular],
     onread: [Function: onread],
     onconnection: null,
     writeQueueSize: 0,
     _consumed: true },
  _parent: null,
  _host: null,
  _readableState: 
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [Object],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: false,
     endEmitted: false,
     reading: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: 
   { end: [Array],
     _socketEnd: [Function: onSocketEnd],
     drain: [Array],
     timeout: [Function: socketOnTimeout],
     data: [Function: bound socketOnData],
     error: [Array],
     close: [Array],
     resume: [Function: onSocketResume],
     pause: [Function: onSocketPause] },
  _eventsCount: 9,
  _maxListeners: undefined,
  _writableState: 
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     finalCalled: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     destroyed: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function: bound onwrite],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree: [Object] },
  writable: true,
  allowHalfOpen: true,
  _bytesDispatched: 0,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _idleTimeout: 120000,
  _idleNext: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idlePrev: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idleStart: 830,
  _destroyed: false,
  parser: 
   HTTPParser {
     '0': [Function: parserOnHeaders],
     '1': [Function: parserOnHeadersComplete],
     '2': [Function: parserOnBody],
     '3': [Function: parserOnMessageComplete],
     '4': [Function: bound onParserExecute],
     _headers: [],
     _url: '',
     _consumed: true,
     socket: [Circular],
     incoming: [Circular],
     outgoing: null,
     maxHeaderPairs: 2000,
     onIncoming: [Function: bound parserOnIncoming] },
  on: [Function: socketOnWrap],
  _paused: false,
  _httpMessage: 
   ServerResponse {
     domain: null,
     _events: [Object],
     _eventsCount: 2,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: false,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket: [Circular],
     connection: [Circular],
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: [Object],
     _startAt: undefined,
     _startTime: undefined,
     writeHead: [Function: writeHead],
     __onFinished: [Object],
     end: [Function: end],
     render: [Function],
     [Symbol(outHeadersKey)]: [Object] },
  _peername: { address: '::ffff:127.0.0.1', family: 'IPv6', port: 51145 },
  [Symbol(asyncId)]: 238,
  [Symbol(bytesRead)]: 0,
  [Symbol(asyncId)]: 239,
  [Symbol(triggerAsyncId)]: 238 },
_consuming: true,
_dumped: false,
next: [Function: next],
baseUrl: '',
originalUrl: '/users/signup',
_parsedUrl: 
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: '/users/signup',
  path: '/users/signup',
  href: '/users/signup',
  _raw: '/users/signup' },
params: {},
query: {},
res: 
ServerResponse {
  domain: null,
  _events: { finish: [Array], end: [Function: onevent] },
  _eventsCount: 2,
  _maxListeners: undefined,
  output: [],
  outputEncodings: [],
  outputCallbacks: [],
  outputSize: 0,
  writable: true,
  _last: false,
  upgrading: false,
  chunkedEncoding: false,
  shouldKeepAlive: false,
  useChunkedEncodingByDefault: true,
  sendDate: true,
  _removedConnection: false,
  _removedContLen: false,
  _removedTE: false,
  _contentLength: null,
  _hasBody: true,
  _trailer: '',
  finished: false,
  _headerSent: false,
  socket: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: [Object],
     _parent: null,
     _host: null,
     _readableState: [Object],
     readable: true,
     domain: null,
     _events: [Object],
     _eventsCount: 9,
     _maxListeners: undefined,
     _writableState: [Object],
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: [Object],
     _server: [Object],
     _idleTimeout: 120000,
     _idleNext: [Object],
     _idlePrev: [Object],
     _idleStart: 830,
     _destroyed: false,
     parser: [Object],
     on: [Function: socketOnWrap],
     _paused: false,
     _httpMessage: [Circular],
     _peername: [Object],
     [Symbol(asyncId)]: 238,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 239,
     [Symbol(triggerAsyncId)]: 238 },
  connection: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: [Object],
     _parent: null,
     _host: null,
     _readableState: [Object],
     readable: true,
     domain: null,
     _events: [Object],
     _eventsCount: 9,
     _maxListeners: undefined,
     _writableState: [Object],
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: [Object],
     _server: [Object],
     _idleTimeout: 120000,
     _idleNext: [Object],
     _idlePrev: [Object],
     _idleStart: 830,
     _destroyed: false,
     parser: [Object],
     on: [Function: socketOnWrap],
     _paused: false,
     _httpMessage: [Circular],
     _peername: [Object],
     [Symbol(asyncId)]: 238,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 239,
     [Symbol(triggerAsyncId)]: 238 },
  _header: null,
  _onPendingData: [Function: bound updateOutgoingData],
  _sent100: false,
  _expect_continue: false,
  req: [Circular],
  locals: { currentUser: undefined },
  _startAt: undefined,
  _startTime: undefined,
  writeHead: [Function: writeHead],
  __onFinished: { [Function: listener] queue: [Array] },
  end: [Function: end],
  render: [Function],
  [Symbol(outHeadersKey)]: { 'x-powered-by': [Array] } },
body: 
{ email: 'user@example.com',
  password: '1234567890',
  passwordConfirmation: '1234567890' },
_body: true,
length: undefined,
read: [Function],
_startAt: [ 891, 210802461 ],
_startTime: 2018-12-06T00:18:09.550Z,
_remoteAddress: '::ffff:127.0.0.1',
_validationCustomMethods: { sanitizers: {}, validators: {} },
_validationErrors: [],
_asyncValidationErrors: [],
validationErrors: [Function],
asyncValidationErrors: [Function],
getValidationResult: [Function],
sanitizeBody: [Function],
sanitizeParams: [Function],
sanitizeQuery: [Function],
sanitizeCookies: [Function],
sanitizeHeaders: [Function],
sanitize: [Function],
checkBody: [Function],
checkParams: [Function],
checkQuery: [Function],
checkCookies: [Function],
checkHeaders: [Function],
check: [Function],
filter: [Function],
assert: [Function],
validate: [Function],
_parsedOriginalUrl: 
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: '/users/signup',
  path: '/users/signup',
  href: '/users/signup',
  _raw: '/users/signup' },
sessionStore: 
MemoryStore {
  domain: null,
  _events: 
   { disconnect: [Function: ondisconnect],
     connect: [Function: onconnect] },
  _eventsCount: 2,
  _maxListeners: undefined,
  sessions: 
   { On1gFYBjStHJSTbGdenlFDLexrYQyr0K: '{"cookie":{"originalMaxAge":1210000000,"expires":"2018-12-20T00:24:49.444Z","httpOnly":true,"path":"/"},"flash":{}}',
     VJq4CgTh2mVmRh2HsEkC5kBiTMJFr2G1: '{"cookie":{"originalMaxAge":1210000000,"expires":"2018-12-20T00:24:49.523Z","httpOnly":true,"path":"/"},"flash":{}}' },
  generate: [Function] },
sessionID: 'TJk1WV2KKpetZObagRIVbSFZrvPxJE8w',
session: 
Session {
  cookie: 
   { path: '/',
     _expires: 2018-12-20T00:24:49.550Z,
     originalMaxAge: 1210000000,
     httpOnly: true } },
flash: [Function: _flash],
_passport: 
{ instance: 
   Authenticator {
     _key: 'passport',
     _strategies: [Object],
     _serializers: [Array],
     _deserializers: [Array],
     _infoTransformers: [],
     _framework: [Object],
     _userProperty: 'user',
     _sm: [Object],
     Authenticator: [Function: Authenticator],
     Passport: [Function: Authenticator],
     Strategy: [Object],
     strategies: [Object] } },
route: 
Route {
  path: '/users/signup',
  stack: [ [Object] ],
  methods: { post: true } } }
POST /users/signup 302 127.650 ms - 35
Found. Redirecting to /users/signup
TypeError: Cannot read property 'email' of null
 at User.findOne.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/spec/integration/users_spec.js:52:29)
 at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
 at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
 at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
 at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
 at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
 at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
 at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
 at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
 at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
 at runCallback (timers.js:810:20)
 at tryOnImmediate (timers.js:768:5)
 at processImmediate [as _immediateCallback] (timers.js:745:5)
FIncomingMessage {
_readableState: 
ReadableState {
  objectMode: false,
  highWaterMark: 16384,
  buffer: BufferList { head: null, tail: null, length: 0 },
  length: 0,
  pipes: null,
  pipesCount: 0,
  flowing: true,
  ended: true,
  endEmitted: true,
  reading: false,
  sync: false,
  needReadable: false,
  emittedReadable: false,
  readableListening: false,
  resumeScheduled: false,
  destroyed: false,
  defaultEncoding: 'utf8',
  awaitDrain: 0,
  readingMore: false,
  decoder: null,
  encoding: null },
readable: false,
domain: null,
_events: {},
_eventsCount: 0,
_maxListeners: undefined,
socket: 
Socket {
  connecting: false,
  _hadError: false,
  _handle: 
   TCP {
     reading: true,
     owner: [Circular],
     onread: [Function: onread],
     onconnection: null,
     writeQueueSize: 0,
     _consumed: true },
  _parent: null,
  _host: null,
  _readableState: 
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [Object],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: false,
     endEmitted: false,
     reading: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: 
   { end: [Array],
     _socketEnd: [Function: onSocketEnd],
     drain: [Array],
     timeout: [Function: socketOnTimeout],
     data: [Function: bound socketOnData],
     error: [Array],
     close: [Array],
     resume: [Function: onSocketResume],
     pause: [Function: onSocketPause] },
  _eventsCount: 9,
  _maxListeners: undefined,
  _writableState: 
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     finalCalled: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     destroyed: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function: bound onwrite],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree: [Object] },
  writable: true,
  allowHalfOpen: true,
  _bytesDispatched: 0,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _idleTimeout: 120000,
  _idleNext: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idlePrev: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idleStart: 981,
  _destroyed: false,
  parser: 
   HTTPParser {
     '0': [Function: parserOnHeaders],
     '1': [Function: parserOnHeadersComplete],
     '2': [Function: parserOnBody],
     '3': [Function: parserOnMessageComplete],
     '4': [Function: bound onParserExecute],
     _headers: [],
     _url: '',
     _consumed: true,
     socket: [Circular],
     incoming: [Circular],
     outgoing: null,
     maxHeaderPairs: 2000,
     onIncoming: [Function: bound parserOnIncoming] },
  on: [Function: socketOnWrap],
  _paused: false,
  _httpMessage: 
   ServerResponse {
     domain: null,
     _events: [Object],
     _eventsCount: 2,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: false,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket: [Circular],
     connection: [Circular],
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: [Object],
     _startAt: undefined,
     _startTime: undefined,
     writeHead: [Function: writeHead],
     __onFinished: [Object],
     end: [Function: end],
     render: [Function],
     [Symbol(outHeadersKey)]: [Object] },
  _peername: { address: '::ffff:127.0.0.1', family: 'IPv6', port: 51146 },
  [Symbol(asyncId)]: 329,
  [Symbol(bytesRead)]: 0,
  [Symbol(asyncId)]: 330,
  [Symbol(triggerAsyncId)]: 329 },
connection: 
Socket {
  connecting: false,
  _hadError: false,
  _handle: 
   TCP {
     reading: true,
     owner: [Circular],
     onread: [Function: onread],
     onconnection: null,
     writeQueueSize: 0,
     _consumed: true },
  _parent: null,
  _host: null,
  _readableState: 
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [Object],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: false,
     endEmitted: false,
     reading: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: 
   { end: [Array],
     _socketEnd: [Function: onSocketEnd],
     drain: [Array],
     timeout: [Function: socketOnTimeout],
     data: [Function: bound socketOnData],
     error: [Array],
     close: [Array],
     resume: [Function: onSocketResume],
     pause: [Function: onSocketPause] },
  _eventsCount: 9,
  _maxListeners: undefined,
  _writableState: 
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     finalCalled: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     destroyed: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function: bound onwrite],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree: [Object] },
  writable: true,
  allowHalfOpen: true,
  _bytesDispatched: 0,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _idleTimeout: 120000,
  _idleNext: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idlePrev: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idleStart: 981,
  _destroyed: false,
  parser: 
   HTTPParser {
     '0': [Function: parserOnHeaders],
     '1': [Function: parserOnHeadersComplete],
     '2': [Function: parserOnBody],
     '3': [Function: parserOnMessageComplete],
     '4': [Function: bound onParserExecute],
     _headers: [],
     _url: '',
     _consumed: true,
     socket: [Circular],
     incoming: [Circular],
     outgoing: null,
     maxHeaderPairs: 2000,
     onIncoming: [Function: bound parserOnIncoming] },
  on: [Function: socketOnWrap],
  _paused: false,
  _httpMessage: 
   ServerResponse {
     domain: null,
     _events: [Object],
     _eventsCount: 2,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: false,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket: [Circular],
     connection: [Circular],
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: [Object],
     _startAt: undefined,
     _startTime: undefined,
     writeHead: [Function: writeHead],
     __onFinished: [Object],
     end: [Function: end],
     render: [Function],
     [Symbol(outHeadersKey)]: [Object] },
  _peername: { address: '::ffff:127.0.0.1', family: 'IPv6', port: 51146 },
  [Symbol(asyncId)]: 329,
  [Symbol(bytesRead)]: 0,
  [Symbol(asyncId)]: 330,
  [Symbol(triggerAsyncId)]: 329 },
httpVersionMajor: 1,
httpVersionMinor: 1,
httpVersion: '1.1',
complete: true,
headers: 
{ host: 'localhost:3000',
  'content-type': 'application/x-www-form-urlencoded',
  'content-length': '60',
  connection: 'close' },
rawHeaders: 
[ 'host',
  'localhost:3000',
  'content-type',
  'application/x-www-form-urlencoded',
  'content-length',
  '60',
  'Connection',
  'close' ],
trailers: {},
rawTrailers: [],
upgrade: false,
url: '/users/signup',
method: 'POST',
statusCode: null,
statusMessage: null,
client: 
Socket {
  connecting: false,
  _hadError: false,
  _handle: 
   TCP {
     reading: true,
     owner: [Circular],
     onread: [Function: onread],
     onconnection: null,
     writeQueueSize: 0,
     _consumed: true },
  _parent: null,
  _host: null,
  _readableState: 
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [Object],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: false,
     endEmitted: false,
     reading: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: 
   { end: [Array],
     _socketEnd: [Function: onSocketEnd],
     drain: [Array],
     timeout: [Function: socketOnTimeout],
     data: [Function: bound socketOnData],
     error: [Array],
     close: [Array],
     resume: [Function: onSocketResume],
     pause: [Function: onSocketPause] },
  _eventsCount: 9,
  _maxListeners: undefined,
  _writableState: 
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     finalCalled: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     destroyed: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function: bound onwrite],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree: [Object] },
  writable: true,
  allowHalfOpen: true,
  _bytesDispatched: 0,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _idleTimeout: 120000,
  _idleNext: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idlePrev: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idleStart: 981,
  _destroyed: false,
  parser: 
   HTTPParser {
     '0': [Function: parserOnHeaders],
     '1': [Function: parserOnHeadersComplete],
     '2': [Function: parserOnBody],
     '3': [Function: parserOnMessageComplete],
     '4': [Function: bound onParserExecute],
     _headers: [],
     _url: '',
     _consumed: true,
     socket: [Circular],
     incoming: [Circular],
     outgoing: null,
     maxHeaderPairs: 2000,
     onIncoming: [Function: bound parserOnIncoming] },
  on: [Function: socketOnWrap],
  _paused: false,
  _httpMessage: 
   ServerResponse {
     domain: null,
     _events: [Object],
     _eventsCount: 2,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: false,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket: [Circular],
     connection: [Circular],
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: [Object],
     _startAt: undefined,
     _startTime: undefined,
     writeHead: [Function: writeHead],
     __onFinished: [Object],
     end: [Function: end],
     render: [Function],
     [Symbol(outHeadersKey)]: [Object] },
  _peername: { address: '::ffff:127.0.0.1', family: 'IPv6', port: 51146 },
  [Symbol(asyncId)]: 329,
  [Symbol(bytesRead)]: 0,
  [Symbol(asyncId)]: 330,
  [Symbol(triggerAsyncId)]: 329 },
_consuming: true,
_dumped: false,
next: [Function: next],
baseUrl: '',
originalUrl: '/users/signup',
_parsedUrl: 
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: '/users/signup',
  path: '/users/signup',
  href: '/users/signup',
  _raw: '/users/signup' },
params: {},
query: {},
res: 
ServerResponse {
  domain: null,
  _events: { finish: [Array], end: [Function: onevent] },
  _eventsCount: 2,
  _maxListeners: undefined,
  output: [],
  outputEncodings: [],
  outputCallbacks: [],
  outputSize: 0,
  writable: true,
  _last: false,
  upgrading: false,
  chunkedEncoding: false,
  shouldKeepAlive: false,
  useChunkedEncodingByDefault: true,
  sendDate: true,
  _removedConnection: false,
  _removedContLen: false,
  _removedTE: false,
  _contentLength: null,
  _hasBody: true,
  _trailer: '',
  finished: false,
  _headerSent: false,
  socket: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: [Object],
     _parent: null,
     _host: null,
     _readableState: [Object],
     readable: true,
     domain: null,
     _events: [Object],
     _eventsCount: 9,
     _maxListeners: undefined,
     _writableState: [Object],
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: [Object],
     _server: [Object],
     _idleTimeout: 120000,
     _idleNext: [Object],
     _idlePrev: [Object],
     _idleStart: 981,
     _destroyed: false,
     parser: [Object],
     on: [Function: socketOnWrap],
     _paused: false,
     _httpMessage: [Circular],
     _peername: [Object],
     [Symbol(asyncId)]: 329,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 330,
     [Symbol(triggerAsyncId)]: 329 },
  connection: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: [Object],
     _parent: null,
     _host: null,
     _readableState: [Object],
     readable: true,
     domain: null,
     _events: [Object],
     _eventsCount: 9,
     _maxListeners: undefined,
     _writableState: [Object],
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: [Object],
     _server: [Object],
     _idleTimeout: 120000,
     _idleNext: [Object],
     _idlePrev: [Object],
     _idleStart: 981,
     _destroyed: false,
     parser: [Object],
     on: [Function: socketOnWrap],
     _paused: false,
     _httpMessage: [Circular],
     _peername: [Object],
     [Symbol(asyncId)]: 329,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 330,
     [Symbol(triggerAsyncId)]: 329 },
  _header: null,
  _onPendingData: [Function: bound updateOutgoingData],
  _sent100: false,
  _expect_continue: false,
  req: [Circular],
  locals: { currentUser: undefined },
  _startAt: undefined,
  _startTime: undefined,
  writeHead: [Function: writeHead],
  __onFinished: { [Function: listener] queue: [Array] },
  end: [Function: end],
  render: [Function],
  [Symbol(outHeadersKey)]: { 'x-powered-by': [Array] } },
body: 
{ email: 'no',
  password: '1234567890',
  passwordConfirmation: '1234567890' },
_body: true,
length: undefined,
read: [Function],
_startAt: [ 891, 360965545 ],
_startTime: 2018-12-06T00:18:09.700Z,
_remoteAddress: '::ffff:127.0.0.1',
_validationCustomMethods: { sanitizers: {}, validators: {} },
_validationErrors: [],
_asyncValidationErrors: [],
validationErrors: [Function],
asyncValidationErrors: [Function],
getValidationResult: [Function],
sanitizeBody: [Function],
sanitizeParams: [Function],
sanitizeQuery: [Function],
sanitizeCookies: [Function],
sanitizeHeaders: [Function],
sanitize: [Function],
checkBody: [Function],
checkParams: [Function],
checkQuery: [Function],
checkCookies: [Function],
checkHeaders: [Function],
check: [Function],
filter: [Function],
assert: [Function],
validate: [Function],
_parsedOriginalUrl: 
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: '/users/signup',
  path: '/users/signup',
  href: '/users/signup',
  _raw: '/users/signup' },
sessionStore: 
MemoryStore {
  domain: null,
  _events: 
   { disconnect: [Function: ondisconnect],
     connect: [Function: onconnect] },
  _eventsCount: 2,
  _maxListeners: undefined,
  sessions: 
   { On1gFYBjStHJSTbGdenlFDLexrYQyr0K: '{"cookie":{"originalMaxAge":1210000000,"expires":"2018-12-20T00:24:49.444Z","httpOnly":true,"path":"/"},"flash":{}}',
     VJq4CgTh2mVmRh2HsEkC5kBiTMJFr2G1: '{"cookie":{"originalMaxAge":1210000000,"expires":"2018-12-20T00:24:49.523Z","httpOnly":true,"path":"/"},"flash":{}}',
     TJk1WV2KKpetZObagRIVbSFZrvPxJE8w: '{"cookie":{"originalMaxAge":1210000000,"expires":"2018-12-20T00:24:49.677Z","httpOnly":true,"path":"/"},"flash":{"error":[{"name":"SequelizeValidationError","errors":[{"message":"User.username cannot be null","type":"notNull Violation","path":"username","value":null,"origin":"CORE","instance":{"id":null,"email":"user@example.com","password":"$2a$10$HrpDz64pcXXLJQB/ij0j0.YNJQo4.kfX3M5MOpvhOirHF8.82YLfK","updatedAt":"2018-12-06T00:18:09.666Z","createdAt":"2018-12-06T00:18:09.666Z"},"validatorKey":"is_null","validatorName":null,"validatorArgs":[]}]}]}}' },
  generate: [Function] },
sessionID: 'PLdQIMbvx8k2hn9Wf8wGY3MegewdJjSa',
session: 
Session {
  cookie: 
   { path: '/',
     _expires: 2018-12-20T00:24:49.700Z,
     originalMaxAge: 1210000000,
     httpOnly: true } },
flash: [Function: _flash],
_passport: 
{ instance: 
   Authenticator {
     _key: 'passport',
     _strategies: [Object],
     _serializers: [Array],
     _deserializers: [Array],
     _infoTransformers: [],
     _framework: [Object],
     _userProperty: 'user',
     _sm: [Object],
     Authenticator: [Function: Authenticator],
     Passport: [Function: Authenticator],
     Strategy: [Object],
     strategies: [Object] } },
route: 
Route {
  path: '/users/signup',
  stack: [ [Object] ],
  methods: { post: true } } }
POST /users/signup 302 95.436 ms - 35
....

Failures:
1) routes : users POST /users/signup should create a new user with valid values and redirect
Message:
 Expected null to be truthy.
Stack:
 Error: Expected null to be truthy.
     at <Jasmine>
     at User.findOne.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/spec/integration/users_spec.js:51:30)
     at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
     at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
     at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
     at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
     at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
     at _drainQueueStep (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:138:12)
     at _drainQueue (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:131:9)
     at Async._drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:147:5)
     at Immediate.Async.drainQueues (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/async.js:17:14)
     at runCallback (timers.js:810:20)
     at tryOnImmediate (timers.js:768:5)
     at processImmediate [as _immediateCallback] (timers.js:745:5)

7 specs, 1 failure
Finished in 0.471 seconds
npm ERR! Test failed.  See above for more details.
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ git status
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
(use "git push" to publish your local commits)

Changes not staged for commit:
(use "git add <file>..." to update what will be committed)
(use "git checkout -- <file>..." to discard changes in working directory)

modified:   src/controllers/userController.js

no changes added to commit (use "git add" and/or "git commit -a")
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ git add .
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ git commit -m "debugging"
[master e94e8b7] debugging
1 file changed, 1 insertion(+)
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ git push
To github.com:mcbeauregard/blocipedia-node.git
! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'git@github.com:mcbeauregard/blocipedia-node.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ clear

Michelles-MacBook-Pro:blocipedia-node michellebeauregard$ npm start

> blocipedia-node@1.0.0 start /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node
> node src/server.js

server is listening for requests on port 3000
GET / 200 37.661 ms - 2667
GET /users/signup 200 5.834 ms - 2876
IncomingMessage {
_readableState: 
ReadableState {
  objectMode: false,
  highWaterMark: 16384,
  buffer: BufferList { head: null, tail: null, length: 0 },
  length: 0,
  pipes: null,
  pipesCount: 0,
  flowing: true,
  ended: true,
  endEmitted: true,
  reading: false,
  sync: false,
  needReadable: false,
  emittedReadable: false,
  readableListening: false,
  resumeScheduled: false,
  destroyed: false,
  defaultEncoding: 'utf8',
  awaitDrain: 0,
  readingMore: false,
  decoder: null,
  encoding: null },
readable: false,
domain: null,
_events: {},
_eventsCount: 0,
_maxListeners: undefined,
socket: 
Socket {
  connecting: false,
  _hadError: false,
  _handle: 
   TCP {
     reading: true,
     owner: [Circular],
     onread: [Function: onread],
     onconnection: null,
     writeQueueSize: 0,
     _consumed: true },
  _parent: null,
  _host: null,
  _readableState: 
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [Object],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: false,
     endEmitted: false,
     reading: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: 
   { end: [Array],
     _socketEnd: [Function: onSocketEnd],
     drain: [Array],
     timeout: [Function: socketOnTimeout],
     data: [Function: bound socketOnData],
     error: [Array],
     close: [Array],
     resume: [Function: onSocketResume],
     pause: [Function: onSocketPause] },
  _eventsCount: 9,
  _maxListeners: undefined,
  _writableState: 
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     finalCalled: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     destroyed: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function: bound onwrite],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree: [Object] },
  writable: true,
  allowHalfOpen: true,
  _bytesDispatched: 0,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _idleTimeout: 120000,
  _idleNext: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idlePrev: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idleStart: 24741,
  _destroyed: false,
  parser: 
   HTTPParser {
     '0': [Function: parserOnHeaders],
     '1': [Function: parserOnHeadersComplete],
     '2': [Function: parserOnBody],
     '3': [Function: parserOnMessageComplete],
     '4': [Function: bound onParserExecute],
     _headers: [],
     _url: '',
     _consumed: true,
     socket: [Circular],
     incoming: [Circular],
     outgoing: null,
     maxHeaderPairs: 2000,
     onIncoming: [Function: bound parserOnIncoming] },
  on: [Function: socketOnWrap],
  _paused: false,
  _httpMessage: 
   ServerResponse {
     domain: null,
     _events: [Object],
     _eventsCount: 2,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: true,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket: [Circular],
     connection: [Circular],
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: [Object],
     _startAt: undefined,
     _startTime: undefined,
     writeHead: [Function: writeHead],
     __onFinished: [Object],
     end: [Function: end],
     render: [Function],
     [Symbol(outHeadersKey)]: [Object] },
  _peername: { address: '::1', family: 'IPv6', port: 51163 },
  [Symbol(asyncId)]: 62,
  [Symbol(bytesRead)]: 0,
  [Symbol(asyncId)]: 63,
  [Symbol(triggerAsyncId)]: 62 },
connection: 
Socket {
  connecting: false,
  _hadError: false,
  _handle: 
   TCP {
     reading: true,
     owner: [Circular],
     onread: [Function: onread],
     onconnection: null,
     writeQueueSize: 0,
     _consumed: true },
  _parent: null,
  _host: null,
  _readableState: 
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [Object],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: false,
     endEmitted: false,
     reading: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: 
   { end: [Array],
     _socketEnd: [Function: onSocketEnd],
     drain: [Array],
     timeout: [Function: socketOnTimeout],
     data: [Function: bound socketOnData],
     error: [Array],
     close: [Array],
     resume: [Function: onSocketResume],
     pause: [Function: onSocketPause] },
  _eventsCount: 9,
  _maxListeners: undefined,
  _writableState: 
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     finalCalled: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     destroyed: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function: bound onwrite],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree: [Object] },
  writable: true,
  allowHalfOpen: true,
  _bytesDispatched: 0,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _idleTimeout: 120000,
  _idleNext: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idlePrev: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idleStart: 24741,
  _destroyed: false,
  parser: 
   HTTPParser {
     '0': [Function: parserOnHeaders],
     '1': [Function: parserOnHeadersComplete],
     '2': [Function: parserOnBody],
     '3': [Function: parserOnMessageComplete],
     '4': [Function: bound onParserExecute],
     _headers: [],
     _url: '',
     _consumed: true,
     socket: [Circular],
     incoming: [Circular],
     outgoing: null,
     maxHeaderPairs: 2000,
     onIncoming: [Function: bound parserOnIncoming] },
  on: [Function: socketOnWrap],
  _paused: false,
  _httpMessage: 
   ServerResponse {
     domain: null,
     _events: [Object],
     _eventsCount: 2,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: true,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket: [Circular],
     connection: [Circular],
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: [Object],
     _startAt: undefined,
     _startTime: undefined,
     writeHead: [Function: writeHead],
     __onFinished: [Object],
     end: [Function: end],
     render: [Function],
     [Symbol(outHeadersKey)]: [Object] },
  _peername: { address: '::1', family: 'IPv6', port: 51163 },
  [Symbol(asyncId)]: 62,
  [Symbol(bytesRead)]: 0,
  [Symbol(asyncId)]: 63,
  [Symbol(triggerAsyncId)]: 62 },
httpVersionMajor: 1,
httpVersionMinor: 1,
httpVersion: '1.1',
complete: true,
headers: 
{ host: 'localhost:3000',
  connection: 'keep-alive',
  'content-length': '83',
  'cache-control': 'max-age=0',
  origin: 'http://localhost:3000',
  'upgrade-insecure-requests': '1',
  'content-type': 'application/x-www-form-urlencoded',
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36',
  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  referer: 'http://localhost:3000/users/signup',
  'accept-encoding': 'gzip, deflate, br',
  'accept-language': 'en-US,en;q=0.9',
  cookie: 'connect.sid=s%3Ahj5JpBixTJjG2FsEqP8B9OrdpD_-VmrR.tzswaewajhAlEif3VysrSD0SHoP4hibWFh%2B0%2F4M2Ml4' },
rawHeaders: 
[ 'Host',
  'localhost:3000',
  'Connection',
  'keep-alive',
  'Content-Length',
  '83',
  'Cache-Control',
  'max-age=0',
  'Origin',
  'http://localhost:3000',
  'Upgrade-Insecure-Requests',
  '1',
  'Content-Type',
  'application/x-www-form-urlencoded',
  'User-Agent',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36',
  'Accept',
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  'Referer',
  'http://localhost:3000/users/signup',
  'Accept-Encoding',
  'gzip, deflate, br',
  'Accept-Language',
  'en-US,en;q=0.9',
  'Cookie',
  'connect.sid=s%3Ahj5JpBixTJjG2FsEqP8B9OrdpD_-VmrR.tzswaewajhAlEif3VysrSD0SHoP4hibWFh%2B0%2F4M2Ml4' ],
trailers: {},
rawTrailers: [],
upgrade: false,
url: '/users/signup',
method: 'POST',
statusCode: null,
statusMessage: null,
client: 
Socket {
  connecting: false,
  _hadError: false,
  _handle: 
   TCP {
     reading: true,
     owner: [Circular],
     onread: [Function: onread],
     onconnection: null,
     writeQueueSize: 0,
     _consumed: true },
  _parent: null,
  _host: null,
  _readableState: 
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [Object],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: false,
     endEmitted: false,
     reading: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: 
   { end: [Array],
     _socketEnd: [Function: onSocketEnd],
     drain: [Array],
     timeout: [Function: socketOnTimeout],
     data: [Function: bound socketOnData],
     error: [Array],
     close: [Array],
     resume: [Function: onSocketResume],
     pause: [Function: onSocketPause] },
  _eventsCount: 9,
  _maxListeners: undefined,
  _writableState: 
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     finalCalled: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     destroyed: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function: bound onwrite],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree: [Object] },
  writable: true,
  allowHalfOpen: true,
  _bytesDispatched: 0,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _server: 
   Server {
     domain: null,
     _events: [Object],
     _eventsCount: 3,
     _maxListeners: undefined,
     _connections: 1,
     _handle: [Object],
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     _connectionKey: '6::::3000',
     [Symbol(IncomingMessage)]: [Object],
     [Symbol(ServerResponse)]: [Object],
     [Symbol(asyncId)]: 6 },
  _idleTimeout: 120000,
  _idleNext: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idlePrev: 
   TimersList {
     _idleNext: [Circular],
     _idlePrev: [Circular],
     _timer: [Object],
     _unrefed: true,
     msecs: 120000,
     nextTick: false },
  _idleStart: 24741,
  _destroyed: false,
  parser: 
   HTTPParser {
     '0': [Function: parserOnHeaders],
     '1': [Function: parserOnHeadersComplete],
     '2': [Function: parserOnBody],
     '3': [Function: parserOnMessageComplete],
     '4': [Function: bound onParserExecute],
     _headers: [],
     _url: '',
     _consumed: true,
     socket: [Circular],
     incoming: [Circular],
     outgoing: null,
     maxHeaderPairs: 2000,
     onIncoming: [Function: bound parserOnIncoming] },
  on: [Function: socketOnWrap],
  _paused: false,
  _httpMessage: 
   ServerResponse {
     domain: null,
     _events: [Object],
     _eventsCount: 2,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: true,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket: [Circular],
     connection: [Circular],
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: [Object],
     _startAt: undefined,
     _startTime: undefined,
     writeHead: [Function: writeHead],
     __onFinished: [Object],
     end: [Function: end],
     render: [Function],
     [Symbol(outHeadersKey)]: [Object] },
  _peername: { address: '::1', family: 'IPv6', port: 51163 },
  [Symbol(asyncId)]: 62,
  [Symbol(bytesRead)]: 0,
  [Symbol(asyncId)]: 63,
  [Symbol(triggerAsyncId)]: 62 },
_consuming: true,
_dumped: false,
next: [Function: next],
baseUrl: '',
originalUrl: '/users/signup',
_parsedUrl: 
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: '/users/signup',
  path: '/users/signup',
  href: '/users/signup',
  _raw: '/users/signup' },
params: {},
query: {},
res: 
ServerResponse {
  domain: null,
  _events: { finish: [Array], end: [Function: onevent] },
  _eventsCount: 2,
  _maxListeners: undefined,
  output: [],
  outputEncodings: [],
  outputCallbacks: [],
  outputSize: 0,
  writable: true,
  _last: false,
  upgrading: false,
  chunkedEncoding: false,
  shouldKeepAlive: true,
  useChunkedEncodingByDefault: true,
  sendDate: true,
  _removedConnection: false,
  _removedContLen: false,
  _removedTE: false,
  _contentLength: null,
  _hasBody: true,
  _trailer: '',
  finished: false,
  _headerSent: false,
  socket: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: [Object],
     _parent: null,
     _host: null,
     _readableState: [Object],
     readable: true,
     domain: null,
     _events: [Object],
     _eventsCount: 9,
     _maxListeners: undefined,
     _writableState: [Object],
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: [Object],
     _server: [Object],
     _idleTimeout: 120000,
     _idleNext: [Object],
     _idlePrev: [Object],
     _idleStart: 24741,
     _destroyed: false,
     parser: [Object],
     on: [Function: socketOnWrap],
     _paused: false,
     _httpMessage: [Circular],
     _peername: [Object],
     [Symbol(asyncId)]: 62,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 63,
     [Symbol(triggerAsyncId)]: 62 },
  connection: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: [Object],
     _parent: null,
     _host: null,
     _readableState: [Object],
     readable: true,
     domain: null,
     _events: [Object],
     _eventsCount: 9,
     _maxListeners: undefined,
     _writableState: [Object],
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: [Object],
     _server: [Object],
     _idleTimeout: 120000,
     _idleNext: [Object],
     _idlePrev: [Object],
     _idleStart: 24741,
     _destroyed: false,
     parser: [Object],
     on: [Function: socketOnWrap],
     _paused: false,
     _httpMessage: [Circular],
     _peername: [Object],
     [Symbol(asyncId)]: 62,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 63,
     [Symbol(triggerAsyncId)]: 62 },
  _header: null,
  _onPendingData: [Function: bound updateOutgoingData],
  _sent100: false,
  _expect_continue: false,
  req: [Circular],
  locals: { currentUser: undefined },
  _startAt: undefined,
  _startTime: undefined,
  writeHead: [Function: writeHead],
  __onFinished: { [Function: listener] queue: [Array] },
  end: [Function: end],
  render: [Function],
  [Symbol(outHeadersKey)]: { 'x-powered-by': [Array] } },
body: 
{ username: 'rasp',
  email: 'rasp@test.com',
  password: 'password',
  passwordConfirmation: 'password' },
_body: true,
length: undefined,
read: [Function],
_startAt: [ 998, 540281790 ],
_startTime: 2018-12-06T00:19:56.881Z,
_remoteAddress: '::1',
_validationCustomMethods: { sanitizers: {}, validators: {} },
_validationErrors: [],
_asyncValidationErrors: [],
validationErrors: [Function],
asyncValidationErrors: [Function],
getValidationResult: [Function],
sanitizeBody: [Function],
sanitizeParams: [Function],
sanitizeQuery: [Function],
sanitizeCookies: [Function],
sanitizeHeaders: [Function],
sanitize: [Function],
checkBody: [Function],
checkParams: [Function],
checkQuery: [Function],
checkCookies: [Function],
checkHeaders: [Function],
check: [Function],
filter: [Function],
assert: [Function],
validate: [Function],
_parsedOriginalUrl: 
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: '/users/signup',
  path: '/users/signup',
  href: '/users/signup',
  _raw: '/users/signup' },
sessionStore: 
MemoryStore {
  domain: null,
  _events: 
   { disconnect: [Function: ondisconnect],
     connect: [Function: onconnect] },
  _eventsCount: 2,
  _maxListeners: undefined,
  sessions: 
   { 'hj5JpBixTJjG2FsEqP8B9OrdpD_-VmrR': '{"cookie":{"originalMaxAge":1210000000,"expires":"2018-12-20T00:26:22.843Z","httpOnly":true,"path":"/"},"flash":{}}' },
  generate: [Function] },
sessionID: 'hj5JpBixTJjG2FsEqP8B9OrdpD_-VmrR',
session: 
Session {
  cookie: 
   { path: '/',
     _expires: 2018-12-20T00:26:22.843Z,
     originalMaxAge: 1210000000,
     httpOnly: true },
  flash: {} },
flash: [Function: _flash],
_passport: 
{ instance: 
   Authenticator {
     _key: 'passport',
     _strategies: [Object],
     _serializers: [Array],
     _deserializers: [Array],
     _infoTransformers: [],
     _framework: [Object],
     _userProperty: 'user',
     _sm: [Object],
     Authenticator: [Function: Authenticator],
     Passport: [Function: Authenticator],
     Strategy: [Object],
     strategies: [Object] } },
route: 
Route {
  path: '/users/signup',
  stack: [ [Object] ],
  methods: { post: true } } }
POST /users/signup 302 300.062 ms - 46
GET / 200 4.053 ms - 3081

