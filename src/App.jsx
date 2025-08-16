import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StartPage from "./pages/StartPage";
import WellcomePage from "./pages/WellcomePage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router";
import AppLayout from "./components/AppLayout";
import Message from "./components/Message";
import Beverage from "./components/Beverage";
import Favorite from "./components/Favorite";
import MenuProduct from "./components/MenuProduct";
import { Provider } from "react-redux";
import { store, persistor } from "./components/Store";
import { PersistGate } from "redux-persist/integration/react";
const queryClient = new QueryClient();
function App() {
  const router = createHashRouter([
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
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}></RouterProvider>
        </QueryClientProvider>
      </Provider>
    </PersistGate>
  );
}

export default App;
