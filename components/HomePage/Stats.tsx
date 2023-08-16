import React from 'react';
import CountUp from 'react-countup';
import Building from '@/assets/icons/building.svg';
import GraphUp from '@/assets/icons/graph-up.svg';
import UserGroup from '@/assets/icons/user-group.svg';
import Link from 'next/link';

// interface CountUpProps {
//   start: number;
//   end: number;
//   duration: number;
//   suffix: string;
//   delay: number;
// }

// const CountUp = (_props: CountUpProps) => {
//   return <div>count</div>;
// };

const Stats = () => {
  return (
    <section className="ttm-row clearfix">
      <div className="row">
        <div className="col-lg-12 bg-theme-SkinColor">
          <div className="container">
            {/* <div className="pt-5 bg-theme-SkinColor mt_100 mt-md-60"></div> */}
            <div className="pt-md-40 pb-md-30">
              <div className="row g-0 ttm-vertical_sep">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  {/* fid */}
                  <div className="ttm-fid text-theme-WhiteColor inside ttm-fid-view-topicon style2">
                    <div className="ttm-fid-icon-wrapper countup">
                      <GraphUp />
                    </div>
                    <div className="ttm-fid-contents text-theme-SkinColor">
                      <h4 className="text-theme-WhiteColor">
                        <CountUp
                          start={0}
                          end={3000}
                          duration={5}
                          suffix="+"
                          delay={2}
                        />
                      </h4>
                      <h3 className="ttm-fid-title">Shifts Available 24/7</h3>
                    </div>
                  </div>
                  {/* fid end */}
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  {/* fid */}
                  <div className="ttm-fid text-theme-WhiteColor inside ttm-fid-view-topicon style2">
                    <div className="ttm-fid-icon-wrapper countup">
                      <UserGroup />
                    </div>
                    <div className="ttm-fid-contents text-theme-SkinColor">
                      <h4 className="text-theme-SkinColor">
                        <CountUp
                          start={0}
                          end={1000}
                          duration={5}
                          delay={2}
                          suffix="+"
                        />
                      </h4>
                      <h3 className="ttm-fid-title">Over Clients</h3>
                    </div>
                  </div>
                  {/* fid end */}
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                  {/* fid */}
                  <div className="ttm-fid text-theme-WhiteColor inside ttm-fid-view-topicon style2">
                    <div className="ttm-fid-icon-wrapper countup">
                      <Building />
                    </div>
                    <div className="ttm-fid-contents text-theme-SkinColor">
                      <h4 className="text-theme-SkinColor">
                        <CountUp
                          start={0}
                          end={12600}
                          duration={5}
                          delay={2}
                          suffix="+"
                        />
                      </h4>
                      <h3 className="ttm-fid-title">No. of Candidates Hired</h3>
                    </div>
                  </div>
                  {/* fid end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row bg-theme-GreyColor">
        <div className="mt-80 mb-80 col-lg-12">
          <h2 className="text-center">
            Discover{' '}
            <span className="text-theme-SkinColor"> Complete Work </span>{' '}
            Freedom
          </h2>
          <div className="mt-60 d-flex align-items-center  justify-content-center gap-3">
            <div className="header_btn flex-shrink-0">
              <Link
                className="ttm-btn ttm-btn-size-lg ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor"
                href="/jobs"
              >
                Apply Now
              </Link>
            </div>
            <div className="header_btn flex-shrink-0">
              <Link
                className="ttm-btn ttm-btn-size-lg ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor"
                href="/login"
              >
                Netbook Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
