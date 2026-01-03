import React, { createContext, useContext, useState } from 'react';

const AccordionContext = createContext();

export const Accordion = ({ children }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <AccordionContext.Provider value={{ openIndex, toggleIndex }}>
      <div className="accordion-wrapper">
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

const Item = ({ children, index }) => {
  return (
    <div className="accordion-item" style={{ borderBottom: '1px solid #ccc' }}>
       <ItemContext.Provider value={{ index }}>
          {children}
       </ItemContext.Provider>
    </div>
  );
};

const ItemContext = createContext();

const Title = ({ children }) => {
  const { openIndex, toggleIndex } = useContext(AccordionContext);
  const { index } = useContext(ItemContext);
  
  const isOpen = openIndex === index;

  return (
    <button 
      onClick={() => toggleIndex(index)}
      style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        width: '100%',
        padding: '15px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold'
      }}
    >
      {children}
      <span>{isOpen ? '-' : '+'}</span>
    </button>
  );
};

const Content = ({ children }) => {
  const { openIndex } = useContext(AccordionContext);
  const { index } = useContext(ItemContext);

  const isOpen = openIndex === index;

  if (!isOpen) return null;

  return (
    <div style={{ padding: '15px', background: '#f9f9f9' }}>
      {children}
    </div>
  );
};

Accordion.Item = Item;
Accordion.Title = Title;
Accordion.Content = Content;

export default Accordion;