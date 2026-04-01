// TweetComposer.jsx — lets the current user write and post a new tweet.
// Props: onPost(text) — called when user submits
import { useState } from 'react';
import { currentUser } from '../data/mockData';
import styles from './TweetComposer.module.css';

const MAX = 280;

export default function TweetComposer({ onPost }) {
  const [text, setText] = useState('');
  const remaining = MAX - text.length;

  const handlePost = () => {
    if (!text.trim()) return;
    onPost(text.trim());  // bubble up to App
    setText('');
  };

  return (
    <div className={styles.composer}>
      <img src={currentUser.avatar} alt="me" className={styles.avatar} />

      <div className={styles.right}>
        <textarea
          className={styles.textarea}
          placeholder="Share something about CST Bhutan..."
          value={text}
          onChange={e => setText(e.target.value)}
          maxLength={MAX}
          rows={2}
        />

        <div className={styles.toolbar}>
          {/* Char counter — only show when typing */}
          {text.length > 0 && (
            <span className={`${styles.count} ${remaining < 20 ? styles.warn : ''}`}>
              {remaining}
            </span>
          )}

          <button
            className={styles.postBtn}
            disabled={!text.trim()}
            onClick={handlePost}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}