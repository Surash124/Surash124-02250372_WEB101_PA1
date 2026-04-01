// App.jsx — root component. Assembles layout and passes state down.
import { useState } from 'react';
import Sidebar    from './components/Sidebar';
import Feed       from './components/Feed';
import RightPanel from './components/RightPanel';
import MobileNav  from './components/MobileNav';
import styles     from './App.module.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className={styles.layout}>
      <Sidebar   activeTab={activeTab} setActiveTab={setActiveTab} />
      <Feed />
      <RightPanel />
      <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}