/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const MissionSection = () => {
  const values = [
    {
      title: 'Our Mision',
      image: '/images/homepage/value1.png',
      description:
        'At Medical Staff Nursing Agency, our mission is the 100% satisfaction of our clients. We have been successful in achieving this by our strict screening of candidates, compliance and offering only the most qualified and experienced staff',
      points: [
        'We recruit and place according to our clients needs',
        'We execute strategic planning to ensure our capacity meets your fluctuating staffing requirements.',
      ],
    },
    {
      title: 'Services',
      image: '/images/homepage/value2.png',
      description:
        'For any immediate or future staffing needs please contact our team today. We have many nursing staff available for day to day booking or for future advance booking to cover your roster.',
      points: [
        'Call us on 1300 10 50 10 to speak with our friendly Allocations team who can assist you in finding experienced, motivated, and qualified Nursing / Healthcare staff to fit your needs.',
        'If you are a current client, please feel free to call us 24/7 or make an online booking',
      ],
    },
    {
      title: 'Register',
      image: '/images/homepage/value3.png',
      description:
        'Please feel free to contact us if you have any queries or to join Medical Staff Nursing Agency as a client. To request for more information about our services or registration please click on the link:',
      points: [
        'Call Medical Staff on 1300 10 50 10 to discuss your needs in detail with the relevant state manager.',
      ],
    },
  ];

  return (
    <section className="padding_zero-section bg-layer bg-layer-equal-height pt-40 pb-30 mb-70 mb-md-0 clearfix">
      <div className="row g-0">
        <div className="col-lg-7 col-md-12">
          {/* col-img-img-three */}
          <div className="col-bg-img-three ttm-bg ttm-col-bgimage-yes ttm-left-span z-index-2">
            <div
              className="ttm-col-wrapper-bg-layer ttm-bg-layer"
              style={{
                backgroundImage: 'url(/images/homepage/bg-image-3.png)',
              }}
            ></div>
            <div className="layer-content"></div>
            <Image
              className="img-fluid col-bg-img-res"
              src="/images/homepage/bg-image-3.png"
              alt="bgimage"
              width={190}
              height={180}
            />
          </div>
          {/* col-img-bg-img-one end */}
        </div>
        <div className="col-lg-5">
          <div className="ttm-bg ttm-col-bgcolor-yes bg-theme-DarkColor ttm-bg ttm-right-span spacing-1 z-index-1">
            <div className="ttm-col-wrapper-bg-layer ttm-bg-layer bg-theme-DarkColor">
              <div className="ttm-col-wrapper-bg-layer-inner"></div>
            </div>
            <div className="layer-content text-theme-WhiteColor">
              {/* section title */}
              <div className="section-title pr-40">
                <div className="title-header">
                  <h3>
                    How <span className="text-theme-SkinColo">we are </span>
                  </h3>
                  <h2 className="title">
                    Reliable & Cost Efficient Recruitment Agency
                  </h2>
                </div>
              </div>
              {/* section title end */}
              <div className="ttm-tabs ttm-tab-style-01">
                <Tabs>
                  <TabList className="tabs">
                    {values.map((value, index) => (
                      <Tab className="tab" key={index}>
                        <a className={`tab-${index}`} tabIndex={0}>
                          {value.title}
                        </a>
                      </Tab>
                    ))}
                  </TabList>
                  <div className="content-tab mb-15 pr-30">
                    {values.map((value, index) => (
                      <TabPanel key={index}>
                        <div className="row">
                          <div className="col-lg-4 col-md-3 col-sm-4 pr-0">
                            <Image
                              className="img-fluid alignleft"
                              height="300"
                              width="300"
                              src={value.image}
                              alt={value.title}
                            />
                          </div>
                          <div className="col-lg-8 col-md-9 col-sm-8">
                            <div className="pt-15 pr-6">
                              <p>{value.description}</p>
                              <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor text-theme-WhiteColor">
                                {value.points.map((point, idx) => (
                                  <li key={idx}>
                                    <i className="far fa-check-circle"></i>
                                    <div className="ttm-list-li-content">
                                      {point}
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                    ))}
                  </div>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
