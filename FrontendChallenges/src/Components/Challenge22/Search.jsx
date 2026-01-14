import { useDeferredValue, useState } from 'react'
import SlowList from './SlowList'

function Search() {
    const [query, setQuery] = useState('')
    const defferedQuery = useDeferredValue(query)

    isStale = query !== defferedQuery

  return (
    <div>
          <h1>React 18 Concurrent Mode</h1>

          <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type fast..."
              style={{
                  padding: '10px',
                  fontSize: '18px',
                  width: '100%',
                  marginBottom: '20px'
              }}
          />

          <div style={{
              opacity: isStale ? 0.5 : 1,
              transition: 'opacity 0.2s'
          }}>
              <SlowList text={defferedQuery} />
          </div>
    </div>
  )
}

export default Search