import { gql } from "graphql-request";

export const GET_NEWS_QUERY = gql`
query {
  nyheder {
    newsTitle
    published
    urlSlug
    content {
      raw
    }
    imageText
    billedNyhed {
      id
    }
    author
  }
}
`;

export const GET_SINGLE_NEWS_QUERY = gql`
  query ($slug: String!) {
    nyheder(where: { urlSlug: $slug }) {
      newsTitle
      urlSlug
      published
      author
      content {
        raw
      }
      imageText
      billedNyhed {
        url
      }
    }
  }
`;