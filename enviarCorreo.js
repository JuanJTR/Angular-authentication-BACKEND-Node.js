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
        subject: "Codigo de verificacion",
        text: `Tu código de verificación es: ${secretcode}`,
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
