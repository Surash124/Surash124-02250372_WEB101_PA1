// MobileNav.jsx — bottom nav bar shown only on small screens.
import styles from './MobileNav.module.css';

const tabs = ['Home', 'Explore', 'Notifications', 'Messages'];

export default function MobileNav({ activeTab, setActiveTab }) {
  return (
    <nav className={styles.nav}>
      {tabs.map(t => (
        <button
          key={t}
          className={`${styles.btn} ${activeTab === t.toLowerCase() ? styles.active : ''}`}
          onClick={() => setActiveTab(t.toLowerCase())}
        >
          {t}
        </button>
      ))}
    </nav>
  );
}