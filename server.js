'use strict';

const sys = require('sys')
const express = require('express');
const exec = require('child_process').exec;

// Constants
const PORT = 80;

// App
const app = express();

var relay_host = process.env.RELAY_HOST;

app.put('/', function (req, res) {
  console.log("Open relay request");
  exec('/hs100.sh '+relay_host+' 9999 on',function(error,stdout, stderr) {
	if (error !== null) {
		var message = `relay switch error: ${error}; stderr: ${stderr}; stdout: ${stdout}`
		console.warn(message);
		res.status(500).send(message);
	} else {
		console.log('Relay opened');
  		res.send('OK');
	}
});
});

app.delete('/', function (req, res) {
  console.log("Close relay request");
  exec('/hs100.sh '+relay_host+' 9999 off',function(error,stdout, stderr) {
	if (error !== null) {
		var message = `relay switch error: ${error}; stderr: ${stderr}; stdout: ${stdout}`
		console.warn(message);
		res.status(500).send(message);
	} else {
		console.log('Relay closed');
		res.send('OK');
	}
});
});

app.get('/', function (req, res) {
  console.log("GUI access");
  res.send(`
<html><head></head>
<body>
        <button onclick="openRelay()">open</button>
        <button onclick="closeRelay()">close</button>
<script>
function openRelay() {
    console.log("openning relay");
    var xmlHttp = new XMLHttpRequest();
    var mimeType = "text/plain"
    xmlHttp.open('PUT', '/', true);  // true : asynchrone false: synchrone
    xmlHttp.setRequestHeader('Content-Type', mimeType);
    xmlHttp.send(null);
    console.log("opened");
};
function closeRelay() {
    console.log("closing relay");
    var xmlHttp = new XMLHttpRequest();
    var mimeType = "text/plain"
    xmlHttp.open('DELETE', '/', true);  // true : asynchrone false: synchrone
    xmlHttp.setRequestHeader('Content-Type', mimeType);
    xmlHttp.send(null);
    console.log("closed");
};
</script>
        </body></html>
`);
});

app.listen(PORT);
console.log('Running on port ' + PORT)
