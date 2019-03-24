import ggl from "graphql-tag";

export const HOME_PAGE = qql`
    {
        movies(limit: 50, rating: 7) {
            id
            title
            genres
        }
    }
`;