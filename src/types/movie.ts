export interface MovieSummary {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MovieDetails {
  Title: string;
  Year: string;
  Genre?: string;
  Plot?: string;
  Director?: string;
  Actors?: string;
  Poster?: string;
  imdbID: string;
  Language?: string;
  Released?: string;
  Runtime?: string;
  imdbRating?: string;
}
