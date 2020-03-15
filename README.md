# Multiple async calls

## Start
$> npm install

$> npm run show


## code

the code that runs is a promise chain:
- run: returns a promise
- createServer: creates a server, returns a promise that resolves when the server is running to the port number the server is listening on;
- doManyCalls: creates an array of doOneCall promises, and returns when all promises have been resolved
- doOneCall: does one individual call to the server created in createServer. The call will take a random time of 2 - 4 seconds due to a timeout in the server response
- exit: exists the process
