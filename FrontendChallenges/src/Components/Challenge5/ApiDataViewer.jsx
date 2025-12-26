import React, { useEffect, useState } from 'react'

function ApiDataViewer() {
    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Added await
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

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>{error}</h1>
    if (!post) return <h1>No Data Found</h1>

    return (
        <div>
            <h1>Api Data Viewer</h1>
            <ul>
                {post.map((post) => (                   
                        <li key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </li>
                    )
                )}
            </ul>
        </div>
    )
}

export default ApiDataViewer