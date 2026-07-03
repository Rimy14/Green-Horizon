# Green Horizon — React SPA

Green Horizon is a modern, responsive Single Page Application (SPA) designed to promote awareness, sustainability, and biodiversity conservation on land. Built using **React**, **Vite**, and **React Router**, it offers rich educational resources, volunteer programs, role comparison matrices, user progress dashboards, and interactive feedback forms.

Live Site: [https://greennhorizon.netlify.app/](https://greennhorizon.netlify.app/)

---

## 🚀 Key Features

*   **SPA Navigation**: Instant, smooth transitions between pages with active route indicators and zero page reloads (using React Router).
*   **Aesthetic Responsive Layouts**: Fully responsive grids and containers tested across all devices (mobile, tablet, and desktop) with proper viewport alignment and margins.
*   **Dynamic CSS Scoping**: Prevents class collisions and style bleeding across pages by dynamically mounting and unmounting page-specific stylesheets as you navigate.
*   **Interactive Components**:
    *   **Volunteer Feedback**: Custom satisfactions rating emojis and state validations.
    *   **Interactive Forms**: Complete field validation (email syntax, 10-digit phone, and radio highlight controls).
    *   **Goal Tracker**: Dynamic progress indicator in the user dashboard.
    *   **Go To Top Button**: Intelligently visible on scrolling with smooth velocity transitions.

---

## 📂 Project Structure

```bash
├── public/                 # Static public assets
│   ├── css/                # Page-specific isolated stylesheets
│   ├── Icons/              # Custom icons used across lists/tables
│   ├── images/             # Content and background images
│   └── logo.png            # Main branding logo
├── src/
│   ├── components/         # Reusable layouts (Navbar, Footer, GoToTop)
│   ├── hooks/              # Custom hooks (useStylesheet for CSS isolation)
│   ├── pages/              # Page modules (Home, Volunteer, TablePage, UserProfile, Feedback, Content pages)
│   ├── App.jsx             # React Router structure
│   └── main.jsx            # SPA entry script
├── old-static-site/        # Backup folder for the original static HTML/CSS files
├── package.json            # NPM dependencies and scripts
└── vite.config.js          # Vite compilation config
```

---

## 🛠️ Local Development Setup

To run this project locally, ensure you have [Node.js](https://nodejs.org/) installed:

1. **Clone the repository and enter the directory**:
   ```bash
   cd "Completed Web"
   ```

2. **Install all project dependencies**:
   ```bash
   npm install
   ```

3. **Start the local Vite development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser to view and interact with the application.

4. **Build the production ready bundle**:
   ```bash
   npm run build
   ```
   The compiled build will be placed inside the `dist/` directory.

---

## ☁️ Production Deployment

The project is configured to deploy at the root level:

### Netlify Deployment Configuration
Ensure the following build settings are set in your Netlify Dashboard:
*   **Build command**: `npm run build`
*   **Publish directory**: `dist`
