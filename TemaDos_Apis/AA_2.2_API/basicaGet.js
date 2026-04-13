import axios from "axios";

const obtenerUsuario = async () => {
  try {
    const response = await axios.get('https://reqres.in/api/users/4', {
      headers: {
  
        'Authorization': 'Basic ' + Buffer.from('eve.holt@reqres.in:pistol').toString('base64'),
        'x-api-key': 'pro_5eaf1e21f5db31eb54ea0e805715a7b31b098a9726875898268a732dd26e8666'
      }
    });

    console.log('Datos del usuario:', response.data);
  } catch (error) {

    console.error('Error al obtener datos del usuario:', error.response ? error.response.data : error.message);
  }
};

obtenerUsuario();