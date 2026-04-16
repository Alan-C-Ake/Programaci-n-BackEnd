//Alan Alberto Colli Ake 8-B
import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get('/', async (req, res) => {
    try {
        const result = await axios.get('https://api.animechan.io/v1/quotes/random');
        const quote = result.data.data.content; 
        const character = result.data.data.character.name;
        res.render('index', { 
            quote: quote,
            character: character
        });

        console.log(result.data.data);

    } catch (error) {
        if (error.response) {
            console.log(error.response.data);
        } else {
            console.log(error);
        }
        res.status(500).send('Error al obtener la cita');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});