export default function Contact() {
  return (
    <div style={{
      minHeight: '100vh',
      color: '#0f172a',
      fontFamily: "'Inter', sans-serif",
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
        <a href="#" style={{color: '#060606ff', textDecoration: 'none', fontWeight: 'normal'}} onMouseOver={(e) => e.target.style.fontWeight = 'bold'} onMouseOut={(e) => e.target.style.fontWeight = 'normal'} onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('navigate', { detail: 'home' })); }}>home</a>
        <a href="#" style={{color: '#131314ff', textDecoration: 'none', fontWeight: 'normal'}} onMouseOver={(e) => e.target.style.fontWeight = 'bold'} onMouseOut={(e) => e.target.style.fontWeight = 'normal'} onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('navigate', { detail: 'about' })); }}>about</a>
        <a href="#" style={{color: '#070707ff', textDecoration: 'none', fontWeight: 'normal'}} onMouseOver={(e) => e.target.style.fontWeight = 'bold'} onMouseOut={(e) => e.target.style.fontWeight = 'normal'} onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('navigate', { detail: 'projects' })); }}>projects</a>
        <a href="#" style={{color: '#0d0d0dff', textDecoration: 'none', fontWeight: 'bold'}} onMouseOver={(e) => e.target.style.fontWeight = 'bold'} onMouseOut={(e) => e.target.style.fontWeight = 'bold'} onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' })); }}>contact</a>
        <a href="/asyaazkin/resume.pdf" target="_blank" rel="noopener noreferrer" style={{color: '#000000', textDecoration: 'none', fontWeight: 'normal'}} onMouseOver={(e) => e.target.style.fontWeight = 'bold'} onMouseOut={(e) => e.target.style.fontWeight = 'normal'}>resume</a>
      </nav>

      {/* Main Content - Centered */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        {/* Main Title */}
        <h1 style={{
          fontSize: '70px',
          fontFamily: "'Pix32', 'Playfair Display', serif",
          color: '#0f0f10ff',
          fontWeight: '700',
          margin: '0 0 2rem 0',
          textAlign: 'center'
        }}>
          Let's Connect
        </h1>

        <p style={{
          fontSize: '18px',
          fontFamily: "'Inter', sans-serif",
          color: '#101010ff',
          lineHeight: '1.8',
          marginBottom: '3rem',
          maxWidth: '600px'
        }}>
          I'm always interested in hearing about new opportunities, collaborations, 
          and interesting projects. Feel free to reach out!
        </p>

        {/* Contact Links */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          alignItems: 'center',
          width: '100%',
          maxWidth: '500px'
        }}>
          <a 
            href="mailto:asyaazkin12@gmail.com" 
            style={{
              color: '#000000',
              textDecoration: 'none',
              fontSize: '18px',
              fontFamily: "'Pix32', 'Inter', sans-serif",
              fontWeight: '500',
              padding: '16px 32px',
              backgroundColor: 'white',
              borderRadius: '4px',
              width: '100%',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem'
            }} 
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#000000';
              e.target.style.border = '2px solid #ffffffff';
              e.target.style.transform = 'translateY(-2px)';
            }} 
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#000000';
              e.target.style.border = 'none';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            <span style={{fontSize: '20px'}}>✉</span>
            <span>Email</span>
          </a>

          <a 
            href="https://www.linkedin.com/in/asya-azkin/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
              color: '#000000',
              textDecoration: 'none',
              fontSize: '18px',
              fontFamily: "'Pix32', 'Inter', sans-serif",
              fontWeight: '500',
              padding: '16px 32px',
              backgroundColor: 'white',
              borderRadius: '4px',
              width: '100%',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem'
            }} 
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#000000';
              e.target.style.border = '2px solid #fffdfdff';
              e.target.style.transform = 'translateY(-2px)';
            }} 
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#000000';
              e.target.style.border = 'none';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            <span style={{fontSize: '20px'}}></span>
            <span>LinkedIn</span>
          </a>

          <a 
            href="https://github.com/asya99" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
              color: '#000000',
              textDecoration: 'none',
              fontSize: '18px',
              fontFamily: "'Pix32', 'Inter', sans-serif",
              fontWeight: '500',
              padding: '16px 32px',
              backgroundColor: 'white',
              borderRadius: '4px',
              width: '100%',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem'
            }} 
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#000000';
              e.target.style.border = '2px solid #ffffffff';
              e.target.style.transform = 'translateY(-2px)';
            }} 
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#000000';
              e.target.style.border = 'none';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            <span style={{fontSize: '20px'}}></span>
            <span>GitHub</span>
          </a>

          <a 
            href="https://medium.com/@asyaazkin" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
              color: '#000000',
              textDecoration: 'none',
              fontSize: '18px',
              fontFamily: "'Pix32', 'Inter', sans-serif",
              fontWeight: '500',
              padding: '16px 32px',
              backgroundColor: 'white',
              borderRadius: '4px',
              width: '100%',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem'
            }} 
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#0e0e0eff';
              e.target.style.border = '2px solid #ffffffff';
              e.target.style.transform = 'translateY(-2px)';
            }} 
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#000000';
              e.target.style.border = 'none';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            <span style={{fontSize: '20px'}}></span>
            <span>Medium</span>
          </a>
        </div>
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
          h1 {
            font-size: 45px !important;
          }
          p {
            font-size: 16px !important;
          }
        }
      `}</style>
    </div>
  );
}
