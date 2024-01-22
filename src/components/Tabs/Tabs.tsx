// src/components/TabsComponent.tsx
import React, { useState, useCallback } from 'react';
import styles from './Tabs.module.css';
import { TABS } from 'constants/data';

interface TabsComponentProps {
  onTabChange: (tab: string) => void;
  tab:string
}

const TabsComponent: React.FC<TabsComponentProps> = ({ onTabChange, tab }) => {
  const [activeTab, setActiveTab] = useState(tab);

  const handleTabClick = useCallback(
    (tab: string) => {
      setActiveTab(tab);
      onTabChange(tab);
    },
    [onTabChange]
  );

  console.log(activeTab, 'activeTab');

  return (
    <div className={styles.tabsContainer}>
      {Object.entries(TABS).map(([key, value]) => (
        <div
          key={key}
          className={`${styles.tab} ${
            activeTab === value ? styles.activeTab : ''
          }`}
          onClick={() => handleTabClick(value)}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export default TabsComponent;
