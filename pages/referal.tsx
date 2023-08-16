import CTA from '@/components/CTA/CTA';
import ContactForm from '@/components/ContactForm/ContactForm';
import PageHeader from '@/components/PageHeader/PageHeader';
import Head from 'next/head';

export const Referal = () => {
  return (
    <>
      <Head>
        <title>Medical Staff | Referal Bonus</title>
      </Head>
      <div className="site-main">
        <PageHeader
          title="Referral Bonus"
          breadcrumb="Referral Bonus"
          backgroundUrl="/images/referal/referal-cover.png"
        />
        <section className="ttm-row clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* section-title */}
                <div className="section-title title-style-center_text">
                  <div className="title-header">
                    <h2 className="title">Referral Bonus</h2>
                  </div>
                </div>
                {/* section-title end */}
              </div>
              {/* row */}
              <div className="col-12">
                <p>
                  Simply by referring another registered Nurse, registered
                  Midwife or endorsed enrolled nurse to Medical Staff Nursing
                  Agency, you could earn a <b>$250 bonus voucher** </b> once
                  they complete <b>100 hours</b>
                  work with our company. In order to earn your bonus all you
                  have to do is refer a friend who is a great nurse and we will
                  contact them and arrange for them to come in for an interview.
                  <br />
                  <br />
                  Not only are you rewarded with a bonus but your friend wins a
                  job too! If your Friend is a RN, RM or EEN, once they complete
                  100 hours you will receive a <b>$250 bonus voucher** </b>
                  <br />
                  <br />
                  If your friend is a Personal Care Worker with a car for Home
                  Care Services, you can receive a{' '}
                  <b>$50 bonus in voucher to spend</b>
                  <br />
                  <br />
                  If your friend is already a nurse in database of Medical
                  Staff, unfortunately no referral bonus can be paid. Only one
                  nurse can be paid for a referral. If multiple people claim the
                  referral bonus for same nurse, then the joining nurse who was
                  referred must elect who is to receive the bonus.
                </p>
              </div>
            </div>
            <div className="mt-40 row">
              <div className="col-lg-12">
                {/* section-title */}
                <div className="section-title title-style-center_text">
                  <div className="title-header">
                    <h2 className="title">
                      Rural & Regional Contract Nursing Bonus
                    </h2>
                  </div>
                </div>
                {/* section-title end */}
              </div>
              {/* row */}
              <div className="col-12">
                <p>
                  Medical Staff is excited to offer that for our rural contract
                  placement nurses, for every eight weeks of successfully
                  completed contract, upon confirmation from the hospital, you
                  will be paid a $1000 bonus by Medical Staff.
                </p>
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

export default Referal;
