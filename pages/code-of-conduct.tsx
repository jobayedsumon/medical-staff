import BonusOffer from '@/components/BonusOffer/BonusOffer';
import CTA from '@/components/CTA/CTA';
import ContactForm from '@/components/ContactForm/ContactForm';
import JobByLocation from '@/components/JobByLocation/JobByLocation';
import PageHeader from '@/components/PageHeader/PageHeader';
import Head from 'next/head';

export const CodeOfConduct = () => {
  const informations = [
    {
      title: 'Integrity',
      description:
        'Conduct themselves in a professional manner in accordance with the standard guidelines for clinical practice',
    },
    {
      title: 'Behave Ethically',
      description:
        "Do not accept gifts or any monetary amount from a patient or client, or fail to disclose a patient / client's intention to make such a gift or item of monetary amount",
    },
    {
      title: 'Punctuality',
      description:
        'Before the commencement of each shift, all nurses are expected to allow sufficient time to familiarize themselves with the layout of their work area and the safety rules and regulations of the hospital, ensuring they report to the person in charge',
    },
    {
      title: 'Professional attitude',
      description:
        'Establish and maintain a professional attitude and manner which is in keeping with the image of Medical Staff and which will enhance their own image and the nursing profession as a whole',
    },
    {
      title: 'Smoking',
      description:
        'Considered unacceptable inside premises of many hospitals and facilities. Ensure to follow the facility policy on smoking.',
    },
    {
      title: 'Dress Code and Personal Hygiene',
      description:
        'Ensure that the Medical Staff uniform code has been followed by wearing the uniform provided by Medical Staff and displaying their agency ID card at all times. All uniforms must be clean and ironed, and personal hygiene must be attended to. ID badge must be worn at all times.',
    },
    {
      title: 'Commitment',
      description:
        'After accepting a shift, 100% commitment is expected from the Medical Staff Nurse. If a Nurse needs to cancel a shift, 48 hours’ notice is required. Additionally, if cancelling due to ill health, a certified copy of the Medical Certificate is required to be forwarded to the hospital and the original Certificate is to be forwarded to Medical Staff. If cancellation of a shift is due to personal circumstances/accidents, written documentation must be provided to Medical Staff explaining the situation. This documentation will be forwarded to the hospital',
    },
    {
      description:
        "Not permitted to witness any patient / client's personal documents such as a Will or Power of Attorney and not permitted to be named as an Executor or beneficiary of a patient / client's Will or Testament",
    },
    {
      description: "Abide by the hospital's procedures and policies",
    },
    {
      description:
        '  Familiarize themselves with the work place rules such as parking, meal breaks and rest areas',
    },
    {
      description:
        "Satisfy the needs of Medical Staff's clients to the highest standard, based on their training and competence. Client satisfaction is of the highest priority to Medical Staff",
    },
    {
      description:
        "Establish a professional relationship with fellow nurses and management so as to ensure the highest quality of patient care, and representing Medical Staff's core values",
    },
    {
      description:
        "Ensure that for the whole duration of the shift, they comply with Medical Staff's Professional Code of Conduct, adhering to the rules and regulations of Medical Staff’s clients",
    },
    {
      description:
        'Ensure that all timesheets have been signed by the authorised person before leaving and sent to Medical Staff every Monday',
    },
    {
      description:
        'Whilst on a shift, current Registration Certificates will be in their possession at all times',
    },
    {
      description:
        'Whilst on duty, mobile phone use is prohibited. Any usage should be made in strict accordance with hospital guidelines',
    },
    {
      description:
        "Confidentiality is required at all times, regarding medical staff operations, and those of their client's and patient’s personal details.",
    },
    {
      description:
        'Medical Staff Nursing Assistants are not allowed to administer medication in any form whatsoever',
    },
    {
      description:
        'Consumption of alcohol is considered unacceptable behaviour whether prior to, or at the time of bookings or when presenting for duty.',
    },
    {
      description:
        'In relation to late cancellations, Nurses may risk exclusion from our Agency list if no reasonable reason is provided. This also applies to Nurses who accept shifts and fail to complete the shift or do not show up for the shift. Punctuality, attendance and completion of a shift accepted by the Agency Nurse is taken seriously and any situations that arise will be dealt with accordingly.',
    },
    {
      description:
        "Nurses who are not willing or refuse to comply with the agency's Code of Conduct are compromising Medical Staff's reputation and are subject to immediate exclusion from our Agency list.",
    },
  ];

  return (
    <>
      <Head>
        <title>Medical Staff | Code of Conduct</title>
      </Head>
      <div className="site-main">
        <PageHeader
          title="Code of Conduct"
          breadcrumb="Code of Conduct"
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
                      <span className="text-theme-SkinColor">Hospital</span>
                    </h3>
                    <h2 className="title">Medical Staff Code Of Conduct</h2>
                  </div>
                </div>
                <div className="title-desc">
                  <p>
                    In order to ensure that we maintain our high-performance
                    levels, we expect that our Nurses comply with the following
                    criteria which aims at providing high quality service to our
                    clientele and increasing our Nurses skills and abilities to
                    ensure further shifts.
                  </p>
                </div>

                {/* section-title end */}
              </div>
            </div>
            {/* row */}
            <div className="mt-40 row">
              <div className="col-lg-12">
                {/* section title */}
                {/* section title end */}
                <div className="mb-35">
                  <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor text-theme-DarkColor">
                    {informations.map((info, idx) => (
                      <li key={idx}>
                        <i className="far fa-check-circle"></i>
                        <div className="ttm-list-li-content">
                          {info.title && <h6>{info.title}</h6>}
                          <p className="text-muted">{info.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BonusOffer title="Please ensure that the guidelines above are adhered to otherwise you may risk exclusion from our Agency." />

        <section className="ttm-row portfolio-section clearfix">
          <div className="row">
            <div className="container">
              <div className="col-lg-12">
                <div className="section-title title-style-center_text">
                  <h2 className="title">Uniform</h2>
                  <p>
                    Strict adherence to the clothing criteria outlined below
                    must apply. Medical Staff's uniform policy is based on:
                    Medical Staff's corporate image
                    <br />
                    Hospital clients' expectations regarding what Medical Staff
                    Agency Staff wear, and Safety requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 bg-theme-GreyColor  mt-10 pt-50 pb-50 pr-60">
              <div className="row d-flex justify-content-end">
                <div className="px-4 px-lg-0 col-lg-8">
                  <h4 className="title">Registered Nurses/ Enrolled Nurses</h4>
                  <p>
                    Medical Staff personnel wear the Medical Staff shirt
                    uniform, with black trousers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-10 pt-50 pb-50 pl-60 pl-lg-20">
              <div className="row">
                <div className="px-4 px-lg-0 col-lg-8">
                  <h4 className="title">AINs</h4>
                  <p>
                    Medical Staff AINs are required to wear black trousers with
                    the blue uniform provided by Medical Staff.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-lg-9 pt-50 pb-50">
              <div className="container">
                <h4 className="title">All Staff:</h4>
                <p>
                  Shorts, tracksuit pants, jeans and cargo trousers are not
                  acceptable. Suitable duty shoes with enclosed toes are
                  required. Birkenstocks, joggers, sand-shoes and sandals are
                  not acceptable footwear. Work inappropriate sneakers, trainers
                  and T-shirts are also not acceptable.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="ttm-row portfolio-section clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title title-style-center_text">
                  <div className="title-header">
                    <h3>Find Job Based on your Location</h3>
                    <h2 className="title">
                      <span className="text-theme-SkinColor">Jobs at</span>{' '}
                      Different Places
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            {/* row */}
            <JobByLocation />
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

export default CodeOfConduct;
