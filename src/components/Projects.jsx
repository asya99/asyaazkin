import { useState } from 'react';

export default function Projects() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundImage: `url('/asyaazkin/2.png')`,
      backgroundSize: 'contain',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      color: '#0f172a',
      fontFamily: "'Pix32', 'Inter', sans-serif",
      padding: '2rem',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Navigation */}
      <nav style={{
        position: 'absolute',
        top: '2rem',
        left: '2rem',
        display: 'flex',
        gap: '1.5rem',
        fontSize: '16px',
        zIndex: 10,
        fontFamily: "'Inter', sans-serif"
      }}>
        <a href="#" style={{color: '#000000', textDecoration: 'none', fontWeight: 'normal'}} onMouseOver={(e) => e.target.style.fontWeight = 'bold'} onMouseOut={(e) => e.target.style.fontWeight = 'normal'} onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('navigate', { detail: 'home' })); }}>home</a>
        <a href="#" style={{color: '#000000', textDecoration: 'none', fontWeight: 'normal'}} onMouseOver={(e) => e.target.style.fontWeight = 'bold'} onMouseOut={(e) => e.target.style.fontWeight = 'normal'} onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('navigate', { detail: 'about' })); }}>about</a>
        <a href="#" style={{color: '#000000', textDecoration: 'none', fontWeight: 'bold'}} onMouseOver={(e) => e.target.style.fontWeight = 'bold'} onMouseOut={(e) => e.target.style.fontWeight = 'bold'} onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('navigate', { detail: 'projects' })); }}>projects</a>
        <a href="#" style={{color: '#000000', textDecoration: 'none', fontWeight: 'normal'}} onMouseOver={(e) => e.target.style.fontWeight = 'bold'} onMouseOut={(e) => e.target.style.fontWeight = 'normal'} onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' })); }}>contact</a>
        <a href="/asyaazkin/resume.pdf" target="_blank" rel="noopener noreferrer" style={{color: '#000000', textDecoration: 'none', fontWeight: 'normal'}} onMouseOver={(e) => e.target.style.fontWeight = 'bold'} onMouseOut={(e) => e.target.style.fontWeight = 'normal'}>resume</a>
      </nav>

      {/* Main Content Container */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        minHeight: '100vh',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        paddingRight: '4rem',
        paddingTop: '4rem'
      }}>
        {/* Main Title */}
        <h1 style={{
          fontSize: '70px',
          fontFamily: "'Pix32', 'Playfair Display', serif",
          color: '#000000',
          fontWeight: '700',
          margin: '0 0 3rem 0',
          textAlign: 'right'
        }}>
          
        </h1>

        {/* Project Link - Congressional Semantic Map (Left) */}
        <a 
          href="https://asya99.github.io/congressional-semantic-map/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'block',
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '45%',
            height: '80%',
            cursor: 'pointer',
            zIndex: 5
          }}
          title="What AI Means in Washington - Semantic Clustering Project"
        />

        {/* Project Link - Spam Prediction Model (Right) */}
        <a 
          href="https://colab.research.google.com/drive/1WQ1nqX477nHd1yEejed7NkiXlrDEtHv9?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'block',
            position: 'absolute',
            top: '10%',
            right: '5%',
            width: '45%',
            height: '80%',
            cursor: 'pointer',
            zIndex: 5
          }}
          title="Spam Prediction Model - ML Twitter Dataset"
        />
      </div>

      {/* Mobile Responsive Styles */}
      <style>{`
        @media (max-width: 767px) {
          nav {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            justify-content: center !important;
            margin-bottom: 2rem !important;
          }
          div[style*="paddingLeft: '4rem'"] {
            padding-left: 1rem !important;
            padding-top: 1rem !important;
          }
          h1 {
            font-size: 45px !important;
            margin-top: 0 !important;
          }
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
