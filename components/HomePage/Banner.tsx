import { useJobs } from '@/hooks/use-jobs';
import { toUnique } from '@/utils/array';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useMemo, useState } from 'react';
import Slider from 'react-slick';

export const Banner = () => {
  const router = useRouter();
  // const { data } = useQuery('/data.json');
  const { data } = useJobs();

  const [query, setQuery] = useState({
    search: '',
    location: '',
    category: '',
  });

  const locations = useMemo(() => {
    if (!data) return [];
    return data.jobs?.map((job) => job.location).filter(toUnique) ?? [];
  }, [data]);

  const categories = useMemo(() => {
    if (!data) return [];
    return data.jobs?.map((job) => job.category).filter(toUnique) ?? [];
  }, [data]);

  const slick_slider = {
    dots: false,
    arrows: false,
    autoplay: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,

    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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

  const slides = [
    {
      subheading: 'Medical Staff',
      heading: 'We’re for Nurses and Midwives',
      image: '/images/homepage/carousel-1.png',
    },
    {
      subheading: 'Medical Staff',
      heading: 'We’re for Nurses and Midwives',
      image: '/images/homepage/carousel-2.png',
    },
    {
      subheading: 'Medical Staff',
      heading: 'We’re for Nurses and Midwives',
      image: '/images/homepage/carousel-3.png',
    },
  ];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params: Record<string, string> = {};
    Object.entries(query).forEach(([key, value]) => {
      if (value) {
        params[key] = value;
      }
    });
    const search = new URLSearchParams(params).toString();
    router.push(`/jobs?${search}`);
  };

  return (
    <div className="position-relative">
      <Slider
        className="slick_slider banner_slider banner_slider_1"
        {...slick_slider}
      >
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <div
              className="slide_img"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            ></div>
            <div className="slide__content">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="slide__content--headings ttm-textcolor-white text-center">
                      <h3 data-animation="animate__animated animate__bounce animate__delay-2s">
                        {slide.subheading}
                      </h3>
                      <div className="d-flex align-items-center justify-content-center">
                        <h2 data-animation="animate__fadeInDown">
                          {slide.heading}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="mt-30 position-absolute w-100 banner_form">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                data-animation="animate__fadeInDown"
                className="mb-30 mb-md-0"
              >
                <form
                  id="b_search_Form"
                  className="b_search_Form wrap-form d-block"
                  method="post"
                  action="#"
                  data-mailchimp="true"
                  onSubmit={handleSubmit}
                >
                  <div className="row row-equal-height">
                    <div className="col-lg-3">
                      <label>
                        <i className="ti ti-search"></i>
                        <input
                          type="text"
                          id="search"
                          placeholder="Job Title or Keywords"
                          value={query.search}
                          name="search"
                          onChange={handleChange}
                        />
                      </label>
                    </div>
                    <div className="col-lg-3">
                      <label>
                        <i className="ti ti-location-pin"></i>
                        <select
                          name="location"
                          aria-hidden="true"
                          placeholder="Locations"
                          value={query.location}
                          onChange={handleChange}
                        >
                          <option value="">Locations</option>
                          {locations.map((location) => (
                            <option value={location} key={location}>
                              {location}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>
                    <div className="col-lg-3">
                      <label>
                        <i className="ti ti-list"></i>
                        <select
                          name="category"
                          id="category"
                          aria-hidden="true"
                          placeholder="Categories"
                          value={query.category}
                          onChange={handleChange}
                        >
                          <option value="">Categories</option>
                          {categories.map((category, idx) => (
                            <option value={category} key={idx}>
                              {category}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>
                    <div className="col-lg-3">
                      <label>
                        <button
                          className="submit ttm-btn ttm-btn-size-lg ttm-btn-shape-rounded ttm-btn-style-fill 
                                              ttm-btn-color-skincolor"
                          type="submit"
                        >
                          Find Jobs
                        </button>
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
