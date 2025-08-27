import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "virtual:generated-pages-react";
import PWABadge from "./PWABadge.tsx";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ui/ErrorFallback.tsx";
import { ToastContainer } from "react-toastify";
function AppRoutes() {
  const element = useRoutes(routes);
  return element;
}

function App() {
  return (
    <BrowserRouter>
      <PWABadge />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className="w-full min-h-screen flex flex-col bg-base-200">
          <AppRoutes />
        </div>
        <ToastContainer />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
