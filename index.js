import http from "http";
import url from "url";

const users = [
  { id: 1, name: "Zymante" },
  { id: 2, name: "Neringa" },
  { id: 3, name: "Viola" },
  { id: 4, name: "Kristina" },
  { id: 5, name: "Vaida" },
];
const port = 5000;
//s
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);

  if (req.method === "GET") {
    if (parsedUrl.pathname === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Response from server (MAIN ROUTE)");
    }

    if (parsedUrl.pathname === "/users") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(users));
    }
  }

  if (req.method === "POST") {
    if (parsedUrl.pathname === "/create-user") {
      let requestFromUser = "";

      req.on("data", (chunk) => {
        requestFromUser += chunk;
      });

      req.on("end", () => {
        const newUser = JSON.parse(requestFromUser);
        users.push(newUser);
      });

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(users));
    }
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
