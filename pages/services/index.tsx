import AccreditationSection from '@/components/Accrediation/Accrediation';
import CTA, { MiniCTA } from '@/components/CTA/CTA';
import ContactForm from '@/components/ContactForm/ContactForm';
import PageHeader from '@/components/PageHeader/PageHeader';
import { callerLink } from '@/utils/caller';
import Head from 'next/head';
import Image from 'next/image';
import Slider from 'react-slick';

export const Services = () => {
  const slick_slider = {
    dots: false,
    arrow: false,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: 8,
    slidesToScroll: 1,
    rows: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 778,
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

  const slides = [
    {
      title: 'Registered Nurses',
      lists: [
        'RN: Registered Nurse',
        'EEN: Enrolled Endorsed Nurse',
        'AIN: Assistant in Nursing',
        'PCA: Patient Care Assistant',
        'PCW: Personal Care Worker',
        'PSA: Patient Services Assistant',
      ],
    },
    {
      title: 'General Nursing',
      lists: ['Medical/Surgical '],
    },
    {
      title: 'Carers',
    },
    {
      title: 'Registered Midwives',
      lists: [
        'Antenatal',
        'Postnatal',
        'Delivery',
        'Suite',
        'Special',
        'Care',
        'Nursery',
      ],
    },
    {
      title: 'Theatre Nurses',
      lists: ['Scrub', 'Anaesthetic', 'Recovery'],
    },
    {
      title: 'ICU and Emergency Nursing',
      lists: [],
    },
    {
      title: 'Clinical Facilitation and Clinical Education',
    },
    {
      title: 'Theatre Technicians',
    },
    {
      title: 'Aged Care Staff',
    },
    {
      title: 'Allied Health Professionals',
    },
  ];

  const client_areas = [
    'Temporary, Contract and Permanent Recruitment ',
    'Hospitals Public and Private ',
    'Universities and TAFE · ',
    'Aged Care Facilities and Nursing Homes ',
    'NDIS and Disability Services ',
    'Social and Community Services ',
    'Domestic Services ',
    'Private Homecare and Private patients at Hospitals ',
    'Vaccination Hubs and Sites and more ',
  ];

  return (
    <>
      <Head>
        <title>Medical Staff | Client Services</title>
      </Head>
      <div className="site-main">
        {/* PageHeader */}
        <PageHeader
          title="Client Services"
          breadcrumb="Client Services"
          backgroundUrl="/images/nursing-pictures-extra.png"
        />
        {/* PageHeader end */}
        <section className="ttm-row contact-section clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* section-title */}
                <div className="section-title title-style-center_text">
                  <div className="title-header">
                    <h2 className="title">Client Services</h2>
                  </div>
                </div>
                {/* section-title end */}
              </div>
            </div>
            {/* row */}
            <div className="row">
              <div className="col-12">
                <p>
                  <b>Medical Staff Nursing Agency</b> is a leading, nationwide
                  provider of general and specialized nursing staff, doctors,
                  and allied health professionals to facilities across
                  Australia. High quality service provision and thorough
                  policies and frameworks are at the core of our business
                  operation, and as such, Medical Staff maintains{' '}
                  <b>
                    ISO 9001 accreditation for its quality assurance and
                    management.
                  </b>
                  <br />
                  <br />
                </p>
              </div>
              <div className="col-md-8">
                <p>
                  For almost <b>2 decades</b>, Medical Staff Nursing Agency has
                  been <b>recruiting and supplying</b> healthcare professionals
                  to healthcare and community facilities across all states of
                  Australia. Medical Staff places healthcare professionals in
                  public and private hospitals, aged care facilities, retirement
                  villages, private clinics, universities, schools, medical
                  centers, NDIS and disability services, home care, vaccination,
                  and workforce surge settings, to name a few key examples.
                  Medical Staff Nursing Agency prides itself in supplying
                  experienced, highly skilled, and specialized staff across
                  Australia.
                  <br />
                  <br />
                  The team of Directors and Management staff at Medical Staff
                  use their combined expert knowledge of the public and private
                  healthcare industry to empower staff to work to their best
                  abilities.
                </p>
              </div>
              <div className="col-md-4 pt-4">
                <Image
                  src="/images/about-us/agency.png"
                  alt="about-us"
                  className="float-md-end image-fluid object-fit-cover"
                  width={380}
                  height={432}
                />
              </div>
            </div>
          </div>
        </section>

        {/* services-section */}
        <section
          className="ttm-row services-section bg-img1 bg-theme-GreyColor ttm-bg ttm-bgimage-yes clearfix"
          style={{ backgroundImage: 'url(images/bg-image/row-bgimage-1.png)' }}
        >
          <div className="container">
            {/* row */}
            <div className="row">
              <div className="col-lg-11">
                {/* section title */}
                <div className="section-title style2 mb-0">
                  <div className="title-header">
                    <h3>Nation wide service</h3>
                    <h2 className="title">
                      <span className="text-theme-SkinColor">Area we </span>
                      Cover
                    </h2>
                  </div>
                  <div className="title-desc">
                    <p>
                      We provide nationwide staffing services for various
                      medical positions, including registered nurses, midwives,
                      general nurses, mental health nurses, ICU and emergency
                      nurses, theatre nurses, clinical facilitators,
                      technicians, carers, aged care staff, and allied health
                      professionals.
                    </p>
                  </div>
                </div>
                {/* section title end */}
              </div>
            </div>
            {/* row end */}
            {/* Slider */}
            <Slider
              className="row slick_slider slick-arrows-style2 pt-20"
              {...slick_slider}
              slidesToShow={2}
              rows={2}
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
            >
              {slides.map((slide, idx) => (
                <div className="col-md-12" key={idx}>
                  {/* featured-imagebox */}
                  <div className="featured-imagebox featured-imagebox-services style1">
                    <div className="featured-content">
                      <div className="featured-title">
                        <h3>{slide.title}</h3>
                      </div>
                      <div className="featured-desc">
                        <ul className="mt-30 ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor text-theme-DarkColor row">
                          {slide.lists?.map((list, i) => (
                            <li key={idx} className="">
                              <i className="far fa-check-circle"></i>
                              <div className="ttm-list-li-content">{list}</div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* featured-imagebox end */}
                </div>
              ))}
            </Slider>
            {/* Slider end */}
          </div>
        </section>
        {/* services-section end */}
        <AccreditationSection />

        <section className="ttm-row contact-section bg-theme-GreyColor clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* section-title */}
                <div className="section-title title-style-center_text">
                  <div className="title-header">
                    <h2 className="title text-left d-flex justify-content-center">
                      Client &nbsp;
                      <span className="text-theme-SkinColor"> Areas</span>
                    </h2>
                  </div>
                </div>
                {/* section-title end */}
              </div>
            </div>
            {/* row */}
            <div className="row">
              <p className="text-center">
                We offer staffing solutions for various industries such as
                healthcare, education, aged care, disability services, community
                services, domestic services, and more. Our services include
                temporary, contract, and permanent recruitment.{' '}
              </p>
              <h4 className="mt-60 text-center">Our client areas include:</h4>
              <ul className="mt-30 ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor text-theme-DarkColor row">
                {client_areas.map((area, idx) => (
                  <li key={idx} className="col-12 col-md-6">
                    <i className="far fa-check-circle"></i>
                    <div className="ttm-list-li-content">{area}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-60 row">
              <div className="col-12  text-center">
                <h4 className="">Services </h4>
                <p className="mt-30">
                  For any immediate or future staffing needs please contact our
                  team today. We have many nursing staff available for day to
                  day booking or for future advance booking to cover your
                  roster. Call us on
                  <a href={callerLink} className="text-theme-SkinColor">
                    {' '}
                    1300 10 50 10{' '}
                  </a>{' '}
                  to speak with our friendly Allocations team who can assist you
                  in finding experienced, motivated, and qualified Nursing /
                  Healthcare staff to fit your needs. If you are a current
                  client, please feel free to call us 24/7 or make an online
                  booking
                </p>
              </div>
            </div>
            <div className="mt-60 row">
              <div className="col-12 text-center">
                <h4 className="">Our Mission</h4>
                <p className="mt-30">
                  At Medical Staff Nursing Agency, our mission is the 100%
                  satisfaction of our clients. We have been successful in
                  achieving this by our strict screening of candidates,
                  compliances and offering only the most qualified and
                  experienced staff. We recruit and place according to our
                  clients needs and execute strategic planning to ensure our
                  capacity to meet your fluctuating staffing requirements.
                </p>
              </div>
            </div>
            <div className="mt-60 mb-40 row">
              <div className="col-12 text-center">
                <h4 className="">Register</h4>
                <p className="mt-30">
                  Please feel free to contact us if you have any queries or to
                  join Medical Staff Nursing Agency as a client. To request for
                  more information about our services or registration please
                  click on the link:
                </p>
              </div>
            </div>
            <MiniCTA />
          </div>
        </section>
        <ContactForm />
        <CTA />
      </div>
    </>
  );
};

export default Services;
