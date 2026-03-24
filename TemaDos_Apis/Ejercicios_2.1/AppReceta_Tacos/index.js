//Alan Alberto Colli Ake 8-B
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// JSON  con proteínas (Puerco, Pollo, Pavo, Res)
const recetaJSON = `[
  {
    "id": "0001",
    "nombre": "Taco de Lomitos",
    "ingredientes": {
      "proteina": { "nombre": "Puerco", "preparacion": "Guisado en salsa de tomate" },
      "salsa": { "nombre": "Chile habanero tamulado", "picor": "Muy Alto" },
      "acompañamientos": [{ "nombre": "Huevo duro", "cantidad": "1/4 de pieza" }]
    }
  },
  {
    "id": "0002",
    "nombre": "Taco de Pollo Asado",
    "ingredientes": {
      "proteina": { "nombre": "Pollo", "preparacion": "Pechuga marinada a la plancha" },
      "salsa": { "nombre": "Verde de tomatillo", "picor": "Medio" },
      "acompañamientos": [{ "nombre": "Cebolla asada", "cantidad": "2 piezas" }]
    }
  },
  {
    "id": "0003",
    "nombre": "Taco de Relleno Negro",
    "ingredientes": {
      "proteina": { "nombre": "Pavo y carne molida", "preparacion": "Guisado con recado negro" },
      "salsa": { "nombre": "Tomate frito", "picor": "Bajo" },
      "acompañamientos": [{ "nombre": "Huevo cocido", "cantidad": "2 rebanadas" }]
    }
  },
  {
    "id": "0004",
    "nombre": "Taco de Carne Asada",
    "ingredientes": {
      "proteina": { "nombre": "Res", "preparacion": "Sirloin al carbón" },
      "salsa": { "nombre": "Roja tatemada", "picor": "Alto" },
      "acompañamientos": [{ "nombre": "Guacamole", "cantidad": "1 cucharada" }]
    }
  }
]`;

const recetasTacos = JSON.parse(recetaJSON);

app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/receta/:type", (req, res) => {
    const elegirTaco = recetasTacos.find(r => r.ingredientes.proteina.nombre.toLowerCase() === req.params.type.toLowerCase());
    res.json(elegirTaco || { error: "Receta no econtrada" });
});


app.listen(port, () => {
    console.log(`Servidor activo en http://localhost:${port}`);
});