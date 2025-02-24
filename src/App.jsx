import HomePage from "./pages/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error";
import MoviePage from "./pages/movie";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import { useMantineColorScheme } from "@mantine/core";
import { useEffect } from "react";
import useDispatchSession from "./hooks/useDispatchSession";
import WatchlistPage from "./pages/watchlist";
import useInsertDb from "./hooks/useInsertDb";
import useQueryMovie from "./hooks/useQueryMovie";
import SearchPage from "./pages/search";

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

  return <RouterProvider router={router} />;
};

export default App;
