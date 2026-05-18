import { GraphQLClient } from "graphql-request";
import { GET_NEWS_QUERY, GET_SINGLE_NEWS_QUERY } from "../Query/NewsQuery";

const client = new GraphQLClient(import.meta.env.VITE_CMS_API_URL);

export const fetchNews = async () => {
    try {
        const data = await client.request(GET_NEWS_QUERY);
        return data;
    } catch (error) {
        console.error("Error fetching news:", error);
        throw error;
    }
};

export const fetchNewsBySlug = async (slug: string) => {
    const res = await client.request(GET_SINGLE_NEWS_QUERY, { slug });
    // nyheder er en array; returner første element hvis du forventer én artikel
    return res.nyheder?.[0] ?? null;
};