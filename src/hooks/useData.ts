import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

type FetchResponse<T> = {
  count: number;
  results: T[];
};

export const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[],
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      if (requestConfig?.method === "post") {
        apiClient
          .post<FetchResponse<T>>(endpoint, {
            signal: controller.signal,
            ...requestConfig,
          })
          .then((res) => {
            // @ts-ignore
            setData(res.data);
            setLoading(false);
          })
          .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
          });
      } else {
        apiClient
          .get<FetchResponse<T>>(endpoint, {
            signal: controller.signal,
            ...requestConfig,
          })
          .then((res) => {
            setData(res.data.results);
            setLoading(false);
          })
          .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
          });
      }

      return () => controller.abort();
    },
    deps ? [...deps] : [],
  );

  return { data, error, isLoading };
};
