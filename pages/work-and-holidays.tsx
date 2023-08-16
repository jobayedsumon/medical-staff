import CTA, { MiniCTA } from '@/components/CTA/CTA';
import ContactForm from '@/components/ContactForm/ContactForm';
import PageHeader from '@/components/PageHeader/PageHeader';
import Head from 'next/head';

export const Referal = () => {
  return (
    <>
      <Head>
        <title>Medical Staff | Work and Holiday Nursing</title>
      </Head>
      <div className="site-main">
        <PageHeader
          title="Work and Holiday Nursing"
          breadcrumb="Work and Holiday Nursing"
          backgroundUrl="/images/referal/referal-cover.png"
        />
        <section className="ttm-row clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* section-title */}
                <div className="section-title title-style-center_text">
                  <div className="title-header">
                    <h2 className="title">Work and Holiday Nursing</h2>
                  </div>
                </div>
                {/* section-title end */}
              </div>
              {/* row */}
              <div className="col-12">
                <p className="text-center">
                  Looking to take a break while keeping up your clinical
                  experience? Interested in working country to coast? Want
                  genuine work life balance and flexibility?
                  <br />
                  <br />
                  Agency work is perfect for work and holiday planning, and our
                  Allocations Consultants are experts in planning your work
                  around your travels! Make the most of accommodation and rate
                  perks in regional and rural Australia or travel from city to
                  city.
                  <br />
                  <br />
                  We welcome all Nurses and Midwives on work and holiday visas.
                  We can provide you work nationally as you move across
                  Australia to enjoy and satisfy the conditions of your visa. We
                  can provide you work in Metro, Regional and Rural areas. Our
                  Allocations Consultants are well versed in the conditions of
                  your visa and can assist in providing you the best and most
                  suitable opportunities for work. Accommodation is provided by
                  our clients in Regional and Rural areas. This will be a big
                  saving for you while here in Australia. You can enjoy the
                  scenery and country or beachside lifestyle while working in
                  the beautiful regional areas of Australia.
                  <br />
                  <br />
                  Medical Staff has a wide variety of positions available for
                  Registered Nurses in all areas ranging from General, Medical,
                  Surgical, Theatre, Aged Care, Midwifery, Paediatrics, ICU,
                  Anaesthetics, Emergency, Mental Health, Rehab and all other
                  types of wards.
                  <br />
                  <br />
                  With Hospital and community healthcare clients all across
                  Australia, in both the private and public sector, Medical
                  Staff provides our nurses and midwives with genuine work/life
                  balance where you are given the flexibility to choose your own
                  shifts, availabilities and determine your own working schedule
                  as far in advance or last minute as you like.
                  <br />
                  <br />
                  Our nursing agency invests in custom technologies so you can
                  apply for shifts on the go, with our online rostering system
                  allowing you to use your phone or computer to not only apply
                  for shifts, but lodge availabilities, check rosters, monitor
                  your compliances, find key information and more. Medical Staff
                  provides nursing staff with the opportunity of working in both
                  Private and Public Hospitals, Aged Care, Universities,
                  Homecare and Private Patients, Disability Services and NDIS,
                  community centres, vaccinations, medical centres and more.
                  <br />
                  <br />
                  We ensure our Nurses are well suited and skilled in the
                  various areas of work, and make sure they are briefed and
                  prepared for new facilities they attend. We have work for all
                  types of Nurses and Midwives with different levels of
                  experience.
                  <br />
                  <br />
                  Medical Staff Nursing Agency welcomes highly experienced
                  nurses as well as new graduates.
                  <br />
                  <br />
                </p>
              </div>
            </div>
            <MiniCTA />
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
