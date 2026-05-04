import { useState } from 'react';

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

export default LanguagesSection;