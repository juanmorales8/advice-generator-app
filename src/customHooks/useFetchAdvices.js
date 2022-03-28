import { useState } from "react";
import { useEffect } from "react";
import { getRandomAdvice } from "@services/getAdvice";

function useFetchAdvices() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleGetAdvice();
  }, []);

  const handleGetAdvice = () => {
    setLoading(true);
    getRandomAdvice().then((res) => {
      if (res.err === undefined) {
        setData(res);
        setError(null);
      } else {
        setError(res);
      }
      setLoading(false);
    });
  };

  return { data, error, loading, handleGetAdvice };
}

export { useFetchAdvices };
