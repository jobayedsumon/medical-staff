import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Error_404 = () => {
  return (
    <>
      <Head>
        <title>Medical Staff | 404</title>
      </Head>
      <div className="site-main">
        <section className="error-pg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-1 order-2">
                <header className="page-header">
                  <h1 className="page-title">Oops!</h1>
                </header>
                <div className="page-content">
                  <p>Page Not Found</p>
                </div>
                <Link
                  className="ttm-btn ttm-btn-size-lg ttm-btn-shape-rounded ttm-btn-style-fill 
                                ttm-btn-color-skincolor"
                  href="/"
                >
                  Go back Home page
                </Link>
              </div>
              <div className="col-lg-6 order-lg-2 order-1">
                <div className="error-type row g-0">
                  <h2 className="col">4</h2>
                  <div className="col error-icon">
                    <Image
                      className="img-fluid bounce"
                      src="/images/error-icon.png"
                      alt="errr-icon"
                      width={480}
                      height={518}
                    />
                  </div>
                  <h2 className="col">4</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Error_404;
