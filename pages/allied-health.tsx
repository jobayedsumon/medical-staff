import BonusOffer from '@/components/BonusOffer/BonusOffer';
import CTA, { MiniCTA } from '@/components/CTA/CTA';
import ContactForm from '@/components/ContactForm/ContactForm';
import PageHeader from '@/components/PageHeader/PageHeader';
import Head from 'next/head';
import Image from 'next/image';

export const AlliedHealth = () => {
  return (
    <>
      <Head>
        <title>Medical Staff | Allied Health</title>
      </Head>
      <div className="site-main">
        <PageHeader
          title="Allied Health"
          breadcrumb="Allied Health"
          backgroundUrl="/images/services/allied-health-cover.jpg"
        />
        <section className="ttm-row clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* section-title */}
                <div className="section-title title-style-center_text">
                  <div className="title-header">
                    <h3>
                      <span className="text-theme-SkinColor">Hospital</span>
                    </h3>
                    <h2 className="title">Allied Health</h2>
                  </div>
                </div>
                {/* section-title end */}
              </div>
            </div>
            {/* row */}
            <div className="row">
              <div className="col-12">
                <p>
                  Medical Staff is a national ISO 9001 accredited Recruitment
                  Agency with offices throughout Australia. ISO 9001
                  accreditation means our Agency is quality assurance accredited
                  – and we can guarantee our processes are compliant with the
                  best practices in the industry, and that our mission of
                  reliability, efficiency and integrity are ingrained in every
                  aspect of our operation.
                </p>
              </div>
              <div className="col-md-8 pr-4">
                <p>
                  For over 17 years, Medical Staff has been recruiting and
                  supplying Nursing staff. The growth of our extensive network
                  of Hospitals and healthcare partners across the country led to
                  a demand for Allied Health staffing, which has been included
                  in our organisation’s services for over a decade.
                  <br />
                  <br />
                  Medical Staff prides itself in supplying experienced, highly
                  skilled and specialised Allied Health staff across Australia,
                  to produce the best outcomes for both our healthcare
                  professionals and our partner facilities.
                </p>
              </div>
              <div className="col-md-4 pt-4">
                <Image
                  src="/images/services/allied-health.jpg"
                  alt="Allied Health"
                  className="float-md-end image-fluid object-fit-cover"
                  width={480}
                  height={518}
                />
              </div>
            </div>
            <div className="row mt-40">
              <MiniCTA
                title="Call Medical Staff on 1300 10 50 10 to discuss your needs with the relevant 
State Manager."
              />
            </div>
          </div>
        </section>

        <section className="ttm-row clearfix bg-theme-GreyColor ttm-bg">
          <div className="container">
            {/* row */}
            <div className="row">
              <div className="col-lg-12">
                {/* section title */}
                <div className="section-title">
                  <div className="title-header">
                    <h2 className="title text-center">Services</h2>
                  </div>
                  <div className="mt-10 title-desc text-center row">
                    <p className="col-md-8 mx-auto">
                      For any immediate or future staffing needs please contact
                      our team today. We have staff available for day to day
                      booking or for future advance booking to cover your
                      roster.
                      <br />
                      <br />
                      Call us on 1300 10 50 10 to speak with our friendly
                      allocations team who can assist you in finding an
                      experienced, motivated and qualified healthcare
                      professionals and allied health staff to fit your needs.
                      <br />
                      <br />
                      If you are a current client, please feel free to call us
                      24/7 or make an online booking
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ttm-row clearfix ttm-bg">
          <div className="container">
            {/* row */}
            <div className="row">
              <div className="col-lg-12">
                {/* section title */}
                <div className="section-title">
                  <div className="title-header">
                    <h2 className="title text-center">Our Mission</h2>
                  </div>
                  <div className="mt-10 title-desc row text-center">
                    <p className="col-md-8 mx-auto">
                      At Medical Staff our mission is 100% satisfaction of our
                      clients. We have been successful in achieving this by our
                      strict screening of candidates, compliances and offering
                      only qualified and experienced staff. Our organisation
                      recruits and places according to our client’s needs using
                      tailored service solutions and a dedicated Account manager
                      as your one-stop-shop for all staffing needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ttm-row clearfix bg-theme-GreyColor ttm-bg">
          <div className="container">
            {/* row */}
            <div className="row">
              <div className="col-lg-12">
                {/* section title */}
                <div className="section-title">
                  <div className="title-header">
                    <h2 className="title text-center">Register</h2>
                  </div>
                  <div className="mt-10 title-desc text-center row">
                    <p className="col-md-8 mx-auto">
                      Please feel free to contact us if you have any queries or
                      to join Medical Staff Nursing Agency as a client.
                      <br />
                      <br />
                      To request for more information about our services or
                      registration please contact our team or send us an email
                      at bookings@medicalstaff.com.au
                      <br />
                      <br />
                      Call Medical Staff on 1300 10 50 10 to discuss your needs
                      with the relevant State Manager.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BonusOffer />
        <ContactForm />
        <CTA />
      </div>
    </>
  );
};

export default AlliedHealth;
