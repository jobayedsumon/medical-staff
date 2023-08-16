import { callerLink } from '@/utils/caller';

export const MiniCTA = ({
  title,
  btnText,
}: {
  title?: string;
  btnText?: string;
}) => {
  return (
    <div className="mt-20 w-100 bg-theme-SkinColor py-3 px-4 rounded-md text-white d-flex align-items-center justify-content-between flex-column flex-md-row">
      <span className="mt-4 mb-4">
        {title
          ? title
          : 'Send inquiry to see if we can assist you in your specific area of need.'}
      </span>
      <a
        className="ttm-btn ttm-btn-size-lg ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-white"
        href={callerLink}
      >
        {btnText ? btnText : 'Call Us'}
      </a>
    </div>
  );
};

const CTA = () => {
  return (
    <section className="ttm-row action-section bg-theme-SkinColor text-theme-WhiteColor clearfix">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="d-md-flex align-items-center justify-content-between">
              {/* featured-icon-box */}
              <div className="featured-icon-box icon-align-before-content style2">
                <div className="featured-icon">
                  <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-white ttm-icon_element-size-xl">
                    <i className="flaticon flaticon-recruitment"></i>
                  </div>
                </div>
                <div className="featured-content">
                  <div className="featured-title">
                    <h3>Hire the best with Medical Staff</h3>
                  </div>
                </div>
              </div>
              <a
                className="ttm-btn ttm-btn-size-lg ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-white"
                href={callerLink}
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
