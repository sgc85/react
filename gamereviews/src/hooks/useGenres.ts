import axios from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Genres {
    count: number;
    results: Genre[];
}

export interface Genre {
    id: number;
    name: string;
    slug: string;
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<Genres>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results); // Set the games state with the fetched data
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return; // Check if the error is due to cancellation
        setError(err.message); // Handle other errors
        setLoading(false);
      });

    return () => controller.abort(); // Clean up on component unmount or dependency change
  }, []);

  return { genres, setGenres, error, setError, loading };
};

export default useGenres;
