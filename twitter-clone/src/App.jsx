// App.jsx — root component. Assembles layout and passes state down.
import { useState } from 'react';
import Feed       from './components/Feed';
import MobileNav  from './components/MobileNav';
import styles     from './App.module.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className={styles.layout}>
      <Feed />
      <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}