import { useMutation } from '@tanstack/react-query';
import axios from './axios';

interface ApplyForm {
  position: string;
  job_title: string;
  first_name: string;
  last_name: string;
  street_address: string;
  suburb: string;
  post_code: string;
  country: string;
  state: string;
  contact_home: string;
  contact_work: string;
  contact_mobile: string;
  email: string;
  date_of_birth: string;
  cv: string;
  comments: string;
  referal_source: string;
  other: string;
  gRecaptchaToken: string;
}

export const useApplyNow = () => {
  return useMutation<unknown, unknown, ApplyForm>((data: ApplyForm) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    return axios.post('/apply', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  });
};
