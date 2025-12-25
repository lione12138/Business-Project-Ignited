import Head from 'next/head';
import { useEffect } from 'react';

export default function FAQ() {
  useEffect(() => {
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
        <title>FAQ - Frequently Asked Questions</title>
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
                  <a className="nav-link active" href="/faq">FAQ</a>
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
            <h4 className="inner-text-title font-weight-bold">FAQ</h4>
            <p>Find answers to the most frequently asked questions about Ignited.</p>
          </div>
        </section>
        <section className="w3l-faq py-5">
          <div className="container py-lg-5 py-md-4 py-2">
            <div className="title-main text-center mx-auto mb-md-5 mb-4" style={{ maxWidth: '700px' }}>
              <h5 className="small-title mb-2">FAQ</h5>
              <h3 className="title-style">Frequently Asked Questions</h3>
            </div>
            <div className="faq-content">
              <div className="faq-item mb-4">
                <h5 className="faq-question">What is Ignited?</h5>
                <p className="faq-answer">Ignited is a platform that connects talents with investors through structured, fair agreements. We aim to democratize investment and unlock human potential.</p>
              </div>
              <div className="faq-item mb-4">
                <h5 className="faq-question">How does Ignited benefit talents?</h5>
                <p className="faq-answer">Talents can showcase their skills and ideas, attract funding, and connect with mentors to grow their careers.</p>
              </div>
              <div className="faq-item mb-4">
                <h5 className="faq-question">How does Ignited benefit investors?</h5>
                <p className="faq-answer">Investors can discover high-potential talents and support them through revenue-sharing agreements, ensuring ethical and transparent returns.</p>
              </div>
              <div className="faq-item mb-4">
                <h5 className="faq-question">What industries does Ignited support?</h5>
                <p className="faq-answer">Ignited supports talents across various industries, including technology, arts, sports, and more.</p>
              </div>
              <div className="faq-item mb-4">
                <h5 className="faq-question">How do I get started as a talent?</h5>
                <p className="faq-answer">You can create a professional profile on Ignited, showcase your skills, and start connecting with investors.</p>
              </div>
              <div className="faq-item mb-4">
                <h5 className="faq-question">How do I get started as an investor?</h5>
                <p className="faq-answer">You can browse through talent profiles, review their projects, and invest in those that align with your interests.</p>
              </div>
            </div>
          </div>
        </section>
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
      </main>
      <script src="/assets/js/jquery-3.3.1.min.js"></script>
      <script src="/assets/js/bootstrap.min.js"></script>
      <script src="/assets/js/theme-change.js"></script>
    </>
  );
}
