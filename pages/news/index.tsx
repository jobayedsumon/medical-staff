import NewsGrid from '@/components/NewsGrid/NewsGrid';
import PageHeader from '@/components/PageHeader/PageHeader';
import { useNews } from '@/hooks/use-news';
import Head from 'next/head';

const News = () => {
  const { data } = useNews();

  return (
    <>
      <Head>
        <title>Medical Staff | Breaking News</title>
      </Head>
      <div className="site-main">
        {/* PageHeader */}
        <PageHeader
          title="Breaking News"
          breadcrumb="Breaking News"
          className="pb-65 pb-lg-0"
          backgroundUrl="/images/news/cover-img.jpg"
        />
        {/* PageHeader end */}

        <div className="ttm-row sidebar ttm-sidebar clearfix">
          <div className="container">
            {/* row */}
            <div className="row">
              <div className="mt_20">
                <div className="row mt-2">
                  <NewsGrid news={data?.news ?? []} />
                </div>
              </div>
            </div>
            {/* row end */}
          </div>
        </div>
      </div>
    </>
  );
};
export default News;
