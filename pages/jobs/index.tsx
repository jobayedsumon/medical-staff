import PageHeader from '@/components/PageHeader/PageHeader';
import Pagination from '@/components/Pagination/Pagination';
import { dateFilters } from '@/data/date-filters';
import { useFilteredJobs, useJobs } from '@/hooks/use-jobs';
import { toUnique } from '@/utils/array';
import moment from 'moment';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useMemo, useState } from 'react';

export const Jobs = () => {
  const router = useRouter();
  const params = router.query;
  const { data } = useJobs();

  const [query, setQuery] = useState(() => {
    return {
      search: params.search || '',
      location: params.location || '',
    };
  });

  const categories = useMemo(() => {
    if (!data) return [];
    return data.jobs?.map((job) => job.category).filter(toUnique);
  }, [data]);

  const locations = useMemo(() => {
    if (!data) return [];
    return data.jobs?.map((job) => job.location).filter(toUnique);
  }, [data]);

  const { jobs } = useFilteredJobs({
    data,
    params,
  });

  if (!jobs) return null;

  const page = params.page ? +params.page : 1;
  const limit = params.limit ? Math.min(+params.limit, 50) : 10;

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setQuery((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onChangeValue = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (value) {
      params[name] = value;
    } else {
      delete params[name];
    }

    delete params.page;
    router.push(router);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Object.entries(query).forEach(([key, value]) => {
      if (value) {
        params[key] = value;
      } else {
        delete params[key];
      }
    });
    delete params.page;
    // const search = new URLSearchParams(params).toString();
    router.push(router);
  };

  const sliceStart = page * limit - limit;

  const sliceEnd = Math.min(page * limit, jobs.length); // exclusive

  const dataStart = sliceStart + 1;

  const renderResultCount = () => {
    if (jobs.length === 0) {
      return <p>No jobs found</p>;
    }
    return (
      <>
        Showing {dataStart}–{sliceEnd} of {jobs.length} Jobs Results :
      </>
    );
  };

  // const start = (page - 1) * limit + 1;
  // const end = Math.min(start + limit - 1, total);

  return (
    <>
      <Head>
        <title>Medical Staff | Jobs</title>
      </Head>
      <div className="site-main">
        {/* PageHeader */}
        <PageHeader
          title="job list"
          breadcrumb="job"
          className="pb-65 pb-lg-0"
          backgroundUrl="/images/jobs/cover-img.jpeg"
        />
        {/* PageHeader end */}

        {/* form */}
        <div className="form-section clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="bg-theme-GreyColor ttm-col-bgcolor-yes ttm-bg border rounded p-40 p-lg-20 mt_70 mt-lg-50">
                  <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                  <div className="layer-content">
                    <form
                      id="search_Form"
                      className="search_Form wrap-form"
                      method="get"
                      action="#"
                      data-mailchimp="true"
                      onSubmit={handleSubmit}
                    >
                      <label>
                        <i className="ti ti-search"></i>
                        <input
                          type="text"
                          id="filter"
                          name="search"
                          placeholder="Job Title or Keywords"
                          value={query.search}
                          onChange={onChange}
                        />
                      </label>
                      <label>
                        <i className="ti ti-location-pin"></i>
                        <select
                          name="location"
                          aria-hidden="true"
                          placeholder="Locations"
                          onChange={onChange}
                          value={query.location}
                        >
                          <option value="">All Locations</option>
                          {locations.map((location) => (
                            <option value={location} key={location}>
                              {location}
                            </option>
                          ))}
                        </select>
                      </label>
                      <button
                        className="submit ttm-btn ttm-btn-size-lg ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor"
                        type="submit"
                      >
                        Find Jobs
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* form end */}

        <div className="ttm-row sidebar job-sidebar clearfix">
          <div className="container">
            {/* row */}
            <div className="row">
              <div className="col-lg-4 widget-area sidebar-left job_list-widget-area">
                <div className="job_list-widget">
                  <aside className="widget job-widget">
                    <h3 className="widget-title">
                      <i className="flaticon flaticon-calendar-1"></i>Date
                      Posted
                    </h3>
                    <div id="datefilters" className="list-filter">
                      <div>
                        {dateFilters.map((dateFilter, idx) => (
                          <label className="radio" key={idx}>
                            <input
                              type="radio"
                              value={dateFilter.value}
                              name="posted-date"
                              defaultChecked={
                                params['posted-date'] === dateFilter.value
                              }
                              onChange={onChangeValue}
                            />
                            {dateFilter.label}
                          </label>
                        ))}
                      </div>
                    </div>
                  </aside>
                  <aside className="widget job-widget">
                    <h3 className="widget-title">
                      <i className="flaticon flaticon-subfolder-1"></i>
                      Categories
                    </h3>
                    <div id="categories" className="list-filter">
                      <div>
                        <label className="radio">
                          <input
                            type="radio"
                            value=""
                            name="category"
                            defaultChecked={
                              params.category === '' || !params.category
                            }
                            onChange={onChangeValue}
                          />
                          All Categories
                        </label>
                        {categories.map((category, idx) => (
                          <label className="radio" key={idx}>
                            <input
                              type="radio"
                              value={category}
                              name="category"
                              defaultChecked={params.category === category}
                              onChange={onChangeValue}
                            />
                            {category}
                          </label>
                        ))}
                      </div>
                    </div>
                  </aside>
                  <aside className="widget job-widget">
                    <h3 className="widget-title">
                      <i className="flaticon flaticon-expert"></i> Job Type Job
                      Type
                    </h3>
                    <div id="categories" className="list-filter">
                      <div>
                        <label className="radio">
                          <input
                            type="radio"
                            value=""
                            name="job-type"
                            defaultChecked={
                              params['job-type'] === '' || !params['job-type']
                            }
                            onChange={onChangeValue}
                          />
                          Any
                        </label>
                        <label className="radio">
                          <input
                            type="radio"
                            value="part time"
                            name="job-type"
                            defaultChecked={params['job-type'] === 'part time'}
                            onChange={onChangeValue}
                          />
                          Part Time
                        </label>

                        <label className="radio">
                          <input
                            type="radio"
                            value="full time"
                            name="job-type"
                            defaultChecked={params['job-type'] === 'full time'}
                            onChange={onChangeValue}
                          />
                          Full time
                        </label>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
              <div className="col-lg-8 content-area">
                <div className="row">
                  <div className="col-md-12">
                    <div className="showing-result-block d-sm-flex align-items-center justify-content-between">
                      <span className="showing-result">
                        {renderResultCount()}
                      </span>
                      <form>
                        <div className="d-flex align-items-center gap-2">
                          <div className="sort-by">
                            Sort By:
                            <select
                              defaultValue=""
                              name="sort-by"
                              onChange={onChangeValue}
                            >
                              <option value="">Sort By</option>
                              <option value="published-date">
                                Published Date
                              </option>
                              <option value="title">Title</option>
                              <option value="location">Location</option>
                              <option value="category">Category</option>
                              <option value="job-type">Job Type</option>
                            </select>
                          </div>
                          <div className="sort-by">
                            Sort Order
                            <select
                              defaultValue="asc"
                              name="sort-order"
                              onChange={onChangeValue}
                            >
                              <option value="asc">ASC</option>
                              <option value="des">DES</option>
                            </select>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {jobs.slice(sliceStart, sliceEnd).map((job, idx) => (
                    <div className="col-lg-12 col-md-12" key={idx}>
                      {/* featured-imagebox */}
                      <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor">
                        <div className="featured-thumbnail">
                          <Image
                            src="/images/jobs/job.jpg"
                            alt={job.title}
                            width={300}
                            height={100}
                          />
                        </div>
                        <div className="featured-content">
                          <div className="featured-title">
                            <h3>
                              <Link href={`/jobs/${job.id}`}>{job.title}</Link>
                            </h3>
                          </div>
                          <div className="featured-desc">
                            <p>Published {moment(job.date_posted).fromNow()}</p>
                          </div>
                          <div className="featured-bottom">
                            <div className="job-meta">
                              <span>
                                <i className="fa fa-map-marker-alt"></i>
                                {job.location}
                              </span>
                              <span>
                                <i className="fa fa-filter"></i>
                                {job.category}
                              </span>
                            </div>
                            <div className="job-time">
                              {job.job_type.toLowerCase() === 'full time' ? (
                                <span className="green">{job.job_type}</span>
                              ) : (
                                <span className="danger-color">
                                  {job.job_type}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* featured-imagebox end */}
                    </div>
                  ))}
                  <div className="col-lg-12">
                    <Pagination total={jobs.length} take={limit} />
                  </div>
                </div>
                {/* row end */}
              </div>
            </div>
            {/* row end */}
          </div>
        </div>

        {/* action-section */}
        <section className="ttm-row action-section bg-theme-SkinColor text-theme-WhiteColor clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="d-md-flex align-items-center justify-content-between">
                  {/* featured-icon-box */}
                  <div className="featured-icon-box icon-align-before-content style2">
                    <div className="featured-icon">
                      <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-white ttm-icon_element-size-xl">
                        <i className="flaticon flaticon-recruitment-5"></i>
                      </div>
                    </div>
                    <div className="featured-content">
                      <div className="featured-title">
                        <h3>Incredible Recruitment & Staffing Agency</h3>
                      </div>
                      <div className="featured-desc">
                        <p>
                          We have over 30 years experience oft Business porro
                          qusquam dol ipsum quia dolor sit amet.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* featured-icon-box end */}
                  <a
                    className="ttm-btn ttm-btn-size-lg ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-white"
                    href={'/'}
                  >
                    Hiring Now!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Jobs;
