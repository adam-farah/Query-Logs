// storeLogLine.js
//
// node storeLogLine.js <unquoted log message>
//
// Example:
//    node storeLogLine.js Feb 16 16:08:40 chimera systemd[1]: Started Session c3 of user soma.
//
// The log message should be of the format:
// <month> <day of month> <24-hour time in hh:mm:ss> <host> <service name[pid]>: Actual message
//

var mc = require('mongodb').MongoClient;
var fs = require('fs');

var maxcount;
var message;
var results;
var service;

for(var i =2; i < process.argv.length,i++){	
	if(process.argv[i].indexOf("maxcount") !=-1){
		maxcount = process.argv[i].substring(11,process.argv[i].length); 
		maxCount = parseInt(maxCount);
	}if(process.argv[i].indexOf("message") !=-1){
		maxcount = process.argv[i].substring(10,process.argv[i].length); 
		message = new RegExp(message);
	}if(process.argv[i].indexOf("results") !=-1){
		
	}if(process.argv[i].indexOf("service") !=-1){
		maxcount = process.argv[i].substring(10,process.argv[i].length); 
		service = new RegExp(service);
	}
}

var connectCallback = function(err, returnedDB) {
    if (err) {
	throw err;
    }

    db = returnedDB;
    var collection= db.collection('logs');
	collection.find().toArray(function(err,documents){
		
	}
	
	//fs.writeFileSync(outputFile,outputArr.join("\n"),console.log("Finished!"));	

    db.collection('logs').insert(entry, reportInserted);
}

mc.connect('mongodb://localhost/log-demo', connectCallback);

/*
entry.date = process.argv[2];

var db;

var reportInserted = function(err, result) {
    if (err) {
	throw err;
    }

    console.log("Inserted the following log record:");
    console.log(result.ops[0]);
    db.close();
}

var connectCallback = function(err, returnedDB) {
    if (err) {
	throw err;
    }

    db = returnedDB;
    
    db.collection('logs').insert(entry, reportInserted);
}
*/

