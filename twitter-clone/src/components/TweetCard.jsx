// TweetCard.jsx — reusable component for rendering a single tweet.
// Props: tweet (object), onLike, onRetweet, onBookmark (functions)
import { formatCount } from '../data/mockData';
import styles from './TweetCard.module.css';

// Verified badge SVG
const VerifiedBadge = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="#1d9bf0">
    <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91-1.01-1-2.52-1.27-3.91-.81C14.67 2.88 13.43 2 12 2s-2.67.88-3.34 2.19c-1.39-.46-2.9-.2-3.91.81-1 1.01-1.27 2.52-.81 3.91C2.88 9.33 2 10.57 2 12s.88 2.67 2.19 3.34c-.46 1.39-.2 2.9.81 3.91 1.01 1 2.52 1.27 3.91.81C9.33 21.12 10.57 22 12 22s2.67-.88 3.34-2.19c1.39.46 2.9.2 3.91-.81 1-1.01 1.27-2.52.81-3.91.99-.61 1.19-1.85 1.19-3.09zm-10 5l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-8.75 9z"/>
  </svg>
);

export default function TweetCard({ tweet, onLike, onRetweet, onBookmark }) {
  const likeCount = tweet.likes + (tweet.liked ? 1 : 0);
  const rtCount   = tweet.retweets + (tweet.retweeted ? 1 : 0);

  return (
    <article className={styles.card}>
      {/* Avatar */}
      <img src={tweet.user.avatar} alt={tweet.user.name} className={styles.avatar} />

      <div className={styles.body}>
        {/* Header: name · handle · time */}
        <div className={styles.header}>
          <span className={styles.name}>{tweet.user.name}</span>
          {tweet.user.verified && <VerifiedBadge />}
          <span className={styles.handle}>@{tweet.user.handle}</span>
          <span className={styles.dot}>·</span>
          <span className={styles.time}>{tweet.timestamp}</span>
        </div>

        {/* Tweet text */}
        <p className={styles.text}>{tweet.content}</p>

        {/* Optional media image */}
        {tweet.image && (
          <div className={styles.imageWrap}>
            <img src={tweet.image} alt="tweet media" className={styles.tweetImg} />
          </div>
        )}

        {/* Action buttons */}
        <div className={styles.actions}>
          {/* Reply — no state toggle needed */}
          <button className={`${styles.btn} ${styles.reply}`}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            <span>{formatCount(tweet.replies)}</span>
          </button>

          {/* Retweet */}
          <button
            className={`${styles.btn} ${styles.rt} ${tweet.retweeted ? styles.rtOn : ''}`}
            onClick={() => onRetweet(tweet.id)}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
              <polyline points="17 1 21 5 17 9"/>
              <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
              <polyline points="7 23 3 19 7 15"/>
              <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
            </svg>
            <span>{formatCount(rtCount)}</span>
          </button>

          {/* Like */}
          <button
            className={`${styles.btn} ${styles.like} ${tweet.liked ? styles.likeOn : ''}`}
            onClick={() => onLike(tweet.id)}
          >
            <svg viewBox="0 0 24 24" width="18" height="18"
              fill={tweet.liked ? 'currentColor' : 'none'}
              stroke="currentColor" strokeWidth="1.8">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span>{formatCount(likeCount)}</span>
          </button>

          {/* Views */}
          <button className={`${styles.btn} ${styles.views}`}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            <span>{formatCount(tweet.views)}</span>
          </button>

          {/* Bookmark */}
          <button
            className={`${styles.btn} ${styles.bm} ${tweet.bookmarked ? styles.bmOn : ''}`}
            onClick={() => onBookmark(tweet.id)}
          >
            <svg viewBox="0 0 24 24" width="18" height="18"
              fill={tweet.bookmarked ? 'currentColor' : 'none'}
              stroke="currentColor" strokeWidth="1.8">
              <path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}