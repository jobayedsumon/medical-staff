import CTA, { MiniCTA } from '@/components/CTA/CTA';
import ContactForm from '@/components/ContactForm/ContactForm';
import PageHeader from '@/components/PageHeader/PageHeader';
import ReferAndEarn from '@/components/ReferAndEarn/ReferAndEarn';
import { callerLink } from '@/utils/caller';
import Head from 'next/head';
import Image from 'next/image';

export const NursesAndMidWives = () => {
  const insights = [
    {
      title: 'Information in all States',
      link: '/services/nurses-and-midwives#information-section',
    },
    {
      title: 'Referral Bonus',
      link: '/services/nurses-and-midwives#facilitation-section',
    },
    {
      title: 'Facilitation',
      link: '/services/nurses-and-midwives#facilitation-section',
    },
    {
      title: 'Nurses Specialty',
      link: '/services/nurses-and-midwives#nurse-section',
    },
    {
      title: 'Contract Rural',
      link: '/services/nurses-and-midwives#rural-section',
    },
    {
      title: 'Recruitment',
      link: '/services/nurses-and-midwives#recruitment-section',
    },
    {
      title: 'Education',
      link: '/services/nurses-and-midwives#education-section',
    },
  ];

  const informations = [
    'Registered Nurses of all types (RN, EEN, AIN, PCA, PCW, PSA)',
    'Registered Midwives (antenatal, postnatal, delivery suite, special care nursery)',
    'Clinical Facilitators & Clinical Educators',
    'General Nursing (Medical & Surgical)',
    ' Mental Health Nurses ',
    'ICU Nurses',
    'Emergency Nurses',
    'Pediatric Nurses',
    'Theatre Nurses (scout, scrub, anesthetic, and recovery)',
    'Immunization Nurses',
    'Aged Care',
    'NDIS and Disability services',
    'Home care',
  ];

  const education = [
    'CPR',
    'Manual Healing',
    'WHS',
    'Fire Safety',
    'Infection Control',
    'Hand Hygiene',
    'Drug Calculation',
    'Elderly',
    'Theatre Nurses (scout, scrub, anesthetic, and recovery)',
    'Immunization Nurses',
    'Aged Care',
    'NDIS and Disability services',
    'Home care',
  ];

  return (
    <>
      <Head>
        <title>Medical Staff | Registered Nurses & MidWives</title>
      </Head>
      <div className="site-main">
        <PageHeader
          title="Registered Nurses & Midwives"
          breadcrumb="Registered Nurses & Midwives"
          backgroundUrl="/images/services/midwives-cover-img.jpg"
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
                    <h2 className="title">Registered Nurses & Midwives</h2>
                  </div>
                </div>
                {/* section-title end */}
              </div>
            </div>
            {/* row */}
            <div className="row">
              <div className="col-12">
                <p>
                  Medical Staff has a wide variety of positions available for
                  nurses in various areas ranging from General, Medical,
                  Surgical, Theatre, postnatal, antenatal, delivery suite,
                  Paediatrics, SCN, NICU, ICU, Anaesthetics, Recovery, Rehab,
                  Aged Care, Mental Health, Immunisation, Emergency Department
                  and all other type of wards. Medical Staff provides nurses
                  with a genuine work / life balance where you are given the
                  flexibility to choose your own shifts and determine your own
                  working schedule.
                </p>
              </div>
              <div className="col-md-8 pr-4">
                <p className="mt-3">
                  Our Nursing Agency leads the industry in innovation and
                  future-proofed technologies, including our online rostering
                  system which allows our staff by using their mobile or
                  computer to apply for shifts they like, lodge their
                  availability online, check their roster and monitor their
                  compliances expiry dates.
                  <br />
                  <br />
                  Medical Staff provides our nurses the opportunities to work in
                  a diverse set of locations Nationwide including both Private
                  and Public Hospitals, Aged Care, Universities, Vaccinations,
                  Medical Centres, NDIS and Disability, Home Care, Rural and
                  Regional facilities and more.
                  <br />
                  <br />
                  We ensure our nurses are well suited and skilled in their
                  various areas of work. We have work for all types of Nurses
                  and Midwives with different levels of experience.
                  <br />
                  <br />
                  Medical Staff Nursing Agency welcomes highly experienced
                  nurses as well as new graduates.
                </p>
              </div>
              <div className="col-md-4 pt-4">
                <Image
                  src="/images/services/nurse-and-midwives.jpg"
                  alt="Registered Nurses & MidWives"
                  className="float-md-end image-fluid"
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

        <section className="ttm-row bg-theme-GreyColor clearfix">
          <div className="container">
            {/* row */}
            <div className="row">
              <div className="col-lg-12">
                {/* section title */}
                <div className="section-title">
                  <div className="title-header">
                    <h2 className="title">Insights</h2>
                  </div>
                </div>
                <div className="mb-35">
                  <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor text-theme-DarkColor row">
                    {insights.map((insight, idx) => (
                      <li key={idx} className="col-12 col-md-6">
                        <i className="far fa-check-circle"></i>
                        <div className="ttm-list-li-content">
                          {insight.title}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ttm-row clearfix" id="information-section">
          <div className="container">
            {/* row */}
            <div className="row">
              <div className="col-lg-12">
                {/* section title */}
                <div className="section-title">
                  <div className="title-header">
                    <h2 className="title text-center">
                      Information in all States
                    </h2>
                  </div>
                  <div className="title-desc">
                    <p>
                      Medical Staff welcomes Nurses of general experience as
                      well as all specialty areas. As a leading provider
                      nationwide for
                      <strong className="text-black"> over 17 years</strong>,
                      our Agency is able to provide a vast array of working
                      locations and options that suit your experience and
                      skills.
                    </p>
                    <p className="text-soft-black">
                      These areas include but are not limited to:
                    </p>
                  </div>
                </div>
                {/* section title end */}
                <div className="mb-35">
                  <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor text-theme-DarkColor">
                    {informations.map((info, idx) => (
                      <li key={idx}>
                        <i className="far fa-check-circle"></i>
                        <div className="ttm-list-li-content">{info}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* row end */}
          </div>
        </section>

        <section
          className="ttm-row bg-theme-GreyColor facilitation-section clearfix"
          id="facilitation-section"
        >
          <div className="container">
            {/* row */}
            <div className="row">
              <div className="col-lg-6">
                {/* section title */}
                <div className="section-title">
                  <div className="title-header">
                    <h2 className="title">Facilitation</h2>
                  </div>
                  <div className="title-desc">
                    <p>
                      Medical Staff Nursing Agency pride itself for working with
                      many highly regarded universities and TAFE organisations
                      on national level for more than 10 years. We have a great
                      relationship and reputation among our clients which with
                      many are on exclusive level. This high level of engagement
                      was developed through our quality of services, quick
                      response times and ensuring nursing students of our
                      clients have experienced nursing staff supervising and
                      helping them with their clinical learning at all times.
                      <br />
                      <br />
                      Medical Staff is proud of our involvement in training the
                      next generation of Nurses and supporting the healthcare
                      industry in which we operate.
                      <br />
                      <br />
                      For more details and to talk to our National Clinical
                      Facilitation Team.
                    </p>
                  </div>
                </div>
                <a
                  className="ttm-btn ttm-btn-size-lg ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor"
                  href={callerLink}
                >
                  Call Us Now
                </a>
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

        <section className="ttm-row clearfix" id="rural-section">
          <div className="container">
            {/* row */}
            <div className="row">
              <div className="col-lg-12">
                {/* section title */}
                <div className="section-title">
                  <div className="title-header">
                    <h2 className="title text-center">
                      Rural & Regional Nursing Jobs
                    </h2>
                  </div>
                  <div className="title-desc">
                    <p className="text-center mx-auto sub-title">
                      Medical Staff is here to help you set up all your
                      compliances and guide you through all other paperwork
                      involved.
                    </p>
                    <p className="mt-3 text-soft-black">
                      Travel and enjoy sightseeing the beautiful regional and
                      rural areas of country Australia, while earning money and
                      gaining skills.
                      <br />
                      <br />
                      You can pick and choose Hospitals and LHDs of your choice.
                      Our friendly consultants will help you plan your
                      placements around your vision and goals. Nursing contracts
                      are available at all times running from a minimum of 4
                      weeks and can be set to 6 months or even more.
                      <br />
                      <br />
                      Enjoy the perks of free accommodation and travel
                      allowances. Your hourly rate is based on the casual rate
                      as per the public nursing award plus casual loading.
                      <br />
                      <br />
                      Medical Staff is here to help you set up all your
                      compliances and guide you through all other paperwork
                      involved.
                      <br />
                      <br />
                      Rural Nursing is also a fantastic way to gain experience
                      and skills that are difficult to acquire in metro setting.
                      Planning to apply for a management job in the city and
                      still don’t have enough experience? Rural nursing gives
                      you the experience of a lifetime! Experience a new culture
                      and lifestyle before coming back to apply for that dream
                      management position on your return.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* row end */}
          </div>
        </section>

        <div className="mt-20 w-100 bg-theme-SkinColor">
          <div className="container  py-5 px-4 text-white">
            <h3 className="text-white">
              Bonus on offer for Rural & Regional Nursing with a bonus of $1000
              for every 8 weeks of contract you successfully complete.
            </h3>
            <span>* Conditions Apply</span>
          </div>
        </div>

        <section className="ttm-row clearfix" id="information-section">
          <div className="container">
            {/* row */}
            <div className="row">
              <div className="col-lg-12">
                {/* section title */}
                <div className="section-title">
                  <div className="title-header">
                    <h2 className="title text-center">Education</h2>
                  </div>
                  <div className="title-desc">
                    <p>
                      Medical Staff prides itself on the provision of education
                      programs and opportunities for our staff to up skill and
                      develop professionally. Our education programs are
                      designed to keep you up to date with the latest practices
                      and help you advance your career.
                    </p>
                  </div>
                </div>
                {/* section title end */}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                {/* section title */}
                <div className="section-title">
                  <div className="title-desc">
                    <strong>
                      Medical Staff Nursing Agency helps you to meet your annual
                      mandatory training requirements in:
                    </strong>
                  </div>
                </div>
                <div className="mb-35">
                  <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor text-theme-DarkColor">
                    {education.map((info, idx) => (
                      <li key={idx}>
                        <i className="far fa-check-circle"></i>
                        <div className="ttm-list-li-content">{info}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-6 pb-4">
                <Image
                  src="/images/services/education.jpg"
                  alt="Registered Nurses & MidWives"
                  className="float-md-end image-fluid object-fit-cover"
                  width={480}
                  height={518}
                />
              </div>
            </div>
            <div className="row">
              Our education programs are delivered through a combination of
              online, in house and practical sessions held throughout the year
              by Medical Staff trainers and educators.
              <br />
              <br />
              Medical Staff organises online courses throughout the year as per
              our client requirements. We also conduct regular training sessions
              and run different courses in our offices or online to make sure
              our nurses comply with our client requirements (conditions apply).
              Additional programs are offered on topics such as Local Health
              District policies and procedures, orientation information and
              more.
              <br />
              <br />
              We offer training to overseas nurses who are new to the country.
            </div>
          </div>
        </section>

        <section className="ttm-row clearfix" id="recruitment">
          <div className="container">
            {/* row */}
            <div className="row">
              <div className="col-lg-12">
                {/* section title */}
                <div className="section-title">
                  <div className="title-header">
                    <h2 className="title text-center">Recruitment</h2>
                  </div>
                  <div className="title-desc">
                    <p className="mt-3 text-soft-black rural-content">
                      At Medical Staff, we help our Nursing Staff and Clients
                      with permanent roles by matching skills and experience of
                      our nurses with the requirements and needs of our
                      respective clients.
                    </p>
                    <p className="mt-3 text-soft-black rural-content">
                      Our expertise lies in personalised service and
                      consideration of all factors that are important to you –
                      location, convenience, role descriptions, rostering and
                      more.
                      <br />
                      <br />
                      <strong>
                        At Medical Staff, we value the satisfaction of our
                        clients and staff at all times.{' '}
                      </strong>
                      <br />
                      <br />
                      Our mission is to help the healthcare industry, patients
                      and communities across Australia with appropriate staffing
                      and quality service provision. Our key strength as
                      complimented by our client partners lies in our
                      proactivity, quick response and use of the best available
                      qualified staff to fill workforce shortages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* row end */}
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

export default NursesAndMidWives;
