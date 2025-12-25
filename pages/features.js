import Head from 'next/head';
import { useEffect } from 'react';

export default function Features() {
  useEffect(() => {
    // Check if theme-change.js is already loaded
    if (!document.querySelector('script[src="/assets/js/theme-change.js"]')) {
      const script = document.createElement('script');
      script.src = '/assets/js/theme-change.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        // Ensure the script exists before attempting to remove it
        const existingScript = document.querySelector('script[src="/assets/js/theme-change.js"]');
        if (existingScript) {
          document.body.removeChild(existingScript);
        }
      };
    }
  }, []);

  return (
    <>
      <Head>
        <title>Features - Explore Our Modules</title>
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
                  <a className="nav-link active" href="/features">Features</a>
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
          <div className="container py-lg-5 py-md-4 py-2">
            <h4 className="inner-text-title font-weight-bold">Features</h4>
            <p>Explore our diverse modules designed to empower talents and investors.</p>
          </div>
        </section>
        <section className="w3l-features py-5">
          <div className="container py-lg-5 py-md-4 py-2">
            <div className="title-main text-center mx-auto mb-md-5 mb-4" style={{ maxWidth: '700px' }}>
              <h5 className="small-title mb-2">Features</h5>
              <h3 className="title-style">Explore Our Modules</h3>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="feature-box text-center position-relative" style={{
                  width: '300px',
                  height: '400px',
                  margin: 'auto',
                  border: '2px solid #000',
                  borderRadius: '15px',
                  boxShadow: '0 4px 15px rgba(0, 188, 212, 0.4)',
                  overflow: 'hidden'
                }}>
                  <div className="feature-image" style={{ height: '250px', overflow: 'hidden' }}>
                    <img
                      src="/assets/images/musician.jpeg"
                      alt="Musician"
                      className="img-fluid"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <h4 className="mt-3"><a href="/music" style={{ color: '#000', textDecoration: 'none' }}>Music</a></h4>
                  <p>Discover and support musical talents.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                <div className="feature-box text-center position-relative" style={{
                  width: '300px',
                  height: '400px',
                  margin: 'auto',
                  border: '2px solid #000',
                  borderRadius: '15px',
                  boxShadow: '0 4px 15px rgba(0, 188, 212, 0.4)',
                  overflow: 'hidden'
                }}>
                  <div className="feature-image" style={{ height: '250px', overflow: 'hidden' }}>
                    <img
                      src="/assets/images/artist.jpeg"
                      alt="Artist"
                      className="img-fluid"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <h4 className="mt-3"><a href="/art" style={{ color: '#000', textDecoration: 'none' }}>Art</a></h4>
                  <p>Explore and invest in creative art projects.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                <div className="feature-box text-center position-relative" style={{
                  width: '300px',
                  height: '400px',
                  margin: 'auto',
                  border: '2px solid #000',
                  borderRadius: '15px',
                  boxShadow: '0 4px 15px rgba(0, 188, 212, 0.4)',
                  overflow: 'hidden'
                }}>
                  <div className="feature-image" style={{ height: '250px', overflow: 'hidden' }}>
                    <img
                      src="/assets/images/Programmer.jpeg"
                      alt="Programmer"
                      className="img-fluid"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <h4 className="mt-3"><a href="/technical" style={{ color: '#000', textDecoration: 'none' }}>Technical</a></h4>
                  <p>Support innovative technical solutions and ideas.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w3l-footer py-5">
        <div className="container pt-4">
          <div className="row">
            <div className="col-lg-4 sub-one-left">
              <h6>About</h6>
              <p>Ignited connects talents with investors to create opportunities and unlock potential through structured agreements.</p>
            </div>
            <div className="col-lg-4 col-md-6 mt-lg-0 mt-5 px-lg-5 sub-two-right">
              <h6>Quick Links</h6>
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mt-lg-0 mt-5 sub-one-left">
              <h6>Contact</h6>
              <p>Email: info@example.com</p>
              <p>Phone: +32 456 78 90 12</p>
            </div>
          </div>
        </div>
      </footer>
      <script src="/assets/js/jquery-3.3.1.min.js"></script>
      <script src="/assets/js/bootstrap.min.js"></script>
    </>
  );
}
