import * as http from 'http';

export const createServer = (port: number) => async () =>
    new Promise<number>((resolve, reject) => {

        const listener: http.RequestListener = (req: http.IncomingMessage, res: http.ServerResponse) => {
            const path = req.url !== undefined ? req.url.split('/').reverse()[0] : 'nowhere';
            setTimeout(() => {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.write(`You are @ ${path}`);
                res.end();
            }, 2000 + Math.random() * 2000)
        }

        const server = http.createServer(listener).listen(8080, () => {
            console.log('server running on port 8080');
            resolve(port);
        });

    });

export const doHttpRequest = (url: string) =>
    new Promise<string>((resolve, reject) => {
        http.get(url, (res: http.IncomingMessage) => {
            res.setEncoding("utf8");
            let body = "";
            res.on("data", data => {
                body += data;
            });
            res.on("end", () => {
                console.log(`received response ${body}`);
                resolve(body)
            });
            res.on("error", (err) => reject(err))
        })
    });