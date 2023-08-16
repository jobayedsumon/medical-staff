import React, { useEffect } from 'react';
import Link from 'next/link';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import Logo from '../Logo/Logo';

const Header = () => {
  const isSticky = () => {
    const header = document.querySelector('header');
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header?.classList.add('is-Sticky')
      : header?.classList.remove('is-Sticky');
  };
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, []);

  return (
    <header id="masthead" className="header ttm-header-style-01">
      {/* site-header-menu */}
      <div
        id="site-header-menu"
        className="site-header-menu ttm-bgcolor-white position-relative"
      >
        <div className="site-header-menu-inner ttm-stickable-header">
          <div className="container py-3 position-static">
            <div className="row">
              <div className="col-lg-12 position-static">
                {/* site-navigation */}
                <div className="site-navigation d-flex align-items-center justify-content-between position-static">
                  {/* site-branding */}
                  <div className="site-branding flex-shrink-0">
                    <Logo />
                  </div>
                  {/* site-branding end */}
                  <div className="border-box-block">
                    <div className="d-flex align-items-center justify-content-around">
                      {/* menu */}
                      <Menu />
                      <div className="mobile-menu d-flex align-items-center gap-4">
                        <div className="align-items-center d-xxl-none justify-content-center gap-3">
                          <Link
                            className="ttm-btn ttm-btn-size-sm ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor"
                            href="/jobs"
                          >
                            Find Jobs
                          </Link>
                        </div>
                        <MobileMenu />
                      </div>
                    </div>
                  </div>
                  <div className="d-none d-xxl-flex align-items-center  justify-content-center gap-3">
                    <div className="header_btn flex-shrink-0">
                      <Link
                        className="ttm-btn ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor"
                        href="/apply-now"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
                {/* site-navigation end */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* site-header-menu end */}
    </header>
  );
};

export default Header;
