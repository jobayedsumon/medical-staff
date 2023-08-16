import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const verifyRecaptcha = async (token: string) => {
  const secretKey = process.env.CAPTCHA_SECRET_KEY;

  var verificationUrl =
    'https://www.google.com/recaptcha/api/siteverify?secret=' +
    secretKey +
    '&response=' +
    token;

  return axios.post(verificationUrl);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const token = req.body.gRecaptchaToken;
    const { body } = req;

    const msg = {
      to: 'austwidelocums.redirect@gmail.com', // Change to your recipient
      from: 'austwidelocums.redirect@gmail.com',
      subject: `New Contact ${body.subject ?? ''}`,
      text: body.message,
      html:
        `Email: ${body.email}  <br/> subject: ${body.subject}` +
        `<br/> name: ${body.name}` +
        `<br/> phone: ${body.phone}` +
        `<br/> message: ${body.message}`,
    };

    const response = await verifyRecaptcha(token);

    // change logic
    if (response.data.success && response.data.score >= 0.5) {
      if (response) {
        return sgMail
          .send(msg)
          .then(() => {
            res.status(200).json({
              status: 'success',
              message: 'Your message has been sent successfully!!!',
            });
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.log(error);
            return res.status(500).json({
              status: 'error',
              message: 'Could not send message',
            });
          });
      } else {
        return res.status(422).json({
          status: 'error',
          message: 'Something went wrong, please try again!!!',
        });
      }
    }
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Something went wrong, please try again!!!',
    });
  }
}
