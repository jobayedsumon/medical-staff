import BonusOffer from '@/components/BonusOffer/BonusOffer';
import CTA, { MiniCTA } from '@/components/CTA/CTA';
import ContactForm from '@/components/ContactForm/ContactForm';
import PageHeader from '@/components/PageHeader/PageHeader';
import { classNames } from '@/utils/class-names';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export const Expetations = () => {
  const code_of_conduct = [
    {
      title: 'Shift',
      img: '/images/cod/shift.png',
      description: (
        <>
          In relation to shifts we greatly appreciate it if our Nurses provide
          their availability by 1 week in advance. You may do so by filling out
          the online form or by contacting us.
          <br />
          <br />
          Medical staff will book you as per availability therefore make sure
          you stay available for dates you have provided.
          <br />
          <br />
          For advance booking: Those staff who are only working with Medical
          Staff will have priority over those who work with multiple agencies{' '}
        </>
      ),
    },
    {
      title: 'Availability Commitment',
      img: '/images/cod/availability-commitment.png',
      description: (
        <>
          After confirmation of a booked shift please give us plenty of notice
          if there is a need to cancel your shift, as this will place a great
          deal of pressure on the Nursing Unit Manager of the nominated hospital
          who will be busy with many other work commitments. Furthermore, it
          makes it difficult for the Hospitals to run smoothly if Agency staff
          do not show a commitment to their work.
          <br />
          <br />
          Medical Staff nursing employees are required to show a high level of
          commitment ensuring that they are present at all shifts they are
          booked for. Commitment of our Nursing staff is an important factor.
        </>
      ),
    },
    {
      title: 'Timesheets',
      img: '/images/cod/timesheet.png',
      description: (
        <>
          Timesheets must be taken with you to your shift and must completed and
          sent back to us every week by Monday before 10:30am. This allows us to
          correctly identify and clarify any issues that may occur. You may
          download a copy of the timesheet for use from the Forms page or use
          Quick Sign as per the requirements for your state of work (see
          Timesheets page on side bar menu). Make sure an authorised manager
          signs your timesheet for payment.
        </>
      ),
    },
    {
      title: 'Commitment',
      img: '/images/cod/commitment.png',
      description: (
        <>
          We expect that our staff to present themselves in a professional
          manner whilst on a shift. Also, we require that all staff ensure that
          they adhere to the Hospitals rules and regulations. Furthermore, we
          expect our staff to give their best whilst at work and ensure that
          they represent our agency in a manner which portrays hard work,
          integrity, and determination.
        </>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Medical Staff - Nurses Expectations</title>
        <meta
          content="Medical Staff is a leading nursing agency in Australia for Nurses, Doctors and allied health."
          name="description"
        />
      </Head>
      <div className="site-main">
        <PageHeader
          title="Expectation"
          breadcrumb="Expectation"
          backgroundUrl="/images/expectation-cover.png"
        />
        <section className="ttm-row clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* section-title */}
                <div className="section-title title-style-center_text">
                  <div className="title-header">
                    <h3>
                      <span className="text-theme-SkinColor">
                        Medical Staff
                      </span>
                    </h3>
                    <h2 className="title">Medical Staff Code Of Conduct</h2>
                  </div>
                </div>
                {/* section-title end */}
              </div>
            </div>
            {/* row */}
            <div className="row">
              <div className="col-12">
                <p>
                  In order to ensure that we maintain our high-performance
                  levels, we expect that our Nurses comply with the following
                  criteria which aims at providing high quality service to our
                  clientele and increasing our Nurses skills and abilities to
                  ensure further shifts.
                </p>
              </div>
            </div>
            <div className="row">
              {code_of_conduct.map((conduct, index) => (
                <div className="col-md-12" key={index}>
                  {/* featured-imagebox */}
                  <div
                    className={classNames(
                      'featured-imagebox featured-imagebox-services style1',
                      index % 2 === 0 ? '' : 'reverse'
                    )}
                  >
                    <div className="featured-thumbnail">
                      <Image
                        className="img-fluid"
                        src={conduct.img}
                        alt={conduct.title}
                        width={2100}
                        height={1200}
                      />
                    </div>
                    <div className="featured-content">
                      <div className="featured-title">
                        <h3>{conduct.title}</h3>
                      </div>
                      <div className="featured-desc">
                        <p>{conduct.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row mt-40 pb-40">
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
                    <h2 className="title text-center">Code of Conduct</h2>
                  </div>
                  <div className="mt-10 title-desc text-center">
                    <p>
                      Medical Staff recruits only the most highly professional
                      and skilled nurses available. In addition to our Nurses
                      treating their patients in a professional, caring and
                      respectful manner, Medical Staff nurses are also required
                      to work within the following guidelines:
                    </p>
                  </div>
                  <div className="flex-shrink-0 d-flex align-items-center justify-content-center pt-10">
                    <Link
                      className="ttm-btn ttm-btn-size-lg ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor"
                      href="/code-of-conduct"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BonusOffer />
        <ContactForm />

        {/* contact-section end */}

        <CTA />
      </div>
    </>
  );
};

export default Expetations;
