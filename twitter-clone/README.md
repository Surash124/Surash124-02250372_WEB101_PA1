# Twitter/X Feed Page — WEB101 PA1

## Overview
A React-based recreation of the Twitter/X feed page built with Vite + React.

## Functionality
- Browse a feed of tweets (For You / Following tabs)
- Like, retweet, and bookmark tweets with live count updates
- Compose and post new tweets (appears at top of feed)
- Follow/unfollow suggested users
- Fully responsive: desktop, tablet (icon sidebar), mobile (bottom nav)

## Component Architecture
App → Sidebar, Feed, RightPanel, MobileNav  
Feed → TweetComposer, TweetCard (×n)  
Data source: src/data/mockData.js

## Tech Stack
- React 18 with Hooks (useState)
- Vite (build tool)
- CSS Modules (scoped styles per component)
- No external UI libraries

## How to Run
npm install
npm run dev

## Responsive Breakpoints
- Desktop (>1024px): full 3-column layout
- Tablet (688–1024px): icon-only sidebar, no right panel
- Mobile (<500px): hidden sidebar, bottom navigation bar