import { parseForm } from '@/utils/file-utils';
import sgMail from '@sendgrid/mail';
import axios from 'axios';
import formidable, { File } from 'formidable';
import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuid } from 'uuid';
import * as yup from 'yup';

export const config = {
  api: {
    bodyParser: false,
  },
};

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const FormidableError = formidable.errors.FormidableError;

export const verifyRecaptcha = async (token: string) => {
  const secretKey = process.env.CAPTCHA_SECRET_KEY;

  var verificationUrl =
    'https://www.google.com/recaptcha/api/siteverify?secret=' +
    secretKey +
    '&response=' +
    token;

  return axios.post(verificationUrl);
};

const labels = {
  position: 'Position',
  job_title: 'Job Title',
  first_name: 'First Name',
  last_name: 'Last Name',
  street_address: 'Street Address',
  suburb: 'Suburb',
  post_code: 'Post Code',
  country: 'Country',
  state: 'State',
  contact_home: 'Home Contact',
  contact_work: 'Work Contact',
  contact_mobile: 'Mobile Contact',
  email: 'Email',
  date_of_birth: 'Date Of Birth',
  comments: 'Comments',
  referal_source: 'Referal',
  other: 'Other',
};

const validationSchema = yup.object().shape({
  position: yup.string().required().label('Position'),
  job_title: yup.string().required().label('Job Title'),
  first_name: yup.string().required().label('First Name'),
  last_name: yup.string().required().label('Last Name'),
  street_address: yup.string().required().label('Street Address'),
  suburb: yup.string().required().label('Suburb'),
  post_code: yup.string().required().label('Post Code'),
  country: yup.string().required().label('Country'),
  state: yup.string().required().label('State'),
  contact_home: yup.string().required().label('Home'),
  contact_work: yup.string().required().label('Work'),
  contact_mobile: yup.string().required().label('Mobile'),
  email: yup.string().email().required().label('Email'),
  date_of_birth: yup.string().required().label('Date Of Birth'),
  comments: yup.string().label('Comments'),
  referal_source: yup.string().label('Referal'),
  token: yup.string().label('Referal'),
  other: yup.string().when('referal_source', {
    is: (val: string) => val === 'Other',
    then: (schema) => schema.required(),
  }),
});

const getEmailBody = (fields: any) => {
  let body = `<b>Application Id</b>: ${uuid()}`;
  Object.entries(fields).forEach(([key, value]) => {
    if (key === 'other' && !value) {
      body += ``;
    } else {
      body += `<br/><b>${labels[key]}</b>: ${value}`;
    }
  });

  return body;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const { fields, files } = await parseForm(req);
    const { token, ...restFields } = fields;
    const cv = files.cv as File;

    // const token = fields.gRecaptchaToken;
    const response = await verifyRecaptcha(token as string);

    if (!response.data.success && response.data.score < 0.5) {
      return res.status(500).json({ data: null, error: 'Captcha Failed' });
    }

    const buffer = fs.readFileSync(cv.filepath);

    const msg = {
      to: ['austwidelocums.redirect@gmail.com'],
      from: 'austwidelocums.redirect@gmail.com',
      subject: `New Application from ${restFields.first_name} ${restFields.last_name}`,
      html: getEmailBody(restFields),
      attachments: [
        {
          content: buffer.toString('base64'),
          filename: cv.newFilename,
          type: cv.mimetype,
        },
      ],
    };

    await validationSchema.validate(restFields).then(() => {
      sgMail
        .send(msg)
        .then(() => {
          return res.status(200).json({
            success: true,
            message: 'Your application has been submitted successfully.',
          });
        })
        .catch(() => {
          return res.status(500).json({
            success: false,
            error: 'Something went wrong',
          });
        });
    });
  } catch (e) {
    res.status(500).json({ data: null, error: 'Internal Server Error' });
  }
}
