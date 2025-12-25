import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../supabaseClient'; // Import Supabase client

export default function TalentsDashboard() {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ full_name: '', gender: '', age: '', bio: '', address: '' });
  const [avatarUrl, setAvatarUrl] = useState(null); // State for avatar URL
  const [uploading, setUploading] = useState(false);
  const [projects, setProjects] = useState([]); // State for projects
  const [newProject, setNewProject] = useState({
    name: '',
    totalCost: '',
    roi: '',
    paybackPeriod: '',
    description: '',
    progress: '',
  });
  const [activeSection, setActiveSection] = useState('profile'); // State to track active section
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error || !user || user.user_metadata?.user_type !== 'talents') {
        router.push('/login'); // Redirect to login if no user or not a talent
      } else {
        setUser(user);
        setFormData({
          full_name: user.user_metadata?.full_name || '',
          gender: user.user_metadata?.gender || '',
          age: user.user_metadata?.age || '',
          bio: user.user_metadata?.bio || '', // Load bio from user_metadata
          address: user.user_metadata?.address || '', // Load address from user_metadata
        });
        setAvatarUrl(user.user_metadata?.avatar_url || null); // Load avatar URL
      }
    };

    fetchUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login'); // Redirect to login after logout
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const { error } = await supabase.auth.updateUser({
        data: {
          full_name: formData.full_name,
          gender: formData.gender,
          age: formData.age,
          bio: formData.bio, // Save bio to user_metadata
          address: formData.address, // Save address to user_metadata
        },
      });
      if (error) throw error;
      setUser((prev) => ({
        ...prev,
        user_metadata: { ...prev.user_metadata, ...formData },
      }));
      setIsEditing(false);
    } catch (err) {
      console.error('Error updating user:', err.message);
    }
  };

  const handleAvatarUpload = async (e) => {
    try {
      setUploading(true);
      const file = e.target.files[0];
      if (!file) {
        console.error('No file selected');
        return;
      }

      console.log('Selected file:', file);

      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}.${fileExt}`;
      const filePath = `avatars/${fileName}`;

      console.log('File path:', filePath);

      // 上传头像到 Supabase 存储
      const { data, error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file, { upsert: true }); // 确保启用 upsert

      if (uploadError) {
        console.error('Upload error:', uploadError.message);
        return;
      }

      console.log('Upload successful:', data);

      // 获取头像的公共 URL
      const { data: publicUrlData, error: publicUrlError } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath);

      if (publicUrlError) {
        console.error('Error getting public URL:', publicUrlError.message);
        return;
      }

      const avatarUrl = publicUrlData.publicUrl;

      console.log('Public URL:', avatarUrl);

      // 更新用户的 avatar_url
      const { error: updateError } = await supabase.auth.updateUser({
        data: { avatar_url: avatarUrl },
      });

      if (updateError) {
        console.error('Error updating user:', updateError.message);
        return;
      }

      // 更新本地状态
      setAvatarUrl(avatarUrl);
    } catch (error) {
      console.error('Error uploading avatar:', error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleAddProject = () => {
    setProjects((prev) => [...prev, { ...newProject }]);
    setNewProject({
      name: '',
      totalCost: '',
      roi: '',
      paybackPeriod: '',
      description: '',
      progress: '',
    });
  };

  const handleProjectInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Head>
        <title>Talents Dashboard - Ignited</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="//fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/css/style-starter.css" />
        <style>
          {`
            body {
              background: #f8f9fa;
              font-family: 'Poppins', sans-serif;
            }
            .dashboard-container {
              display: flex;
              min-height: 100vh;
            }
            .sidebar {
              width: 250px;
              background: #fff;
              border-right: 1px solid #ddd;
              padding: 20px;
            }
            .sidebar h3 {
              font-size: 1.5rem;
              margin-bottom: 20px;
              text-align: center;
            }
            .sidebar ul {
              list-style: none;
              padding: 0;
            }
            .sidebar ul li {
              margin-bottom: 15px;
            }
            .sidebar ul li a {
              text-decoration: none;
              color: #333;
              font-size: 1rem;
              display: flex;
              align-items: center;
            }
            .sidebar ul li a:hover {
              color: #007bff;
            }
            .main-content {
              flex: 1;
              padding: 20px;
            }
            .card {
              background: #fff;
              border: 1px solid #ddd;
              border-radius: 8px;
              padding: 20px;
              margin-bottom: 20px;
            }
            .card h5 {
              font-size: 1.25rem;
              margin-bottom: 15px;
            }
            .btn-primary {
              background: #007bff;
              border: none;
              color: #fff;
              padding: 10px 20px;
              border-radius: 5px;
              cursor: pointer;
            }
            .btn-primary:hover {
              background: #0056b3;
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
            .avatar-container {
              text-align: center;
              margin-bottom: 20px;
            }
            .avatar {
              width: 100px;
              height: 100px;
              border-radius: 50%;
              overflow: hidden;
              margin: 0 auto 10px;
              border: 2px solid #ddd;
            }
            .avatar-img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            .upload-label {
              display: inline-block;
              background: #007bff;
              color: #fff;
              padding: 5px 10px;
              border-radius: 5px;
              cursor: pointer;
              font-size: 0.9rem;
            }
            .upload-label:hover {
              background: #0056b3;
            }
          `}
        </style>
      </Head>
      <div className="dashboard-container">
        <aside className="sidebar">
          <div className="avatar-container">
            <div className="avatar">
              <img
                src={avatarUrl || '/assets/images/default-avatar.png'}
                alt="Avatar"
                className="avatar-img"
              />
            </div>
            <label htmlFor="avatarUpload" className="upload-label">
              {uploading ? 'Uploading...' : 'Change Photo'}
            </label>
            <input
              type="file"
              id="avatarUpload"
              accept="image/*"
              onChange={handleAvatarUpload}
              style={{ display: 'none' }}
            />
          </div>
          <h3>{user?.user_metadata?.full_name || 'User'}</h3>
          <ul>
            <li>
              <button
                className={`btn btn-link ${activeSection === 'profile' ? 'active' : ''}`}
                onClick={() => setActiveSection('profile')}
              >
                Profile
              </button>
            </li>
            <li>
              <button
                className={`btn btn-link ${activeSection === 'paymentMethods' ? 'active' : ''}`}
                onClick={() => setActiveSection('paymentMethods')}
              >
                Payment Methods
              </button>
            </li>
            <li>
              <button
                className={`btn btn-link ${activeSection === 'myProjects' ? 'active' : ''}`}
                onClick={() => setActiveSection('myProjects')}
              >
                My Projects
              </button>
            </li>
            <li>
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </li>
          </ul>
        </aside>
        <main className="main-content">
          {activeSection === 'profile' && (
            <div>
              <div className="card">
                <h5>Welcome to Your Dashboard</h5>
                <p>From your account dashboard, you can manage your profile, view orders, and update your account details.</p>
              </div>
              <div className="card">
                <h5>Profile</h5>
                {user && (
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <strong>Email:</strong> {user.email}
                    </li>
                    <li className="list-group-item">
                      <strong>Full Name:</strong>{' '}
                      {isEditing ? (
                        <input
                          type="text"
                          name="full_name"
                          value={formData.full_name}
                          onChange={handleInputChange}
                          className="form-control"
                        />
                      ) : (
                        user.user_metadata?.full_name || 'N/A'
                      )}
                    </li>
                    <li className="list-group-item">
                      <strong>Gender:</strong>{' '}
                      {isEditing ? (
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleInputChange}
                          className="form-control"
                        >
                          <option value="">Select</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Others">Others</option>
                          <option value="Prefer not to say">Prefer not to say</option>
                        </select>
                      ) : (
                        user.user_metadata?.gender || 'N/A'
                      )}
                    </li>
                    <li className="list-group-item">
                      <strong>Age:</strong>{' '}
                      {isEditing ? (
                        <input
                          type="number"
                          name="age"
                          value={formData.age}
                          onChange={handleInputChange}
                          className="form-control"
                        />
                      ) : (
                        user.user_metadata?.age || 'N/A'
                      )}
                    </li>
                    <li className="list-group-item">
                      <strong>Address:</strong>{' '}
                      {isEditing ? (
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="form-control"
                        />
                      ) : (
                        user.user_metadata?.address || 'N/A'
                      )}
                    </li>
                    <li className="list-group-item">
                      <strong>About You:</strong>{' '}
                      {isEditing ? (
                        <textarea
                          name="bio"
                          value={formData.bio}
                          onChange={handleInputChange}
                          className="form-control"
                          rows="3"
                          placeholder="Write something about yourself..."
                        />
                      ) : (
                        user.user_metadata?.bio || 'N/A'
                      )}
                    </li>
                  </ul>
                )}
                <div className="mt-3">
                  {isEditing ? (
                    <>
                      <button onClick={handleSave} className="btn btn-primary me-2">
                        Save
                      </button>
                      <button onClick={handleEditToggle} className="btn btn-secondary">
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button onClick={handleEditToggle} className="btn btn-primary">
                      Edit Profile
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
          {activeSection === 'paymentMethods' && (
            <div className="card">
              <h5>Payment Methods</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Add Credit/Debit Card:</strong>{' '}
                  <a href="/add-card" className="btn btn-primary btn-sm">Add Card</a>
                </li>
                <li className="list-group-item">
                  <strong>Add PayPal:</strong>{' '}
                  <a href="/add-paypal" className="btn btn-primary btn-sm">Add PayPal</a>
                </li>
              </ul>
            </div>
          )}
          {activeSection === 'myProjects' && (
            <div className="card">
              <h5>My Projects</h5>
              <button
                className="btn btn-primary mb-3"
                onClick={() => setIsEditing(true)}
              >
                Add Project
              </button>
              {isEditing && (
                <div className="card mb-3">
                  <h6>Add New Project</h6>
                  <div className="mb-2">
                    <label>Project Name</label>
                    <input
                      type="text"
                      name="name"
                      value={newProject.name}
                      onChange={handleProjectInputChange}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-2">
                    <label>Estimated Total Cost</label>
                    <input
                      type="number"
                      name="totalCost"
                      value={newProject.totalCost}
                      onChange={handleProjectInputChange}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-2">
                    <label>Return on Investment (%)</label>
                    <input
                      type="number"
                      name="roi"
                      value={newProject.roi}
                      onChange={handleProjectInputChange}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-2">
                    <label>Estimated Payback Period (Months)</label>
                    <input
                      type="number"
                      name="paybackPeriod"
                      value={newProject.paybackPeriod}
                      onChange={handleProjectInputChange}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-2">
                    <label>Project Description</label>
                    <textarea
                      name="description"
                      value={newProject.description}
                      onChange={handleProjectInputChange}
                      className="form-control"
                      rows="3"
                    />
                  </div>
                  <div className="mb-2">
                    <label>Project Progress Updates</label>
                    <textarea
                      name="progress"
                      value={newProject.progress}
                      onChange={handleProjectInputChange}
                      className="form-control"
                      rows="3"
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      handleAddProject();
                      setIsEditing(false);
                    }}
                  >
                    Save Project
                  </button>
                  <button
                    className="btn btn-secondary ms-2"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                </div>
              )}
              {projects.length > 0 ? (
                projects.map((project, index) => (
                  <div key={index} className="card mb-3">
                    <h6>{project.name}</h6>
                    <p><strong>Estimated Total Cost:</strong> {project.totalCost}</p>
                    <p><strong>Return on Investment:</strong> {project.roi}%</p>
                    <p><strong>Estimated Payback Period:</strong> {project.paybackPeriod} Months</p>
                    <p><strong>Project Description:</strong> {project.description}</p>
                    <p><strong>Project Progress Updates:</strong> {project.progress}</p>
                  </div>
                ))
              ) : (
                <p>No projects added yet.</p>
              )}
            </div>
          )}
        </main>
      </div>
    </>
  );
}