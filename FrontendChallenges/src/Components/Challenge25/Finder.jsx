import { useState, useEffect } from 'react';
import useWorker from './useWorker';

export default function Finder() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(c => c + 1);
        }, 100); 
        return () => clearInterval(interval);
    }, []);


    const { result, loading, run } = useWorker('/primeWorker.js');


    const runOnMainThread = () => {
        console.log("⚠️ Starting Main Thread Freeze...");
        const startTime = performance.now();

        const count = 200000; 
        let primes = [];
        let num = 2;
        while (primes.length < count) {
            let isPrime = true;
            for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
                if (num % i === 0) { isPrime = false; break; }
            }
            if (isPrime) primes.push(num);
            num++;
        }

        const endTime = performance.now();
        alert(`Done! Time: ${(endTime - startTime).toFixed(2)}ms`);
    };

    return (
        <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>
            <h1>Web Worker Demo</h1>

            <div style={{
                fontSize: '2rem',
                padding: '20px',
                background: '#f0f0f0',
                marginBottom: '40px',
                border: '2px solid #333'
            }}>
                UI Heartbeat: {counter}
                <br />
                <small style={{ fontSize: '1rem', color: '#666' }}>
                    (If this stops moving, the UI is frozen)
                </small>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>

                <button
                    onClick={runOnMainThread}
                    style={{ padding: '20px', background: '#ffcccc', border: '1px solid red', cursor: 'pointer' }}
                >
                    <strong>Run on Main Thread</strong>
                    <br />(Will Freeze UI)
                </button>

                <button
                    onClick={() => run({ count: 200000 })}
                    disabled={loading}
                    style={{ padding: '20px', background: '#ccffcc', border: '1px solid green', cursor: 'pointer' }}
                >
                    <strong>Run on Web Worker</strong>
                    <br />(Smooth UI)
                </button>
            </div>

            {loading && <h3>👷 Worker is crunching numbers...</h3>}

            {result && (
                <div style={{ marginTop: '20px', padding: '20px', border: '1px solid blue' }}>
                    <h3>Result from Worker:</h3>
                    <p>Found Prime: {result.result}</p>
                    <p>Time Taken: {result.timeTaken}ms</p>
                </div>
            )}
        </div>
    );
}