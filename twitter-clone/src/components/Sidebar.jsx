// Sidebar.jsx — left navigation. Shows nav links and current user.
import styles from './Sidebar.module.css';
import { currentUser } from '../data/mockData';

const navLinks = [
  { id: 'home',      label: 'Home' },
  { id: 'explore',   label: 'Explore' },
  { id: 'notifs',    label: 'Notifications' },
  { id: 'messages',  label: 'Messages' },
  { id: 'bookmarks', label: 'Bookmarks' },
  { id: 'profile',   label: 'Profile' },
];

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <aside className={styles.sidebar}>
      {/* X logo */}
      <div className={styles.logo}>
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </div>

      {/* Nav links */}
      <nav className={styles.nav}>
        {navLinks.map(link => (
          <button
            key={link.id}
            className={`${styles.link} ${activeTab === link.id ? styles.active : ''}`}
            onClick={() => setActiveTab(link.id)}
          >
            <span>{link.label}</span>
          </button>
        ))}
      </nav>

      {/* Post button */}
      <button className={styles.postBtn}>Post</button>

      {/* Current user */}
      <div className={styles.userCard}>
        <img
          src={currentUser.avatar}
          alt="me" className={styles.avatar}
        />
        <div className={styles.userInfo}>
          <span className={styles.name}>{currentUser.name}</span>
          <span className={styles.handle}>@{currentUser.handle}</span>
        </div>
      </div>
    </aside>
  );
}