import CTA from '@/components/CTA/CTA';
import ContactForm from '@/components/ContactForm/ContactForm';
import PageHeader from '@/components/PageHeader/PageHeader';
import Head from 'next/head';

export const UsefulLinks = () => {
  const useful_links = [
    { label: 'Australian Nursing Council', link: 'www.anmc.org.au' },
    { label: 'Australian Nursing Federation', link: 'www.anf.org.au' },
    { link: 'www.rcna.org.au', label: 'Royal College of Nursing' },
    { link: 'www.nmb.nsw.gov.au', label: 'Nurses and Midwives Board NMB' },
    { label: 'Australian College of Midwives', link: 'www.midwives.org.au' },
    {
      label: 'Australian Neonatal Nurses Association',
      link: 'www.acnn.org.au',
    },
    {
      label: 'National Enrolled Nurses Association',
      link: 'www.nena.org.au',
    },
  ];

  return (
    <>
      <Head>
        <title>Medical Staff | Useful Links</title>
      </Head>
      <div className="site-main">
        <PageHeader
          title="Useful Links"
          breadcrumb="Useful Links"
          backgroundUrl="/images/referal/referal-cover.png"
        />
        <section className="ttm-row clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* section-title */}
                <div className="section-title title-style-center_text">
                  <div className="title-header">
                    <h2 className="title">Useful Links</h2>
                  </div>
                </div>
                {/* section-title end */}
              </div>
              {/* row */}
              <div className="col-12">
                <p className="text-center">
                  Below are links that may assist you with queries you may have
                  in the Health Industry
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="ttm-row clearfix">
          <div className="container">
            <div className="row py-4">
              <div className="col-md-8 mx-auto">
                <ul className="useful-links">
                  {useful_links.map((link, idx) => (
                    <li className="row" key={idx}>
                      <div className="col-6 company-name">{link.label}</div>
                      <a
                        className="col-6"
                        href={`https://${link.link}`}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <u>{link.link} </u>
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 mb-4 text-center">
                  <h4>Government Authorities</h4>
                  <p>
                    Government Authorities The following links will help you in
                    relation to Tax Information and Visa Status enquiries
                    Australian
                  </p>
                </div>
                <ul className="useful-links">
                  <li className="row">
                    <div className="col-6 company-name">Taxation Office</div>
                    <a
                      className="col-6"
                      href={` www.ato.gov.au `}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <u> www.ato.gov.au </u>
                    </a>
                  </li>
                  <li className="row">
                    <div className="col-6 company-name">
                      Department of Immigration and Citizenship
                    </div>
                    <a
                      className="col-6"
                      href={` www.immi.gov.au`}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <u>www.immi.gov.au</u>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />

        <CTA />
      </div>
    </>
  );
};

export default UsefulLinks;
