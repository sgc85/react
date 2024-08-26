import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Response<T> {
    count: number;
    results: T[];
}


const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<Response<T>>(endpoint, { signal: controller.signal , ...requestConfig})
      .then((res) => {
        setData(res.data.results); // Set the games state with the fetched data
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return; // Check if the error is due to cancellation
        setError(err.message); // Handle other errors
        setLoading(false);
      });

    return () => controller.abort(); // Clean up on component unmount or dependency change
  }, deps ? [...deps] : []);

  return { data, error, loading };
};

export default useData;
