import { Box, Container } from "@mui/material";
import { useFetch } from "../hook/useFetch";
import { RichText } from "@graphcms/rich-text-react-renderer";

export const AllePage = () => {
    const { data, loading, error } = useFetch();


    return (
        <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Container sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {data && data.nyheder.map((newsItem: any) => (
                    <Box key={newsItem.urlSlug} sx={{ border: '1px solid #ccc', padding: 2, borderRadius: 2 }}>
                        <h2>{newsItem.newsTitle}</h2>
                        <p>{newsItem.published}</p>
                        <p>{newsItem.author}</p>
                        <img src={newsItem.billedNyhed.url} alt={newsItem.imageText} />
                        <RichText content={newsItem.content.raw} />
                    </Box>
                ))}
            </Container>

        </Box>
    )
}