import { useState, useRef, useEffect, useCallback } from 'react';

const useWorker = (workerPath) => {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const workerRef = useRef(null);

    useEffect(() => {
        workerRef.current = new Worker(workerPath);

        workerRef.current.onmessage = (e) => {
            setResult(e.data);
            setLoading(false);
        };

        return () => {
            workerRef.current.terminate();
        };
    }, [workerPath]);

    const run = useCallback((data) => {
        setLoading(true);
        setResult(null);
        workerRef.current.postMessage(data);
    }, []);

    return { result, loading, run };
};

export default useWorker;