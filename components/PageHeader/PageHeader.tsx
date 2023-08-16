import React from 'react';
interface PageHeaderProps {
  title: string;
  breadcrumb: string;
  content?: string;
  className?: string;
  backgroundUrl?: string;
}

const PageHeader = ({
  title,
  content,
  breadcrumb,
  className,
  backgroundUrl = 'https://via.placeholder.com/1920x193?text=pagetitle-bg-1920x193.png',
}: PageHeaderProps) => {
  return (
    <div
      className="page-header-area bg-img"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
      }}
    >
      <div className="page-header-area-inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="page-header-content-inner">
                <div className="page-header-content">
                  <h2>{title}</h2>
                  <div>{content}</div>
                  <div className="breadcrumb-wrapper">
                    <span>
                      <a href={process.env.PUBLIC_URL + '/'} title="Homepage">
                        <i className="ti ti-home" />
                        &nbsp;&nbsp;Home
                      </a>
                    </span>
                    <span className="bread-sep">&nbsp;/&nbsp;</span>
                    {breadcrumb}
                  </div>
                  <div className={className}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
