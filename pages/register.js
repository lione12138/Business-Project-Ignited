import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../supabaseClient'; // Import Supabase client

export default function Register() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, userType } = e.target.elements;

    try {
      // Call Supabase signUp method
      const { data, error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
        options: {
          data: {
            full_name: name.value, // Save additional user metadata
            user_type: userType.value, // Save user type
          },
        },
      });

      console.log('Supabase response:', data, error); // Debug log

      if (error) {
        setErrorMessage(error.message); // Display error message
      } else {
        setIsSubmitted(true);

        // Redirect based on user type
        setTimeout(() => {
          if (userType.value === 'talents') {
            router.push('/talents_dashboard'); // Correct path for talents dashboard
          } else if (userType.value === 'investors') {
            router.push('/investors_dashboard'); // Correct path for investors dashboard
          }
        }, 3000); // Redirect after 3 seconds
      }
    } catch (err) {
      console.error('Unexpected error:', err); // Debug log
      setErrorMessage('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <>
      <Head>
        <title>Register - Ignited</title>
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
        <section className="w3l-register py-5">
          <div className="container py-lg-5 py-md-4 py-2">
            <div className="title-main text-center mx-auto mb-md-5 mb-4" style={{ maxWidth: '600px' }}>
              <h3 className="title-style">Create Your Account</h3>
              <p>Fill in the details below to register.</p>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-6">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="signin-form">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
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
                    <div className="mb-3">
                      <label htmlFor="userType" className="form-label">
                        Register As
                      </label>
                      <select className="form-control" id="userType" name="userType" required>
                        <option value="" disabled selected>
                          Select your role
                        </option>
                        <option value="talents">Talents</option>
                        <option value="investors">Investors</option>
                      </select>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Register
                    </button>
                    {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
                    <p className="text-center mt-3">
                      Already have an account?{' '}
                      <a href="/login" style={{ color: 'blue' }}>
                        Login here
                      </a>
                      .
                    </p>
                  </form>
                ) : (
                  <div className="text-center">
                    <h4>Thank you for registering!</h4>
                    <p>We have sent a confirmation link to your email. Please check your inbox and confirm your email.</p>
                    <p>You will be redirected to the appropriate dashboard shortly...</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <script src="/assets/js/bootstrap.min.js"></script>
    </>
  );
}
