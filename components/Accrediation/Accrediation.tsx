import Image from 'next/image';
import Slider from 'react-slick';
import GCC from './images/gcc.png';
import Labour from './images/rlhp.png';
import NDIS from './images/ndis.png';
import LabourAuthority from './images/lha.png';

export const Accreditation = () => {
  const logos = [
    {
      img: <Image src={GCC} alt="GCC" />,
    },
    {
      img: <Image src={Labour} alt="Registered Labour Hire Provider" />,
    },
    {
      img: <Image src={NDIS} alt="Registered NDIS Provider" />,
    },
    {
      img: <Image src={LabourAuthority} alt="Labour Hire Authority" />,
    },
  ];

  const slick_slider = {
    dots: true,
    arrows: false,
    autoplay: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 1,

    responsive: [
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title title-style-center_text">
              <div className="title-header">
                <h2 className="title">
                  <span className="text-theme-SkinColor"> Accreditation</span> -
                  License
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row pb-20">
          <div className="col-lg-12">
            <div className="featuredbox-number p-30 mt-15">
              <div className="row">
                <Slider {...slick_slider} className="accreditation__images">
                  {logos.map((logo, idx) => (
                    <div
                      key={idx}
                      className="accreditation__image d-flex align-items-center justify-content-center"
                    >
                      {logo.img}
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const AccreditationSection = () => {
  return (
    <section className="padding_zero-section bg-layer bg-layer-equal-height pt-50 clearfix">
      <Accreditation />
    </section>
  );
};

export default AccreditationSection;
