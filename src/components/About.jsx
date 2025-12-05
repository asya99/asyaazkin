export default function About() {
  return (
    <div style={{
      minHeight: '100vh',
      color: '#0f172a',
      fontFamily: "'Inter', sans-serif",
      padding: '2rem',
      position: 'relative'
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
        <a href="#" style={{color: '#000000', textDecoration: 'none', fontWeight: 'bold'}} onMouseOver={(e) => e.target.style.fontWeight = 'bold'} onMouseOut={(e) => e.target.style.fontWeight = 'bold'} onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('navigate', { detail: 'about' })); }}>about</a>
        <a href="#" style={{color: '#000000', textDecoration: 'none', fontWeight: 'normal'}} onMouseOver={(e) => e.target.style.fontWeight = 'bold'} onMouseOut={(e) => e.target.style.fontWeight = 'normal'} onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('navigate', { detail: 'projects' })); }}>projects</a>
        <a href="#" style={{color: '#000000', textDecoration: 'none', fontWeight: 'normal'}} onMouseOver={(e) => e.target.style.fontWeight = 'bold'} onMouseOut={(e) => e.target.style.fontWeight = 'normal'} onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' })); }}>contact</a>
        <a href="/asyaazkin/resume.pdf" target="_blank" rel="noopener noreferrer" style={{color: '#000000', textDecoration: 'none', fontWeight: 'normal'}} onMouseOver={(e) => e.target.style.fontWeight = 'bold'} onMouseOut={(e) => e.target.style.fontWeight = 'normal'}>resume</a>
      </nav>

      {/* Hero Section - Centered */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        paddingTop: '4rem'
      }}>
        {/* Decorative Stars Top */}
        <div style={{
          fontSize: '20px',
          marginBottom: '2rem',
          color: '#000000'
        }}>
          ★★★
        </div>

        {/* Main Title */}
        <h1 style={{
          fontSize: '70px',
          fontFamily: "'Pix32', 'Playfair Display', serif",
          color: '#000000',
          fontWeight: '700',
          margin: '0 0 2rem 0',
          textAlign: 'center'
        }}>
          Asya Azkin
        </h1>

        {/* Profile Photo */}
        <img 
          src="/asyaazkin/profile-photo.jpg" 
          alt="Asya Azkin" 
          style={{
            width: '270px',
            height: 'auto',
            marginBottom: '2rem',
            border: '8px solid white',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}
        />

        {/* Bio Text */}
        <div style={{
          maxWidth: '600px',
          textAlign: 'center',
          fontSize: '16px',
          lineHeight: '1.8',
          color: '#070707ff',
          fontFamily: "'Pix32', 'Courier New', monospace",
          marginBottom: '2rem'
        }}>
          is an ML engineer and data journalist who loves turning messy data into clear stories. 
          She builds AI systems that make sense, from semantic clustering tools to NLP pipelines.
          When she's not coding, she's writing about how technology impacts society. She graduated from Vanderbilt University with a degree in Computer Science and Psychology. She's currently pursuing her masters in CS at Georgia Tech. 
        </div>

        {/* Fun Facts Section */}
        <div style={{
          maxWidth: '600px',
          marginBottom: '2rem'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontFamily: "'Pix32', 'Inter', sans-serif",
            color: '#000000',
            fontWeight: '600',
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            Fun Facts About Me
          </h3>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            textAlign: 'center',
            fontSize: '16px',
            lineHeight: '2',
            color: '#080808ff',
            fontFamily: "'Pix32', 'Courier New', monospace"
          }}>
            <li>* I <a href="https://www.asyaazkindesign.com" target="_blank" rel="noopener noreferrer" style={{color: '#000000', textDecoration: 'underline'}}>design and make art</a></li>
            <li>* I enjoy hiking and exploring nature</li>
            <li>* My listening age on Spotify Wrapped was 88</li>
            <li>* I collect old records</li>
          </ul>
        </div>

        {/* Decorative Stars Bottom */}
        <div style={{
          fontSize: '20px',
          color: '#000000'
        }}>
          ★★★
        </div>
      </div>

      {/* Main Content Container */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        minHeight: '100vh',
        maxWidth: '1200px',
        margin: '4rem auto 0',
        padding: '0 1rem',
        paddingLeft: '4rem',
        paddingTop: '4rem'
      }}>
      </div>

      <style>
        {`
        em {
          color: #000000;
          font-style: italic;
        }
        strong {
          font-weight: 600;
        }
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
        }
        `}
      </style>
    </div>
  );
}
