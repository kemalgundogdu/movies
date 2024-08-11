import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./output.css";
import { CategoryProvider } from "./context/CategoryContext";
import { MovieProvider } from "./context/MovieContext";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CategoryProvider>
        <MovieProvider>
          <App />
        </MovieProvider>
      </CategoryProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
