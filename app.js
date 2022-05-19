// setTimeout(function(){
// 	console.log('hello node')
// }, 5000);


// **function Expressions**
// let calculator = function(square){

// 	return square*square;
// }

// let doubleNum = function(n){
// 	return n*2
// }
// console.log(doubleNum(calculator(5)));


// **Modules**
// let calcualteSquare = require('./square');

// calcualteSquare(5);

// **Multiples Modules**
// let maths = require('./maths');

// maths.calcualteSquare(20);
// maths.calcualteCube(4);


// **Event Emitter**
// let events = require('events');

// let emitter = new events.EventEmitter();

// emitter.on('publishVideo',function(message){
// 	console.log(message);
// });

// emitter.emit('publishVideo','GTUC has uploaded a new video');

// let events = require('events');

// let emitter = new events.EventEmitter();

// emitter.on('publishVideo',function(message){
// 	console.log(message);
// })

// emitter.emit('publishVideo','Second lecture is being publish');


// **Read and Write Files
// **Synchronous function**
// let fs = require('fs');

// let read = fs.readFileSync('trial.text', 'utf8');

// fs.writeFileSync('trial.text','Another new text module')

// console.log(read)


// **Asynchronous function**
// let fs = require('fs');

// fs.readFile('trial.text','utf8',function(err,data){
// 	console.log(data)
// });
// console.log('Programming isnot easy')


// **Creating & Removing Directories**
// let fs = require('fs');
// fs.unlink('trial.text', function(){})
// fs.mkdirSync(namyour folder)
// fs.rmdirSync(nmaur folder)


// **Creating Our Own Server**
// let http = require('http');
// let server = http.createServer(function (req,res){
// 	res.writeHead(200,{'Content-Type':'text/plain'});
// 	res.end('hello there!');
// });

// server.listen(4000,'127.0.0.1');


// **Readable Stream**
// let http = require('http');
// let fs = require('fs');

// let readStream = fs.createReadStream(__dirname + '/trial.text');

// readStream.on('data',function(d){
// 	console.log('This is the read data'+d)
// });


// **Writable Stream**
// let http = require('http');
// let fs = require('fs');

// let readStream = fs.createReadStream(__dirname + 'trial.text')
// let writeStream = fs.createWriteStream(__dirname + '/trial.text');

// readStream.on('data',function(d){
// 	writeStream.write(d);
// });


// **Serving HTML Pages**
// let http = require('http');
// let fs = require('fs');

// let server = http.createServer(function(req,res){
// 	res.writeHead(200,{'Content-Type':'text/html'});
// 	// res.end('index.html')
// 	let readStream = fs.createReadStream(__dirname + '/index.html');
// 	readStream.pipe(res);
// });
// server.listen(2000,'127.0.0.1');


// **Sending JSON Data**
// let http = require('http');
// let fs = require('fs');

// let server = http.createServer(function(req,res){
// 	res.writeHead(200,{'Content-Type':'application/json'});
// 	let studentObject={
// 		name:'Mike',
// 		city:'Kasoa'
// 	};
// 	res.end(JSON.stringify(studentObject));
// });
// server.listen(2000,'127.0.0.1');


// **Simple Routing**
// let http = require('http');
// let fs = require('fs');

// let server = http.createServer(function(req,res){
// 	if(req.url === '/home' | req.url === '/'){
// 		res.writeHead(200,{'Content-type':'text/plain'});
// 		res.end('Hello lovely world!!')
// 	}
// 	else if(req.url ==='/profile'){
// 		res.writeHead(200,{'Content-type':'text/plain'});
// 		res.end('Hello lovely profle Page')
// 	}
// 	else{
// 		res.writeHead(404,{'Content-type':'text/html'});
// 		fs.createReadStream(__dirname + '/404.html').pipe(res)
// 		// res.end('Page is not found');
// 	}
// })
// server.listen(2000,'127.0.0.1'); 


// **Install Nodemon**
// let http = require('http');
// let fs = require('fs');

// let server = http.createServer(function(req,res){
// 	if(req.url === '/home' | req.url === '/'){
// 		res.writeHead(200,{'Content-type':'text/plain'});
// 		res.end('Welcome to Gadtech');
// 	}
// 	else if (req.url === '/blog' | req.url === '/profile'){
// 		res.writeHead(200,{'Content-type':'text/plain'});
// 		res.end('Tis profile and blog')
// 	}
// 	else{
// 		res.writeHead(404,{'Content-type':'text/html'});
// 		fs.createReadStream(__dirname + '/404.html').pipe(res)
// 	}
// })
// server.listen(2000,'127.0.0.1')


// **Intro Express**
let express = require('express');

let app = express();
app.set('view engine','ejs');

app.get('/home',function(req,res){
	res.send('This is the hompage')
});

app.get('/contact',function(req,res){
	res.send('Kindly ask ur questions')
})

// **Route Params**
app.get('/posts/:id',function(req,res){
	// res.send('this is posts ' + req.params.id);

	// Passing Cmplx Data to Templates
	let blog = {post_title:'Corrupt Ghana',post_category:'Politics',post_editor:['Kevin Taylor','R.K.B','Mugabe']}
	res.render('blog',{'blog_post':req.params.id,blog:blog});
})

app.listen(4000);

