//Alan Alberto Colli Ake 8-B
import axios from "axios";

const ClientID = '734ab3c45fe2488e8e63d29a15857cac'; 
const ClientSecret = '3686cee22375427fbe1b005ca5dcdc2b'; 

const peticionSpoti = async () => {
  try {
    console.log("--- INICIANDO SESIÓN (POST) ---");
    
    const authHeader = Buffer.from(`${ClientID}:${ClientSecret}`).toString('base64');
    
    const response = await axios.post('https://accounts.spotify.com/api/token', 
      'grant_type=client_credentials', 
      {
        headers: {
          'Authorization': `Basic ${authHeader}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    console.log("Estatus de la petición: " + response.status + " (OK)");
    console.log("Token recibido del servidor:");
    console.log(response.data.access_token);

  } catch (error) {
    console.error("Error:", error.message);
  }
};

peticionSpoti();
