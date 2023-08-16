import Call from '@/assets/icons/call.svg';
import { Facebook, Instagram, Linkedin } from '../Socials/Socials';
import Link from 'next/link';

const TopBar = () => {
  const socials = [
    {
      component: <Linkedin />,
    },
    {
      component: <Instagram />,
    },
    {
      component: <Facebook />,
    },
  ];

  return (
    <div className="top_bar clearfix d-none d-md-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center">
                <div className="top_bar_contact_item d-flex align-items-center">
                  <div className="top_bar_icon">
                    <Call />
                  </div>
                  <div className="d-flex flex-column">
                    <a
                      href="tel:1300105010"
                      className="font-size-base font-weight-bold"
                    >
                      1300 10 50 10
                    </a>
                  </div>
                </div>
              </div>
              <div className="ttm-bg ttm-col-bgcolor-yes ttm-right-span pl-20 ms-auto">
                <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                <div className="header_btn flex-shrink-0">
                  <Link
                    className="ttm-btn ttm-btn-size-sm ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor mb-1"
                    href="/login"
                  >
                    Netbook Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
