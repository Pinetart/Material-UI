import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortConn = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortConn.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error(`${res.status} - Could not fetch data from resource`);
          }
          return res.json();
        })
        .then((jsonData) => {
          setError(null);
          setIsLoading(false);
          setData(jsonData);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
          } else {
            setError(err.message);
            setIsLoading(false);
          }
        });
    }, 2000);

    return () => abortConn.abort();
  }, [url]);
  return { data, error, isLoading };
};

export default useFetch;
