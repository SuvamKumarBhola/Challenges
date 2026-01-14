import React, { memo } from 'react';

const SlowList = memo(({ text }) => {
    const items = [];
    for (let i = 0; i < 10000; i++) {
        if (text && `Item ${i}`.toLowerCase().includes(text.toLowerCase())) {
            items.push(<li key={i}>Item {i} matches "{text}"</li>);
        } else if (!text) {
            items.push(<li key={i}>Item {i}</li>);
        }
    }

    return (
        <ul style={{ opacity: 0.5 }}>
            {items}
        </ul>
    );
});

export default SlowList;