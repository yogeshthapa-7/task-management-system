<div align="center">
  <img src="./frontend/public/favicon.ico" width="80" alt="TaskFlow Logo" />
  <h1>🚀 TaskFlow</h1>
  <p><b>A professional, simple task-management-system.</b></p>

  <p>
    <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/Redux-Toolkit-purple?style=for-the-badge&logo=redux" alt="Redux" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind" />
  </p>
</div>

---

## ✨ Overview

> ⚠️ **This project is still in development phase.** New features and improvements are being added regularly.

TaskFlow is a high-performance, responsive task management dashboard prototype. It's built to demonstrate a premium user experience with **Dark Mode**, **Real-time Filters**, and **Persisted State**.

## 🖼️ Screenshots

<div align="center">
  <h3>Homepage</h3>
  <img src="./frontend/screenshots/homepage.png" width="800" alt="Homepage" />

  <br />

  <h3>Main Dashboard</h3>
  <img src="./frontend/screenshots/dashboard.png" width="800" alt="Dashboard" />

  <br />

  <h3>Features</h3>
  <img src="./frontend/screenshots/features.png" width="800" alt="Features" />

  <br />

  <h3>Analytics & Charts</h3>
  <img src="./frontend/screenshots/analytics.png" width="800" alt="Analytics" />

  <br />

  <h3>Interactive Calendar</h3>
  <img src="./frontend/screenshots/calender.png" width="800" alt="Calendar" />

  <br />

  <h3>Tasks View</h3>
  <img src="./frontend/screenshots/tasks.png" width="800" alt="Tasks" />

  <br />

  <h3>Footer</h3>
  <img src="./frontend/screenshots/footer.png" width="800" alt="Footer" />
</div>

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)

### Backend
- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [SQLite](https://www.sqlite.org/) (via better-sqlite3)

---

## 🚀 Key Features

- **📊 Advanced Analytics**: Visualize task distribution by status and priority using interactive charts.
- **📅 Visual Calendar**: Manage deadlines effortlessly with a monthly calendar view.
- **🌓 Dark / Light Mode**: Seamless theme switching with system preference detection.
- **🔍 Smart Filtering**: Instantly search and filter tasks by status.
- **📱 Fully Responsive**: Optimized for every device, from mobile to ultra-wide monitors.
- **💾 Local Persistence**: Your tasks stay saved even after a page refresh.

---

## 🏗️ Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Frontend Setup

1. **Navigate to frontend**:
   ```bash
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

### Backend Setup

1. **Navigate to backend**:
   ```bash
   cd backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   npm start
   ```

---

## 📁 Project Structure

```
task-management-system/
├── frontend/          # Next.js 15 frontend application
│   ├── src/
│   │   ├── app/      # App router pages
│   │   ├── components/ # React components
│   │   ├── lib/      # Utilities and store
│   │   └── types/    # TypeScript types
│   └── screenshots/  # Project screenshots
├── backend/          # Express.js backend API
│   ├── db.js         # Database configuration
│   └── server.js    # Express server
└── README.md         # This file
```

---

<div align="center">
  <p>Built with ❤️ by <a href="https://github.com/yogeshthapa-7">Yogesh Thapa</a></p>
</div>