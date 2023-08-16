/* eslint-disable @next/next/no-html-link-for-pages */
import {
  MDBCollapse,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBHamburgerToggler,
  MDBNavItem,
  MDBNavbar,
  MDBNavbarNav,
} from 'mdbreact';
import { useState } from 'react';
import { menu } from './menu-items';

const MobileMenu = () => {
  const [collapseID, setCollapseID] = useState<string>('');

  //
  const toggleSingleCollapse = (collapseId: string) => {
    setCollapseID((prev) => (prev === collapseId ? '' : collapseId));
  };

  return (
    <MDBNavbar>
      <MDBHamburgerToggler
        id="hamburger1"
        onClick={() => toggleSingleCollapse('collapse1')}
      />
      <MDBCollapse isOpen={!!collapseID} navbar>
        <MDBNavbarNav left>
          {menu.map((item, i) => (
            <MDBNavItem key={i}>
              {item.sub_links ? (
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    {item.label}
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    {item.sub_links.map((sub_item, idx) => (
                      <MDBDropdownItem href={sub_item.path} key={idx}>
                        {sub_item.label}
                      </MDBDropdownItem>
                    ))}
                  </MDBDropdownMenu>
                </MDBDropdown>
              ) : (
                <div key={i} className="nav-link-wrapper">
                  <a href={item.path} className="nav-link">
                    {item.label}
                  </a>
                </div>
              )}
            </MDBNavItem>
          ))}
          <div className="mt-auto">
            <MDBNavItem>
              <div className="px-2">
                <a
                  className="w-100 ttm-btn ttm-btn-size-lg ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor text-center"
                  href="/apply-now"
                >
                  Apply Now
                </a>
              </div>
            </MDBNavItem>
            <MDBNavItem>
              <div className="px-2 py-1">
                <a
                  className="w-100 ttm-btn ttm-btn-size-lg ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor text-center"
                  href="/login"
                >
                  Netbook Login
                </a>
              </div>
            </MDBNavItem>
          </div>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default MobileMenu;
