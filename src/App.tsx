import { useState } from 'react';
import './Terminal.css';
import AbilitiesSection from './AbilitiesSection';
import ProjectsSection from './ProjectsSection';
import MapSection from './MapSection';
import LanguagesSection from './LanguagesSection';

const App = () => {
  const [activeTab, setActiveTab] = useState('STAT');
  const tabs = ['STAT', 'DATA', 'MAP', 'RADIO'];

  const renderContent = () => {
    switch (activeTab) {
      case 'STAT': return <AbilitiesSection />;
      case 'DATA': return <ProjectsSection />;
      case 'MAP': return <MapSection />;
      case 'RADIO': return <LanguagesSection />;
      default: return null;
    }
  };

  return (
    <>
      <div className="scanlines"></div>
      <div className="pipboy-container">

        <div className="top-bar">
          <span>IOANNIS CHORIATELLIS</span>
        </div>

        <header className="pipboy-header">
          {tabs.map((tab) => (
            <button 
              key={tab}
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </header>

        <main className="content">
          {renderContent()}
        </main>

        <footer className="pipboy-footer">
          
          <div className="stat-block">
            <span>HP 100/100</span>
            <div className="status-bar-container bar-short">
              <div className="status-bar-fill" style={{ width: '100%' }}></div>
            </div>
          </div>

          <div className="stat-block">
            <span>LEVEL 22</span>
            <div className="status-bar-container bar-long">
              <div className="status-bar-fill" style={{ width: '33%' }}></div>
            </div>
          </div>

          <div className="stat-block">
            <div className="status-bar-container bar-short">
              <div className="status-bar-fill" style={{ width: '100%' }}></div>
            </div>
            <span>AP 90/90</span>
          </div>

        </footer>

      </div>
    </>
  );
};

export default App;
