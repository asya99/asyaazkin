export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#4ECDC4',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Courier New', monospace",
      padding: '2rem'
    }}>
      {/* Header Text */}
      <div style={{
        textAlign: 'center',
        marginBottom: '2rem',
        color: '#2C3E50'
      }}>
        <h1 style={{ fontSize: '24px', margin: '0 0 0.5rem 0' }}>
          Hi! I'm Asya. I'm an ML engineer + data journalist.
        </h1>
        <p style={{ fontSize: '18px', margin: 0 }}>
          Click around my desk to learn more about my experience.
        </p>
      </div>

      {/* Interactive Desk Container */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '800px',
        aspectRatio: '1/1'
      }}>
        {/* Desk Background Image */}
        <img 
          src="/portfolio-website/desk-bg.png" 
          alt="Desk" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />

        {/* Clickable Area: Projects (left note) */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('navigate', { detail: 'projects' })); }}
          title="View my projects"
          style={{
            position: 'absolute',
            left: '5%',
            top: '25%',
            width: '18%',
            height: '25%',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        />

        {/* Clickable Area: Contact (plant picture) */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' })); }}
          title="Contact me"
          style={{
            position: 'absolute',
            left: '26%',
            top: '20%',
            width: '15%',
            height: '22%',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        />

        {/* Clickable Area: Resume (mountain picture) */}
        <a
          href="/portfolio-website/asyaazkin_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          title="View my resume"
          style={{
            position: 'absolute',
            left: '45%',
            top: '18%',
            width: '17%',
            height: '24%',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        />

        {/* Clickable Area: Fun Facts / About (photo frame) */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('navigate', { detail: 'about' })); }}
          title="Fun facts about me"
          style={{
            position: 'absolute',
            left: '65%',
            top: '22%',
            width: '20%',
            height: '28%',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        />

        {/* Clickable Area: Home (laptop) */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('navigate', { detail: 'home' })); }}
          title="Home"
          style={{
            position: 'absolute',
            left: '30%',
            top: '52%',
            width: '40%',
            height: '25%',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        />
      </div>
    </div>
  )
}
