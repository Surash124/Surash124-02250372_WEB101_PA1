// RightPanel.jsx — right sidebar with search, trends, and who to follow.
import { useState } from 'react';
import { trendingTopics, whoToFollow } from '../data/mockData';
import styles from './RightPanel.module.css';

export default function RightPanel() {
  const [following, setFollowing] = useState({});
  const toggle = (id) => setFollowing(p => ({ ...p, [id]: !p[id] }));

  return (
    <aside className={styles.panel}>
      {/* Search */}
      <div className={styles.searchWrap}>
        <input className={styles.search} type="text" placeholder="Search" />
      </div>

      {/* Trending */}
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>What's happening</h2>
        {trendingTopics.map(t => (
          <div key={t.id} className={styles.trendItem}>
            <span className={styles.trendCat}>{t.category}</span>
            <span className={styles.trendTopic}>{t.topic}</span>
            <span className={styles.trendCnt}>{t.posts} posts</span>
          </div>
        ))}
      </div>

      {/* Who to follow */}
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Who to follow</h2>
        {whoToFollow.map(u => (
          <div key={u.id} className={styles.followItem}>
            <img src={u.avatar} alt={u.name} className={styles.followAvatar} />
            <div className={styles.followInfo}>
              <span className={styles.followName}>{u.name}</span>
              <span className={styles.followHandle}>@{u.handle}</span>
            </div>
            <button
              className={`${styles.followBtn} ${following[u.id] ? styles.followingBtn : ''}`}
              onClick={() => toggle(u.id)}
            >
              {following[u.id] ? 'Following' : 'Follow'}
            </button>
          </div>
        ))}
      </div>
    </aside>
  );
}