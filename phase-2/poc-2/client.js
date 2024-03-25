const http = require('http');
const url = require('url');
const { makeid } = require('./shared');

const screen1part1 = `
<body style="background-color:#e3f2fa">
<h2>SURF Research Cloud</h2>
<ul>
    <li>Click <a href="http://localhost:3002/authorize?` +
    `response_type=code&` +
    `client_id=ahxoh2ohTu&` +
    `scope=webdav-folder&state=`;
    
const screen1part2 = `">here</a> to discover SRAM-based services to connect with your VM.</li>
    <li>Click <a href="">here</a> to discover Danish services to connect with your VM.</li>
</ul>
`;
const screen2part1 = `
<body style="background-color:#e3f2fa">
<h2>SURF Research Cloud</h2>
The remote WebDAV folder was successfully mounted under <tt>/mnt/fed/photos/2022/January</tt>!
`;

http.createServer((req, res) => {
    const url_parts = url.parse(req.url, true);
    const query = url_parts.query;

    res.writeHead(200, {'Content-Type': 'text/html'});
    console.log(req.url.toString());
    if (req.url.startsWith('/callback1')) {
        res.end(
            screen2part1
        );
    } else {
        res.end(screen1part1 + makeid(8) + screen1part2);
    }
}).listen(3001);
console.log("Client is running on port 3001");