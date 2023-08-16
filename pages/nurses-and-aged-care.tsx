import CTA, { MiniCTA } from '@/components/CTA/CTA';
import ContactForm from '@/components/ContactForm/ContactForm';
import PageHeader from '@/components/PageHeader/PageHeader';
import Head from 'next/head';
import Image from 'next/image';

const NursesAndMidWives = () => {
  return (
    <>
      <Head>
        <title>Medical Staff | Nurses and Aged Care</title>
      </Head>
      <div className="site-main">
        <PageHeader
          title="Aged Care - Nursing Home"
          breadcrumb="Aged Care - Nursing Home"
          backgroundUrl="/images/services/midwives-cover-img.jpg"
        />
        <section className="ttm-row contact-section clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* section-title */}
                <div className="section-title title-style-center_text">
                  <div className="title-header">
                    <h3>
                      <span className="text-theme-SkinColor">Hospital</span>
                    </h3>
                    <h2 className="title">Aged Care </h2>
                  </div>
                </div>
                {/* section-title end */}
              </div>
            </div>
            {/* row */}
            <div className="row">
              <div className="col-12">
                <p>
                  Medical Staff has a large pool of registered nurses, EENs,
                  AINs and PCAs to support our Aged Care facility clients on a
                  national level – and we are always growing our Nursing pool.
                  Medical Staff during the COVID-19 pandemic has also been proud
                  to support the Australian healthcare industry and Aged Care
                  community, replacing isolating healthcare staff and providing
                  workforce surge staffing during their time of need. We were
                  also proud to continue our regular non-COVID services during
                  this time too and support ongoing health services during such
                  difficult times. Medical Staff has many available shifts for
                  our staff to pick and choose, and a wide variety of positions
                  available for nurses in various areas in metropolitan,
                  regional, and rural areas.
                </p>
              </div>
            </div>
            <div className="mt-3 row">
              <div className="col-md-8 pr-4">
                <p>
                  Medical Staff provides nurses with a genuine work / life
                  balance where you are given the flexibility to choose your own
                  shifts and determine your own working schedule. Benefit from
                  your choice of odd shifts to part- or full-time regular days.
                  Choose to work at a single Aged Care or Nursing Home facility
                  of your choice or enjoy the variety of working at multiple
                  facilities and locations. Our Nursing Agency believes in using
                  technology and innovation to create efficient and satisfying
                  solutions for our staff and clients. Medical Staff uses an
                  intelligent online rostering system which allows our staff to
                  apply for shifts they like, lodge availabilities, check their
                  roster, monitor their compliance expiry dates and more – all
                  on the go! Our technology supports both mobile and computer
                  devices.
                  <br />
                  <br />
                  We ensure our nurses are well suited and skilled in the
                  various areas of their work. Our Agency is committed to
                  supporting and empowering our nurses to do what they do best.
                  Education programs and the continuing professional development
                  of our staff are all top priorities in our service provision.
                  We have work for all types of nurses with different levels of
                  experience. Medical Staff Nursing Agency welcomes highly
                  experienced nurses as well as new graduates.
                  <br />
                  <br />
                </p>
              </div>
              <div className="col-md-4 pt-4">
                <Image
                  src="/images/services/aged-care.jpg"
                  alt="Registered Nurses & MidWives"
                  className="float-md-end image-fluid object-fit-cover"
                  width={427}
                  height={471}
                />
              </div>
            </div>
            <div className="row mt-40">
              <MiniCTA />
            </div>
          </div>
        </section>

        <ContactForm />

        <CTA />
      </div>
    </>
  );
};

export default NursesAndMidWives;
