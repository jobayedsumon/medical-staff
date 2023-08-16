import AccreditationSection from '@/components/Accrediation/Accrediation';
import CTA from '@/components/CTA/CTA';
import ContactForm from '@/components/ContactForm/ContactForm';
import JobByLocation from '@/components/JobByLocation/JobByLocation';
import PageHeader from '@/components/PageHeader/PageHeader';
import Head from 'next/head';
import Image from 'next/image';
import GCC from '@/components/Accrediation/images/gcc.png';
import NDIS from '@/components/Accrediation/images/ndis.png';

export const AboutUs = () => {
  return (
    <>
      <Head>
        <title>
          Medical Staff | Nursing Agency &amp; Locum Doctors- About Us
        </title>
        <meta
          content="We are a medical and nursing employment Agency placing LOCUM Doctors, Registered Nurses and Midwifes and En's in private and public hospitals."
          name="description"
          key="description"
        />
        <meta
          name="keywords"
          content="health,medicalstaff,medical,saff,jobs,looking for a job,local job search site,recruitment,nursing vacancy,doctors,nurses,Australia,Sydney,Brisbane,Melbourne"
          key="keywords"
        />
      </Head>
      <div className="site-main">
        <PageHeader
          title="about us"
          breadcrumb="about"
          backgroundUrl="/images/about-us/cover-image.png"
        />
        <section className="ttm-row contact-section clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* section-title */}
                <div className="section-title title-style-center_text">
                  <div className="title-header">
                    <h3>
                      Welcome to{' '}
                      <span className="text-theme-SkinColor">
                        Medical Staff
                      </span>{' '}
                    </h3>
                    <h2 className="title">
                      <span className="text-theme-SkinColor">
                        Medical and Nursing
                      </span>{' '}
                      Employment Agency
                    </h2>
                  </div>
                </div>
                {/* section-title end */}
              </div>
            </div>
            {/* row */}
            <div className="row">
              <div className="col-12">
                <p>
                  Welcome to Medical Staff, a leading medical and nursing
                  employment agency with offices throughout Australia. We
                  specialize in placing registered nurses, midwives, and ENs in
                  both private and public hospitals. Our ISO 9001 accreditation
                  and preferred supplier agreements with hospitals make us a
                  trusted partner for clients and job seekers alike.
                  <br />
                  <br />
                </p>
              </div>
              <div className="col-md-8">
                <p>
                  We understand that finding the right job can be challenging,
                  which is why we offer a wide range of work opportunities in
                  both public and private hospitals across Australia. As equal
                  opportunity employers, we welcome nurses from diverse
                  backgrounds to apply. Whether you're a backpacker nurse on a
                  work and holiday visa or a student nurse looking for part-time
                  work, we have opportunities for you. For those seeking
                  sponsorship, Medical Staff is approved to sponsor nurses
                  (Conditions Apply).
                  <br />
                  <br />
                  Our unique selling proposition lies in our personalized
                  approach to staffing. We believe in getting to know our
                  clients and candidates on a personal level to ensure the best
                  fit for all parties involved. But don't just take our word for
                  it! Our satisfied clients and employees have shared their
                  experiences with us through testimonials, which you can read
                  on our website.
                </p>
              </div>
              <div className="col-md-4">
                <Image
                  src="/images/about-us/agency.png"
                  alt="about-us"
                  className="float-md-end image-fluid"
                  width={420}
                  height={420}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="ttm-row padding_bottom_zero-section bg-layer-equal-height mt_30 mt_lg-60 clearfix">
          <div className="p-0">
            <div className="row g-0">
              <div className="col-lg-8">
                <div className="px-5 ttm-bg ttm-bg bg-theme-GreyColor ttm-col-bgimage-yes col-bg-img-five ttm-left-span spacing-3">
                  <div className="row d-flex justify-content-center">
                    <div className="col-12 col-lg-8">
                      {/* section title  */}
                      <div className="section-title">
                        <div className="title-header">
                          <h3>
                            Our <span className="text-primary">Story</span>
                          </h3>
                        </div>
                        <div className="title-desc">
                          <p>
                            Our story began with a passion for providing highly
                            skilled, talented, and specialized nurses to
                            national hospitals around Australia. At Medical
                            Staff, we're committed to finding the best match for
                            our clients and employees. Our dedicated team of
                            professionals work tirelessly to ensure that we
                            provide a high-quality service that meets our
                            clients' needs and expectations.
                          </p>
                        </div>
                      </div>
                      {/* section title end  */}
                      <div className="row g-0 d-inline-flex ttm-vertical_sep pb-90 pb-lg-0">
                        <div className="col">
                          <div className="d-inline-block pt-10 pb-10 pr-60 pr-md-30">
                            <Image className="img-fluid " src={GCC} alt="GCC" />
                          </div>
                        </div>
                        <div className="col">
                          <div className="d-inline-block pt-10 pb-10 pl-60 pl-md-30">
                            <Image
                              className="img-fluid"
                              src={NDIS}
                              alt="NDIS"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                {/* col-img-img-six */}
                <div className="ttm-bg ttm-col-bgimage-yes col-bg-img-six ttm-right-span z-index-2 ml_120 ml_lg-0">
                  <div
                    className="ttm-col-wrapper-bg-layer ttm-bg-layer"
                    style={{
                      backgroundImage:
                        'url("/images/about-us/story-section.png")',
                    }}
                  ></div>
                  <div className="layer-content"></div>
                  <Image
                    className="img-fluid col-bg-img-res"
                    src="/images/about-us/story-section.png"
                    alt="bgimage"
                    height={100}
                    width={100}
                  />
                </div>
                {/* col-img-bg-img-six end */}
              </div>
            </div>
            {/* row end */}
          </div>
        </section>

        <AccreditationSection />
        <section className="ttm-row portfolio-section clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title title-style-center_text">
                  <div className="title-header">
                    <h3>
                      Find Jobs in
                      <span className="text-theme-SkinColor"> all State</span>
                    </h3>
                    <h2 className="title">
                      Jobs Available in Different States
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <JobByLocation />
          </div>
        </section>

        {/* contact-section */}
        <ContactForm />

        {/* contact-section end */}

        <CTA />
      </div>
    </>
  );
};

export default AboutUs;
