import CTA, { MiniCTA } from '@/components/CTA/CTA';
import ContactForm from '@/components/ContactForm/ContactForm';
import PageHeader from '@/components/PageHeader/PageHeader';
import Head from 'next/head';
import Image from 'next/image';

export const DisabilityAndPrivateNursing = () => {
  const informations = [
    'Support coordination',
    'Home nursing care such as Medications, Wound care, Urinary catheter management, ventilator management, Subcutaneous injections; Tracheostomy management; Enteral Feeding management',
    'Household tasks',
    'Group centre activities',
    'Assist with personal activities',
    'Meal preparation',
    'Laundry/Bedding',
    'Ironing',
    'Shopping',
    'Domestic Cleaning',
    'Social outings',
    'Appointments',
    'Provide nursing care at Hospitals for your loved ones',
  ];

  return (
    <>
      <Head>
        <title>
          Medical Staff - NDIS | Disability | Home Care | Private Facilities
        </title>
        <meta
          content="Medical Staff is a leading recruitment agency in Australia for Nurses, Doctors and allied health.Actively serving in Sydney, Brisbane &amp; Melbourne - Apply Now."
          name="description"
          key="description"
        />
      </Head>
      <div className="site-main">
        <PageHeader
          title="NDIS | Disability | Home Care | Private Facilities"
          breadcrumb="Home/NDIS | Disability | Home Care | Private Facilities"
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
                      <span className="text-theme-SkinColor">
                        Registered Nurses
                      </span>
                    </h3>
                    <h2 className="title">
                      NDIS | Disability | Home Care | Private Facilities
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
                  Medical Staff can assist you with all your at home needs. We
                  are an approved NDIS provider but where Medical Staff is
                  different is we have the capability, flexibility, and access
                  to a huge pool of carer and qualified nursing staff to cater
                  for all your needs 7 days a week, 24 hours a day.
                </p>
              </div>
              <div className="col-md-8 pr-4">
                <p>
                  <br />
                  When you are looking for your new carer or nurse, the right
                  fit is everything! At Medical Staff, we have the staffing pool
                  to make sure you find that perfect fit and your satisfaction
                  and happiness with our staffing solution is our absolute
                  priority.
                  <br />
                  <br />
                  As an approved NDIS provider, our Agency can assist you or
                  your loved ones at hospitals and at home for all their daily
                  needs. Whether you are enrolled in a government funded NDIS
                  package or looking for a private Home Care arrangement, we can
                  help you with managing your fund to meet and exceed all your
                  needs.
                </p>
              </div>
              <div className="col-md-4 pt-4">
                <Image
                  src="/images/services/nurse-and-midwives.jpg"
                  alt="Registered Nurses & MidWives"
                  className="float-md-end image-fluid object-fit-cover object-position-center w-auto"
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

        <section className="ttm-row clearfix" id="information-section">
          <div className="container">
            {/* row */}
            <div className="row">
              <div className="col-lg-12">
                {/* section title */}
                <div className="section-title">
                  <div className="title-header">
                    <h2 className="title text-center">
                      As an NDIS and Community Care provider we can assist you
                      with
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

        <div className="mt-20 w-100 bg-theme-SkinColor">
          <div className="container  py-5 px-4 text-white">
            <h3 className="text-white">
              Bonus on offer for Rural & Regional Nursing with a bonus of $1000
              for every 8 weeks of contract you successfully complete.
            </h3>
            <span>* Conditions Apply</span>
          </div>
        </div>

        <ContactForm />

        <CTA />
      </div>
    </>
  );
};

export default DisabilityAndPrivateNursing;
