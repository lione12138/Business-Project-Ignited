# 🔥 Ignited - Talent & Investor Connection Platform

<p align="center">
  <img src="public/assets/images/company-logo.png" alt="Ignited Logo" width="150"/>
</p>

<p align="center">
  <strong>Connecting Talented Creators with Visionary Investors</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#screenshots">Screenshots</a>
</p>

---

## 📖 Overview

**Ignited** is a modern web platform designed to bridge the gap between talented individuals (artists, musicians, programmers, and creators) and investors looking for promising opportunities. The platform provides dedicated dashboards for both user types, enabling seamless profile management, project showcasing, and connection building.

## ✨ Features

### For Talents
- 🎨 **Profile Management** - Create and customize your professional profile
- 📁 **Project Showcase** - Display your projects with details like ROI, costs, and progress
- 🖼️ **Avatar Upload** - Personalize your profile with custom avatars
- 📊 **Dashboard** - Manage your presence and track engagement

### For Investors
- 🔍 **Discover Talents** - Browse through a curated list of talented individuals
- 💼 **Investment Opportunities** - View detailed project information
- 📈 **Portfolio Management** - Track your investments and interests
- 🤝 **Direct Connection** - Connect with talents directly through the platform

### General Features
- 🔐 **Secure Authentication** - Powered by Supabase Auth
- 🌙 **Dark/Light Mode** - Theme switching for comfortable viewing
- 📱 **Responsive Design** - Works seamlessly on all devices
- ⚡ **Fast Performance** - Built with Next.js for optimal speed

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| ![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?logo=next.js) | React Framework |
| ![React](https://img.shields.io/badge/React-19.1.0-blue?logo=react) | UI Library |
| ![Supabase](https://img.shields.io/badge/Supabase-Latest-green?logo=supabase) | Backend & Authentication |
| ![Bootstrap](https://img.shields.io/badge/Bootstrap-5.x-purple?logo=bootstrap) | CSS Framework |
| ![pnpm](https://img.shields.io/badge/pnpm-10.7.1-orange?logo=pnpm) | Package Manager |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/lione12138/Business-Project-Ignited.git
   cd Business-Project-Ignited
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Set up Supabase**
   
   Run the SQL scripts in the `setup/` folder to configure your Supabase storage buckets and policies.

5. **Start the development server**
   ```bash
   pnpm dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
📦 Business-Project-Ignited
├── 📂 pages/                    # Next.js pages (React components)
│   ├── _app.js                 # App wrapper with auth context
│   ├── index.js                # Homepage
│   ├── about.js                # About page
│   ├── login.js                # User login
│   ├── register.js             # User registration
│   ├── talents_dashboard.js    # Dashboard for talents
│   ├── investors_dashboard.js  # Dashboard for investors
│   ├── features.js             # Features showcase
│   ├── services.js             # Services page
│   ├── contact.js              # Contact page
│   ├── faq.js                  # FAQ page
│   ├── for-talents.js          # Talents landing page
│   ├── for-investors.js        # Investors landing page
│   ├── art.js                  # Art category
│   └── music.js                # Music category
├── 📂 public/                   # Static assets
│   ├── assets/
│   │   ├── css/                # Stylesheets
│   │   ├── images/             # Images & graphics
│   │   ├── js/                 # JavaScript files
│   │   └── webfonts/           # Font files
│   ├── icons/                  # Favicon and app icons
│   └── styles/                 # Additional styles
├── 📂 styles/                   # Global styles
│   └── globals.css
├── 📂 lib/                      # Utility libraries
│   └── supabase.js
├── 📂 setup/                    # Supabase setup scripts
│   ├── create_avatars_bucket.sql
│   ├── avatars_bucket_policy.sql
│   ├── storage_buckets_policy.sql
│   └── storage_objects_policy.sql
├── supabaseClient.js            # Supabase client configuration
├── package.json                 # Project dependencies
├── pnpm-lock.yaml              # Lock file
├── LICENSE                      # MIT License
└── README.md                    # This file
```

## 📸 Screenshots

### Homepage
The landing page showcases the platform's value proposition with a modern, responsive design.

<p align="center">
  <img src="public/assets/images/banner1.jpg" alt="Homepage Banner" width="600"/>
</p>

### Talent Categories
Browse through different talent categories including Art, Music, and Programming.

<p align="center">
  <img src="public/assets/images/Artist.jpeg" alt="Artist" width="200"/>
  <img src="public/assets/images/Musician.jpeg" alt="Musician" width="200"/>
  <img src="public/assets/images/Programmer.jpeg" alt="Programmer" width="200"/>
</p>

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |

## 🗄️ Database Setup

The platform uses Supabase for backend services. Key tables and storage:

- **Authentication** - Managed by Supabase Auth
- **User Metadata** - Stores user type, profile info
- **Avatars Bucket** - Storage for user profile pictures

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Liuhuang**

- GitHub: [@lione12138](https://github.com/lione12138)

## 🙏 Acknowledgments

- [W3Layouts](https://w3layouts.com/) - Original template inspiration
- [Supabase](https://supabase.com/) - Backend infrastructure
- [Next.js](https://nextjs.org/) - React framework
- [Vercel](https://vercel.com/) - Deployment platform

---

<p align="center">
  Made with ❤️ by the Ignited Team
</p>
