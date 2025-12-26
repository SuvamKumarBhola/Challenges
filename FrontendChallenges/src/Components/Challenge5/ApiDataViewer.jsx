import React, { useEffect, useState } from 'react'

function ApiDataViewer() {
    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) {
                    throw new Error('Something went wrong');
                }
                const data = await response.json();
                setPost(data);
                setLoading(false);
                setError(null);
            } catch (e) {
                setError(e.message);
                setPost([])
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const styles = {
        container: {
            maxWidth: '800px',
            margin: '0 auto',
            padding: '40px 20px',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            backgroundColor: '#ffffff',
            minHeight: '100vh'
        },
        header: {
            fontSize: '32px',
            fontWeight: '600',
            color: '#1a1a1a',
            marginBottom: '32px',
            borderBottom: '2px solid #e5e5e5',
            paddingBottom: '16px'
        },
        list: {
            listStyle: 'none',
            padding: 0,
            margin: 0
        },
        listItem: {
            backgroundColor: '#fafafa',
            border: '1px solid #e5e5e5',
            borderRadius: '8px',
            padding: '24px',
            marginBottom: '16px',
            transition: 'all 0.2s ease',
            cursor: 'pointer'
        },
        listItemHover: {
            backgroundColor: '#f5f5f5',
            borderColor: '#d4d4d4',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
        },
        postTitle: {
            fontSize: '20px',
            fontWeight: '600',
            color: '#2c2c2c',
            marginTop: 0,
            marginBottom: '12px',
            textTransform: 'capitalize',
            lineHeight: '1.4'
        },
        postBody: {
            fontSize: '15px',
            color: '#666666',
            lineHeight: '1.6',
            margin: 0
        },
        loadingError: {
            textAlign: 'center',
            fontSize: '24px',
            color: '#4a4a4a',
            marginTop: '100px'
        }
    };

    if (loading) return <h1 style={styles.loadingError}>Loading...</h1>
    if (error) return <h1 style={styles.loadingError}>{error}</h1>
    if (!post || post.length === 0) return <h1 style={styles.loadingError}>No Data Found</h1>

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>API Data Viewer</h1>
            <ul style={styles.list}>
                {post.map((post) => (
                    <li
                        key={post.id}
                        style={styles.listItem}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = styles.listItemHover.backgroundColor;
                            e.currentTarget.style.borderColor = styles.listItemHover.borderColor;
                            e.currentTarget.style.boxShadow = styles.listItemHover.boxShadow;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = styles.listItem.backgroundColor;
                            e.currentTarget.style.borderColor = styles.listItem.borderColor;
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <h3 style={styles.postTitle}>{post.title}</h3>
                        <p style={styles.postBody}>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ApiDataViewer