import { useState } from 'react';

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

export default ProjectsSection;