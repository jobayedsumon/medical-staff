import { useMutation } from '@tanstack/react-query';
import axios from './axios';

interface ContactUsVariables {
  name: string;
  email: string;
  message: string;
  gRecaptchaToken: string;
  subject?: string;
}

export const useContactUs = () => {
  return useMutation<unknown, unknown, ContactUsVariables>((data: any) =>
    axios.post('/contact', data)
  );
};
