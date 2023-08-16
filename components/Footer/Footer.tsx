import Image from 'next/image';
import { callerLink } from '../../utils/caller';
import { SocialLinks } from '../Socials/Socials';
import Link from 'next/link';

const Footer = () => {
  const quick_links = [
    {
      label: 'Why become an agency Nurse',
      url: '/agency-nurse',
    },
    {
      label: 'Education',
      url: '/education',
    },
    {
      label: 'Training Opportunities',
      url: '/training-and-oppurtinities',
    },
    {
      label: 'Privacy Policy',
      url: '/MS-Privacy-Policy.pdf',
      blank: true,
    },
    {
      label: 'Referal Bonus',
      url: '/referal',
    },
    {
      label: 'Useful Links',
      url: '/useful-links',
    },
  ];

  return (
    <footer className="footer widget-footer clearfix">
      <div className="second-footer bg-theme-DarkColor text-theme-WhiteColor">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 widget-area">
              <div className="widget widget-map widget_text clearfix">
                <h3 className="widget-title">We work Nationally</h3>
                <div className="footer-map">
                  <Image
                    id="footer-map-img"
                    className="img-fluid auto_size"
                    src="/images/footer/map.png"
                    alt="Map"
                    width={230}
                    height={200}
                  />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 widget-area">
              <div className="widget widget-contact clearfix">
                <h3 className="widget-title">Contact Us</h3>
                <ul className="widget-contact-text">
                  <li>
                    E:{' '}
                    <a href="mailto:join@medicalstaff.com.au">
                      join@medicalstaff.com.au
                    </a>{' '}
                  </li>
                  <li>
                    P: <a href={callerLink}>1300 105010 </a>
                  </li>
                  <li>A: PO Box 1444, Lane Cove NSW 1595</li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 widget-area">
              <div className="widget widget-quick-links clearfix">
                <h3 className="widget-title">Quick Contact</h3>
                <ul className="widget_quick-links_wrapper">
                  {quick_links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.url}
                        target={link.blank ? '_blank' : '_self'}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-theme-DarkColor">
        <div className="container">
          <div className="py-4 d-flex w-100 justify-content-between row">
            <div className="mt-2 col-12 col-md-10">
              Copyright © {new Date().getFullYear()}
              <a
                href="www.appandweb.com.au"
                className="text-theme-SkinColor"
                target="_blank"
                rel="noreferrer noopener"
              >
                <b> App and Website Pty Ltd </b>
              </a>
              All rights reserved.{' '}
            </div>{' '}
            <div className="mt-2 col-md-2 d-flex items-center justify-content-md-end gap-3">
              Follow us: <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
