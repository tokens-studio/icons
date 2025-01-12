import { useState } from 'react'
import * as Icons from '@tokens-studio/icons'

function App() {
  const [size, setSize] = useState(24)
  
  const handleSizeChange = (e) => {
    const value = Number(e.target.value)
    if (!isNaN(value) && value > 0) {
      setSize(value)
    }
  }
  
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div style={{ 
        position: 'sticky', 
        top: 0, 
        background: 'white', 
        padding: '1rem',
        zIndex: 1
      }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          Size: 
          <input 
            type="text"
            value={size}
            onChange={handleSizeChange}
            style={{
              width: '50px',
              padding: '0.25rem',
              border: '1px solid #eee'
            }}
          />
          px
        </label>
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
        gap: '3rem',
        padding: '1rem'
      }}>
        {Object.entries(Icons).map(([name, Icon]) => (
          <div 
            key={name}
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer'
            }}
            onClick={() => navigator.clipboard.writeText(name)}
            title="Click to copy component name"
          >
            <Icon width={size} height={size} />
            <span style={{ 
              fontSize: '0.75rem', 
              textAlign: 'center',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              width: '100%',
              whiteSpace: 'nowrap'
            }}>
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
