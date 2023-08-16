import CTA, { MiniCTA } from '@/components/CTA/CTA';
import ContactForm from '@/components/ContactForm/ContactForm';
import PageHeader from '@/components/PageHeader/PageHeader';
import Head from 'next/head';

export const CodeOfConduct = () => {
  const criterias = [
    'A copy of your CV',
    '2 Current Reference Checks (Please make sure names are provided on a separate sheet of paper as well as your CV), please also warn your referees in advance as a call will be made to them within an hour of our meeting.',
    'Tax File Number',
    'Current work right visa/status',
    'Statement of service if you have. If not we give you a stat Dec to fill up',
    'Working with Children Check current number or receipt number (if you do not have it we can help you to get one)',
    'Your current AHPRA Registration Card if RN, EEN or EN and nursing qualification/certificate',
    "Your Birth Certificate or Passport, Driver's License, Medicare card, Bankcard (100 points ID)",
    'Your Post-Graduate Certificate or other qualifications (if applicable)',
    '1 Passport Photo (For making your ID)',
    'Vaccination Card or serology result (Our constant will notify you the details as per each state/Client requirements)',
    'Student Card (Applicable for AIN-UG)',
    'Transcripts from University (Applicable for AIN-UG)',
    'CER III Certificate, Aged Care/Acute Care',
    'Superannuation Details',
    'Banking Details',
    "Australian National Police Check (If you don't have one we can help you to get one)",
    "Certificate of Attendance of Mandatory Training (CPR, Infection control, Manual Handling, Fire Safety, Elderly Abuse) (If you don't have one we can help you to get one)",
  ];

  return (
    <>
      <Head>
        <title>Medical Staff - Nurses Interview Criteria</title>
      </Head>
      <div className="site-main">
        <PageHeader
          title="Interview Criteria"
          breadcrumb="Interview Criteria"
          backgroundUrl="/images/expectation-cover.png"
        />
        <section className="ttm-row clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* section-title */}
                <div className="section-title title-style-center_text">
                  <div className="title-header">
                    <h2 className="title">
                      What you need to bring to your interview
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            {/* row */}
            <div className="mt-40 row">
              <div className="col-lg-12">
                {/* section title */}
                {/* section title end */}
                <div className="mb-35">
                  <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor text-theme-DarkColor">
                    {criterias.map((criteria, idx) => (
                      <li key={idx}>
                        <i className="far fa-check-circle"></i>
                        <div className="ttm-list-li-content">
                          <p className="text-muted">{criteria}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row">
              <MiniCTA />
            </div>
          </div>
        </section>

        <ContactForm />

        {/* contact-section end */}

        <CTA />
      </div>
    </>
  );
};

export default CodeOfConduct;
