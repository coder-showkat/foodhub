import React, { useEffect, useState } from "react";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useNavigation,
} from "react-router-dom";
import Banner from "./components/Banner";
import ErrorPage from "./components/ErrorPage";
import FoodRecipe from "./components/FoodRecipe";
import Navbar from "./components/Navbar";
import RecipeDetails from "./components/RecipeDetails";
import Spinner from "./components/Spinner";

const Layout = () => {
  const navigation = useNavigation();
  const [topBtn, setTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setTopBtn(true);
      } else {
        setTopBtn(false);
      }
    });
  }, []);

  if (navigation.state === "loading") return <Spinner />;
  else
    return (
      <>
        <header>
          <Navbar />
        </header>
        <main>
          <Outlet />
        </main>
        {topBtn && (
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              })
            }
            className="w-12 h-12 rounded-full flex justify-center items-center bg-gradient-to-r from-[#ff9900] to-[#ccccff] fixed bottom-6 right-6 text-2xl opacity-40 hover:opacity-100"
          >
            <ion-icon name="arrow-up"></ion-icon>
          </button>
        )}
      </>
    );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Banner /> <FoodRecipe />
          </>
        ),
        loader: () =>
          fetch("https:///www.themealdb.com/api/json/v1/1/search.php?s="),
        errorElement: <ErrorPage />,
      },
      {
        path: "/category/:category",
        element: (
          <>
            <Banner /> <FoodRecipe />
          </>
        ),
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.category}`
          ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/search",
        element: (
          <>
            <Banner /> <FoodRecipe />
          </>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/recipe/:id",
        element: <RecipeDetails />,
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
          ),
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
