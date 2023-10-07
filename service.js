const express = require('express');
const cors = require('cors');
const app = express();

// Middleware para permitir CORS
app.use(cors());
app.use(express.json()); // Middleware para parsear el cuerpo de la solicitud como JSON

app.post('/enviarCorreo', (req, res) => {
  const { email, secretcode } = req.body;
  console.log(`Email recibido en node.js(sevice.js): ${email}, Código de verificación: ${secretcode}`);
  console.log('enviando a: ./enviarCorreo')
  //const enviarCorreo = require('./enviarCorreo');
  app.post(sendVerificationEmail(email,secretcode));
  // Resto de tu lógica para enviar el correo...
});

//app.post('/enviarCorreo', enviarCorreo.sendVerificationEmail);

// Resto de tu configuración y rutas...

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

//////////////////////////////////////////////////////////////////////////////////////////////

const transmitter = "probarproyectos01@gmail.com";
// Función para enviar correo de verificación
async function sendVerificationEmail(email , secretcode) {
    console.log("email: "+email+" code: "+secretcode)
    console.log("Entre a enviarCorreo.js   ..");
    const nodemailer = require("nodemailer");

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: transmitter,
            pass: "ildouibmjgexftoh"
            //"probarproyectos1jjtr",
        },
    });

    const mailOptions = {
        to: email,
        subject: "CÓDIGO DE VERIFICACIÓN",
        // text: `Tu código de verificación es: ${secretcode}`,
        html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Envio de correo Electronico con NodeJS</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@600&display=swap"
      rel="stylesheet" />
    <style>
      html {
        height: 100%;
      }
      body {
        position: absolute;
        bottom: 0;
        right: 0;
        font-family: "Instrument Sans", sans-serif;
      }
      .content {
        top: 0;
        margin: 0 auto;
        width: 90%;
        height: 100vh;
        background-color: #f2f4f8;
      }
      .logo {
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 10px;
        width: 150px;
        margin-right: 50px;
      }
      h1 {
        color: #22b5a0;
        padding: 30px 5px;
      }
      h3 {
        text-align: center;
      }
      section {
        padding: 5px 50px;
      }
      p {
        text-align: justify;
        color: #666 !important;
      }
      hr {
        border: 1px solid #eee;
      }
    </style>
  </head>
  <body>
    <div class="content">
      <h2 style="text-align: center">
        ¡Hola ${email}!
        <hr />
      </h2>

      <section>
        <h3>
          Este correo electrónico es para que veas tu codigo de verificiacion de inicio de sesión
        </h3>

        <h3 style="text-align: center">
            Tu código de verificación es : 
            <h1 style="text-align: center"> 
                <strong>${ secretcode }</strong> 
            </h1>
         </h3>

        <br />
        <h3>¡Que gusto tenerte de regreso!</h3>
      </section>
    </div>
  </body>
</html>`,
    };

    try {
        console.log(`Enviando correo... a ${email} desde: ${transmitter}`);
        console.log(`codigo de verificacion: a ${secretcode}`);
        const info = await transporter.sendMail(mailOptions);
        console.log("Correo electrónico enviado: " + info.response);
    } catch (error) {
        console.log("NO SE Envio correo...");
        console.log(`email : ${email} user: ${transmitter}`);
        console.log(`codigo de verificacion: a ${secretcode}`);
        console.error(error);
    }
}

module.exports = { sendVerificationEmail };


