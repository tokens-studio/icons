import { useState } from 'react'
import * as Icons from '@tokens-studio/icons'

function App() {
  const [size, setSize] = useState(24)
  const [search, setSearch] = useState('')
  
  const handleSizeChange = (e) => {
    const value = Number(e.target.value)
    if (!isNaN(value) && value > 0) {
      setSize(value)
    }
  }

  const filteredIcons = Object.entries(Icons).filter(([name]) => 
    name.toLowerCase().includes(search.toLowerCase())
  )
  
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div style={{ 
        position: 'sticky', 
        top: 0, 
        background: 'white', 
        padding: '1rem',
        zIndex: 1,
        display: 'flex',
        gap: '2rem',
        alignItems: 'center'
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

        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1 }}>
          Search:
          <input 
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search icons..."
            style={{
              padding: '0.25rem',
              border: '1px solid #eee',
              width: '100%',
              maxWidth: '300px'
            }}
          />
        </label>

        <div style={{ color: '#666', fontSize: '0.875rem' }}>
          {filteredIcons.length} icons
        </div>
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
        gap: '3rem',
        padding: '1rem'
      }}>
        {filteredIcons.map(([name, Icon]) => (
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
