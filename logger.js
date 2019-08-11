'use strict';

const net = require('net');

const client = new net.Socket();

client.connect(3001, '172.16.1.18', () => {});

client.on('data', function(data) {
  let payload = JSON.parse(data);
  console.log(payload);
});

client.on('error', function() {
  console.log('Connection closed');
});