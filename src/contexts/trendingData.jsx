import { createContext, useEffect, useState } from "react";

export const TrendingDataContext = createContext();

export const TrendingDataProvider = ({ children }) => {
  const [trendingData, setTrendingData] = useState([]);

  useEffect(() => {
    fetch(
      "https://youtube-search-and-download.p.rapidapi.com/trending?type=mu&hl=en&gl=US",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "aecd7dc56dmshb767559121b9271p1a534ejsnd1c63183305a",
          "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setTrendingData(data.contents))
      .catch((err) => console.log(err));
  }, []);

  return (
    <TrendingDataContext.Provider value={{ trendingData, setTrendingData }}>
      {children}
    </TrendingDataContext.Provider>
  );
};
