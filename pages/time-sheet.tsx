import CTA from '@/components/CTA/CTA';
import ContactForm from '@/components/ContactForm/ContactForm';
import PageHeader from '@/components/PageHeader/PageHeader';
import Head from 'next/head';

export const TimeSheet = () => {
  return (
    <>
      <Head>
        <title>Medical Staff - Nurses Time Sheet</title>
      </Head>
      <div className="site-main">
        <PageHeader
          title="Time Sheet"
          breadcrumb="Time Sheet"
          backgroundUrl="/images/referal/referal-cover.png"
        />
        <section className="ttm-row clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* section-title */}
                <div className="section-title title-style-center_text">
                  <div className="title-header">
                    <h2 className="title">Time Sheet</h2>
                  </div>
                </div>
                {/* section-title end */}
              </div>
              {/* row */}
              <div className="col-12">
                <p>
                  Requirements for time sheets vary depending on the state in
                  which you are working. Please refer to below for relevant
                  instructions. If you have any concerns or further queries, do
                  not hesitate to reach out to our team who are always happy to
                  help
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="ttm-row clearfix">
          <div className="row">
            <div className="col-lg-6 bg-theme-GreyColor pt-30 pb-30 pr-60">
              <div className="row d-flex justify-content-end">
                <div className="px-4 px-lg-0 col-lg-8">
                  <h4 className="title">For WA, NSW, QLD, and SA</h4>
                  <p>
                    Time sheets for these states must use quick sign at all
                    times
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pt-30 pb-50 pl-60 pl-lg-20">
              <div className="row">
                <div className="px-4 px-lg-0 col-lg-8">
                  <h4 className="title">Victoria</h4>
                  <p>
                    Must use paper-based time sheets at all public hospitals Let
                    us know if you are running low on your supply of time sheets
                    and we will happily post out more copies to you. The earlier
                    you can let us know, the sooner we can get the extras into
                    you’re hands! For all other facilities in Victoria, please
                    use quick sign.
                  </p>
                </div>
              </div>
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

export default TimeSheet;
