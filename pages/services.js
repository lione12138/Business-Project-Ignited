import Head from 'next/head';
import { useEffect } from 'react';

export default function Services() {
  useEffect(() => {
    // Load theme-change.js for theme switching
    const script = document.createElement('script');
    script.src = '/assets/js/theme-change.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Services - Ignited</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="//fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/css/style-starter.css" />
      </Head>
      <header id="site-header" className="fixed-top" style={{ paddingLeft: '15px', paddingRight: '15px' }}>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a href="/" className="navbar-brand d-flex align-items-center">
              <img
                src="/assets/images/company-logo.png"
                alt="Company Logo"
                style={{ height: '80px', marginRight: '10px' }}
              />
              <span style={{ color: 'red', fontWeight: 'bold', fontSize: 'larger' }}>I</span>gnited
            </a>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
              <span className="navbar-toggler-icon fa icon-close fa-times"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/features">Features</a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/services"
                    id="servicesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                    <li><a className="dropdown-item" href="/for-talents">For Talents</a></li>
                    <li><a className="dropdown-item" href="/for-investors">For Investors</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/faq">FAQ</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <section className="inner-banner py-5">
          <div className="w3l-breadcrumb py-lg-5">
            <div className="container pt-5 pb-sm-4">
              <h4 className="inner-text-title font-weight-bold pt-sm-5 pt-4">Services</h4>
              <ul className="breadcrumbs-custom-path">
                <li><a href="/">Home</a></li>
                <li className="active"><i className="fas fa-angle-right mx-2"></i>Services</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="home-services py-5" id="services">
          <div className="container py-lg-5 py-md-4 py-2">
            <div className="title-main text-center mx-auto mb-md-5 mb-4" style={{ maxWidth: '700px' }}>
              <h5 className="small-title mb-2">Our Services</h5>
              <h3 className="title-style">Empowering Talents, Rewarding Investors</h3>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="box-wrap">
                  <div className="icon">
                    <i className="fas fa-user"></i>
                  </div>
                  <h4><a href="/for-talents">For Talents</a></h4>
                  <p>Showcase your skills, attract funding, and connect with mentors.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                <div className="box-wrap">
                  <div className="icon">
                    <i className="fas fa-handshake"></i>
                  </div>
                  <h4><a href="/for-investors">For Investors</a></h4>
                  <p>Discover and support talents with structured, ethical agreements.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w3l-content1 py-5">
          <div className="container py-md-5 py-sm-4 py-2">
            <div className="row py-4">
              <div className="col-lg-7">
                <h3 className="title-style text-white">We manage your business</h3>
                <p className="mt-4 text-light">Lorem ipsum dolor sit amet elit. Velit beatae
                  rem ullam dolore nisi esse quasi. Integer sit amet. Lorem ipsum dolor sit
                  amet elit.</p>
                <a href="/contact" className="btn btn-style mt-md-5 mt-4">Contact Us</a>
              </div>
            </div>
          </div>
        </section>
        <div className="w3l-homeblock3 py-5">
          <div className="container py-lg-5 py-md-4 py-2">
            <div className="title-main text-center mx-auto mb-md-5 mb-4" style={{ maxWidth: '700px' }}>
              <h5 className="small-title mb-2">What we do?</h5>
              <h3 className="title-style">We take care of the Future!</h3>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="top-pic1">
                  <div className="card-body blog-details">
                    <span className="meta-value">Investment</span>
                    <a href="#blog" className="blog-desc">Strength solutions
                    </a>
                    <a href="#blog" className="btn btn-style-primary btn-style text-white mt-4">Read
                      More<i className="fas fa-arrow-right ms-1"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                <div className="top-pic2">
                  <div className="card-body blog-details">
                    <span className="meta-value">Strategy</span>
                    <a href="#blog" className="blog-desc">Business analytics
                    </a>
                    <a href="#blog" className="btn btn-style-primary btn-style text-white mt-4">Read
                      More<i className="fas fa-arrow-right ms-1"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                <div className="top-pic3">
                  <div className="card-body blog-details">
                    <span className="meta-value"> Tax Consulting </span>
                    <a href="#blog" className="blog-desc">Stock investments
                    </a>
                    <a href="#blog" className="btn btn-style-primary btn-style text-white mt-4">Read
                      More<i className="fas fa-arrow-right ms-1"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <script src="/assets/js/bootstrap.min.js"></script>
    </>
  );
}
