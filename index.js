/**
 * Created by Oleksandr Tserkovnyi on 22.06.2020.
 * kemperomg@gmail.com
 */

'use strict';

var http = require('http');

var server = http.createServer(function(req, res) {
  res.on('close', console.error.bind(console, 'Connection terminated before response could be sent!'));
  setTimeout(res.end.bind(res, 'yo'), 2000);
});

server.listen(8999);
