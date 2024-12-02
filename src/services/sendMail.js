import nodemailer from 'nodemailer';

export const sendMail = async (data) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for port 465, false for other ports
            auth: {
              user: process.env.USER,
              pass: process.env.APP_PASSWORD,
            },
          });

        const mailOptions = {
            from: {
                name: "Anton Klimov",
                address: process.env.USER
            },
            to: [data.email, "antonklim6@gmail.com"],
            subject: "Musical event",
            text: "Hello world",
            html: `Hello ${data.name}, I saw your message and text you back as soon as possible. Your phone is +${data.phone}.`,
        };
        transporter.sendMail(mailOptions);
        console.log(`dick`);
    } catch (error) {
        console.log(error);
    }
};

