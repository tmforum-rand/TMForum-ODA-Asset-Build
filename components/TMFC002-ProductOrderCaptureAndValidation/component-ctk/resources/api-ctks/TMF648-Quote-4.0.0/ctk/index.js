const readline = require('readline');
const rp = require('request-promise');
var DefaultURL = "https://api-quote-v4-0-0.mybluemix.net/tmf-api/quoteManagement/v4/";
var schema;
var hostname;
var port;
var APIRelativeAddress;
var statusCode;
const exampleEndPoint = "quote";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("////////////////////////////////////////////////////////////////////////\nWelcome to the Conformance Test Kit for TMF648 Quote\n");
getURL();




function isURLValid(triedURL){

    var options = {
        uri: triedURL + exampleEndPoint,
        
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true, // Automatically parses the JSON string in the response
        resolveWithFullResponse: true
    };
    rp(options).then(function(jsonString) {
        statusCode = jsonString.statusCode;
        if (statusCode == 200){
            console.log("API Found on: " + triedURL + exampleEndPoint);
            breakDownURL(triedURL);
            exportEnvironment();
            runNewman();
        }
        else {
            console.log("\n_______________________________________\nERROR:");
            console.log("No API found on:")
            console.log("_______________________________________\n");
            return false;
        }
    }).catch(function (err) {
        console.log("\n_______________________________________\nERROR:");
        console.log(err + " while processing "+ triedURL + "\n" + err.stack);
        console.log("_______________________________________\n");
    });
    
  

    
}



function breakDownURL(URL){
    
    if (URL.includes("https://")){
        schema = "https";
    }
    if (URL.includes("http://")){
        schema = "http";
    }
    if (URL.lastIndexOf(":") == URL.indexOf(":")){
        if (schema == "http"){
            port = 80;
        }
        if (schema == "https"){
            port = 443;
        }
        hostname = URL.substr(URL.indexOf("//")+2, URL.length);
        console.log(`HOSTNAME: ${hostname}`);
        hostname = hostname.substr(0,hostname.indexOf("/"));
        console.log(`HOSTNAME: ${hostname}`);
        APIRelativeAddress = URL.substr(URL.indexOf(hostname)+hostname.length,URL.length);
        console.log(`APIRELATIVEADDRESS: ${APIRelativeAddress}`);
    }
    else {
        hostNameStart = URL.indexOf("//")+2;
        hostNameEnd = URL.lastIndexOf(":");
        
        hostNameLenght = hostNameEnd - hostNameStart;
        hostname = URL.substr(hostNameStart,hostNameLenght);
        
        portStart = URL.lastIndexOf(":")+1;
        portAndEndPoint = URL.substr(portStart);
        port = portAndEndPoint.substr(0,portAndEndPoint.indexOf("/"));
        APIRelativeAddress = portAndEndPoint.substr(portAndEndPoint.indexOf("/"));
    }    
    
    //console.log(schema+"://"+hostname+":"+port+APIRelativeAddress);
    
    
    
}

function getURL(){
    
    rl.question('////////////////////////////////////////////////////////////////////////\n'+
    'What is your full API address omiting the endpoint? example:\n'+
    `${DefaultURL}${exampleEndPoint}\n`+
    'becomes\n'+
    `${DefaultURL}\n>>`, (answer) => {
    DefaultURL = answer;
    rl.close();
    isURLValid(answer);
    
    });

}

function exportEnvironment(){

    var fs = require('fs');
    var environmentFile = "CTK-TMF_ENV-V4.0.0.postman_environment.json";    
    var content = fs.readFileSync(environmentFile, "utf8");
    var envJson = JSON.parse(content);
    envJson.name = "TMFENV-V4.0.0";
    envJson.values.forEach(element => {
        if (element.key == "schema"){
            element.value = schema;
        }
        if (element.key == "host"){
            element.value = hostname;
        }
        if (element.key == "port"){
            element.value = port;
        } 
        if (element.key == "Quote_API"){
            element.value = schema+"://"+hostname+":"+port+APIRelativeAddress;
            console.log(element.value)
        }
    });
    jsonData = JSON.stringify(envJson);
    fs.writeFileSync("TMFENV.json", jsonData);


}

function runNewman(){
    var newman = require('newman');

    newman.run({
        collection: require('./648-Quote.postman_collection.json'),
        environment: require('./TMFENV.json'),
        insecure: true,
        reporters: ['html','json'],
        reporter: {
            html: {
                export: '../htmlResults.html', // If not specified, the file will be written to `newman/` in the current working directory.
                //template: './customTemplate.hbs' // optional, this will be picked up relative to the directory that Newman runs in.
            },
            json: {
                export: '../jsonResults.json'
            }
        }
    }).on('start', function (err, args) {
        console.log('running a collection...');
    }).on('done', function (err, summary) {
        if (err || summary.error) {
            if (err){
                console.error('collection run encountered an error. ' + err);
            }
            if (summary.error){
                console.log("Collected run completed but with errors, please check htmlResults.html for details. Your API didn't pass the Conformance Test Kit.");
            }
            
        }
            
        else {
            console.log('Collection run completed without errors, you passed the Conformance Test, jsonResults.json and htmlResults.html have the details and can be forwarded to TMForum.');        }
    });
}