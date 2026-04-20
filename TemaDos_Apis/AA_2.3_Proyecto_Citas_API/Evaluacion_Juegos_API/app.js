// Alan Alberto Colli Ake 8-B
import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

const API_KEY = "ce69d6a7551d4e8d94697d2ea334fea6";

app.get('/', async (req, res) => {
    try {
        const result = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
        
        const games = result.data.results;
        const randomGame = games[Math.floor(Math.random() * games.length)];

        res.render('index', { 
            name: randomGame.name,
            released: randomGame.released,
            metacritic: randomGame.metacritic || "N/A",
            image: randomGame.background_image,
            
            platforms: randomGame.platforms.map(p => p.platform.name)
        });

        console.log(randomGame);

    } catch (error) {
        if (error.response) {
            console.log(error.response.data);
        } else {
            console.log(error);
        }
        res.status(500).send('Error al obtener el juego');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});