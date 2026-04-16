//Alan Alberto Colli Ake 8-B
import axios from "axios";

const registrarUsuario = async () => {
  try {
    // Usamos axios.post como pide la práctica
    const respuesta = await axios.post('https://reqres.in/api/register', {
      email: 'eve.holt@reqres.in',
      password: 'pistol'
    }, {
      headers: { 
        "x-api-key": "pro_5eaf1e21f5db31eb54ea0e805715a7b31b098a9726875898268a732dd26e8666" 
      }
    });
    console.log('Registro exitoso:', respuesta.data);
  } catch (error) {

    console.error('Error en el registro:', error.response ? error.response.data : error.message);
  }
};

registrarUsuario();
