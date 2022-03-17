import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const abortConn = new AbortController();
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
        // console.log(jsonData);
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
  return { error, isLoading, data };
};

export default useFetch;
