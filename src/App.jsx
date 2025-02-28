import { useMantineColorScheme } from "@mantine/core";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogOutContextProvider from "./context/LogOut";
import useDispatchSession from "./hooks/useDispatchSession";
import useInsertDb from "./hooks/useInsertDb";
import useQueryMovie from "./hooks/useQueryMovie";
import ErrorPage from "./pages/error";
import HomePage from "./pages/home";
import MoviePage from "./pages/movie";
import SearchPage from "./pages/search";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import WatchlistPage from "./pages/watchlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage query={useQueryMovie()} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/movie/:id",
    element: <MoviePage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/watchlist",
    element: <WatchlistPage />,
  },
]);
const App = () => {
  const { setColorScheme } = useMantineColorScheme();

  useEffect(() => setColorScheme("dark"), [setColorScheme]);
  useDispatchSession();
  useInsertDb();

  return (
    <LogOutContextProvider>
      <RouterProvider router={router} />
    </LogOutContextProvider>
  );
};

export default App;
