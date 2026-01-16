import React, { useState } from 'react';
import axiosClient from './axiosClient';

import MockAdapter from 'axios-mock-adapter';
const mock = new MockAdapter(axiosClient);

export default function Mock() {
    const [data, setData] = useState(null);
    const [status, setStatus] = useState('Idle');

    const setupExpiredTokenScenario = () => {
        localStorage.setItem('access_token', 'expired-token');

        mock.onGet('/users').reply((config) => {
            if (config.headers.Authorization === 'Bearer expired-token') {
                return [401, { message: 'Token Expired' }];
            }
            return [200, [{ id: 1, name: 'Alice (Fetched with NEW token)' }]];
        });

        setStatus('Scenario Setup: Next click will fail (401) then retry.');
    };

    const fetchData = async () => {
        try {
            setStatus('⏳ Fetching Data...');
            const req1 = axiosClient.get('/users');
            const req2 = axiosClient.get('/users'); 

            const [res1, res2] = await Promise.all([req1, req2]);

            setData(res1.data);
            setStatus('✅ Success! Data fetched after silent refresh.');
        } catch (err) {
            console.error(err);
            setStatus('❌ Error: ' + err.message);
        }
    };

    return (
        <div style={{ padding: '50px', fontFamily: 'sans-serif' }}>
            <h1>The "Silent Refresh" Demo</h1>

            <div style={{ marginBottom: '20px', padding: '15px', background: '#f0f0f0' }}>
                <strong>Current Status:</strong> {status}
            </div>

            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <button onClick={setupExpiredTokenScenario}>
                    1. Setup "Expired Token" Scenario
                </button>

                <button onClick={fetchData} style={{ fontWeight: 'bold' }}>
                    2. Fetch Data (Triggers Interceptor)
                </button>

                <button onClick={() => { localStorage.clear(); setStatus('Cleared'); }}>
                    Reset
                </button>
            </div>

            <h3>Console Logs (Open DevTools for details):</h3>
            <pre style={{ background: '#333', color: '#fff', padding: '10px' }}>
                {data ? JSON.stringify(data, null, 2) : 'No Data'}
            </pre>
        </div>
    );
}