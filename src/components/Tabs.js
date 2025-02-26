
import './Tabs.css';  // Import the CSS file for Tabs



import React, { useState } from 'react';
import './Tabs.css'; // Importing CSS file for Tabs component
import Visitors from './Visitors';
import CheckInOut from './CheckInOut';
import VisitorHistory from './VisitorHistory';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="tabs">
        <div
          className={`tab ${activeTab === 0 ? 'active' : ''}`}
          onClick={() => handleTabClick(0)}
        >
          Visitors
        </div>
        <div
          className={`tab ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          Check-ins/Outs
        </div>
        <div
          className={`tab ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          Visitor History
        </div>
      </div>

      <div className="tab-content">
        {activeTab === 0 && <Visitors />}
        {activeTab === 1 && <CheckInOut />}
        {activeTab === 2 && <VisitorHistory />}
      </div>
    </div>
  );
};

export default Tabs;





