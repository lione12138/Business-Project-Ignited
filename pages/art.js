import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../supabaseClient'; // Import Supabase client

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error || !user) {
        router.push('/login'); // Redirect to login if no user is logged in
      } else {
        setUser(user);
      }
    };

    fetchUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login'); // Redirect to login after logout
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Art - Explore Creative Projects</title>
        <link
          href="//fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="assets/css/style-starter.css" />
      </Head>

      <body>
        {/* header */}
        <header id="site-header" className="fixed-top" style={{ paddingLeft: '15px', paddingRight: '15px' }}>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="index.html">Ignited</a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
                  <li className="nav-item">
                    <a className="nav-link" href="about.html">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="features.html">Features</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="services.html">Services</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        {/* //header */}

        {/* banner */}
        <section className="inner-banner py-5">
          <div className="container py-lg-5 py-md-4 py-2">
            <h4 className="inner-text-title font-weight-bold">Art</h4>
            <p>Explore and invest in creative art projects and artists.</p>
          </div>
        </section>
        {/* //banner */}

        {/* Art description */}
        <section className="w3l-art-description py-5">
          <div className="container py-lg-5 py-md-4 py-2">
            <h5 className="small-title mb-2">About Art</h5>
            <h3 className="title-style">Empowering Creative Minds</h3>
            <p>
              Ignited provides a platform for artists to showcase their work, connect with investors, and bring their
              creative visions to life. Whether you're a painter, sculptor, or digital artist, our platform helps you
              reach new audiences and opportunities.
            </p>
            <ul className="list-about-2 mt-sm-4 mt-3">
              <li className="py-1">
                <i className="far fa-check-square"></i> Showcase your art to a global audience
              </li>
              <li className="py-2">
                <i className="far fa-check-square"></i> Attract funding for your projects
              </li>
              <li className="py-1">
                <i className="far fa-check-square"></i> Collaborate with other creative minds
              </li>
            </ul>
          </div>
        </section>
        {/* //Art description */}

        {/* Featured artists */}
        <section className="w3l-featured-artists py-5">
          <div className="container py-lg-5 py-md-4 py-2">
            <h5 className="small-title mb-2">Featured Artists</h5>
            <h3 className="title-style">Meet the Visionaries</h3>
            <div className="row justify-content-center mt-4">
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="artist-card text-center">
                  <img
                    src="assets/images/team1.jpg"
                    alt="Artist 1"
                    className="img-fluid rounded-circle mb-3"
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                  />
                  <h4>Emily Carter</h4>
                  <p>Specialty: Painting</p>
                  <p>Emily's vibrant paintings capture the beauty of nature and human emotions.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="artist-card text-center">
                  <img
                    src="assets/images/team2.jpg"
                    alt="Artist 2"
                    className="img-fluid rounded-circle mb-3"
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                  />
                  <h4>Michael Brown</h4>
                  <p>Specialty: Sculpture</p>
                  <p>Michael's sculptures are a blend of modern design and traditional craftsmanship.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="artist-card text-center">
                  <img
                    src="assets/images/team4.jpg"
                    alt="Artist 3"
                    className="img-fluid rounded-circle mb-3"
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                  />
                  <h4>Sophia Lee</h4>
                  <p>Specialty: Digital Art</p>
                  <p>Sophia creates stunning digital artworks that push the boundaries of creativity.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //Featured artists */}

        {/* Call to action */}
        <section className="w3l-call-to-action py-5">
          <div className="container py-lg-5 py-md-4 py-2 text-center">
            <h3 className="title-style">Ready to Showcase Your Art?</h3>
            <p>Join Ignited today and take your art career to the next level.</p>
            <a href="register.html" className="btn btn-primary mt-3">Get Started</a>
          </div>
        </section>
        {/* //Call to action */}

        {/* footer */}
        <footer className="w3l-footer py-5">
          {/* ...existing footer code... */}
        </footer>
        {/* //footer */}

        {/* Js scripts */}
        <script src="assets/js/jquery-3.3.1.min.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>
      </body>
    </>
  );
}
