import PageHeader from '@/components/PageHeader/PageHeader';
import { useJob } from '@/hooks/use-jobs';
import { useRouter } from 'next/router';
import FacebookIcon from '../../assets/icons/socials/facebook.svg';
import LinkedinIcon from '../../assets/icons/socials/linkedin.svg';
import { daysAgo } from '@/utils/format-date';
import Image from 'next/image';
import Head from 'next/head';

export const Job = () => {
  const router = useRouter();
  const { id } = router.query;

  const { isLoading, data: job } = useJob(id as string);

  if (isLoading) {
    return (
      <div className="row">
        <div className="col-12 pt-50 pb-50">
          <p className="text-center">Loading...</p>
        </div>
      </div>
    );
  }

  if (!job) {
    return <div>Job Not Found</div>;
  }

  return (
    <>
      <Head>
        <title>Medical Staff | Job</title>
      </Head>
      <div className="site-main">
        {/* PageHeader */}
        <PageHeader
          title={job?.title ?? ''}
          breadcrumb={job?.title ?? ''}
          backgroundUrl="/images/jobs/cover-img.jpeg"
        />
        {/* PageHeader end */}

        <div className="ttm-row sidebar job-sidebar clearfix">
          <div className="container">
            {job ? (
              <div className="row">
                <div className="col-lg-4 widget-area sidebar-left job_list-widget-area">
                  {job.extra_information && (
                    <div className="job_list-widget">
                      <aside className="widget job-widget">
                        <h3 className="widget-title">
                          <i className="ti ti-files"></i>Job Informations
                        </h3>
                        <ul>
                          {Object.entries(job.extra_information).map(
                            ([key, value], idx) => (
                              <li className="d-flex" key={idx}>
                                <b className="mr-5">{key}:</b>
                                {value}
                              </li>
                            )
                          )}
                        </ul>
                      </aside>
                    </div>
                  )}
                </div>
                <div className="col-lg-8 content-area">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      {/* featured-imagebox */}
                      <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor m-0">
                        <div className="featured-thumbnail">
                          <Image
                            src="/images/jobs/job.jpg"
                            alt="Job"
                            width={300}
                            height={100}
                          />
                        </div>
                        <div className="featured-content">
                          <div className="featured-title">
                            <h3>{job.title}</h3>
                          </div>
                          <div className="featured-desc">
                            <p>{daysAgo(job.date_posted)}</p>
                          </div>
                          <div className="featured-bottom">
                            <div className="job-meta">
                              {job.location && (
                                <span>
                                  <i className="fa fa-map-marker-alt"></i>
                                  {job.location}
                                </span>
                              )}
                              {job.category && (
                                <span>
                                  <i className="fa fa-filter"></i>
                                  {job.category}
                                </span>
                              )}
                            </div>
                            <div className="job-time">
                              <span className="green">{job.job_type}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* featured-imagebox end */}
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="overview-box">
                        <div className="title">
                          <h5>Job Description :</h5>
                        </div>
                        <div className="desc">
                          <p>{job.job_description}</p>
                        </div>
                      </div>
                      <div className="overview-box">
                        <div className="title">
                          <h5>Required Knowledge, Skills, and Abilities :</h5>
                        </div>
                        <div className="desc">
                          <ul className="ttm-list ttm-list-style-icon ttm-textcolor-darkgrey">
                            {job.requirements?.map((requirement, index) => (
                              <li key={index}>
                                <i className="ti ti-check-box"></i>
                                <div className="ttm-list-li-content">
                                  {requirement}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="overview-box mb-60">
                        <div className="title">
                          <div className="d-sm-flex justify-content-between mb_10">
                            <h5 className="mb-10">Share Job :</h5>
                            <div className=" circle mb-10">
                              <ul className="d-flex align-items-center gap-1 list-inline">
                                <li>
                                  <a
                                    href={`https://www.facebook.com/sharer.php?u=${window.location.href}&title=`}
                                    rel="noopener noreferrer"
                                    aria-label="facebook"
                                    target="_blank"
                                  >
                                    <FacebookIcon />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${job.title}&source=${window.location.hostname}`}
                                    rel="noopener noreferrer"
                                    aria-label="linkedin"
                                    target="_blank"
                                  >
                                    <LinkedinIcon />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-12">
                  <h1 className="text-center text-danger">Job Not Found</h1>
                </div>
              </div>
            )}
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
                    href={process.env.PUBLIC_URL + '/'}
                  >
                    Hiring Now!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* action-section end */}
      </div>
    </>
  );
};

export default Job;
