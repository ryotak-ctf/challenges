import fs from "fs";
import http from "http";
import { runBot } from "./bot.js";

const html = fs.readFileSync("./index.html", "utf8");

http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html",
        "Content-Length": Buffer.byteLength(html),
    });
    res.end(html);
}).listen(18080);

console.log("Listening on port 18080");

if(process.env.INPUT !== undefined) {
    await runBot(process.env.INPUT);
}