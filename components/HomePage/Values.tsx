import Image from 'next/image';
import Slider from 'react-slick';

const Values = () => {
  const slick_slider = {
    dots: false,
    arrow: false,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 1,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const core_values = [
    {
      image: '/images/core-values/client-satisfaction.jpg',
      title: 'Client Satisfaction',
      description:
        'At Medical Staff Nursing Agency, our mission is to give 100% satisfaction  to our clients.',
    },
    {
      image: '/images/core-values/strict-screening.jpg',
      title: 'Strict Screening',
      description:
        'We have strict screening of candidates, compliance and offer only the most qualified and experienced staff.',
    },
    {
      image: '/images/core-values/client-satisfaction-2.jpg',
      title: 'Commitment to Quality',
      description:
        'We are committed to maintaining the highest standards of quality in our service provision.',
    },
    {
      image: '/images/core-values/strategic-planning.jpg',
      title: 'Strategic Planning',
      description:
        'We execute strategic planning to ensure our capacity to meet your fluctuating staffing requirements.',
    },
  ];

  return (
    <section
      className="ttm-row services-section bg-img1 bg-theme-WhiteColor ttm-bg ttm-bgimage-yes clearfix"
      style={{ backgroundImage: 'url(/images/bg-image/row-bgimage-1.png)' }}
    >
      <div className="container">
        {/* row */}
        <div className="row">
          <div className="col-lg-11">
            {/* section title */}
            <div className="section-title style2 mb-0">
              <div className="title-header">
                <h3>Our core values</h3>
                <h2 className="title">
                  <span className="text-theme-SkinColor">We care </span>
                  about you
                </h2>
              </div>
              <div className="title-desc">
                <p>
                  High quality service provision and thorough policies and
                  frameworks are at the core of our business operation, and as
                  such, Medical Staff maintains ISO 9001 accreditation for its
                  quality assurance and management.
                </p>
              </div>
            </div>
            {/* section title end */}
          </div>
        </div>
        {/* row end */}
        {/* Slider */}
        <Slider
          className="row slick_slider slick-arrows-style2 pt-20 mb_10"
          {...slick_slider}
          slidesToShow={2}
          rows={2}
          arrows={false}
          autoplay={false}
          responsive={[
            {
              breakpoint: 1024,
              settings: { slidesToShow: 2, slidesToScroll: 2 },
            },
            {
              breakpoint: 575,
              settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
          ]}
          infinite={false}
        >
          {core_values.map((value, idx) => (
            <div className="col-md-12" key={idx}>
              {/* featured-imagebox */}
              <div className="featured-imagebox featured-imagebox-services style1">
                {/* featured-thumbnail */}
                <div className="featured-thumbnail">
                  <Image
                    className="img-fluid"
                    src={value.image}
                    alt="core value client satisfaction"
                    width={400}
                    height={400}
                  />
                </div>
                {/* featured-thumbnail end */}
                <div className="featured-content">
                  <div className="featured-title">
                    <h3>{value.title}</h3>
                  </div>
                  <div className="featured-desc">
                    <p>{value.description}</p>
                  </div>
                </div>
              </div>
              {/* featured-imagebox end */}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Values;
