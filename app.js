var http = require('http');
var PORT = 3000;
var server = http.createServer(onRequest);

// 为了编写可测试的代码,建议将代码进行模块化封装

function onRequest(req, res) {

	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	res.write('<p style="font-family:monaco;">hello Node<p>' + req.method);
	res.end();

}

function startServer() {
	server.listen(PORT);
	console.log('server start on http://localhost:' + PORT);
}

function shutDown() {
	server.close();
	console.log('server shutdown');
}

/*
	判断一个模块是被直接调用的还是作为子模块被其他模块调用,
	可以通过 require.main === module 来判断
	如果是直接调用,则会返回true 
	反之返回false
*/
if (require.main === module) { // 直接调用
	startServer();
} else {
	console.log(' running app in another module ');
	exports.startServer = startServer;
	exports.shutDown = shutDown;
	exports.port = PORT;
}