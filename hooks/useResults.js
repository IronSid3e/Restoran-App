import { useEffect } from "react";

export default () => {
  const searchApi = async (searchTerm) => {
    await yelp.get("/search", {
      params: {
        limit: 50,
        term: searchTerm,
        location: "İstanbul",
      },
    });
  };
  useEffect(() => {
    searchApi("Toast");
  }, []);

  return[searchApi];
};
