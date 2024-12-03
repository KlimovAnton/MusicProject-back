import { sendMail } from "../services/sendMail.js";

export const sendMailController = async (req, res, next) => {
    const data = await req.query;

    const send = await sendMail(data);
    console.log(data);
    res.json({
        status: 200,
        message: 'New order',
        data: send,
      });
}