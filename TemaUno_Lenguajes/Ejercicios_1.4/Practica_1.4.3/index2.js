import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));


console.log(__dirname)
const app = express();
const port = 3000;
var nombreEquipo = "";

function registrador(req, res, next) {
  console.log(req.body);
  nombreEquipo = req.body["mascota"] + req.body["adjetivo"];
  next();
}

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.use(registrador);

app.post("/submit", (req, res) => {
  console.log(req.body)
  res.send(`<h1>El nombre de tu equipo es: ${nombreEquipo}</h1>`);
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`);
});