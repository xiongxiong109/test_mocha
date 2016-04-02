// 测试文件

var app     = require('./app'),  // 引入待测试的脚本
		expect  = require('chai').expect, // 引入测试断言库
    request = require('superagent'); // 引入测试代理服务器

describe('http服务测试', function(){

	before(function(){

		console.log('开启http服务');
		app.startServer();

	});

	describe('访问http://localhost:port', function(){

		it('get请求, http状态为200', function(){
			request  // 使用superagent 访问 localhost:port
				.get('http://localhost:'+ app.port)
				.end(function(err, res){
					expect( res.status ).to.equal(200);
					// done();
				});
		});

	});

	after(function(){

		console.log('http服务关闭');
		app.shutDown();

	});

});
