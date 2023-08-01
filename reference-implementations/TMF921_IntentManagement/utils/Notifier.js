const http = require('http');

const notifyHost = (notificationType, payload) => {
    const options = {
        hostname: 'localhost',
        port: 3000,
        path: '/notify/'+ notificationType,
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload),
        },
    };
    
    const req = http.request(options, (res) => {
        console.log(`STATUS: ${res.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
        });
        res.on('end', () => {
        console.log('No more data in response.');
        });
    });
    
    req.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
    });
    
    // write data to request body
    req.write(payload);
    req.end();
}

module.exports = {notifyHost};