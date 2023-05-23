import { useContext } from "react";
import { TrendingDataContext } from "../contexts/trendingData";

export const useTrendingData = () => {
  const { trendingData, setTrendingData } = useContext(TrendingDataContext);

  return [trendingData, setTrendingData];
};
