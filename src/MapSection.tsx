
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

export default MapSection;