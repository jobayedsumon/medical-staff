import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import { ParsedUrlQuery } from 'querystring';
import axios from './axios';
import { toUnique } from '@/utils/array';

export interface Jobs {
  jobs: {
    id: number;
    date_posted: string;
    category: string;
    location: string;
    job_type: string;
    title: string;
    job_description: string;
    requirements: string[];
    extra_information?: Record<string, string>;
  }[];
  locations: {
    location: string;
    cover_image: string;
  }[];
}

export const useJobs = () => {
  return useQuery<Jobs>(['jobs'], () =>
    axios.get('/jobs').then((res) => res.data)
  );
};

export const useJob = (id: string) => {
  return useQuery<Jobs['jobs'][number]>(
    ['jobs', id],
    () => axios.get(`/jobs/${id}`).then((res) => res.data),
    {
      enabled: !!id,
    }
  );
};

export const useJobLocations = () => {
  const { data, ...rest } = useQuery<Jobs>(['jobs'], () =>
    axios.get('/jobs').then((res) => res.data)
  );

  if (!data) {
    return {
      data: [],
      ...rest,
    };
  }

  return {
    data:
      data.locations?.map((location) => {
        const locationJobs = data.jobs.filter(
          (job) =>
            job.location.toLowerCase() === location.location.toLowerCase()
        );

        return {
          ...location,
          jobs: locationJobs.length,
        };
      }) ?? [],
    ...rest,
  };
};

export const useFilteredJobs = ({
  data,
  params,
}: {
  data: Jobs | undefined;
  params: ParsedUrlQuery;
}) => {
  if (!data || !data.jobs) return { jobs: [] };

  let jobs = data.jobs;

  if (params.search) {
    jobs = jobs.filter((job) =>
      job.title.toLowerCase().includes((params.search as string).toLowerCase())
    );
  }

  if (params.location) {
    jobs = jobs.filter((job) =>
      job.location
        .toLowerCase()
        .includes((params.location as string).toLowerCase())
    );
  }

  if (params.category) {
    jobs = jobs.filter(
      (job) =>
        job.category.toLowerCase() === (params.category as string).toLowerCase()
    );
  }

  if (params['posted-date']) {
    const postedDate = params['posted-date'];
    const daysBefore = parseInt(postedDate as string, 10);

    if (!isNaN(daysBefore) && daysBefore <= 0) {
      const startFrom = moment().add(daysBefore, 'days'); // days in - so add so moment will subtract

      jobs = jobs.filter((job) => {
        const jobDate = moment(job.date_posted);
        if (!jobDate.isValid()) return false;
        return jobDate.isSameOrAfter(startFrom);
      });
    }
  }

  if (
    params['job-type'] &&
    ((params['job-type'] as string).toLowerCase() === 'full time' ||
      (params['job-type'] as string).toLowerCase() === 'part time')
  ) {
    jobs = jobs.filter(
      (job) =>
        job.job_type.toLowerCase() ===
        (params['job-type'] as string).toLowerCase()
    );
  }

  if (params['sort-by']) {
    const sortBy = params['sort-by'] as keyof (typeof data.jobs)[0];
    const sortOrder = (params['sort-order'] as string) ?? 'asc';

    const sortByOptions = ['title', 'location', 'category']; // published date will handled separately

    if (sortBy.toLowerCase() === 'published-date') {
      jobs = jobs.sort((a, b) => {
        const aDate = moment(a.date_posted);
        const bDate = moment(b.date_posted);

        if (!aDate.isValid() || !bDate.isValid()) return 1;

        if (sortOrder.toLowerCase() === 'asc') {
          if (aDate.isBefore(bDate)) return -1;
          return 1;
        }

        if (aDate.isBefore(bDate)) return 1;
        return -1;
      });
    } else if (sortBy.toLowerCase() === 'job-type') {
      jobs = jobs.sort((a, b) => {
        if (a.job_type === b.job_type) return 0; // if same, no need to sort

        if (sortOrder.toLowerCase() === 'asc') {
          if (a.job_type < b.job_type) return -1;
          return 1;
        }

        if (a.job_type < b.job_type) return 1;
        return -1;
      });
    } else if (sortByOptions.includes(sortBy.toLowerCase())) {
      // sort by title, location, category, job-type
      jobs = jobs.sort((a, b) => {
        if (a[sortBy] === b[sortBy]) return 0; // if same, no need to sort

        if (sortOrder.toLowerCase() === 'asc') {
          if (a[sortBy] < b[sortBy]) return -1;
          return 1;
        }

        if (a[sortBy] < b[sortBy]) return 1;
        return -1;
      });
    }
  }

  return {
    jobs,
  };
};

export const useJobTitles = () => {
  const { data, ...rest } = useQuery<Jobs>(['jobs'], () =>
    axios.get('/jobs').then((res) => res.data)
  );

  return {
    data: {
      titles: data?.jobs.map((job) => job.title) ?? [],
      states: data?.jobs.map((job) => job.location).filter(toUnique) ?? [],
    },
    ...rest,
  };
};

export const REFERAL_SOURCES = ['Seek', 'Website', 'Colleague', 'Other'];
