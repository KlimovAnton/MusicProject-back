import { sendMail } from "../services/sendMail.js";

export const sendMailController = async (req, res, next) => {
    const data = await req.body;

    const send = await sendMail(data);

    res.json({
        status: 200,
        message: 'New order',
        data: data,
      });
}