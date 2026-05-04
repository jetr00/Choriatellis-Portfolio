import { useState } from 'react';

const AbilitiesSection = () => {
  const abilities = [
    { name: "Strength", val: 10, desc: "Raw coding power. Determines how many Docker containers you can lift." },
    { name: "Perception", val: 9, desc: "Crucial for code review and spotting missing semicolons." },
    { name: "Endurance", val: 9, desc: "Ability to survive long coding sessions without caffeine." },
    { name: "Charisma", val: 8, desc: "Useful for convincing stakeholders the bug is actually a feature." },
    { name: "Intelligence", val: 10, desc: "Dictates architecture design and algorithm optimization." },
    { name: "Agility", val: 8, desc: "Speed of navigating code and problem solving." },
    { name: "Luck", val: 5, desc: "Sometimes the code compiles on the first try." },
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
          src="./public/pip-me.png" 
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

export default AbilitiesSection;