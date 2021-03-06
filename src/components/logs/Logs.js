import React, { useEffect, useState } from 'react'
import Preloader from '../layouts/Preloader';
import LogItem from './LogItem';

const Logs = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getLogs()
        // eslint-disable-next-line
    }, []);

    const getLogs = async () => {
        setLoading(true);
        const res = await fetch('/logs');
        const data = await res.json();

        setLogs(data);
        setLoading(false);
    }

    if (loading) {
        return <Preloader />
    }
    return (
        <ul className='collection with-header'>
            <li className="colllection-header">
                <h4 className="center">System Logs</h4>
            </li>
            {!loading && logs.length === 0 ? (<p>No Logs</p>) : (
                logs.map(log => <LogItem log={log} key={log.id} />)
            )}
        </ul>
    )
}

export default Logs