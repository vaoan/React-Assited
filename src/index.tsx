import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./common/presentation/";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Index />
    </QueryClientProvider>
  </React.StrictMode>
);
