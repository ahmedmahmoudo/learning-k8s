import express from "express";
import { hostname } from "os";

const app = express();

app.get("/", (req, res) => {
	res.send(`Ver:2 - Hello World from ${hostname()}`);
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
