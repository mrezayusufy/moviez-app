export const CONFIG = {
  BASE_URL: 'https://api.imdbapi.dev',
  headers: {
    accept: 'application/json',
  },
};

type ImdbRating = {
  aggregateRating?: number;
  voteCount?: number;
};

type ImdbImage = {
  url?: string;
};

type ImdbTitle = {
  id: string;
  primaryTitle?: string;
  originalTitle?: string;
  primaryImage?: ImdbImage;
  startYear?: number;
  plot?: string;
  rating?: ImdbRating;
};

type ImdbTitlesResponse = {
  titles?: ImdbTitle[];
};

const mapImdbTitleToMovie = (title: ImdbTitle): Movie => ({
  id: title.id,
  title: title.primaryTitle ?? title.originalTitle ?? 'Untitled',
  adult: false,
  backdrop_path: '',
  genre_ids: [],
  original_language: 'en',
  original_title: title.originalTitle ?? title.primaryTitle ?? 'Untitled',
  overview: title.plot ?? '',
  popularity: 0,
  poster_path: title.primaryImage?.url ?? '',
  release_date: title.startYear ? `${title.startYear}-01-01` : '',
  video: false,
  vote_average: title.rating?.aggregateRating ?? 0,
  vote_count: title.rating?.voteCount ?? 0,
});

export const getMovies = async ({ query }: { query: string }) => {
  const cleanQuery = query.trim();
  const endpoint = cleanQuery
    ? `${CONFIG.BASE_URL}/search/titles?query=${encodeURIComponent(cleanQuery)}`
    : `${CONFIG.BASE_URL}/titles?sortBy=SORT_BY_POPULARITY&sortOrder=ASC`;

  const response = await fetch(endpoint, {
    method: 'GET',
    headers: CONFIG.headers,
  });

  if (!response.ok) {
    throw new Error(`Failed to get movies: ${response.status} ${response.statusText}`);
  }

  const data = (await response.json()) as ImdbTitlesResponse;
  const titles = Array.isArray(data?.titles) ? data.titles : [];
  return titles.map(mapImdbTitleToMovie);
};
