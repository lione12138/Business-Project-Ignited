import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../supabaseClient'; // Import Supabase client

export default function Login() {
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    try {
      const { data: { user }, error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
      });

      if (error) {
        setErrorMessage(error.message); // Display error message
      } else {
        // Redirect based on user type
        if (user.user_metadata?.user_type === 'talents') {
          router.push('/talents_dashboard'); // Redirect to talents dashboard
        } else if (user.user_metadata?.user_type === 'investors') {
          router.push('/investors_dashboard'); // Redirect to investors dashboard
        } else {
          setErrorMessage('Invalid user type. Please contact support.');
        }
      }
    } catch (err) {
      console.error('Unexpected error:', err); // Debug log
      setErrorMessage('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <>
      <Head>
        <title>Login - Ignited</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="//fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/css/style-starter.css" />
      </Head>
      <header id="site-header" className="fixed-top">
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
          </nav>
        </div>
      </header>
      <main>
        <section className="w3l-login py-5">
          <div className="container py-lg-5 py-md-4 py-2">
            <div className="title-main text-center mx-auto mb-md-5 mb-4" style={{ maxWidth: '600px' }}>
              <h3 className="title-style">Login to Your Account</h3>
              <p>Enter your credentials to access your dashboard.</p>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <form onSubmit={handleLogin} className="signin-form">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Login
                  </button>
                  {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
                  <p className="text-center mt-3">
                    Don't have an account?{' '}
                    <a href="/register" style={{ color: 'blue' }}>
                      Register here
                    </a>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <script src="/assets/js/bootstrap.min.js"></script>
    </>
  );
}
