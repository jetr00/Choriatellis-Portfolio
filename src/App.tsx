import { useState } from 'react';
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


const AbilitiesSection = () => {
  const abilities = [
    { name: "Strength", val: 10, desc: "Raw coding power. Determines how many Docker containers you can lift." },
    { name: "Perception", val: 9, desc: "Crucial for code review and spotting missing semicolons." },
    { name: "Endurance", val: 9, desc: "Ability to survive long crunch times without caffeine." },
    { name: "Charisma", val: 8, desc: "Useful for convincing stakeholders the bug is actually a feature." },
    { name: "Intelligence", val: 10, desc: "Dictates architecture design and algorithm optimization." },
    { name: "Agility", val: 8, desc: "Speed of navigating Vim and navigating Agile sprints." },
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
        <img 
          src="./pulbic/pip-me.png" 
          alt="User Profile Graphic" 
          style={{ 
            width: '150px', 
            height: 'auto', 
            marginBottom: '1.5rem',
            opacity: 0.5,
            filter: 'drop-shadow(0 0 10px rgba(209, 150, 21, 0.47))' 
          }} 
        /> 
        <p>{selected.desc}</p>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    { name: "BlueScrape", size: "7.3 GB", details: "A high-performance market intelligence engine that aggregates news data via NewsAPI; integrated FinBERT to categorize and rank market sentiment for Fortune 500 tech stocks with rankBM25 for optimized search relevance.", link: "https://github.com/jetr00/BlueScrape" },
    { name: "Particle Art Maker", size: "2.9 KB", details: "A real-time computer vision application using MediaPipe and OpenCV2 to map hand-tracking coordinates to dynamic particle systems, achieving low-latency rendering and interactive UI response.", link: "https://github.com/jetr00/Particle-Art-Maker" },
    { name: "Python Search Engine", size: "7.1 KB", details: "A text-retrieval system utilizing NLTK for tokenization and stemming; implemented vector space modeling to query the CISI dataset, significantly improving precision and recall compared to basic keyword matching.", link: "https://github.com/jetr00/Python-Search-Engine" },
    { name: "Barber Appointment App", size: "21 KB", details: "A full-stack appointment management system using Python and SQLite, featuring a Tkinter-based GUI. Designed the relational database schema to handle concurrent booking requests and automated availability tracking.", link: "https://github.com/jetr00/Barber-Appointment-App" },
    { name: "Random Password Generator", size: "6.02 KB", details: "N/A", link: "https://github.com/jetr00/Random-Password-Generator" },
  ];

  const [selected, setSelected] = useState(projects[0]);

  const handleExecute = (url : string) => {
    if (url){
      window.open(url, '_blank', 'noopener, noreferrer');
    } else { 
      alert("> ERROR: UPLINK TO PROJECT NOT FOUND.");
    }
  };

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
        <h2>{selected.name}.py</h2>
        <p>FILE SIZE: {selected.size}</p>
        <p>{selected.details}</p>
        <button 
        className="action-button" 
        style={{marginTop: '1rem'}}
        onClick={() => handleExecute(selected.link)}
          >EXECUTE
          </button>
      </div>
    </div>
  );
};

const MapSection = () => {
  const externalLinks = [
    { name: "LINKEDIN_PROFILE", url: "https://linkedin.com/in/your-profile" },
    { name: "GITHUB_DATABASE", url: "https://github.com/your-username" }
  ];

  const handleNavigation = (url : string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="map-container" style={{ textAlign: 'center', paddingTop: '1rem' }}>
      <h2> WORLD_MAP </h2>
      
      <div className="map-path" style={{ marginBottom: '3rem' }}>
        <div className="path-step">
          <strong>TECHNICAL HIGH SCHOOL OF MYTILENE</strong>
          <span>[2019 - 2022]</span>
        </div>
        <div className="path-arrow">↓</div>
        <div className="path-step">
          <strong>UNIVERSITY OF WEST ATTICA</strong>
          <span style={{ fontSize: '1.2rem', opacity: 1.0}}>INFORMATICS AND COMPUTER ENGINEERING</span>
          <br />
          <span style={{ fontSize: '1.2rem', opacity: 0.8}}
            > [2022 - 2027]
          </span>
        </div>
      </div>

      <div className="connectivity-section" style={{ borderTop: '1px dashed #d19615', paddingTop: '2rem' }}>
        <h3> EXTERNAL_UPLINKS_DETECTED:</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1rem' }}>
          {externalLinks.map((link) => (
            <button 
              key={link.name}
              className="action-button"
              onClick={() => handleNavigation(link.url)}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const LanguagesSection = () => {
  const languages = [
    { name: "Python", freq: "104.2 MHz", desc: "Backend scripting and data analysis protocols." },
    { name: "FastAPI", freq: "98.5 MHz", desc: "High-speed API routing broadcasts." },
    { name: "React", freq: "86.1 MHz", desc: "Front-end UI rendering signals." },
    { name: "HTML", freq: "89.0 MHz", desc: "General purpose web-wasteland frequencies." },
    { name: "CSS", freq: "82.4 MHz", desc: "General purpose web-wasteland frequencies." },
    { name: "JavaScript", freq: "88.3 MHz", desc: "General purpose web-wasteland frequencies." },
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
