import { useEffect, useState } from "react";
import api from "../api/mock";

export default () => {
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    try {
      const response = await api.get("/restaurants");
      console.log("MockAPI'den Gelen Veriler:", response.data);
      setResults(response.data);
    } catch (err) {
      console.log("MockAPI Hatası:", err.message);
    }
  };

  useEffect(() => {
    searchApi();
  }, []);

  return [searchApi, results];
};
