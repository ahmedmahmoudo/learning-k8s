import express from "express";
import { hostname } from "os";

const app = express();

app.get("/", (req, res) => {
	res.send(`Ver:2 - Hello World from ${hostname()}`);
});

app.get("/nginx", async (req, res) => {
	const url = "http://nginx";
	const response = await fetch(url);
	const body = await response.text();
	res.send(body);
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
