import { range } from '@/hooks/use-pagination';
import { classNames } from '@/utils/class-names';
import Slider from 'react-slick';

type Testemonial = {
  message: string;
  position: string;
  company: string;
  rating: 1 | 2 | 3 | 4 | 5;
};

const ClientStories = () => {
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

  const testimonials: Testemonial[] = [
    {
      message:
        "It has always been so easy to do work with team member at HireCo. It's an much effortless partnership",
      position: 'Manager',
      company: 'Michal Wincent',
      rating: 5,
    },
    {
      message:
        ' The national award-winning staffing agency that was built with our trademarked tagline, Expect More, We Do. ',
      position: 'Manager',
      company: 'Michal Wincent',
      rating: 5,
    },
    {
      message:
        ' The national award-winning staffing agency that was built with, our trademarked tagline, Expect More, We Do.',
      position: 'Manager',
      company: 'Michal Wincent',
      rating: 5,
    },
  ];

  return (
    <section className={classNames('ttm-row  clearfix')}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title title-style-center_text">
              <div className="title-header">
                <h3>
                  Our <span className="text-theme-SkinColor">Clients</span>
                </h3>
                <h2 className="title">What Our Client Says</h2>
              </div>
            </div>
          </div>
        </div>
        <Slider
          className="row slick_slider slick-arrows-style1"
          {...slick_slider}
          slidesToShow={3}
          arrows={true}
        >
          {testimonials.map((testimonial, idx) => (
            <div className="col-lg-12" key={idx}>
              {/* testimonials */}
              <div className="testimonials ttm-testimonial-box-view-style1">
                <div className="testimonial-content">
                  <blockquote className="testimonial-text">
                    {testimonial.message}
                  </blockquote>
                  <div className="star-ratings">
                    <ul className="rating">
                      {range(1, testimonial.rating).map((i) => (
                        <li className="active" key={i}>
                          <i className="fa fa-star"></i>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="testimonial-bottom">
                  <div className="testimonial-avatar">
                    {/* <div className="testimonial-img">
                    <div className="img-fluid" height={60} width={60} />
                  </div> */}
                  </div>
                  <div className="testimonial-caption">
                    <label>{testimonial.position}</label>
                    <h3>{testimonial.company}</h3>
                  </div>
                </div>
              </div>{' '}
              {/* testimonials end */}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ClientStories;
