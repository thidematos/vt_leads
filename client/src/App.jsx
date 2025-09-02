import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ModalProvider } from "./context/ModalProvider";
import Home from "./pages/Home";
import Modal from "./ui/Modal";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { LoaderProvider } from "./context/LoaderProvider";

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
      <LoaderProvider>
        <div className="font-inter h-screen w-screen text-slate-800">
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
