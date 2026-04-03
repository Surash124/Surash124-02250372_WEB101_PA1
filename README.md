Repo: https://github.com/Surash124/02250372_WEB101_PA1.git





# Twitter Clone - WEB101 PA1

## Overview
This project is a React-based recreation of the Twitter/X feed page, developed as part of the WEB101 Programming Assignment 1. It features a fully functional social media feed with tweet interactions, user following, and responsive design across desktop, tablet, and mobile devices.

## Features
- **Feed Browsing**: Navigate between "For You" and "Following" tabs to view tweets
- **Tweet Interactions**: Like, retweet, and bookmark tweets with real-time count updates
- **Tweet Composition**: Compose and post new tweets that appear at the top of the feed
- **User Management**: Follow/unfollow suggested users
- **Responsive Design**:
  - Desktop (>1024px): Full 3-column layout with sidebar and right panel
  - Tablet (688–1024px): Icon-only sidebar, no right panel
  - Mobile (<500px): Hidden sidebar with bottom navigation bar

## Tech Stack
- **Frontend Framework**: React 18 with Hooks (useState for state management)
- **Build Tool**: Vite for fast development and building
- **Styling**: CSS Modules for scoped component styles
- **Linting**: ESLint with React-specific rules
- **No External UI Libraries**: Pure React implementation

## Project Structure
```
twitter-clone/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Feed.jsx        # Main feed component
│   │   ├── TweetCard.jsx   # Individual tweet display
│   │   ├── TweetComposer.jsx # Tweet creation form
│   │   ├── MobileNav.jsx   # Mobile navigation
│   │   └── ...             # Other components
│   ├── data/
│   │   └── mockData.js     # Mock tweet and user data
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # App entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── eslint.config.js        # ESLint configuration
```

## Component Architecture
- **App**: Root component managing overall layout (Sidebar, Feed, RightPanel, MobileNav)
- **Feed**: Contains TweetComposer and multiple TweetCard components
- **Data Source**: All data comes from `src/data/mockData.js`

## Installation & Setup
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Surash124/Surash124-02250372_WEB101_PA1.git
   cd Surash124-02250372_WEB101_PA1
   ```

2. **Navigate to the project directory**:
   ```bash
   cd twitter-clone
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** and visit `http://localhost:5173` (or the port shown in the terminal)

## Available Scripts
- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## Development Notes
- The app uses mock data from `src/data/mockData.js` for demonstration purposes
- All state is managed using React's `useState` hook
- CSS Modules ensure styles are scoped to individual components
- The design is fully responsive and follows Twitter/X's UI patterns

## Contributing
This is an assignment project. For improvements or bug fixes.Earlier i had put many things such as right panel which made it harder for me, BUT I REMOVED THOSE AND ONLY MADE ONE MAIN PAGE LIKE.

