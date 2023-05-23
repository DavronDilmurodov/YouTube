import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/auth.jsx";
import { DataProvider } from "./contexts/data.jsx";
import { TrendingDataProvider } from "./contexts/trendingData.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <DataProvider>
        <TrendingDataProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </TrendingDataProvider>
      </DataProvider>
    </AuthProvider>
  </React.StrictMode>
);
