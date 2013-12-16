var http = require('http');

/*http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	response.end();
}).listen(8888);*/

function start() {
	function onRequest(request, response) {
		console.log('Request Received');
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write('Hello World!');
		response.end();
	}
	
	http.createServer(onRequest).listen(8888);
	console.log('Server has started.');
}