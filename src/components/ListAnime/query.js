import {gql} from '@apollo/client';

export const ANIME_QUERY = gql`

    query ($search: String, $page: Int, $perPage: Int) {
        AnimeSearch: Page (page: $page, perPage: $perPage) {
            media(search: $search, type: ANIME) {
                id
                title {
                    romaji
                    native
                    english
                }
                coverImage {
                    extraLarge
                }
                season
                seasonYear
                status
                episodes
                popularity
                averageScore
                trending
                genres
                description
            }
        }
    }

`;
