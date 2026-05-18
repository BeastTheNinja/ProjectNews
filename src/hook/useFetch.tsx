import { useState, useEffect } from "react";
import { fetchNews } from "../api/FetchApi";
import type { News } from "../types/Nyheder";

export const useFetch = () => {
    const [data, setData] = useState<News | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchNews();
                setData(result);
                setError(null);
            } catch (err) {
                console.error("Error fetching news:", err);
                setError(err instanceof Error ? err.message : "Unknown error occurred");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
};