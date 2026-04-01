// Feed.jsx — main center column.
// Renders the tab bar, composer, and the list of TweetCards.
// State for tweets lives here (lifted from TweetCard, owned here for the list).
import { useState } from 'react';
import { tweets as initialTweets } from '../data/mockData';
import TweetCard from './TweetCard';
import TweetComposer from './TweetComposer';
import styles from './Feed.module.css';

export default function Feed() {
  const [activeTab, setActiveTab] = useState('foryou');
  const [tweets, setTweets]       = useState(initialTweets);

  // Toggle like — immutably update the tweet array
  const handleLike = (id) =>
    setTweets(prev => prev.map(t => t.id === id ? { ...t, liked: !t.liked } : t));

  // Toggle retweet
  const handleRetweet = (id) =>
    setTweets(prev => prev.map(t => t.id === id ? { ...t, retweeted: !t.retweeted } : t));

  // Toggle bookmark
  const handleBookmark = (id) =>
    setTweets(prev => prev.map(t => t.id === id ? { ...t, bookmarked: !t.bookmarked } : t));

  // Add a new tweet from the composer to the top of the feed
  const handlePost = (text) => {
    const newTweet = {
      id: `t_${Date.now()}`,
      user: { name: 'Tenzin Wangchuk', handle: 'tenzinw',
              avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=tenzin&backgroundColor=b6e3f4',
              verified: false },
      content: text,
      image: null,
      timestamp: 'now',
      likes: 0, retweets: 0, replies: 0, views: 1,
      liked: false, retweeted: false, bookmarked: false,
    };
    setTweets(prev => [newTweet, ...prev]);
  };

  return (
    <main className={styles.feed}>
      {/* Tab bar */}
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'foryou' ? styles.active : ''}`}
          onClick={() => setActiveTab('foryou')}
        >
          For you
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'following' ? styles.active : ''}`}
          onClick={() => setActiveTab('following')}
        >
          Following
        </button>
      </div>

      {/* Composer */}
      <TweetComposer onPost={handlePost} />

      {/* Tweet list */}
      {tweets.map(tweet => (
        <TweetCard
          key={tweet.id}
          tweet={tweet}
          onLike={handleLike}
          onRetweet={handleRetweet}
          onBookmark={handleBookmark}
        />
      ))}
    </main>
  );
}