import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ModalProvider } from "./context/ModalProvider";
import Home from "./pages/Home";
import Modal from "./ui/Modal";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { LoaderProvider } from "./context/LoaderProvider";
import { Toaster } from "react-hot-toast";
import Loader from "./ui/Loader";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Toaster
        position="bottom-center"
        gutter={20}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 3000 },
          style: {
            fontSize: "20px",
            padding: "16px",
            minWidth: "250px",
          },
        }}
      />
      <LoaderProvider>
        <div className="font-inter h-screen w-screen text-slate-800">
          <Loader />
          <ModalProvider>
            <Home />
            <Modal />
          </ModalProvider>
        </div>
      </LoaderProvider>
    </QueryClientProvider>
  );
}

export default App;
