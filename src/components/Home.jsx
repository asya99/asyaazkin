export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Pix32', 'Courier New', monospace",
      padding: '2rem'
    }}>
      {/* Interactive Desk Container */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '800px',
        aspectRatio: '1/1'
      }}>
        {/* Desk Background Image */}
        <img 
          src="/asyaazkin/desk-bg.png" 
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
            height: '35%',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            border: 'none'
          }}
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
            height: '32%',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            border: 'none'
          }}
        />

        {/* Clickable Area: Resume (mountain picture) */}
        <a
          href="/asyaazkin/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          title="View my resume"
          style={{
            position: 'absolute',
            left: '45%',
            top: '18%',
            width: '17%',
            height: '34%',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            border: 'none'
          }}
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
            height: '38%',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            border: 'none'
          }}
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
            border: 'none'
          }}
        />
      </div>
    </div>
  )
}
