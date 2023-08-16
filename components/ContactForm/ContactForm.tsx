import { useContactUs } from '@/hooks/use-contact';
import { callerLink } from '@/utils/caller';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Image from 'next/image';
import { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import * as yup from 'yup';
import 'yup-phone';
import ContactUsImage from '@/assets/img/contact-us.jpg';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const validationSchema = yup.object().shape({
  name: yup.string().required('Please enter a Name').label('Name'),
  email: yup.string().email('Invalid email').required('Please enter a Email'),
  phone: yup
    .string()
    .phone()
    .required('Please enter a Phone number')
    .label('Phone number'),
  subject: yup.string().required().label('Subject'),
  message: yup.string().required('Please enter a message').label('Message'),
});

const ContactForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { mutate, isLoading, error } = useContactUs();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (values: typeof initialValues, { resetForm }) => {
    executeRecaptcha('enquiryFormSubmit')
      .then((gRecaptchaToken) => {
        // eslint-disable-next-line no-console
        mutate(
          {
            ...values,
            gRecaptchaToken,
          },
          {
            onSuccess: () => {
              setSubmitted(true);
              resetForm();
            },
            onError: () => {
              setSubmitted(false);
            },
          }
        );
      })
      .catch(() => {
        alert('ERROR');
      });
  };

  return (
    <section className="ttm-row contact-section bg-theme-GreyColor clearfix">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* section-title */}
            <div className="section-title title-style-center_text">
              <div className="title-header">
                <h3>Contact us</h3>
                <h2 className="title">Get In Touch With Us</h2>
              </div>
            </div>
            {/* section-title end */}
          </div>
        </div>
        {/* row */}
        <div className="row">
          <div className="col-lg-6">
            <div className="pr-30 pr-md-0 mt-15">
              <div className="ttm_single_image-wrapper mb-20 contactform-image">
                <Image
                  className="img-fluid w-100"
                  src={ContactUsImage}
                  alt="Contact Us "
                />
              </div>
              <p className="mb-30">
                Medical Staff provides our nurses the opportunities to work in a
                diverse set of locations Nationwide including both Private and
                Public Hospitals, Aged Care, Universities, Vaccinations, Medical
                Centres, NDIS and Disability, Home Care, Rural and Regional
                facilities and more. We want you to find what you’re looking
                for. For any query, please contact Medical Staff experts for the
                best solution.
              </p>

              <div className="d-flex align-items-center">
                <div
                  className="ttm-icon ttm-icon_element-fill ttm-icon_element-color-skincolor ttm-icon_element-size-sm 
                                    ttm-icon_element-style-round mb-0"
                >
                  <i className="fa fa-phone rotate-180"></i>
                </div>
                <div className="pl-15">
                  <h6 className="mb-5">Call Anytime</h6>
                  <p className="featured-desc mb-0">
                    <a href={callerLink}>1300 10 50 10</a>
                  </p>
                </div>
              </div>

              <div className="ttm-horizontal_sep width-100 mt-20 mb-20"></div>

              <div className="d-flex align-items-center">
                <div
                  className="ttm-icon ttm-icon_element-fill ttm-icon_element-color-skincolor ttm-icon_element-size-sm 
                                    ttm-icon_element-style-round mb-0"
                >
                  <i className="fa fa-globe"></i>
                </div>
                <div className="pl-15">
                  <h6 className="mb-5">Send Email</h6>
                  <p className="featured-desc mb-0">
                    <a href="mailto:join@medicalstaff.com.au">
                      join@medicalstaff.com.au
                    </a>
                  </p>
                </div>
              </div>

              <div className="ttm-horizontal_sep width-100 mt-20 mb-20"></div>

              <div className="d-flex align-items-center">
                <div
                  className="ttm-icon ttm-icon_element-fill ttm-icon_element-color-skincolor ttm-icon_element-size-sm 
                                    ttm-icon_element-style-round mb-0"
                >
                  <i className="ti ti-home"></i>
                </div>
                <div className="pl-15">
                  <h6 className="mb-5">Visit Office</h6>
                  <p className="featured-desc mb-0">
                    <a
                      href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9649.851177201834!2d151.19722294057175!3d-33.82232256559349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12aedd906d5c5d%3A0x4d21ff0f06d764f4!2sMedical+staff%2C+Locum+Doctors+%26+Nursing+Agency!5e0!3m2!1sen!2sau!4v1547510665611"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      AMA House, Level 3 69 Christie Street, St Leonards, NSW
                      2065
                    </a>
                  </p>
                </div>
              </div>
              {/*  featured-icon-box end */}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ttm-col-bgcolor-yes ttm-bg bg-theme-WhiteColor z-index-2 p-40 p-lg-30 mt-15 mt-lg-30">
              <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
              <div className="layer-content">
                <Formik
                  initialValues={initialValues}
                  onSubmit={handleSubmit}
                  validationSchema={validationSchema}
                >
                  <Form id="contact_form" className="contact_form wrap-form">
                    <div className="row ttm-boxes-spacing-15px">
                      <div className="col-md-12 ttm-box-col-wrapper">
                        <label>
                          <Field
                            name="name"
                            type="text"
                            placeholder="Your Name"
                          />
                        </label>
                        <ErrorMessage name="name">
                          {(msg) => (
                            <div className="text-error text-xs">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="col-md-6 ttm-box-col-wrapper">
                        <label>
                          <Field
                            name="email"
                            type="text"
                            placeholder="Your Email"
                          />
                        </label>
                        <ErrorMessage name="email">
                          {(msg) => (
                            <div className="text-error text-xs">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="col-md-6 ttm-box-col-wrapper">
                        <label>
                          <Field
                            name="subject"
                            type="text"
                            placeholder="Subject"
                          />
                        </label>
                        <ErrorMessage name="subject">
                          {(msg) => (
                            <div className="text-error text-xs">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="col-md-12 ttm-box-col-wrapper">
                        <label>
                          <Field
                            name="phone"
                            type="text"
                            placeholder="Phone Number"
                          />
                        </label>
                        <ErrorMessage name="phone">
                          {(msg) => (
                            <div className="text-error text-xs">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="col-md-12 ttm-box-col-wrapper">
                        <label>
                          <Field
                            name="message"
                            rows={9}
                            placeholder="Message"
                            as="textarea"
                          />
                        </label>
                        <ErrorMessage name="message">
                          {(msg) => (
                            <div className="text-error text-xs">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    {error ? (
                      <div className="bg-secondary ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-secondary w-100 p-2 text-white rounded">
                        Could not send your message. Please try again
                      </div>
                    ) : null}
                    {submitted ? (
                      <div className="submit ttm-btn ttm-btn-size-lg ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor w-100">
                        Your message has been sent successfully
                      </div>
                    ) : (
                      <button
                        className="mt-3 submit ttm-btn ttm-btn-size-lg ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor w-100"
                        type="submit"
                        disabled={isLoading || submitted}
                      >
                        {isLoading ? (
                          <div
                            className="spinner-border"
                            role="status"
                            style={{ width: 16, height: 16 }}
                          >
                            <span className="sr-only">Loading...</span>
                          </div>
                        ) : (
                          'send a message!'
                        )}
                      </button>
                    )}
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
