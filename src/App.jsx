import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StartPage from "./pages/StartPage";
import WellcomePage from "./pages/WellcomePage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./components/AppLayout";
import Message from "./components/Message";
import Beverage from "./components/Beverage";
import Favorite from "./components/Favorite";
import MenuProduct from "./components/MenuProduct";
import { Provider } from "react-redux";
import { Store } from "./components/Store";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient();
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <WellcomePage /> },
    { path: "start", element: <StartPage /> },
    {
      path: "kopikap",
      element: <AppLayout />,
      children: [
        { index: true, element: <MenuProduct /> },
        { path: "messages", element: <Message /> },
        { path: "beverages", element: <Beverage /> },
        { path: "favorites", element: <Favorite /> },
      ],
    },
  ]);

  return (
    <Provider store={Store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
