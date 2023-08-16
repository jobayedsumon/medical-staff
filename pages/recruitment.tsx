import BonusOffer from '@/components/BonusOffer/BonusOffer';
import CTA, { MiniCTA } from '@/components/CTA/CTA';
import ContactForm from '@/components/ContactForm/ContactForm';
import PageHeader from '@/components/PageHeader/PageHeader';
import Head from 'next/head';
import Image from 'next/image';

export const Recruitment = () => {
  return (
    <>
      <Head>
        <title>Medical Staff | Recruitment</title>
      </Head>
      <div className="site-main">
        <PageHeader
          title="Recruitment"
          breadcrumb="Recruitment"
          backgroundUrl="/images/services/recruitment-cover.jpg"
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
                    <h2 className="title">Permanent Recruitment</h2>
                  </div>
                </div>
                {/* section-title end */}
              </div>
            </div>
            {/* row */}
            <div className="row">
              <div className="col-12">
                <p>
                  At Medical Staff, we help our nursing staff and clients with
                  permanent roles by matching the skills, experience,
                  preferences, location and all the important attributes of our
                  nursing staff with the requirements and needs of our respected
                  clients. At Medical Staff we value the satisfaction of our
                  clients and staff at all times. We understand, in permanent
                  recruitment, the importance of a good fit for both parties.
                </p>
              </div>
              <div className="col-md-8 pr-4">
                <p>
                  Our recruitment processes are comprehensive and uphold the
                  highest quality standards. Compliance with best industry
                  practices and quality assurance is guaranteed through our
                  maintenance of the internationally benchmarked ISO 9001
                  accreditation status.
                  <br />
                  <br />
                  Our team also recognises the importance of assessing holistic
                  characteristics in addition to on-paper requirements,
                  including but not limited to interpersonal skills,
                  communication, professionalism, and reliability, to name a
                  few. Similarly, for our nursing staff, we make matches with
                  your circumstances and lifestyle in mind to find you a
                  solution that will stick!
                  <br />
                  <br />
                  Our mission is to help healthcare facilities across the nation
                  address their staffing needs with a high quality and adaptive
                  service. Our clients have always complemented us on their
                  satisfaction with our quick responses and helping them to
                  cover their vacancies with the best available qualified staff.
                </p>
              </div>
              <div className="col-md-4 pt-4">
                <Image
                  src="/images/services/recruitment.jpg"
                  alt="Recruitment"
                  className="float-md-end image-fluid object-fit-cover"
                  width={480}
                  height={518}
                />
              </div>
            </div>
            <div className="row mt-40">
              <MiniCTA
                title="Call Medical Staff on 1300 10 50 10 to discuss your needs with the relevant State Manager."
                btnText="Recruit Today"
              />
            </div>
          </div>
        </section>

        <BonusOffer />

        {/* contact-section */}
        <ContactForm />

        {/* contact-section end */}

        <CTA />
      </div>
    </>
  );
};

export default Recruitment;
