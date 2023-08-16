import AccreditationSection from '@/components/Accrediation/Accrediation';
import CTA from '@/components/CTA/CTA';
import ClientStories from '@/components/ClientStories/ClientStories';
import Banner from '@/components/HomePage/Banner';
import Career from '@/components/HomePage/Career';
import MissionSection from '@/components/HomePage/MissionSection';
import ServiceSection from '@/components/HomePage/ServiceSection';
import Stats from '@/components/HomePage/Stats';
import Values from '@/components/HomePage/Values';
import JobByLocation from '@/components/JobByLocation/JobByLocation';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Medical Staff | Leading Recruitment,Nursing Agency,Locum Doctors
          Australia wide
        </title>
        <meta
          content="Medical Staff is a leading recruitment agency in Australia for Nurses, Doctors and allied health.Actively serving in Sydney, Brisbane &amp; Melbourne - Apply Now."
          name="description"
          key="description"
        />
        <meta
          name="keywords"
          content="health,medicalstaff,medical,saff,jobs,,looking for a job,local job search site,recruitment,nursing vacancy,doctors,nurses,Australia,Sydney,Brisbane,Melbourne"
          key="keywords"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <div className="site-main">
          <Banner />
          <ServiceSection />
          <Stats />
          <Values />
          <AccreditationSection />
          <MissionSection />
          <Career />
          <ClientStories />

          <section className="ttm-row portfolio-section clearfix bg-theme-GreyColor">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title title-style-center_text">
                    <div className="title-header">
                      <h3>
                        Find Jobs in
                        <span className="text-theme-SkinColor"> all State</span>
                      </h3>
                      <h2 className="title">
                        Jobs Available in Different States
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <JobByLocation />
            </div>
          </section>
          <CTA />
        </div>
      </>
    </>
  );
}
