import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Ignited</title>
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
                  <a className="nav-link active" href="/about">About</a>
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
              <h4 className="inner-text-title font-weight-bold pt-sm-5 pt-4">About Us</h4>
              <ul className="breadcrumbs-custom-path">
                <li><a href="/">Home</a></li>
                <li className="active"><i className="fas fa-angle-right mx-2"></i>About</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="w3l-about-2 py-5">
          <div className="container py-md-5 py-4">
            <div className="row align-items-center">
              <div className="col-lg-6 about-2-secs-left">
                <h5 className="small-title mb-2">About Us</h5>
                <h3 className="title-style mb-2">Empowering Talents, Rewarding Belief</h3>
                <p>Ignited is a platform that connects talents with investors through structured, fair agreements. We aim to democratize investment, align incentives, and unlock human potential across industries.</p>
                <ul className="list-about-2 mt-sm-4 mt-3">
                  <li className="py-1"><i className="far fa-check-square"></i> Democratize access to funding</li>
                  <li className="py-2"><i className="far fa-check-square"></i> Align incentives for shared success</li>
                  <li className="py-1"><i className="far fa-check-square"></i> Provide mentorship and advocacy</li>
                </ul>
              </div>
              <div className="col-lg-6 about-2-secs-right mt-lg-4 mt-5">
                <img src="/assets/images/about.jpg" alt="About Us" className="img-fluid radius-image" />
              </div>
            </div>
          </div>
        </section>
        <section className="w3l-grids-block pb-5 pt-4" id="features">
          <div className="container pb-lg-5 pb-md-4 pb-2">
            <div className="title-main text-center mx-auto mb-md-5 mb-4" style={{ maxWidth: '600px' }}>
              <h5 className="small-title mb-2">Our Features</h5>
              <h3 className="title-style">We Make Your Agency Full Bright</h3>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="bottom-block">
                  <a href="#features" className="d-block">
                    <i className="fas fa-business-time"></i>
                    <h3 className="mt-3 mb-2"> Market Research</h3>
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempora rerum perspiciatis?</p>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10 mt-md-0 mt-4">
                <div className="bottom-block">
                  <a href="#features" className="d-block">
                    <i className="fab fa-accusoft"></i>
                    <h3 className="mt-3 mb-2">Startup Business</h3>
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempora rerum perspiciatis?</p>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10 mt-lg-0 mt-4">
                <div className="bottom-block">
                  <a href="#features" className="d-block">
                    <i className="fas fa-chart-line"></i>
                    <h3 className="mt-3 mb-2">Business Growth</h3>
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempora rerum perspiciatis?</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w3l-servicesblock py-5" id="whychoose">
          <div className="container py-lg-5 py-md-4 py-2">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h5 className="small-title mb-2">Why choose us</h5>
                <h3 className="title-style">We Provided Some Of The Good Quality To You</h3>
                <p className="mt-3">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae, fugiat.</p>
                <div className="row two-grids mt-5 pt-lg-4">
                  <div className="col-sm-6 grids_info d-flex">
                    <i className="fas fa-hand-holding-usd"></i>
                    <div className="detail ms-3">
                      <h4>Finance Consultant</h4>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit.</p>
                    </div>
                  </div>
                  <div className="col-sm-6 grids_info d-flex mt-sm-0 mt-4">
                    <i className="far fa-chart-bar"></i>
                    <div className="detail ms-3">
                      <h4>Business Consultant</h4>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1 text-end mt-lg-0 mt-5 position-relative">
                <img src="/assets/images/img1.jpg" alt="" className="img-fluid radius-image" />
                <div className="imginfo__box">
                  <h6 className="imginfo__title">36+</h6>
                  <p>Years of experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w3l-progress py-5" id="progress">
          <div className="container py-lg-5 py-md-4 py-2">
            <div className="row align-items-center">
              <div className="col-lg-6 about-2-secs-right mb-lg-0 mb-5">
                <img src="/assets/images/img3.jpg" alt="" className="img-fluid radius-image" />
              </div>
              <div className="col-lg-6 about-2-secs-left ps-xl-5">
                <h5 className="small-title mb-2">Why Choose us</h5>
                <h3 className="title-style mb-sm-3 mb-2">We take care of the Future</h3>
                <p>Consectetur adipiscing elit. Aliquam sit amet efficitur tortor. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunte mollit.</p>
                <div className="w3l-progressblock mt-md-5 mt-4">
                  <div className="progress-info info1">
                    <h6 className="progress-tittle">Business Planning <span className="">90%</span></h6>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className="progress-info info3">
                    <h6 className="progress-tittle">Financial Advices <span className="">80%</span></h6>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className="progress-info info3 mb-0">
                    <h6 className="progress-tittle">Business Security <span className="">90%</span></h6>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w3l-index4 py-5" id="testimonials">
          <div className="container py-md-5 py-4">
            <div className="content-slider text-center py-4">
              <div className="clients-slider">
                <div className="mask">
                  <ul>
                    <li className="anim1">
                      <img src="/assets/images/testi1.jpg" className="img-fluid rounded-circle" alt="client image" />
                      <blockquote className="quote"><q>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</q></blockquote>
                      <div className="source">- Mario Spe</div>
                    </li>
                    <li className="anim2">
                      <img src="/assets/images/testi2.jpg" className="img-fluid rounded-circle" alt="client image" />
                      <blockquote className="quote"><q>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.</q></blockquote>
                      <div className="source">- Petey Cru</div>
                    </li>
                    <li className="anim3">
                      <img src="/assets/images/testi3.jpg" className="img-fluid rounded-circle" alt="client image" />
                      <blockquote className="quote"><q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</q></blockquote>
                      <div className="source">- Anna Sth</div>
                    </li>
                    <li className="anim4">
                      <img src="/assets/images/testi1.jpg" className="img-fluid rounded-circle" alt="client image" />
                      <blockquote className="quote"><q>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</q></blockquote>
                      <div className="source">- Gail For</div>
                    </li>
                    <li className="anim5">
                      <img src="/assets/images/testi2.jpg" className="img-fluid rounded-circle" alt="client image" />
                      <blockquote className="quote"><q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</q></blockquote>
                      <div className="source">- Boye Fra</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w3l-team py-5" id="team">
          <div className="container py-lg-5 py-md-4 py-2">
            <div className="title-main text-center mx-auto mb-md-5 mb-4" style={{ maxWidth: '700px' }}>
              <h5 className="small-title mb-2">Expert People</h5>
              <h3 className="title-style">Our Team Members</h3>
            </div>
            <div className="row text-center">
              <div className="team-info col-md-3 col-6">
                <div className="column position-relative">
                  <a href="#url"><img src="/assets/images/team1.jpg" alt="" className="img-fluid team-img" /></a>
                </div>
                <h4><a href="#team">Skappy Yolo</a></h4>
                <p>CEO & Founder</p>
                <div className="team-info">
                  <div className="caption">
                    <div className="social-icons-section text-center">
                      <a className="fac" href="#url">
                        <span className="fab fa-facebook-f"></span>
                      </a>
                      <a className="twitter" href="#url">
                        <span className="fab fa-twitter"></span>
                      </a>
                      <a className="instagram" href="#url">
                        <span className="fab fa-instagram"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team-info col-md-3 col-6">
                <div className="column position-relative">
                  <a href="#url"><img src="/assets/images/team2.jpg" alt="" className="img-fluid team-img" /></a>
                </div>
                <h4><a href="#team">Ruta Lage</a></h4>
                <p>Senior Designer</p>
                <div className="team-info">
                  <div className="caption">
                    <div className="social-icons-section text-center">
                      <a className="fac" href="#url">
                        <span className="fab fa-facebook-f"></span>
                      </a>
                      <a className="twitter" href="#url">
                        <span className="fab fa-twitter"></span>
                      </a>
                      <a className="instagram" href="#url">
                        <span className="fab fa-instagram"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team-info col-md-3 col-6 mt-md-0 mt-sm-5 mt-5">
                <div className="column position-relative">
                  <a href="#url"><img src="/assets/images/team3.jpg" alt="" className="img-fluid team-img" /></a>
                </div>
                <h4><a href="#team">Liuhuang Luo</a></h4>
                <p>Programmer</p>
                <div className="team-info">
                  <div className="caption">
                    <div className="social-icons-section text-center">
                      <a className="fac" href="#url">
                        <span className="fab fa-facebook-f"></span>
                      </a>
                      <a className="twitter" href="#url">
                        <span className="fab fa-twitter"></span>
                      </a>
                      <a className="instagram" href="#url">
                        <span className="fab fa-instagram"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team-info col-md-3 col-6 mt-md-0 mt-sm-5 mt-5">
                <div className="column position-relative">
                  <a href="#url"><img src="/assets/images/team4.jpg" alt="" className="img-fluid team-img" /></a>
                </div>
                <h4><a href="#team">Echai Bruno Fon</a></h4>
                <p>Digital Marketer</p>
                <div className="team-info">
                  <div className="caption">
                    <div className="social-icons-section text-center">
                      <a className="fac" href="#url">
                        <span className="fab fa-facebook-f"></span>
                      </a>
                      <a className="twitter" href="#url">
                        <span className="fab fa-twitter"></span>
                      </a>
                      <a className="instagram" href="#url">
                        <span className="fab fa-instagram"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team-info col-md-3 col-6 mt-md-0 mt-sm-5 mt-5">
                <div className="column position-relative">
                  <a href="#url"><img src="/assets/images/team5.jpg" alt="" className="img-fluid team-img" /></a>
                </div>
                <h4><a href="#team">Boris</a></h4>
                <p>Digital Marketer</p>
                <div className="team-info">
                  <div className="caption">
                    <div className="social-icons-section text-center">
                      <a className="fac" href="#url">
                        <span className="fab fa-facebook-f"></span>
                      </a>
                      <a className="twitter" href="#url">
                        <span className="fab fa-twitter"></span>
                      </a>
                      <a className="instagram" href="#url">
                        <span className="fab fa-instagram"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team-info col-md-3 col-6 mt-md-0 mt-sm-5 mt-5">
                <div className="column position-relative">
                  <a href="#url"><img src="/assets/images/team5.jpg" alt="" className="img-fluid team-img" /></a>
                </div>
                <h4><a href="#team">Md Ataur Rahman</a></h4>
                <p>Consulor</p>
                <div className="team-info">
                  <div className="caption">
                    <div className="social-icons-section text-center">
                      <a className="fac" href="#url">
                        <span className="fab fa-facebook-f"></span>
                      </a>
                      <a className="twitter" href="#url">
                        <span className="fab fa-twitter"></span>
                      </a>
                      <a className="instagram" href="#url">
                        <span className="fab fa-instagram"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <button onClick={() => topFunction()} id="movetop" title="Go to top">
          <span className="fas fa-level-up-alt" aria-hidden="true"></span>
        </button>
        <script>
          {`
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

            function topFunction() {
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
            }
          `}
        </script>
        <script src="/assets/js/jquery-3.3.1.min.js"></script>
        <script src="/assets/js/bootstrap.min.js"></script>
        <script src="/assets/js/theme-change.js"></script>
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
        <script>
          {`
            $(function () {
              $('.navbar-toggler').click(function () {
                $('body').toggleClass('noscroll');
              });
            });
          `}
        </script>
      </main>
    </>
  );
}
