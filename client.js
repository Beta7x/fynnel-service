const WebSocket = require('ws');

if (process.argv.length < 3) {
  console.error('Usage: node cli-client.js ws://host:port [path-to-log]');
  process.exit(1);
}

const url = process.argv[2];
const file = process.argv[3] || '/var/log/syslog';
const ws = new WebSocket(url);

ws.on('open', () => {
  console.log(`Connected to ${url}`);
  // request stream
  ws.send(JSON.stringify({ action: 'stream', file }));
  console.log('Requested stream =>', file);
});

ws.on('message', (data) => {
  process.stdout.write(data); // langsung tampilkan data tanpa timestamp
});

ws.on('error', (err) => {
  console.error('WS error:', err.message || err);
});

ws.on('close', (code, reason) => {
  console.log(`\nDisconnected (code=${code}) \nError: ${reason}`);
});

