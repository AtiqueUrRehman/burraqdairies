import { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");
const sgTransport = require("nodemailer-sendgrid-transport");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;
  if (!email) {
    res.status(400).send({
      success: false,
      message: "Email is missing",
    });

    return;
  }

  try {
    await sendMail({ email });
    res.status(200).send({ success: true });
  } catch (error) {
    res.status(500).send({ success: false, message: error });
  }
};

const transporter = nodemailer.createTransport(
  sgTransport({
    auth: {
      api_key: process.env.SEND_GRID_API_KEY,
    },
  })
);

const sendMail = ({ email }: { email: string }) => {
  const from = `<${email}>`;
  const msg = {
    from: "zainzafar90@gmail.com",
    to: "zainzafar90@gmail.com",
    replyTo: "zainzafar90@gmail.com",
    subject: `MaveshiFarms: New Subscriber ${from}`,
    text: `${email} wants to be notified of anything new happening in on the development of maveshi farms.`,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(msg, (error: any, info: unknown) =>
      error ? reject(error) : resolve(info)
    );
  });
};
