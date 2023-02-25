const { createServer } = require('node:http');
const assert = require('node:assert/strict');

const pkg = require('../package.json');

assert.ok(pkg?.version);

// curl localhost:3333 -> '{"version": "1.0.0"}'
const Server = createServer(async (request, response) => {
  const { version } = pkg;

  response.writeHead(200, {
    'Content-Type': 'application/json',
  });

  return response.end(JSON.stringify({ version }));
});

const server = Server.listen(3333, () => console.log('\nPORT: 3333'));
