import PageHeader from '@/components/PageHeader/PageHeader';
import Head from 'next/head';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

export const Login = () => {
  return (
    <>
      <Head>
        <title>Medical Staff | Login</title>
      </Head>
      <div className="site-main">
        {/* PageHeader */}
        <PageHeader
          title="Login"
          breadcrumb="Login"
          backgroundUrl="/images/jobs/cover-img.jpeg"
        />
        {/* PageHeader end */}

        {/* login */}
        <div className="ttm-row login-section clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="bg-theme-GreyColor ttm-col-bgcolor-yes ttm-bg rounded p-50 p-lg-20">
                  <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                  <div className="layer-content">
                    <div className="text-center mb-20">
                      <h3>Login To Your Account</h3>
                    </div>
                    <div className="ttm-tabs ttm-tab-style-02">
                      <Tabs>
                        <TabList className="tabs">
                          <Tab className="tab">
                            <a
                              href="https://netbook.medicalstaff.com.au:444/Mobile"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="flaticon flaticon-research"></i>
                              <h5>Client Netbook Login</h5>
                            </a>
                          </Tab>
                          <Tab className="tab">
                            <a
                              href="https://netbook.medicalstaff.com.au:444/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="flaticon flaticon-job-search"></i>
                              <h5>Staff Netbook Login</h5>
                            </a>
                          </Tab>
                        </TabList>
                        <div className="content-tab">
                          <TabPanel />
                          <TabPanel />
                        </div>
                      </Tabs>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
