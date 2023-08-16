import Image from 'next/image';
import Link from 'next/link';

const ServiceSection = () => {
  const services = [
    {
      img: '/images/services/Client Services.png',
      link: '/services/',
      title: 'Client Services',
    },
    {
      img: '/images/services/nurses and midwives.png',
      link: '/nurses-and-midwives',
      title: 'Registered Nurses and Midwives',
    },
    {
      img: '/images/services/aged care.png',
      link: '/nurses-and-aged-care',
      title: 'Aged Care - Nursing Home',
    },
    {
      img: '/images/services/ndis.png',
      link: '/ndis-homecare',
      title: 'NDIS Disability Private homecare clients',
    },
    {
      img: '/images/services/vaccination.png',
      link: '/vaccination',
      title: 'Vaccination Service',
    },
    {
      img: '/images/services/allied health.png',
      link: '/allied-health',
      title: 'Allied Health',
    },
    {
      img: '/images/services/rural and remote.png',
      link: '/work-and-holidays',
      title: 'Working and Holidays',
    },
    {
      img: '/images/services/recruitment.png',
      link: '/recruitment',
      title: 'Recruitment',
    },
  ];

  return (
    <section className="ttm-row clearfix">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title title-style-center_text">
              <div className="title-header">
                <h3>
                  Welcome to{' '}
                  <span className="text-theme-SkinColor">Medical Staff</span>
                </h3>
                <h1 className="title">
                  Areas of{' '}
                  <span className="text-theme-SkinColor">
                    {' '}
                    service we cover
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service, idx) => (
            <Link
              className="col-lg-3 col-md-6 col-sm-6"
              key={idx}
              href={service.link}
            >
              {/* featured-imagebox-portfolio */}
              <div className="featured-imagebox featured-imagebox-serviceboxes style1">
                {/* ttm-box-view-overlay */}
                <div className="ttm-box-view-overlay ttm-portfolio-box-view-overlay">
                  {/* featured-thumbnail */}
                  <div className="featured-thumbnail">
                    <Image
                      className="img-fluid"
                      src={service.img}
                      alt={service.title}
                      width={500}
                      height={336}
                    />
                  </div>
                </div>
                <div className="featured-content w-100 pb-20">
                  <div className="featured-title">
                    <h3 className="text-white text-center">{service.title}</h3>
                  </div>
                </div>
              </div>
              {/* featured-imagebox-portfolio end */}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
