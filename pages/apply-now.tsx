import CTA from '@/components/CTA/CTA';
import ContactForm from '@/components/ContactForm/ContactForm';
import PageHeader from '@/components/PageHeader/PageHeader';
import { useApplyNow } from '@/hooks/use-apply-now';
import { REFERAL_SOURCES, useJobTitles } from '@/hooks/use-jobs';
import { classNames } from '@/utils/class-names';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Head from 'next/head';
import { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import * as yup from 'yup';
import 'yup-phone';

const initialValues = {
  position: '',
  job_title: '',
  first_name: '',
  last_name: '',
  street_address: '',
  suburb: '',
  post_code: '',
  country: '',
  state: '',
  contact_home: '',
  contact_work: '',
  contact_mobile: '',
  email: '',
  date_of_birth: '',
  cv: '',
  comments: '',
  referal_source: '',
  other: '',
};

const validationSchema = yup.object().shape({
  position: yup.string().required().label('Position'),
  job_title: yup.string().required().label('Job Title'),
  first_name: yup.string().required().label('First Name'),
  last_name: yup.string().required().label('Last Name'),
  street_address: yup.string().required().label('Street Address'),
  suburb: yup.string().required().label('Suburb'),
  post_code: yup.string().required().label('Post Code'),
  country: yup.string().required().label('Country'),
  state: yup.string().required().label('State'),
  contact_home: yup.string().required().label('Home Contact'),
  contact_work: yup.string().required().label('Work Contact'),
  contact_mobile: yup.string().phone().required().label('Mobile Contact'),
  email: yup.string().email().required().label('Email'),
  date_of_birth: yup.string().required().label('Date Of Birth'),
  cv: yup.mixed().required().label('CV'),
  comments: yup.string().label('Comments'),
  referal_source: yup.string().required().label('Referal'),
  other: yup
    .string()
    .when('referal_source', {
      is: (val: string) => val === 'Other',
      then: (schema) =>
        schema.required('Please specifiy other source').label('Other'),
    })
    .label('Other'),
});

export const ApplyNow = () => {
  const { mutate, isLoading, error } = useApplyNow();
  const [successMessage, setSuccessMessage] = useState('');
  const { data } = useJobTitles();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = (values: typeof initialValues) => {
    // eslint-disable-next-line no-console
    executeRecaptcha('enquiryFormSubmit').then((gRecaptchaToken) => {
      mutate(
        {
          ...values,
          gRecaptchaToken,
        },
        {
          onSuccess: ({ data }) => {
            setSuccessMessage(
              data.message ?? 'Your application has been sent successfully.'
            );
            window.scrollTo({ top: 0, behavior: 'smooth' });
          },
        }
      );
    });
  };

  return (
    <>
      <Head>
        <title>Medical Staff | Apply Now</title>
      </Head>
      <div className="site-main">
        <PageHeader
          title="Apply Now"
          breadcrumb="Apply now"
          backgroundUrl="/images/apply-now-cover.png"
        />

        <section className="ttm-row portfolio-section clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title title-style-center_text">
                  <div className="title-header">
                    <h2 className="title">Apply Online</h2>
                  </div>
                </div>
              </div>
            </div>
            {successMessage ? (
              <div>
                <h5 className="text-center text-success">{successMessage}</h5>
              </div>
            ) : (
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
              >
                {({ setFieldValue, values }) => (
                  <Form className="application_form wrap-form">
                    <div className="mt-3 row items-center">
                      <div className="mt-2 col-md-3 d-flex items-center">
                        <label className="col-md-3" htmlFor="position">
                          Position Applied For
                        </label>
                      </div>
                      <div className="mt-2 col-md-9">
                        <Field
                          name="position"
                          id="position"
                          type="text"
                          // placeholder="Your Name"
                        />
                        <ErrorMessage name="position">
                          {(msg) => (
                            <div className="text-error text-xs">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="mt-3 row items-center">
                      <div className="mt-2 col-md-3 d-flex items-center ttm-box-col-wrapper">
                        <label className="col-md-3" htmlFor="other">
                          Job Title
                        </label>
                      </div>
                      <div className="mt-2 col-md-9 ttm-box-col-wrapper">
                        <select
                          name="job_title"
                          aria-hidden="true"
                          onChange={(e) => {
                            setFieldValue('job_title', e.target.value);
                          }}
                        >
                          <option value="">Select One</option>
                          {data.titles.map((title) => (
                            <option value={title} key={title}>
                              {title}
                            </option>
                          ))}
                        </select>
                        <ErrorMessage name="job_title">
                          {(msg) => (
                            <div className="text-error text-xs">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="mt-3 row items-center">
                      <div className="mt-2 col-md-3 d-flex items-center ttm-box-col-wrapper">
                        <label className="col-md-3" htmlFor="first_name">
                          First Name
                        </label>
                      </div>
                      <div className="mt-2 col-md-9 ttm-box-col-wrapper">
                        <Field
                          name="first_name"
                          id="first_name"
                          type="text"
                          // placeholder="First Name"
                        />
                        <ErrorMessage name="first_name">
                          {(msg) => (
                            <div className="text-error text-xs">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="mt-3 row items-center">
                      <div className="mt-2 col-md-3 d-flex items-center ttm-box-col-wrapper">
                        <label className="col-md-3" htmlFor="last_name">
                          Last Name
                        </label>
                      </div>
                      <div className="mt-2 col-md-9 ttm-box-col-wrapper">
                        <Field
                          name="last_name"
                          id="last_name"
                          type="text"
                          // placeholder="Last Name"
                        />
                        <ErrorMessage name="last_name">
                          {(msg) => (
                            <div className="text-error text-xs">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="mt-3 row items-center">
                      <div className="mt-2 col-md-3 d-flex items-center ttm-box-col-wrapper">
                        <label className="col-md-3" htmlFor="street_address">
                          Street Address
                        </label>
                      </div>
                      <div className="mt-2 col-md-9 ttm-box-col-wrapper">
                        <Field
                          name="street_address"
                          id="street_address"
                          type="text"
                          // placeholder="Street Address"
                        />
                        <ErrorMessage name="street_address">
                          {(msg) => (
                            <div className="text-error text-xs">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="mt-3 row items-center">
                      <div className="mt-2 col-md-3 d-flex items-center ttm-box-col-wrapper">
                        <label className="col-md-3" htmlFor="suburb">
                          Suburb
                        </label>
                      </div>
                      <div className="mt-2 col-md-9 ttm-box-col-wrapper">
                        <Field
                          name="suburb"
                          id="suburb"
                          type="text"
                          // placeholder="Suburb"
                        />
                        <ErrorMessage name="suburb">
                          {(msg) => (
                            <div className="text-error text-xs">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="mt-3 row items-center">
                      <div className="mt-2 col-md-3 d-flex items-center ttm-box-col-wrapper">
                        <label className="col-md-3" htmlFor="post_code">
                          Post Code
                        </label>
                      </div>
                      <div className="mt-2 col-md-9 ttm-box-col-wrapper">
                        <Field
                          name="post_code"
                          id="post_code"
                          type="text"
                          // placeholder="Post Code"
                        />
                        <ErrorMessage name="post_code">
                          {(msg) => (
                            <div className="text-error text-xs">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="mt-3 row items-center">
                      <div className="mt-2 col-md-3 d-flex items-center ttm-box-col-wrapper">
                        <label className="col-md-3" htmlFor="country">
                          Country
                        </label>
                      </div>
                      <div className="mt-2 col-md-9 ttm-box-col-wrapper">
                        <Field
                          name="country"
                          id="country"
                          type="text"
                          // placeholder="Country"
                        />
                        <ErrorMessage name="country">
                          {(msg) => (
                            <div className="text-error text-xs">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="mt-3 row items-center">
                      <div className="mt-2 col-md-3 d-flex items-center ttm-box-col-wrapper">
                        <label className="col-md-3" htmlFor="state">
                          State
                        </label>
                      </div>
                      <div className="mt-2 col-md-9 ttm-box-col-wrapper">
                        <select
                          name="state"
                          aria-hidden="true"
                          onChange={(e) => {
                            setFieldValue('state', e.target.value);
                          }}
                        >
                          <option value="">Select One</option>
                          {data.states.map((state) => (
                            <option value={state} key={state}>
                              {state}
                            </option>
                          ))}
                        </select>
                        <ErrorMessage name="state">
                          {(msg) => (
                            <div className="text-error text-xs">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="mt-3 row items-center">
                      <div className="mt-2 col-md-3 d-flex items-center ttm-box-col-wrapper">
                        <label className="col-md-3">Contact Details</label>
                      </div>
                      <div className="mt-2 col-md-9 ttm-box-col-wrapper">
                        <div className="row items-center">
                          <div className="mt-2 col-md-3 d-flex items-center ttm-box-col-wrapper">
                            <label className="col-md-3" htmlFor="contact_home">
                              Home
                            </label>
                          </div>
                          <div className="mt-2 col-md-9 ttm-box-col-wrapper">
                            <Field
                              name="contact_home"
                              id="contact_home"
                              type="text"
                              // placeholder="Home"
                            />
                            <ErrorMessage name="contact_home">
                              {(msg) => (
                                <div className="text-error text-xs">{msg}</div>
                              )}
                            </ErrorMessage>
                          </div>
                        </div>
                        <div className="row items-center">
                          <div className="mt-2 col-md-3 d-flex items-center ttm-box-col-wrapper">
                            <label className="col-md-3" htmlFor="contact_work">
                              Work
                            </label>
                          </div>
                          <div className="mt-2 col-md-9 ttm-box-col-wrapper">
                            <Field
                              name="contact_work"
                              id="contact_work"
                              type="text"
                              // placeholder="Work"
                            />
                            <ErrorMessage name="contact_work">
                              {(msg) => (
                                <div className="text-error text-xs">{msg}</div>
                              )}
                            </ErrorMessage>
                          </div>
                        </div>
                        <div className="row items-center">
                          <div className="mt-2 col-md-3 d-flex items-center ttm-box-col-wrapper">
                            <label
                              className="col-md-3"
                              htmlFor="contact_mobile"
                            >
                              Mobile
                            </label>
                          </div>
                          <div className="mt-2 col-md-9 ttm-box-col-wrapper">
                            <Field
                              name="contact_mobile"
                              id="contact_mobile"
                              type="text"
                              // placeholder="Mobile"
                            />
                            <ErrorMessage name="contact_mobile">
                              {(msg) => (
                                <div className="text-error text-xs">{msg}</div>
                              )}
                            </ErrorMessage>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 row items-center">
                      <div className="mt-2 col-md-3 d-flex items-center ttm-box-col-wrapper">
                        <label className="col-md-3" htmlFor="email">
                          Email Address
                        </label>
                      </div>
                      <div className="mt-2 col-md-9 ttm-box-col-wrapper">
                        <Field
                          name="email"
                          id="email"
                          type="text"
                          // placeholder="Email Address"
                        />
                        <ErrorMessage name="email">
                          {(msg) => (
                            <div className="text-error text-xs">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="mt-3 row items-center">
                      <div className="mt-2 col-md-3 d-flex items-center ttm-box-col-wrapper">
                        <label className="col-md-3" htmlFor="date_of_birth">
                          Date of Birth
                        </label>
                      </div>
                      <div className="mt-2 col-md-9 ttm-box-col-wrapper">
                        <Field
                          name="date_of_birth"
                          id="date_of_birth"
                          type="date"
                          // placeholder="Date of Birth"
                        />
                        <ErrorMessage name="date_of_birth">
                          {(msg) => (
                            <div className="text-error text-xs">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="mt-3 row items-center">
                      <div className="mt-2 col-md-3 d-flex items-center ttm-box-col-wrapper">
                        <label className="col-md-3" htmlFor="cv">
                          Attach your CV here
                        </label>
                      </div>
                      <div className="mt-2 col-md-9 ttm-box-col-wrapper">
                        <div className="d-flex">
                          <label
                            htmlFor="cv"
                            className={classNames(
                              'w-auto'
                              // values.cv ? 'w-auto' : 'file-label'
                            )}
                          >
                            <div className="d-flex flex-nowrap ">
                              <div
                                className={classNames(
                                  'btn',
                                  values.cv ? '' : 'btn-file-upload'
                                )}
                              >
                                {values.cv
                                  ? `${
                                      (values.cv as unknown as File).name ?? ''
                                    }`
                                  : 'Choose a file'}
                              </div>
                            </div>
                          </label>
                        </div>
                        <input
                          name="cv"
                          id="cv"
                          type="file"
                          className="d-none"
                          accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps"
                          onChange={(e) => {
                            setFieldValue('cv', e.target.files[0]);
                          }}
                        />
                        <div>
                          <ErrorMessage name="cv">
                            {(msg) => (
                              <div className="text-error text-xs">{msg}</div>
                            )}
                          </ErrorMessage>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 row items-center">
                      <div className="mt-2 col-md-3 d-flex items-center ttm-box-col-wrapper">
                        <label className="col-md-3" htmlFor="comments">
                          Any Additional Comments
                        </label>
                      </div>
                      <div className="mt-2 col-md-9 ttm-box-col-wrapper">
                        <Field
                          name="comments"
                          id="comments"
                          type="text"
                          // placeholder="Additional Comments"
                          as="textarea"
                          rows={9}
                        />
                        <ErrorMessage name="comments">
                          {(msg) => (
                            <div className="text-error text-xs">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="mt-3 row items-center">
                      <div className="mt-2 col-md-3 d-flex items-center ttm-box-col-wrapper">
                        <label className="col-md-3" htmlFor="other">
                          How did you hear about us?
                        </label>
                      </div>
                      <div className="mt-2 col-md-9 ttm-box-col-wrapper">
                        <select
                          name="referal_source"
                          aria-hidden="true"
                          onChange={(e) => {
                            setFieldValue('referal_source', e.target.value);
                          }}
                        >
                          <option value="">Where did you hear about us?</option>
                          {REFERAL_SOURCES.map((referal) => (
                            <option value={referal} key={referal}>
                              {referal}
                            </option>
                          ))}
                        </select>
                        <ErrorMessage name="referal_source">
                          {(msg) => (
                            <div className="text-error text-xs">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    {values.referal_source === 'Other' && (
                      <div className="mt-3 row items-center">
                        <div className="mt-2 col-md-3 d-flex items-center ttm-box-col-wrapper">
                          <label className="col-md-3" htmlFor="other">
                            Other Specify
                          </label>
                        </div>
                        <div className="mt-2 col-md-9 ttm-box-col-wrapper">
                          <Field
                            name="other"
                            id="other"
                            type="text"
                            // placeholder="Other"
                          />
                          <ErrorMessage name="other">
                            {(msg) => (
                              <div className="text-error text-xs">{msg}</div>
                            )}
                          </ErrorMessage>
                        </div>
                      </div>
                    )}
                    {error ? (
                      <div className="mt-3 bg-secondary ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-secondary w-100 p-2 text-white rounded">
                        Could not apply. Please try again
                      </div>
                    ) : null}
                    <div className="mt-3 d-flex">
                      <button
                        className="submit ttm-btn ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor w-100"
                        type="submit"
                        disabled={isLoading || !!successMessage}
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
                          'Apply Now'
                        )}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            )}
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

export default ApplyNow;
