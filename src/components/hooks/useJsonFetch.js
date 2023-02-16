import { useState, useEffect, useRef } from "react";

export default function useJsonFetch(url, opts) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const timestampRef = useRef();

    useEffect(() => {
        let canceled = false;
        const fetchData = async () => {
            if (canceled) {
                return;
            }
            const timestamp = Date.now();
            timestampRef.current = timestamp;
            setLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                if (!canceled && timestampRef.current === timestamp) {
                    const data = await response.json();
                    setData(data);
                }
                setError(null);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return [{ data, loading, error }];
}
