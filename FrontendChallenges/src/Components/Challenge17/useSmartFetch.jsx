import { useState, useEffect, useRef } from 'react';
const cache = {};

export default function useSmartFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const isMounted = useRef(true);

    useEffect(() => {
        isMounted.current = true;
        return () => { isMounted.current = false; };
    }, []);

    useEffect(() => {
        if (!url) return;

        if (cache[url]) {
            setData(cache[url]);
            setLoading(false);
            console.log(`🎯 Cache Hit for ${url}`);
            return;
        }

        console.log(`🌍 Fetching ${url}...`);
        setLoading(true);

        const controller = new AbortController();

        fetch(url, { signal: controller.signal })
            .then(res => {
                if (!res.ok) throw new Error("Failed to fetch");
                return res.json();
            })
            .then(result => {
                if (isMounted.current) {
                    cache[url] = result;

                    setData(result);
                    setLoading(false);
                    setError(null);
                }
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('🛑 Request cancelled (Race Condition handled)');
                } else if (isMounted.current) {
                    setError(err.message);
                    setLoading(false);
                }
            });

        return () => {
            controller.abort();
        };

    }, [url]);

    return { data, loading, error };
}