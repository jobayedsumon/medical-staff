/* eslint-disable @next/next/no-img-element */
import PageHeader from '@/components/PageHeader/PageHeader';
import { useNewsDetail } from '@/hooks/use-news';
import moment from 'moment';
import Head from 'next/head';
import { useRouter } from 'next/router';

export const NewsDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const { isLoading, data: news } = useNewsDetail(id as string);

  if (isLoading) {
    return (
      <div className="row">
        <div className="col-12 pt-50 pb-50">
          <p className="text-center">Loading...</p>
        </div>
      </div>
    );
  }

  if (!news) {
    return <div>Job Not Found</div>;
  }

  return (
    <>
      <Head>
        <title>Medical Staff | {news?.title ?? 'News Detail'}</title>
      </Head>
      <div className="site-main">
        <PageHeader
          title={news?.title ?? ''}
          breadcrumb={news?.title ?? ''}
          backgroundUrl="/images/jobs/cover-img.jpeg"
        />
        {/* PageHeader end */}

        <div className="ttm-row sidebar ttm-sidebar clearfix">
          <div className="container">
            {/* row */}
            <div className="row">
              <div className="mx-auto col-lg-8 content-area">
                {/* post */}
                <article className="post ttm-blog-single clearfix">
                  {/* post-featured-wrapper */}
                  <div className="ttm-post-featured-wrapper ttm-featured-wrapper">
                    <div className="ttm-post-featured">
                      <img
                        className="img-fluid"
                        src={news.featured_image}
                        alt="News Featured Image"
                      />
                    </div>
                  </div>
                  <div className="ttm-blog-single-content">
                    <div className="ttm-post-entry-header">
                      <div className="post-meta">
                        <span className="ttm-meta-line date">
                          <i className="fa fa-calendar"></i>
                          {moment(news.date_posted).format('MMM DD, YYYY')}
                        </span>
                      </div>
                    </div>
                    <div className="entry-content">
                      <div className="ttm-box-desc-text">
                        {news.content}
                        <div className="social-media-block">
                          <div className="d-sm-flex justify-content-between">
                            <div className="ttm_tag_lists mt-15"></div>
                            <div className="ttm-social-share-wrapper mt-15">
                              <h6 className="pr-10">Share : </h6>
                              <ul className="social-icons">
                                <li>
                                  <a
                                    href={`https://www.facebook.com/sharer.php?u=${window.location.href}&title=`}
                                    rel="noopener noreferrer"
                                    aria-label="facebook"
                                  >
                                    <i className="ti ti-facebook"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    rel="noopener"
                                    aria-label="twitter"
                                  >
                                    <i className="ti ti-twitter-alt"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${news.title}&source=${window.location.hostname}`}
                                    rel="noopener"
                                    aria-label="linkedin"
                                  >
                                    <i className="ti ti-linkedin"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ttm-blog-classic-content end */}
                </article>
                {/* post end */}
              </div>
            </div>
            {/* row end */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetail;
