import CTA from '@/components/CTA/CTA';
import ContactForm from '@/components/ContactForm/ContactForm';
import Head from 'next/head';

const Contact = () => {
  const offices = [
    {
      branch: 'Head Office',
      address:
        'AMA House, Level 3, 69 Christie St, St Leonards, NSW 2065, Australia',
      phone: '1300 10 50 10',
      availability: '24/7',
      emergency_contact: '0430 380 220  (11.00 PM to 4.30 AM)',
      mailing_address: 'PO Box 1444 Lane Cove NSW 1595',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9649.851177201834!2d151.19722294057175!3d-33.82232256559349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12aedd906d5c5d%3A0x4d21ff0f06d764f4!2sMedical+staff%2C+Locum+Doctors+%26+Nursing+Agency!5e0!3m2!1sen!2sau!4v1547510665611',
    },
    {
      branch: 'Queensland Office',
      address: 'Level 1/ 16 McDougall Street, Milton, QLD 4064',
      phone: '07 3368 2222',
      emergency_contact: '1300 10 50 10',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.9293362076473!2d153.0059950013864!3d-27.471459212514283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9150af5ce55153%3A0xdc69d5f82b60ed0!2sMedical+staff%2C+Locum+Doctors+%26+Nursing+Agency!5e0!3m2!1sen!2sau!4v1547511166980',
    },
    {
      branch: ' Victoria Office ',
      address: 'Level 2 Suite 9/365 Little Collins Street, Melbourne 3000, VIC',
      phone: '03 9602 1122',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4457.395319905863!2d144.96099349200014!3d-37.81687791064921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4e9759525%3A0x136d02f1b9983adc!2sMedical+staff%2C+Locum+Doctors+%26+Nursing+Agency!5e0!3m2!1sen!2sau!4v1547511366095',
    },
  ];

  return (
    <>
      {' '}
      <Head>
        <meta
          content="Medical Staff is a leading recruitment agency in Australia for Nurses, Doctors and allied health.Actively serving in Sydney, Brisbane &amp; Melbourne - Apply Now."
          name="description"
        />
      </Head>
      <div className="site-main">
        <section className="ttm-row grid-section clearfix">
          <div className="container">
            {/* row */}
            <div className="row">
              {offices.map((office, idx) => (
                <div className="col-lg-4 col-md-6" key={idx}>
                  <div className="featured-imagebox box-shadow h-100">
                    <div className="featured-thumbnail">
                      <iframe
                        src={office.map}
                        width="600"
                        height="350"
                        style={{
                          border: 0,
                        }}
                        allowFullScreen
                      />
                    </div>
                    <div className="featured-content p-30">
                      <div className="featured-title">
                        <h3>{office.branch}</h3>
                      </div>
                      <div className="featured-desc">
                        <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor">
                          <li className="pb-5">
                            <i className="fas fa-phone-alt"></i>
                            <div className="ttm-list-li-content">
                              Call Us:{' '}
                              <a href={`tel:${office.phone}`}>{office.phone}</a>
                            </div>
                          </li>
                          {office.availability && (
                            <li className="pb-5">
                              <i className="fas fa-calendar"></i>
                              <div className="ttm-list-li-content">
                                Availability: {office.availability}
                              </div>
                            </li>
                          )}
                          {office.emergency_contact && (
                            <li className="pb-5">
                              <i className="fas fa-address-card"></i>
                              <div className="ttm-list-li-content">
                                Emergency Contact: {office.emergency_contact}
                              </div>
                            </li>
                          )}
                          {office.address && (
                            <li className="pb-5">
                              <i className="fas fa-map-marker-alt"></i>
                              <div className="ttm-list-li-content">
                                Addres: {office.address}
                              </div>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* row end */}
          </div>
        </section>
        {/* grid-section end */}

        {/* map-section */}
        {/* map-section end */}

        <ContactForm />
        <CTA />
      </div>
    </>
  );
};

export default Contact;
