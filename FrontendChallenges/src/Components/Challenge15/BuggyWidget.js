import { useState } from 'react'

function BuggyWidget({title, children}) {
    const [count, setCount] = useState(0);

    if(count === 5){
        throw new Error(`Crashed at ${title} !!`)
    }
  return (
    <div>
        <h3>{title}</h3>
        <p>Click Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  )
}

export default BuggyWidget