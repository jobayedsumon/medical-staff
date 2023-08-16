import BonusOffer from '@/components/BonusOffer/BonusOffer';
import CTA from '@/components/CTA/CTA';
import ContactForm from '@/components/ContactForm/ContactForm';
import PageHeader from '@/components/PageHeader/PageHeader';
import Head from 'next/head';
import Image from 'next/image';

export const NurseAgent = () => {
  return (
    <>
      <Head>
        <title> Medical Staff | Agency Nurse </title>
      </Head>
      <div className="site-main">
        <PageHeader
          title="Why become an Agency Nurse?"
          breadcrumb="Why become an Agency Nurse?"
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
                      <span className="text-theme-SkinColor">Useful Links</span>
                    </h3>
                    <h2 className="title">Why become an Agency Nurse?</h2>
                  </div>
                </div>
                <div className="title-desc">
                  <p className="text-center">
                    The <span className="text-theme-SkinColor">Top 5</span>{' '}
                    Reasons according to our Nurses
                  </p>
                </div>

                {/* section-title end */}
              </div>
            </div>
          </div>
        </section>

        <section className="ttm-row about-section bg-layer-equal-height clearfix">
          <div className="container">
            {/* row */}
            <div className="row g-0">
              <div className="col-md-7">
                <div className="pb-70 pb-md-50 pr-20 pr-md-0">
                  {/* section title */}
                  <div className="section-title">
                    <div className="title-header">
                      <h2 className="title">1. Flexibility</h2>
                    </div>
                    <div className="title-desc">
                      <p>
                        By becoming an Agency Nurse, you have the flexibility to
                        pick the days you want to work – allowing you to
                        prioritise a young family, work Agency shifts around
                        your primary workplace, travel and accommodate your
                        schedule. Many of our
                        <br />
                        <br />
                        Agency Nurses organise their shifts around school
                        holidays, day-care schedules, and the other commitments
                        in their lives. If you are undertaking further study and
                        education, you can schedule your shifts around class
                        timetables.
                        <br />
                        <br />
                        The flexibility of Agency work also includes picking the
                        timings of shifts that suit you and locations that are
                        most convenient for you.
                        <br />
                        <br />
                        Shifts can be booked in advance or close to the time.
                        Our online rostering system lets you update your
                        availabilities, show interest in shifts, and view your
                        roster, all on your phone or computer, while on the go.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="col-bg-img-one ttm-col-bgimage-yes ttm-bg">
                  <div
                    className="ttm-col-wrapper-bg-layer ttm-bg-layer"
                    style={{
                      backgroundImage: 'url(/images/agency-nurse/image01.png)',
                      backgroundSize: 'contain',
                    }}
                  ></div>
                  <div className="layer-content"></div>
                  <Image
                    src="/images/agency-nurse/image01.png"
                    className="img-fluid col-bg-img-res"
                    alt="bgimage"
                    width={1500}
                    height={1200}
                  />
                </div>
                {/* col-img-bg-img-one end */}
              </div>
            </div>
          </div>
        </section>
        <section className="ttm-row about-section bg-theme-GreyColor bg-layer-equal-height clearfix">
          <div className="container">
            <div className="row g-0">
              <div className="col-md-5">
                {/* col-img-img-two */}
                <div className="col-bg-img-two ttm-col-bgimage-yes ttm-bg mt-md-50">
                  <div
                    className="ttm-col-wrapper-bg-layer ttm-bg-layer"
                    style={{
                      backgroundImage: 'url(/images/agency-nurse/image02.png)',
                    }}
                  ></div>
                  <div className="layer-content"></div>
                  <Image
                    src="/images/agency-nurse/image02.png"
                    className="img-fluid col-bg-img-res"
                    alt="bgimage"
                    width={2500}
                    height={1200}
                  />
                </div>
                {/* col-img-bg-img-two end */}
              </div>
              <div className="col-md-7">
                <div className="pt-70 pt-md-50 pl-70 pl-md-0">
                  {/* section title */}
                  <div className="section-title">
                    <div className="title-header">
                      <h2 className="title">2. Experience</h2>
                    </div>
                    <div className="title-desc">
                      <p>
                        Agency Nursing is a fantastic way to gain broad and
                        diverse experience and develop your CV.
                        <br />
                        <br />
                        Planning to apply for a management job in the city and
                        still don’t have enough experience? Rural nursing gives
                        you the experience of a lifetime! Experience a new
                        culture and lifestyle all while gaining new specialty
                        skills before coming back to apply for that dream
                        management position on your return.
                        <br />
                        <br />
                        Work in multiple departments and Hospitals with exposure
                        to new technologies, equipment, and processes has helped
                        improved the resume and competency of many of our
                        Nurses, giving them the edge in their next job
                        interview. By working as an Agency Nurse, you can work
                        at the busiest Hospital in the state one day, and the
                        smallest the next, all based on the skills and
                        experience you seek to develop.
                        <br />
                        <br />
                        Speak with our friendly team who can help advise which
                        Agency opportunities best suit your goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* row end */}
          </div>
        </section>
        <section className="ttm-row about-section bg-layer-equal-height clearfix">
          <div className="container">
            {/* row */}
            <div className="row g-0">
              <div className="col-md-7">
                <div className="pb-70 pb-md-50 pr-20 pr-md-0">
                  {/* section title */}
                  <div className="section-title">
                    <div className="title-header">
                      <h2 className="title">3. Travel</h2>
                    </div>
                    <div className="title-desc">
                      <p>
                        Medical Staff works nationwide with over 1000+
                        healthcare clients across the country, in metropolitan,
                        regional and rural areas. We work with Public and
                        Private Hospitals, Aged Care, Homecare and Private
                        Patients, Disability Care and NDIS, Universities,
                        medical centres, vaccination services, community health
                        centres and more.
                        <br />
                        <br />
                        Agency Nursing provides you the opportunity to work and
                        travel! Organise your shifts around where you want to
                        travel and take advantage of great travel perks and
                        included accommodation to fund your next adventure!
                        Accommodation is provided by our clients in regional and
                        rural areas. This provides you with a huge saving while
                        travelling Australia. You can enjoy the scenery and bush
                        to coast lifestyle while working in the beautiful
                        landscapes Australia has on offer.
                        <br />
                        <br />
                        On top of that – Medical Staff currently has our
                        Regional & Rural Nursing bonus on offer, with a $1000
                        additional bonus paid to our Nurses for every eight
                        weeks of regional or rural placements completed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                {/* col-img-img-one */}
                <div className="col-bg-img-one ttm-col-bgimage-yes ttm-bg">
                  <div
                    className="ttm-col-wrapper-bg-layer ttm-bg-layer"
                    style={{
                      backgroundImage: 'url(/images/agency-nurse/travel.jpg)',
                    }}
                  ></div>
                  <div className="layer-content"></div>
                  <Image
                    height={1200}
                    width={2500}
                    src="/images/agency-nurse/travel.jpg"
                    className="img-fluid col-bg-img-res"
                    alt="bgimage"
                  />
                </div>
                {/* col-img-bg-img-one end */}
              </div>
            </div>
          </div>
        </section>
        <section className="ttm-row about-section bg-theme-GreyColor bg-layer-equal-height clearfix">
          <div className="container">
            <div className="row g-0">
              <div className="col-md-5">
                {/* col-img-img-two */}
                <div className="col-bg-img-two ttm-col-bgimage-yes ttm-bg mt-md-50">
                  <div
                    className="ttm-col-wrapper-bg-layer ttm-bg-layer"
                    style={{
                      backgroundImage: 'url(/images/agency-nurse/pay.jpg)',
                    }}
                  ></div>
                  <div className="layer-content"></div>
                  <Image
                    src="/images/agency-nurse/pay.jpg"
                    className="img-fluid col-bg-img-res"
                    alt="bgimage"
                    width={2500}
                    height={1200}
                  />
                </div>
                {/* col-img-bg-img-two end */}
              </div>
              <div className="col-md-7 pr-20">
                <div className="pt-70 pt-md-50 pl-70 pl-md-0">
                  {/* section title */}
                  <div className="section-title">
                    <div className="title-header">
                      <h2 className="title">4. Impressive Pay Rates</h2>
                    </div>
                    <div className="title-desc">
                      <p>
                        Impressive pay rates are one of the most well-known
                        perks to Agency Nursing. Many Nurses look to Agency
                        Nursing when they are trying to make extra cash. Agency
                        nurses enjoy higher rates than most equivalent permanent
                        positions, without even considering the additional
                        flexibilities and other conveniences that come along
                        with it.
                        <br />
                        Enjoy elevated, casual hourly rates and additional
                        penalties for night shifts, weekends, public holidays
                        and more.
                        <br />
                        Medical Staff provides you with competitive pay rates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* row end */}
          </div>
        </section>
        <section className="ttm-row about-section bg-layer-equal-height clearfix">
          <div className="container">
            {/* row */}
            <div className="row g-0">
              <div className="col-md-7">
                <div className="pb-70 pb-md-50 pr-20 pr-md-0">
                  {/* section title */}
                  <div className="section-title">
                    <div className="title-header">
                      <h2 className="title">
                        5. Find out your next career steps
                      </h2>
                    </div>
                    <div className="title-desc">
                      <p>
                        Agency Nursing is the perfect way to explore your
                        options and trial your career options.
                        <br />
                        <br />
                        Looking to move regional? Considering working in the
                        Private system or Disability care, for example?
                        <br />
                        <br />
                        Or looking to take some time off? Agency work allows you
                        to keep up your clinical experience and requirements to
                        maintain your clinical registration without having to
                        commit to regular work. Agency Nursing is also a great
                        option for our semi-retired nurses who enjoy variety and
                        flexibility.
                        <br />
                        <br />
                        Agency Nursing is also a fantastic networking avenue.
                        Exposing yourself to multiple Departments and Hospitals
                        or Facilities, you can easily gain new references and
                        build your reputation as a great asset to the team!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                {/* col-img-img-one */}
                <div className="col-bg-img-one ttm-col-bgimage-yes ttm-bg">
                  <div
                    className="ttm-col-wrapper-bg-layer ttm-bg-layer"
                    style={{
                      backgroundImage: 'url(/images/agency-nurse/image03.png)',
                    }}
                  ></div>
                  <div className="layer-content"></div>
                  <Image
                    src="/images/agency-nurse/image03.png"
                    className="img-fluid col-bg-img-res"
                    alt="bgimage"
                    width={2500}
                    height={1200}
                  />
                </div>
                {/* col-img-bg-img-one end */}
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

export default NurseAgent;
