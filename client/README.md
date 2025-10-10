# IT Management System - ClientV2

## Modern UI/UX Design

This is a modern, responsive web application built with React, Tailwind CSS, and Ant Design components.

## Features

### 📱 Mobile-First Design
- Fully responsive interface that works on all devices
- Mobile-friendly navigation with smooth animations
- Touch-friendly buttons and controls

### 🎨 Modern UI Components
- **Navbar**: Clean header with user profile, notifications, and search
- **Sidebar**: Collapsible navigation menu with icons and labels
- **Layouts**: Responsive layouts that adapt to screen size
- **Error Pages**: Beautiful 404 and unauthorized pages

### 🔧 Navigation System

#### Desktop Navigation
- **Sidebar**: Always visible on left side
- **Collapse Button**: Click the arrow button in sidebar header to collapse/expand
- **Auto-sizing**: Sidebar automatically adjusts width when collapsed

#### Mobile Navigation
- **Hamburger Menu**: Click the menu button (☰) in the top-left corner of the navbar
- **Overlay Menu**: Sidebar slides in from the left as an overlay
- **Close Options**: 
  - Click the X button in the sidebar header
  - Click outside the sidebar (on the backdrop)
  - Navigate to a new page (auto-closes)

### 🎯 How to Use Mobile Menu

1. **Open Menu**: 
   - Look for the hamburger menu icon (☰) in the top-left corner
   - It's located in the navbar, next to the logo
   - Click it to open the sidebar

2. **Navigate**: 
   - Click any menu item to navigate
   - Menu will automatically close after navigation

3. **Close Menu**: 
   - Click the X button in the sidebar header
   - Click anywhere outside the sidebar
   - The menu will automatically close

### 📐 Responsive Breakpoints
- **Mobile**: < 768px (md breakpoint)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Development

```bash
# Start development server with hot reload
npm run dev

# The app will be available at http://localhost:5173
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Top navigation bar
│   ├── Sidebar.jsx         # Left sidebar navigation
│   └── common/             # Shared components
├── layouts/
│   ├── MainLayout.jsx      # Main app layout
│   └── AuthLayout.jsx      # Authentication layout
├── pages/
│   ├── HomePage.jsx        # Dashboard page
│   ├── 404.jsx            # Not found page
│   ├── Unauthorized.jsx    # Access denied page
│   └── auth/              # Authentication pages
├── providers/
│   └── AuthProvider.jsx   # Authentication context
└── routes.jsx             # Route definitions
```

## UI Guidelines

### Colors
- **Primary**: Blue (#3B82F6)
- **Secondary**: Purple (#8B5CF6)
- **Success**: Green (#10B981)
- **Warning**: Orange (#F59E0B)
- **Danger**: Red (#EF4444)

### Typography
- **Headings**: Inter font family
- **Body**: Default system fonts
- **Sizes**: Tailwind CSS typography scale

### Spacing
- **Padding**: 1rem (16px) standard
- **Margins**: 0.5rem (8px) to 2rem (32px)
- **Gaps**: 1rem (16px) for component spacing

## Troubleshooting

### Mobile Menu Not Working?
1. Check if you see the hamburger menu icon (☰) in the navbar
2. Make sure you're on a mobile device or browser width < 768px
3. Try refreshing the page
4. Check browser console for any JavaScript errors

### Responsive Issues?
1. Clear browser cache
2. Check if Tailwind CSS is properly loaded
3. Verify viewport meta tag is present
4. Test on different devices/screen sizes

## Contributing

1. Follow the existing code style
2. Use Tailwind CSS for styling
3. Ensure mobile responsiveness
4. Test on multiple screen sizes
5. Add proper error handling

## Support

For issues or questions, please check:
1. Browser console for errors
2. Network tab for failed requests
3. Responsive design tools in browser
4. This README for usage instructions

---

## React + Vite Setup

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
