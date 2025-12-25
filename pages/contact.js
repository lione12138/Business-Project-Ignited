import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Get in Touch</title>
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
                  <a className="nav-link active" href="/contact">Contact</a>
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
              <h4 className="inner-text-title font-weight-bold pt-sm-5 pt-4">Contact Us</h4>
              <ul className="breadcrumbs-custom-path">
                <li><a href="/">Home</a></li>
                <li className="active"><i className="fas fa-angle-right mx-2"></i>Contact Us</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="w3l-contact-info-main py-5" id="contact">
          <div className="container pt-lg-5 pt-md-4 pt-2">
            <div className="title-main text-center mx-auto mb-md-5 mb-4" style={{ maxWidth: '700px' }}>
              <h5 className="small-title mb-1">Get In Touch</h5>
              <h3 className="title-style">Contact Us</h3>
            </div>
            <div className="row">
              <div className="col-md-6 left-cont-contact pe-md-4">
                <div className="contact-address p-4">
                  <div className="contact-icon d-flex align-items-center">
                    <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                    <div className="ms-3">
                      <h5 className="contact-text">Visit Us:</h5>
                      <p>Krijgslaan 281, 9000 Gent</p>
                    </div>
                  </div>
                </div>
                <div className="contact-address p-4 mt-4">
                  <div className="contact-icon d-flex align-items-center">
                    <i className="fas fa-phone-alt" aria-hidden="true"></i>
                    <div className="ms-3">
                      <h5 className="contact-text">Call Us:</h5>
                      <a href="tel:+32 456 78 90 12">+32 456 78 90 12</a>
                    </div>
                  </div>
                </div>
                <div className="contact-address p-4 mt-4">
                  <div className="contact-icon d-flex align-items-center">
                    <i className="fas fa-envelope-open-text" aria-hidden="true"></i>
                    <div className="ms-3">
                      <h5 className="contact-text">Mail Us:</h5>
                      <a href="mailto:xxxx.xx@ugent.be">xxxx.xx@ugent.be</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 right-cont-contact ps-md-4 mt-md-0 mt-5">
                <form
                  method="post"
                  className="w3layouts-contact-fm"
                  action="https://sendmail.w3layouts.com/submitForm"
                >
                  <div className="form-group mb-3">
                    <input
                      className="form-control"
                      type="text"
                      name="w3lName"
                      id="w3lName"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      className="form-control"
                      type="email"
                      name="w3lSender"
                      id="w3lSender"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="w3lMessage"
                      id="w3lMessage"
                      placeholder="Write Message"
                      required
                    ></textarea>
                  </div>
                  <div className="form-group-2 mt-3 text-end">
                    <button type="submit" className="btn btn-style">Submit Form</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <div className="map-contact pt-5">
          <iframe
            className="map-w3layouts"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2spl!4v1562654563739!5m2!1sen!2spl"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: '0px' }}
            allowFullScreen=""
          ></iframe>
        </div>
      </main>
      <script src="/assets/js/jquery-3.3.1.min.js"></script>
      <script src="/assets/js/bootstrap.min.js"></script>
      <script src="/assets/js/theme-change.js"></script>
    </>
  );
}
