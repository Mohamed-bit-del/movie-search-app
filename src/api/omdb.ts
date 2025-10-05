import axios from "axios";
import type { MovieDetails } from "../types/movie";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_OMDB_BASE_URL;

export async function searchMovies(query: string) {
  if (!query) return { Response: "False", Error: "Empty query" };

  try {
    const res = await axios.get(`${BASE_URL}?apikey=${API_KEY}`, {
      params: { s: query },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function getMovieDetails(id: string) {
  try {
    const res = await axios.get(`${BASE_URL}?apikey=${API_KEY}`, {
      params: { i: id },
    });
    return res.data as MovieDetails;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
