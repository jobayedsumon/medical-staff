import BonusOffer from '@/components/BonusOffer/BonusOffer';
import CTA, { MiniCTA } from '@/components/CTA/CTA';
import ContactForm from '@/components/ContactForm/ContactForm';
import PageHeader from '@/components/PageHeader/PageHeader';
import ReferAndEarn from '@/components/ReferAndEarn/ReferAndEarn';
import { callerLink } from '@/utils/caller';
import Head from 'next/head';
import Image from 'next/image';

export const Vaccination = () => {
  return (
    <>
      <Head>
        <title>Medical Staff | Vaccination Services</title>
      </Head>
      <div className="site-main">
        <PageHeader
          title="Vaccination Services"
          breadcrumb="Vaccination Services"
          backgroundUrl="/images/services/vaccination-cover-img.jpg"
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
                    <h2 className="title">Vaccination Services</h2>
                  </div>
                </div>
                {/* section-title end */}
              </div>
            </div>
            {/* row */}
            <div className="row">
              <div className="col-12">
                <p>
                  Medical Staff is an approved Commonwealth vaccination provider
                  for any and all available vaccines including COVID-19.
                </p>
              </div>
              <div className="col-md-8 pr-4">
                <p>
                  Our service caters for all your vaccination needs for your
                  staff.
                  <br />
                  <br />
                  Contact our organisation for all your vaccination needs for
                  your staff. Medical Staff is a provider of vaccination
                  services to companies within a diverse range of industries
                  including but not limited to healthcare, schools,
                  construction, retail, corporate and more.
                  <br />
                  <br />
                  Medical Staff will organise a Nurse and/or Doctor to visit
                  your facility on the days that suit you and your staff, and
                  all equipment involving the storage and transport of the
                  vaccines is taken care of by our staff.
                  <br />
                  <br />
                  Our organisation is also able to assist with other COVID-19
                  related services including PCR and RAT testing.
                  <br />
                  <br />
                  Call our friendly team on 1300 10 50 10 for all your
                  vaccination needs and enquiries.
                </p>
              </div>
              <div className="col-md-4 pt-4">
                <Image
                  src="/images/services/vaccination.jpg"
                  alt="Vaccination"
                  className="float-md-end image-fluid"
                  width={480}
                  height={518}
                />
              </div>
            </div>
            <div className="row mt-40">
              <MiniCTA />
            </div>
          </div>
        </section>
        <section className="ttm-row bg-theme-GreyColor clearfix">
          <div className="container">
            {/* row */}
            <div className="row">
              <div className="col-lg-6">
                {/* section title */}
                <div className="section-title">
                  <div className="title-header">
                    <h2 className="title">Attention Registered Nurses:</h2>
                  </div>
                  <div className="title-desc">
                    <p>
                      We employ registered nurses with Immunization Certificates
                      as Team Leaders.
                      <br />
                      <br />
                      Nurses without immunization certification are welcome to
                      apply, as they can work under the supervision of an
                      immunization nurse.
                      <br />
                      <br />
                      Call Medical Staff on 1300 10 50 10 to find out more about
                      the opportunities in your area.
                    </p>
                  </div>
                  <a
                    className="mt-4 ttm-btn ttm-btn-size-lg ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor"
                    href={callerLink}
                  >
                    Call Us Now
                  </a>
                </div>
              </div>
              <div className="mt-lg-40 col-lg-6 col-md-9 col-sm-10 col-12 mx-auto">
                <div className="mr-40 mr-md-0 ml-20 ml-md-0 h-100">
                  <ReferAndEarn />
                </div>
              </div>
            </div>
            {/* row end */}
          </div>
        </section>
        <BonusOffer />

        {/* contact-section */}
        <ContactForm />

        <CTA />
      </div>
    </>
  );
};

export default Vaccination;
