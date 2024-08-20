import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import axios from "axios"; // Import axios directly to use its utilities

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface Games {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<Games>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results); // Set the games state with the fetched data
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return; // Check if the error is due to cancellation
        setError(err.message); // Handle other errors
        setLoading(false);
      });

    return () => controller.abort(); // Clean up on component unmount or dependency change
  }, []);

  return { games, setGames, error, setError, loading};
};

export default useGames;
