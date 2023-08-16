import { useJobLocations } from '@/hooks/use-jobs';
import Image from 'next/image';
import Link from 'next/link';

const JobByLocation = () => {
  const { data: locations } = useJobLocations();

  return (
    <div className="row">
      {locations.map((location, index) => (
        <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
          {/* featured-imagebox-portfolio */}
          <div className="featured-imagebox featured-imagebox-portfolio style1">
            {/* ttm-box-view-overlay */}
            <div className="ttm-box-view-overlay ttm-portfolio-box-view-overlay">
              {/* featured-thumbnail */}
              <div className="featured-thumbnail">
                <Image
                  className="img-fluid"
                  src={location.cover_image}
                  alt={location.location}
                  width={376}
                  height={240}
                />
              </div>
              {/* featured-thumbnail end */}
            </div>
            <div className="featured-content">
              <div className="featured-title">
                <h3>
                  <Link href={`/jobs?location=${location.location}`}>
                    {location.location}
                  </Link>
                </h3>
              </div>
              <div className="featured-desc">
                <p>{location.jobs} Open Positions</p>
              </div>
            </div>
          </div>
          {/* featured-imagebox-portfolio end */}
        </div>
      ))}
      <div className="col-lg-12">
        <div className="pt-30 m-auto text-center">
          <a
            className="ttm-btn ttm-btn-size-lg ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor"
            href="/jobs"
          >
            Find Jobs By Region
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobByLocation;
