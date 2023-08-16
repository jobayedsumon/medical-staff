/* eslint-disable @next/next/no-img-element */
import { News } from '@/hooks/use-news';
import moment from 'moment';
import Link from 'next/link';

const NewsGrid = ({ news }: { news: News[] }) => {
  if (news && news.length > 0) {
    return (
      <>
        {news.map((newsItem, idx) => (
          <div className="col-md-6 col-lg-4 bg-theme-Primary my-3" key={idx}>
            {/* featured-imagebox-post */}
            <div className="featured-imagebox featured-imagebox-post style1 d-flex flex-column h-100">
              {/* featured-thumbnail */}
              <div className="featured-thumbnail">
                <img
                  className="img-fluid"
                  src={newsItem.featured_image}
                  alt="News Featued Image"
                />
              </div>
              {/* featured-thumbnail end */}
              <div className="featured-content flex-grow-1 d-flex flex-column">
                <div className="flex-1">
                  <div className="post-meta">
                    <span className="ttm-meta-line byline">
                      <time
                        className="entry-date text-slate"
                        dateTime={newsItem.date_posted}
                      >
                        {moment(newsItem.date_posted).format('MMM DD, YYYY')}
                      </time>
                    </span>
                  </div>
                  <div className="featured-title news-title">
                    <h3 className="line-clamp-2">
                      <Link href={`/news/${newsItem.id}`}>
                        {newsItem.title}
                      </Link>
                    </h3>
                  </div>
                  <div className="featured-desc line-clamp-2">
                    <p>{newsItem.exerpt}</p>
                  </div>
                </div>
                <div>
                  <Link
                    className="ttm-btn ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor"
                    href={`/news/${newsItem.id}`}
                  >
                    read more!
                  </Link>
                </div>
              </div>
            </div>
            {/* featured-imagebox-post end */}
          </div>
        ))}
      </>
    );
  }

  return (
    <div>
      <h1>No News for Now</h1>
    </div>
  );
};

export default NewsGrid;
