import { useQuery } from '@tanstack/react-query';
import axios from './axios';
export interface News {
  id: 1;
  date_posted: string;
  category: string;
  title: string;
  exerpt: string;
  content: string;
  featured_image: string;
}

export interface NewsResponse {
  news: News[];
}

export const useNews = () => {
  return useQuery<NewsResponse>(['news'], () =>
    axios.get('/news').then((res) => res.data)
  );
};

export const useNewsDetail = (id: string) => {
  return useQuery<News>(
    ['news', id],
    () => axios.get(`/news/${id}`).then((res) => res.data),
    {
      enabled: !!id,
    }
  );
};
