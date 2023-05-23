import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://youtube-search-and-download.p.rapidapi.com/channel/about?id=UCE_M8A5yxnLfW0KghEeajjw",
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
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
