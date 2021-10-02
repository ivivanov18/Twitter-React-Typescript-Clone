import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";

type AppProvidersProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry(failureCount, error: any) {
        if (error.status === 404) return false;
        else if (failureCount < 2) return true;
        else return false;
      },
    },
  },
});

export default function AppProviders({ children }: AppProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>{children}</Router>
      </AuthProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
