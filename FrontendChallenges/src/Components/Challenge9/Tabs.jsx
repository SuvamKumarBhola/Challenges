import React, { useEffect, useState } from 'react'

function Tabs({ items, storageKey = 'active-tab-index' }) {
    const [activeTab, setActivetab] = useState(() => {
        const saveIndex = localStorage.getItem(storageKey);
        return saveIndex ? parseInt(saveIndex) : 0;
    });
    const tabListRef = useRef(null);

    useEffect(() => {
        localStorage.setItem(storageKey, activeTab)
    }, [activeTab, storageKey]);

    const handleTabClick = (index) => {
        setActivetab(index)
    }

    const handleKeyDown = (e) => {
        let newIndex = activeTab;
        if (e.key === 'ArrowRight') {
            newIndex = (activeTab + 1) % items.length;
        } else if (e.key === 'ArrowLeft') {
            newIndex = (activeTab - 1 + items.length) % items.length;
        }
        if (newIndex !== activeTab) {
            setActivetab(newIndex);
            tabListRef.currrent.children[newIndex].focus();
        }
    };

    if (!items || items.length === 0) return null

    return (
        <div className='tabs-container'>
            <div className='tabs-list' role='tablist' ref={tabListRef}>
                {items.map((items, index)=>(
                    <button
                        key={index}
                        className={`tab-button ${index === activeTab ? 'active' : ''}`}
                        onClick={handleTabClick(index)}
                        onKeyDown={handleKeyDown}
                        role='tab'
                        aria-selected={index === activeTab ? 'true'  : 'false'}
                        tabIndex={index === activeIndex ? 0 : -1}
                    >{items.lable}</button>
                ))}
            </div>
            <div className='tab-panel' role='tabpanel'>
                {items[activeTab].content}
            </div>
        </div>
    )
}

export default Tabs;