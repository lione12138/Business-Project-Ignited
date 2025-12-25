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
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>For Talents - Showcase Your Skills and Get Discovered</title>
        <link
          href="//fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="assets/css/style-starter.css" />
      </Head>
      <body>
        {/* header */}
        <header id="site-header" className="fixed-top" style={{ paddingLeft: '15px', paddingRight: '15px' }}>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <a href="index.html" className="navbar-brand d-flex align-items-center">
                <img
                  src="assets/images/company-logo.png"
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
                    <a className="nav-link dropdown-toggle" href="/services" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Services
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                      <li><a className="dropdown-item active" href="/for-talents">For Talents</a></li>
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
                <form action="#search" method="GET" className="d-flex search-header ms-lg-2">
                  <input className="form-control" type="search" placeholder="Enter Keyword..." aria-label="Search"
                    required />
                  <button className="btn btn-style" type="submit"><i className="fas fa-search"></i></button>
                </form>
                <div className="d-flex align-items-center ms-lg-3">
                  <a href="/login" className="btn btn-outline-primary me-2">Login</a>
                  <a href="/register" className="btn btn-primary">Register</a>
                </div>
              </div>
              <div className="cont-ser-position">
                <nav className="navigation">
                  <div className="theme-switch-wrapper">
                    <label className="theme-switch" htmlFor="checkbox">
                      <input type="checkbox" id="checkbox" />
                      <div className="mode-container">
                        <i className="gg-sun"></i>
                        <i className="gg-moon"></i>
                      </div>
                    </label>
                  </div>
                </nav>
              </div>
            </nav>
          </div>
        </header>
        {/* //header */}

        {/* banner */}
        <section className="inner-banner py-5">
          <div className="container py-lg-5 py-md-4 py-2">
            <h4 className="inner-text-title font-weight-bold">For Talents</h4>
            <p>Showcase your skills and get discovered by potential investors.</p>
          </div>
        </section>
        {/* //banner */}

        {/* content */}
        <section className="w3l-about-2 py-5">
          <div className="container py-md-5 py-4">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h5 className="small-title mb-2">Why Choose Us?</h5>
                <h3 className="title-style mb-2">Showcase Your Skills, Get Discovered</h3>
                <p>
                  Ignited offers a platform for talents to showcase their skills and connect with potential investors, ensuring fair and transparent agreements.
                </p>
                <ul className="list-about-2 mt-sm-4 mt-3">
                  <li className="py-1">
                    <i className="far fa-check-square"></i> Showcase your skills
                  </li>
                  <li className="py-2">
                    <i className="far fa-check-square"></i> Connect with potential investors
                  </li>
                  <li className="py-1">
                    <i className="far fa-check-square"></i> Ensure fair and transparent agreements
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 mt-lg-0 mt-5">
                <img
                  src="assets/images/for-talents.jpg"
                  alt="For Talents"
                  className="img-fluid radius-image"
                />
              </div>
            </div>
          </div>
        </section>
        {/* //content */}

        {/* footer */}
        <footer className="w3l-footer py-5">
          <div className="container pt-4">
            <div className="row">
              <div className="col-lg-4 sub-one-left">
                <h6>About </h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa officia dicta magni ea
                  at, culpa atque, rerum dolorum voluptas alias
                  qui temporibus ex totam distinctio nobis impedit minus rerum,
                  nihil blan ditiis quos atque.</p>
                <ul className="social mt-4 pt-lg-1">
                  <li><a href="#facebook"><span className="fab fa-facebook-f"></span></a></li>
                  <li><a href="#twitter"><span className="fab fa-twitter"></span></a></li>
                  <li><a href="#linkedin"><span className="fab fa-linkedin-in"></span></a></li>
                  <li><a href="#google-plus"><span className="fab fa-google-plus-g"></span></a></li>
                  <li><a href="#instagram"><span className="fab fa-instagram"></span></a></li>
                </ul>
              </div>
              <div className="col-lg-5 col-md-6 mt-lg-0 mt-5 px-lg-5 sub-two-right">
                <h6>Recent Posts</h6>
                <div className="footer-post">
                  <ul>
                    <li><a href="#post">Suzan Lois</a></li>
                    <li className="mx-2"><a href="#post">- Nov. 21 - </a></li>
                    <li><a href="#post">3 comments</a></li>
                  </ul>
                  <p className="post-footer"><a href="#post">Delivering New Customer Experiences with Workup.</a></p>
                </div>
                <div className="footer-post mt-4">
                  <ul>
                    <li><a href="#post">Rose Alha</a></li>
                    <li className="mx-2"><a href="#post">- Nov. 21 - </a></li>
                    <li><a href="#post">3 comments</a></li>
                  </ul>
                  <p className="post-footer"><a href="#post">Discussing the current trends in the share market.</a>
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-lg-0 mt-5 sub-one-left">
                <h6>Contact </h6>
                <div className="column2">
                  <div className="href1"><span className="fas fa-envelope-open"></span><a
                    href="mailto:info@example.com">info@example.com</a>
                  </div>
                  <div className="href2 my-3"><span className="fas fa-phone-alt"></span><a
                    href="tel:+44-123-456-78">+44-123-456-78</a>
                  </div>
                  <div>
                    <p className="contact-para mb-3"><span className="fas fa-map-marker-alt"></span>New York,
                      235 Lane, 10001</p>
                  </div>
                  <div>
                    <p className="contact-para"><span className="fas fa-clock"></span>Office Hours: 9AM - 7PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright-footer text-center mt-5 pt-sm-4 pt-2">
              <p>&copy; 2021 Workup. All rights reserved | Design by <a href="https://w3layouts.com/">W3Layouts</a>
              </p>
            </div>
          </div>
        </footer>
        {/* //footer */}

        {/* Js scripts */}
        {/* move top */}
        <button onClick={() => topFunction()} id="movetop" title="Go to top">
          <span className="fas fa-level-up-alt" aria-hidden="true"></span>
        </button>
        <script>
          {`
            // When the user scrolls down 20px from the top of the document, show the button
            window.onscroll = function () {
              scrollFunction();
            };

            function scrollFunction() {
              if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("movetop").style.display = "block";
              } else {
                document.getElementById("movetop").style.display = "none";
              }
            }

            // When the user clicks on the button, scroll to the top of the document
            function topFunction() {
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
            }
          `}
        </script>
        {/* //move top */}

        {/* common jquery plugin */}
        <script src="assets/js/jquery-3.3.1.min.js"></script>
        {/* //common jquery plugin */}

        {/* theme switch js (light and dark) */}
        <script src="assets/js/theme-change.js"></script>
        {/* //theme switch js (light and dark) */}

        {/* MENU-JS */}
        <script>
          {`
            $(window).on("scroll", function () {
              var scroll = $(window).scrollTop();

              if (scroll >= 80) {
                $("#site-header").addClass("nav-fixed");
              } else {
                $("#site-header").removeClass("nav-fixed");
              }
            });

            //Main navigation Active Class Add Remove
            $(".navbar-toggler").on("click", function () {
              $("header").toggleClass("active");
            });
            $(document).on("ready", function () {
              if ($(window).width() > 991) {
                $("header").removeClass("active");
              }
              $(window).on("resize", function () {
                if ($(window).width() > 991) {
                  $("header").removeClass("active");
                }
              });
            });
          `}
        </script>
        {/* //MENU-JS */}

        {/* disable body scroll which navbar is in active */}
        <script>
          {`
            $(function () {
              $('.navbar-toggler').click(function () {
                $('body').toggleClass('noscroll');
              });
            });
          `}
        </script>
        {/* //disable body scroll which navbar is in active */}

        {/* bootstrap */}
        <script src="assets/js/bootstrap.min.js"></script>
        {/* //bootstrap */}
      </body>
    </>
  );
}