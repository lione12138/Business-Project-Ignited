import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../supabaseClient'; // Import Supabase client

export default function InvestorsDashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error || !user || user.user_metadata?.user_type !== 'investors') {
        router.push('/login'); // Redirect to login if no user or not an investor
      } else {
        setUser(user);
      }
    };

    fetchUser();

    // Add theme-change.js functionality
    if (!document.querySelector('script[src="/assets/js/theme-change.js"]')) {
      const script = document.createElement('script');
      script.src = '/assets/js/theme-change.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        const existingScript = document.querySelector('script[src="/assets/js/theme-change.js"]');
        if (existingScript) {
          document.body.removeChild(existingScript);
        }
      };
    }
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login'); // Redirect to login after logout
  };

  return (
    <>
      <Head>
        <title>Investors Dashboard - Ignited</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="//fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/css/style-starter.css" />
        <style>
          {`
            body {
              background: linear-gradient(135deg, #1e1e2f, #2a2a40);
              color: #fff;
              font-family: 'Poppins', sans-serif;
            }
            .dashboard-header {
              text-align: center;
              margin-bottom: 30px;
            }
            .dashboard-header h1 {
              font-size: 2.5rem;
              color: #00d4ff;
              text-shadow: 0 0 10px #00d4ff, 0 0 20px #00d4ff;
            }
            .dashboard-header p {
              font-size: 1.2rem;
              color: #ccc;
            }
            .card {
              background: rgba(255, 255, 255, 0.1);
              border: none;
              border-radius: 15px;
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
              backdrop-filter: blur(10px);
              padding: 20px;
              margin-bottom: 20px;
            }
            .card h5 {
              color: #00d4ff;
              font-size: 1.5rem;
              margin-bottom: 15px;
            }
            .logout-btn {
              background: #ff4d4d;
              color: #fff;
              border: none;
              padding: 10px 20px;
              border-radius: 5px;
              cursor: pointer;
              transition: background 0.3s ease;
            }
            .logout-btn:hover {
              background: #ff1a1a;
            }
            .stats {
              display: flex;
              justify-content: space-between;
              gap: 20px;
            }
            .stats .stat-card {
              flex: 1;
              background: rgba(255, 255, 255, 0.1);
              border-radius: 15px;
              padding: 20px;
              text-align: center;
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            }
            .stat-card h3 {
              font-size: 2rem;
              color: #00d4ff;
            }
            .stat-card p {
              font-size: 1rem;
              color: #ccc;
            }
          `}
        </style>
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
            <button onClick={handleLogout} className="logout-btn ms-auto">
              Logout
            </button>
          </nav>
        </div>
      </header>
      <main>
        <section className="w3l-dashboard py-5">
          <div className="container py-lg-5 py-md-4 py-2">
            <div className="dashboard-header">
              <h1>Welcome, Investor!</h1>
              {user ? (
                <p>
                  Hello, <strong>{user.user_metadata?.full_name || user.email}</strong>. You are logged in as an <strong>{user.user_metadata?.user_type}</strong>.
                </p>
              ) : (
                <p>Loading user information...</p>
              )}
            </div>
            <div className="stats">
              <div className="stat-card">
                <h3>$1,250,000</h3>
                <p>Total Investments</p>
              </div>
              <div className="stat-card">
                <h3>15</h3>
                <p>Active Projects</p>
              </div>
              <div className="stat-card">
                <h3>8%</h3>
                <p>Average ROI</p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="card">
                  <h5>Recommended Projects</h5>
                  <ul>
                    <li>Project A - AI-driven Analytics</li>
                    <li>Project B - Renewable Energy Startup</li>
                    <li>Project C - Blockchain-based Supply Chain</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card">
                  <h5>Market Analysis</h5>
                  <p>Stay updated with the latest market trends and insights to make informed investment decisions.</p>
                  <button className="btn btn-primary">View Reports</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}