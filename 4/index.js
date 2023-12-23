import { sanitizeHtml } from "./sanitizer.js";

import http from "http";
import { runBot } from "./bot.js";

http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const html = url.searchParams.get("html");
    let body;
    if (html) {
        body = sanitizeHtml(html);
    } else {
        body = "Specify a URL in the ?html= parameter.";
    }
    res.writeHead(200, {
        "Content-Type": "text/html",
        "Content-Length": Buffer.byteLength(body),
    });
    res.end(body);
}).listen(18080);

console.log("Listening on port 18080");

if (process.env.INPUT !== undefined) {
    await runBot(process.env.INPUT);
}
