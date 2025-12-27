import React from 'react'
import HighlightedText from '../UI/HighlightedText';

function ResultList({items, highlightTerm}) {
    if (items.length === 0) return <p>No results found</p>;


  return (
    <ul>
        {items.map((item, index)=>(
            <li key={index}>
                <HighlightedText text={item} highlight={highlightTerm} />
            </li>
        ))}
    </ul>
  )
}

export default ResultList