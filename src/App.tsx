import React, { useState } from 'react';
import './Terminal.css';

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
        
        {/* Top Right Name Bar */}
        <div className="top-bar">
          <span>JOHN DOE // LVL 50</span>
        </div>

        {/* Navigation Tabs */}
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

        {/* Main Content Area */}
        <main className="content">
          {renderContent()}
        </main>

        {/* Pip-Boy Bottom HUD */}
        <footer className="pipboy-footer">
          
          <div className="stat-block">
            <span>HP 100/100</span>
            <div className="status-bar-container bar-short">
              {/* Change the width % to simulate taking damage */}
              <div className="status-bar-fill" style={{ width: '100%' }}></div>
            </div>
          </div>

          <div className="stat-block">
            <span>LEVEL 50</span>
            <div className="status-bar-container bar-long">
              {/* Level progress bar */}
              <div className="status-bar-fill" style={{ width: '75%' }}></div>
            </div>
          </div>

          <div className="stat-block">
            <div className="status-bar-container bar-short">
              {/* AP is usually right-aligned in the game */}
              <div className="status-bar-fill" style={{ width: '100%' }}></div>
            </div>
            <span>AP 90/90</span>
          </div>

        </footer>

      </div>
    </>
  );
};

/* --- Split-Screen Sub-Components --- */

const AbilitiesSection = () => {
  const abilities = [
    { name: "Strength", val: 6, desc: "Raw coding power. Determines how many Docker containers you can lift." },
    { name: "Perception", val: 8, desc: "Crucial for code review and spotting missing semicolons." },
    { name: "Endurance", val: 9, desc: "Ability to survive long crunch times without caffeine." },
    { name: "Charisma", val: 4, desc: "Useful for convincing stakeholders the bug is actually a feature." },
    { name: "Intelligence", val: 10, desc: "Dictates architecture design and algorithm optimization." },
    { name: "Agility", val: 7, desc: "Speed of navigating Vim and navigating Agile sprints." },
    { name: "Luck", val: 5, desc: "Sometimes the code compiles on the first try. Who knows why?" },
  ];

  const [selected, setSelected] = useState(abilities[0]);

  return (
    <div className="split-layout">
      <div className="left-menu">
        <ul className="interactive-list">
          {abilities.map((ability) => (
            <li 
              key={ability.name} 
              className={`menu-item ${selected.name === ability.name ? 'selected' : ''}`}
              onClick={() => setSelected(ability)}
            >
              <span>{ability.name}</span>
              <span>{ability.val}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="right-info">
        {/* Placeholder for the vault boy graphic */}
        <div style={{ fontSize: '6rem', marginBottom: '1rem' }}>☻</div>
        <p>{selected.desc}</p>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    { name: "Project_Alpha", size: "1.2 MB", details: "A high-performance React dashboard analyzing Wasteland trade routes." },
    { name: "Vault_Tec_API", size: "450 KB", details: "Python/FastAPI backend for managing vault inhabitant data securely." },
    { name: "PipBoy_UI", size: "3.4 MB", details: "A wearable interface concept built with Three.js and React." },
  ];

  const [selected, setSelected] = useState(projects[0]);

  return (
    <div className="split-layout">
      <div className="left-menu">
        <ul className="interactive-list">
          {projects.map((proj) => (
            <li 
              key={proj.name} 
              className={`menu-item ${selected.name === proj.name ? 'selected' : ''}`}
              onClick={() => setSelected(proj)}
            >
              <span>{proj.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="right-info">
        <h2>{selected.name}.exe</h2>
        <p>FILE SIZE: {selected.size}</p>
        <p>{selected.details}</p>
        <button className="action-button" style={{marginTop: '1rem'}}>EXECUTE</button>
      </div>
    </div>
  );
};

const MapSection = () => {
  // Map can stay as a full-screen view, or you can split it too!
  return (
    <div className="map-path" style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2> USER LEARNING PATH</h2>
      <div className="path-step">
        <strong>TECHNICAL HIGH SCHOOL OF MYTILENE</strong>
        <span>(2019-2022)</span>
      </div>
      <div className="path-arrow">↓</div>
      <div className="path-step">
        <strong>UNIVERSITY OF WEST ATTICA</strong>
        <span>(2022-2027)</span>
      </div>
    </div>
  );
};

const LanguagesSection = () => {
  const languages = [
    { name: "Python", freq: "104.2 MHz", desc: "Backend scripting and data analysis protocols." },
    { name: "FastAPI", freq: "98.5 MHz", desc: "High-speed API routing broadcasts." },
    { name: "React", freq: "101.1 MHz", desc: "Front-end UI rendering signals." },
    { name: "JavaScript", freq: "88.0 MHz", desc: "General purpose web-wasteland frequencies." },
  ];

  const [selected, setSelected] = useState(languages[0]);

  return (
    <div className="split-layout">
      <div className="left-menu">
        <ul className="interactive-list">
          {languages.map((lang) => (
            <li 
              key={lang.name} 
              className={`menu-item ${selected.name === lang.name ? 'selected' : ''}`}
              onClick={() => setSelected(lang)}
            >
              <span>{lang.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="right-info">
        <h2>{selected.name} Radio</h2>
        <p>SIGNAL STRENGTH: {selected.freq}</p>
        <p>{selected.desc}</p>
      </div>
    </div>
  );
};

export default App;