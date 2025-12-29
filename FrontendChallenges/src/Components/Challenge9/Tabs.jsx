import { useEffect, useState } from 'react'

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
        <div className="w-full max-w-4xl mx-auto">
            <div className="flex border-b border-gray-200" role="tablist" ref={tabListRef}>
                {items.map((item, index) => (
                    <button
                        key={index}
                        className={`px-6 py-3 font-medium text-sm transition-all duration-200 border-b-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${index === activeTab
                                ? 'text-blue-600 border-blue-600'
                                : 'text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300'
                            }`}
                        onClick={() => handleTabClick(index)}
                        onKeyDown={handleKeyDown}
                        role="tab"
                        aria-selected={index === activeTab}
                        tabIndex={index === activeTab ? 0 : -1}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
            <div className="mt-6" role="tabpanel">
                {items[activeTab].content}
            </div>
        </div>
    );
}

export default Tabs;