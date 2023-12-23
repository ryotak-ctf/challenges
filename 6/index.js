import http from "http";
import fs from "fs";
import { runBot } from "./bot.js";

const html = fs.readFileSync("./index.html", "utf8");

const POSTS = {
    "1": {
        title: "Hello, world!",
        content: "This is my first post.",
    },
    "2": {
        title: "My second post",
        content: "This is my second post.",
    },
    "3": {
        title: "My third post",
        content: "This is my third post.",
    },
};

http.createServer((req, res) => {
    const pathname = req.url.split("?")[0];
    const query = req.url.split("?")[1];
    if (pathname.endsWith("/") && pathname.length > 1) {
        // normalize URL for the API
        const newUrl = pathname.substring(0, pathname.length - 1) + (query ? "?" + query : "");
        res.writeHead(307, {
            "Location": newUrl,
        });
        res.end();
    } else if (req.url.startsWith("/api/posts")) {
        const id = req.url.replace("/api/posts/", "");
        let post = POSTS[id];
        if (!post) {
            post = {
                title: "Not found",
                content: "Post not found",
            };
        }
        const body = JSON.stringify(post);
        res.writeHead(200, {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(body),
        });
        res.end(body);
    } else {
        res.writeHead(200, {
            "Content-Type": "text/html",
            "Content-Length": Buffer.byteLength(html),
        });
        res.end(html);
    }
}).listen(18080);

console.log("Listening on port 18080");

if (process.env.INPUT !== undefined) {
    await runBot(process.env.INPUT);
}
