//Alan Alberto Colli Ake 8-B
import axios from "axios";

const obtenerNoticias = async () => {
  try {
    const respuesta = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        apiKey: '762b4807bf6c4928a46a0d764d4cef1d', 
        q: 'tecnologia',
        language: 'es',
        sortBy: 'publishedAt'
      }
    });

    console.log("--- REPORTE DE NOTICIAS ---");
    console.log(`Se encontraron ${respuesta.data.totalResults} noticias.`);
    console.log("-----------------------------------");

    const primeraNoticia = respuesta.data.articles[0];
    console.log("Título:", primeraNoticia.title);
    console.log("Fuente:", primeraNoticia.source.name);
    console.log("Enlace:", primeraNoticia.url);

  } catch (error) {
    console.error("Error en la petición:", error.response ? error.response.data : error.message);
  }
};

obtenerNoticias();
