//Alan Alberto Colli Ake
import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const _dirname = dirname(fileURLToPath(import.meta.url));

console. log(_dirname);

const app = express ( );
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }) );

app.get("/", (req, res) => {
res.sendFile(_dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
console. log(req.body);
res.send("Datos recibidos");
});

app. listen(port, () => {
console. log(`Servidor ejecutandose en el puerto ${port}`);
});
