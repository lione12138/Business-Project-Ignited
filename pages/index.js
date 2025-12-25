import Head from 'next/head';
import { useEffect, useContext } from 'react';
import { UserContext } from './_app'; // Import UserContext
import { supabase } from '../supabaseClient'; // Import Supabase client

export default function Home() {
  const user = useContext(UserContext);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload(); // Reload the page after logout
  };

  useEffect(() => {
    const loadScript = (src, onLoad) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = onLoad;
      document.body.appendChild(script);
      return script;
    };

    // Load jQuery first
    const jqueryScript = loadScript('/assets/js/jquery-3.3.1.min.js', () => {
      console.log('jQuery loaded');

      // Load Bootstrap after jQuery
      loadScript('/assets/js/bootstrap.min.js', () => {
        console.log('Bootstrap loaded');

        // Load theme-change.js after Bootstrap
        loadScript('/assets/js/theme-change.js', () => {
          console.log('Theme-change.js loaded');
          if (typeof window.themeChange === 'function') {
            window.themeChange(); // Initialize theme-change.js
          }
        });
      });
    });

    // Cleanup dynamically loaded scripts
    return () => {
      document.querySelectorAll('script[src]').forEach((script) => {
        if (
          script.src.includes('jquery-3.3.1.min.js') ||
          script.src.includes('bootstrap.min.js') ||
          script.src.includes('theme-change.js')
        ) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <>
      <Head>
        <title>Ignited - Corporate Category Bootstrap Responsive Website Template - Home : W3Layouts</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="//fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/css/style-starter.css" />
      </Head>
      <header id="site-header" className="fixed-top" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
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
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
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
              <form action="#search" method="GET" className="d-flex search-header ms-lg-2">
                <input className="form-control" type="search" placeholder="Enter Keyword..." aria-label="Search" required />
                <button className="btn btn-style" type="submit"><i className="fas fa-search"></i></button>
              </form>
              <div className="d-flex align-items-center ms-lg-3">
                {user ? (
                  <div className="d-flex align-items-center">
                    <a
                      href={user.user_metadata?.user_type === 'talents' ? '/talents_dashboard' : '/investors_dashboard'}
                      className="me-3"
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
                      onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
                    >
                      Hello, {user.user_metadata?.full_name || user.email}
                    </a>
                    <button onClick={handleLogout} className="btn btn-outline-danger">
                      Logout
                    </button>
                  </div>
                ) : (
                  <div>
                    <a href="/login" className="btn btn-outline-primary me-2">Login</a>
                    <a href="/register" className="btn btn-primary">Register</a>
                  </div>
                )}
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
      <main>
        <div className="slider">
          <div className="slide current">
            <div className="bg-layer">
              <div className="content">
                <h6>Empowering Talent, Rewarding Belief</h6>
                <h3>Invest in People, Unlock Potential</h3>
                <a href="/about" className="btn btn-style mt-4">Learn More</a>
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="bg-layer">
              <div className="content">
                <h6>Democratizing Investment</h6>
                <h3>Support Talents Across Industries</h3>
                <a href="/about" className="btn btn-style mt-4">Learn More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button id="prev"><i className="fas fa-arrow-left"></i></button>
          <button id="next"><i className="fas fa-arrow-right"></i></button>
        </div>
        <section className="home-services py-5" id="services">
          <div className="container py-lg-5 py-md-4 py-2">
            <div className="title-main text-center mx-auto mb-md-5 mb-4" style={{ maxWidth: '700px' }}>
              <h5 className="small-title mb-2">Our Mission</h5>
              <h3 className="title-style">Connecting Talents with Investors for Shared Success</h3>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-3 col-md-6">
                <div className="box-wrap">
                  <div className="icon">
                    <i className="fas fa-user"></i>
                  </div>
                  <h4 className="number">01</h4>
                  <h4><a href="/for-talents">For Talents</a></h4>
                  <p>Showcase your skills and ideas to attract funding and mentorship.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-md-0 mt-4">
                <div className="box-wrap">
                  <div className="icon">
                    <i className="fas fa-handshake"></i>
                  </div>
                  <h4 className="number">02</h4>
                  <h4><a href="/for-investors">For Investors</a></h4>
                  <p>Discover and support high-potential talents with structured agreements.</p>
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
                <p className="mt-3">We use a people-centered, performance-driven investment model that tracks talent's
                  key performance indicators in real time through artificial intelligence and utilizes blockchain
                  technology to ensure contracts are transparent and secure, and investors are only rewarded when
                  talent is truly successful.</p>
                <p className="mt-3">Our platform both liberates the shackles of traditional financing methods and opens
                  new doors of investment and growth for neglected professionals in various fields.</p>
                <div className="row two-grids mt-5 pt-lg-4">
                  <div className="col-sm-6 grids_info d-flex">
                    <i className="fas fa-hand-holding-usd"></i>
                    <div className="detail ms-3">
                      <h4>Finance Consultant</h4>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6 grids_info d-flex mt-sm-0 mt-4">
                    <i className="far fa-chart-bar"></i>
                    <div className="detail ms-3">
                      <h4>Business Consultant</h4>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1 text-end mt-lg-0 mt-5 position-relative">
                <img src="/assets/images/img1.jpg" alt="" className="img-fluid radius-image" />
                <div className="imginfo__box">
                  <a href="/login" style={{ color: '#fff', textDecoration: 'none', fontSize: '2rem' }}>Join Now</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w3l-grids-block py-5" id="features">
          <div className="container py-lg-5 py-md-4 py-2">
            <div className="title-main text-center mx-auto mb-md-5 mb-4" style={{ maxWidth: '600px' }}>
              <h5 className="small-title mb-2">Our Features</h5>
              <h3 className="title-style">We Make Your Agency Full Bright</h3>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="bottom-block">
                  <a href="#features" className="d-block">
                    <i className="fas fa-business-time"></i>
                    <h3 className="mt-3 mb-2"> Innovative financing models</h3>
                    <p className="">Utilize revenue sharing agreements so that the return on investment is truly
                      tied to the actual accomplishments of the talent.</p>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10 mt-md-0 mt-4">
                <div className="bottom-block">
                  <a href="#features" className="d-block">
                    <i className="fab fa-accusoft"></i>
                    <h3 className="mt-3 mb-2">AI-driven performance evaluation</h3>
                    <p className="">Track talent growth and market performance in real time with intelligent
                      algorithms.</p>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10 mt-lg-0 mt-4">
                <div className="bottom-block">
                  <a href="#features" className="d-block">
                    <i className="fas fa-chart-line"></i>
                    <h3 className="mt-3 mb-2">Transparent and secure trading system</h3>
                    <p className="">Blockchain-based technology ensures that every contract and flow of funds is
                      traceable.</p>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10 mt-4">
                <div className="bottom-block">
                  <a href="#features" className="d-block">
                    <i className="fas fa-chart-pie"></i>
                    <h3 className="mt-3 mb-2">Incentive Alignment Design</h3>
                    <p className="">Investors synchronize their interests with those of the talent and avoid the
                      risk of secondary market speculation.</p>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10 mt-4">
                <div className="bottom-block">
                  <a href="#features" className="d-block">
                    <i className="fas fa-piggy-bank"></i>
                    <h3 className="mt-3 mb-2"> Financial Advices</h3>
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempora
                      rerum perspiciatis?</p>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10 mt-4">
                <div className="bottom-block">
                  <a href="#features" className="d-block">
                    <i className="fas fa-copy"></i>
                    <h3 className="mt-3 mb-2">Tax Strategy</h3>
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempora
                      rerum perspiciatis?</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w3l-homeblock3 py-5">
          <div className="container py-lg-5 py-md-4 py-2">
            <div className="title-main text-center mx-auto mb-md-5 mb-4" style={{ maxWidth: '700px' }}>
              <h5 className="small-title mb-2">What we do?</h5>
              <h3 className="title-style">We build the future！</h3>
              <p className="mt-3">Making every investment based on real performance and writing success stories together
              </p>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="top-pic1">
                  <div className="card-body blog-details">
                    <span className="meta-value">Investment</span>
                    <a href="#blog" className="blog-desc">Talent growth data analysis
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
                    <a href="#blog" className="blog-desc">Customized Revenue Sharing Solutions
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
                    <a href="#blog" className="blog-desc">Milestone Management & Risk Assessment
                    </a>
                    <a href="#blog" className="btn btn-style-primary btn-style text-white mt-4">Read
                      More<i className="fas fa-arrow-right ms-1"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="w3l-progress py-5" id="progress">
          <div className="container py-lg-5 py-md-4 py-2">
            <div className="row align-items-center">
              <div className="col-lg-6 about-2-secs-right mb-lg-0 mb-5">
                <img src="/assets/images/img2.jpg" alt="" className="img-fluid radius-image" />
              </div>
              <div className="col-lg-6 about-2-secs-left ps-xl-5">
                <h5 className="small-title mb-2">Why Choose us</h5>
                <h3 className="title-style mb-sm-3 mb-2">A right choice that makes the difference to others</h3>
                <p>Consectetur adipiscing elit. Aliquam sit amet
                  efficitur tortor. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunte mollit.</p>
                <div className="w3l-progressblock mt-md-5 mt-4">
                  <div className="progress-info info1">
                    <h6 className="progress-tittle">Business Planning <span className="">90%</span></h6>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '90%' }}
                        aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                      </div>
                    </div>
                  </div>
                  <div className="progress-info info2">
                    <h6 className="progress-tittle">Creativity <span className="">85%</span>
                    </h6>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '85%' }}
                        aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                      </div>
                    </div>
                  </div>
                  <div className="progress-info info3">
                    <h6 className="progress-tittle">Financial Advices <span className="">80%</span></h6>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '80%' }}
                        aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                      </div>
                    </div>
                  </div>
                  <div className="progress-info info3 mb-0">
                    <h6 className="progress-tittle">Business Security <span className="">90%</span></h6>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '90%' }}
                        aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                      </div>
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
                      <img src="/assets/images/testi1.jpg" className="img-fluid rounded-circle"
                        alt="client image" />
                      <blockquote className="quote"><q>Ignited's revenue sharing mechanism not only changed my
                          career trajectory, but also allowed me to find my own growth path.
                        </q> </blockquote>
                      <div className="source">- Mario Spe</div>
                    </li>

                    <li className="anim2">
                      <img src="/assets/images/testi2.jpg" className="img-fluid rounded-circle"
                        alt="client image" />
                      <blockquote className="quote"><q>Ignited's revenue sharing mechanism not only changed my
                          career trajectory, but also allowed me to find my own growth path.
                        </q> </blockquote>
                      <div className="source">- Petey Cru</div>
                    </li>
                    <li className="anim3">
                      <img src="/assets/images/testi3.jpg" className="img-fluid rounded-circle "
                        alt="client image" />
                      <blockquote className="quote"><q>Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam,
                          quis nostrud exercitation.
                        </q> </blockquote>
                      <div className="source">- Anna Sth</div>
                    </li>
                    <li className="anim4">
                      <img src="/assets/images/testi1.jpg" className="img-fluid rounded-circle"
                        alt="client image" />
                      <blockquote className="quote"><q>Duis aute irure dolor in reprehenderit in voluptate
                          velit esse
                          cillum dolore eu. Excepteur sint occaecat cupidatat
                          non proident, sunt in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </q> </blockquote>
                      <div className="source">- Gail For</div>
                    </li>
                    <li className="anim5">
                      <img src="/assets/images/testi2.jpg" className="img-fluid rounded-circle"
                        alt="client image" />
                      <blockquote className="quote"><q>Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam,
                          quis nostrud exercitation.
                        </q> </blockquote>
                      <div className="source">- Boye Fra</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w3l-blog-block-5 py-5" id="blog">
          <div className="container py-md-5 py-4">
            <div className="title-main text-center mx-auto mb-md-5 mb-4" style={{ maxWidth: '700px' }}>
              <h5 className="small-title mb-2">News Feed</h5>
              <h3 className="title-style">Latest Blog Posts</h3>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="blog-card-single">
                  <div className="grids5-info">
                    <a href="#blog"><img className="img-fluid" src="/assets/images/blog1.jpg" alt="" /></a>
                    <div className="blog-info">
                      <h4><a href="#blog">How to reinvent the investment model</a></h4>
                      <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sunt inc officia deserunt.</p>
                      <div className="d-flex align-items-center justify-content-between mt-4">
                        <a className="d-flex align-items-center" href="#blog" title="23k followers">
                          <img className="img-fluid" src="/assets/images/testi2.jpg" alt="admin" style={{ maxWidth: '40px' }} />
                          <span className="small ms-2">Eetey Cruis</span>
                        </a>
                        <p className="date-text"><i className="far fa-calendar-alt me-1"></i>Nov 06, 2021</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                <div className="blog-card-single">
                  <div className="grids5-info">
                    <a href="#blog"><img className="img-fluid" src="/assets/images/blog3.jpg" alt="" /></a>
                    <div className="blog-info">
                      <h4><a href="#blog">Ethical Investment: The New Ecology of Investing</a></h4>
                      <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sunt inc officia deserunt.</p>
                      <div className="d-flex align-items-center justify-content-between mt-4">
                        <a className="d-flex align-items-center" href="#blog" title="23k followers">
                          <img className="img-fluid" src="/assets/images/testi1.jpg" alt="admin" style={{ maxWidth: '40px' }} />
                          <span className="small ms-2">Molive Joe</span>
                        </a>
                        <p className="date-text"><i className="far fa-calendar-alt me-1"></i>Nov 10, 2021</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                <div className="blog-card-single">
                  <div className="grids5-info">
                    <a href="#blog"><img className="img-fluid" src="/assets/images/blog2.jpg" alt="" /></a>
                    <div className="blog-info">
                      <h4><a href="#blog">How to plan a website redesign strategy</a></h4>
                      <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sunt inc officia deserunt.</p>
                      <div className="d-flex align-items-center justify-content-between mt-4">
                        <a className="d-flex align-items-center" href="#blog" title="23k followers">
                          <img className="img-fluid" src="/assets/images/testi3.jpg" alt="admin" style={{ maxWidth: '40px' }} />
                          <span className="small ms-2">Turne Leo</span>
                        </a>
                        <p className="date-text"><i className="far fa-calendar-alt me-1"></i>Nov 12, 2021</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button onclick="topFunction()" id="movetop" title="Go to top">
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
