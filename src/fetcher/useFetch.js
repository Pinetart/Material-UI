import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortConn = new AbortController();
    fetch(url, { signal: abortConn.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error(`${res.status} - Could not fetch data from resource`);
        }
        return res.json();
      })
      .then(() => {
        setError(null);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
        } else {
          setError(err.message);
          setIsLoading(false);
        }
      });

    return () => abortConn.abort();
  }, [url]);
  return { error, isLoading };
};

export default useFetch;
