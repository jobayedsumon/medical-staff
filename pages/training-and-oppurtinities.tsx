import CTA, { MiniCTA } from '@/components/CTA/CTA';
import ContactForm from '@/components/ContactForm/ContactForm';
import PageHeader from '@/components/PageHeader/PageHeader';
import ReferAndEarn from '@/components/ReferAndEarn/ReferAndEarn';
import Head from 'next/head';
import Image from 'next/image';

export const Education = () => {
  const informations = [
    'CPR',
    'Manual Handling',
    'WHS',
    'Fire safety',
    'Infection control',
    'Hand hygiene',
    'Drug calculation',
    'Elderly abuse (related to each state)',
    'NDIS orientation module + Effective Communication module',
    'Covid19 infection control + PPE modules',
    'Manual Handling',
    'First Aid + BLS/CPR',
    'HETI Modules - Hand Hygiene, Work Health Safety, Fire Safety, Infection control',
    'NDIS Modules (restrictive practices, and then behavioural support etcetera based on the participant)',
  ];

  return (
    <>
      <Head>
        <title>Training Opportunities and Ongoing Education</title>
      </Head>
      <div className="site-main">
        <PageHeader
          title="Training Opportunities and Ongoing Education"
          breadcrumb="Training Opportunities and Ongoing Education"
          backgroundUrl="/images/education-cover.png"
        />
        <section className="ttm-row clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* section-title */}
                <div className="section-title title-style-center_text">
                  <div className="title-header">
                    <h2 className="title">Training and Opportunity</h2>
                  </div>
                </div>
                <div className="title-desc">
                  <p>
                    Medical Staff prides itself on the provision of education
                    programs and opportunities for our staff to upskill and
                    develop professionally. Our education programs are designed
                    to keep you up to date with the latest practices and help
                    you advance your career. It is part of our mission to
                    empower our Nurses to remain up to date with innovations in
                    practice, continuing professional development requirements
                    and ongoing trainings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mb-60">
            <div className="row">
              <MiniCTA btnText="Send Inquiry" />
            </div>
          </div>
        </section>

        <section className="ttm-row clearfix">
          <div className="container">
            {/* row */}
            <div className="row">
              <div className="col-lg-12">
                {/* section title */}
                <div className="section-title">
                  <div className="title-header">
                    <h2 className="title text-center">
                      Medical Staff Nursing Agency helps you to meet your annual
                      mandatory training requirements in
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                {/* section title */}
                <div className="section-title">
                  <div className="title-desc">
                    <p>These areas include but are not limited to:</p>
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
                  <p className="pt-4">
                    and many more to ensure that our nurses maintain the highest
                    levels of competency, proficiency and practical safety as
                    per each state and different legislative requirements.
                  </p>
                </div>
              </div>
              <div className="mt-lg-40 col-lg-6 col-md-9 col-sm-10 col-12 mx-auto">
                <div className="mr-40 mr-md-0 ml-20 ml-md-0 h-100">
                  <div className="d-flex rounded overflow-hidden">
                    <ReferAndEarn />
                  </div>
                </div>
              </div>
            </div>
            {/* row end */}
          </div>
        </section>
        <section className="clearfix">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p>
                  Our education programs are delivered through a combination of
                  online, in house and practical sessions held throughout the
                  year by Medical Staff trainers and educators.
                  <br />
                  <br />
                  Medical Staff organizes online courses throughout the year as
                  per our client requirements. We also conduct regular training
                  sessions and run different courses in our offices or online to
                  make sure our nurses comply with our client requirements
                  (conditions apply). Additional programs are offered on topics
                  such as local LHD policies and procedures, orientation
                  information and more.
                  <br />
                  <br />
                  We also offer training to overseas nurses who are new to the
                  country. Training on ACFI is provided by our Aged Care
                  Educator on regular basis. Contact our team for further
                  information. Current nurses are contacted by our Education and
                  Compliances team on a regular basis to keep you up to date
                  with these requirements.
                  <br />
                  <br />
                </p>
              </div>
              <div className="col-md-6">
                <Image
                  src="/images/education.png"
                  alt="Education"
                  className="float-md-end image-fluid"
                  width={380}
                  height={432}
                />
              </div>
            </div>
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

export default Education;
