import React, { useState } from 'react';

const FileSystemItem = ({ node }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        if (node.isFolder) {
            setIsOpen(!isOpen);
        }
    };

    return (
        <div style={{ marginLeft: '20px', userSelect: 'none' }}>

            <div
                onClick={handleToggle}
                style={{
                    cursor: node.isFolder ? 'pointer' : 'default',
                    padding: '5px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#333'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#f0f0f0'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
                <span>
                    {node.isFolder ? (isOpen ? '📂' : '📁') : '📄'}
                </span>

                <span>{node.name}</span>
            </div>

            {isOpen && node.children && (
                <div style={{ borderLeft: '1px solid #ddd' }}>
                    {node.children.map((childNode) => (
                        <FileSystemItem key={childNode.id} node={childNode} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default FileSystemItem;