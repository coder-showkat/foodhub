import React, { useEffect, useState } from "react";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import RecipeCart from "./RecipeCart";
import Spinner from "./Spinner";

function FoodRecipe() {
  const [meals, setMeals] = useState([]);
  const data = useLoaderData();
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCategory(data.categories))
      .catch((err) => console.log(err));

    if (data) {
      setMeals(data.meals);
    } else {
      setLoading(true);
      fetch(
        `https:///www.themealdb.com/api/json/v1/1/search.php?s=${searchParams.get(
          "q"
        )}`
      )
        .then((res) => res.json())
        .then((json) => setMeals(json.meals))
        .catch((err) => console.error(err));
      setLoading(false);
    }
  }, [data, searchParams]);

  const categoryHandler = (category) => {
    navigate(`/category/${category.toLowerCase()}`);
  };

  return (
    <>
      <h1 className="text-white text-3xl text-orange font-semibold text-center w-64 h-0 mx-auto border-[30px] border-x-white border-y-orange bg-orange">
        <span className="relative -top-5">Food Recipe</span>
      </h1>

      <div className="relative flex w-full flex-wrap items-center justify-between bg-neutral-100 py-3 text-neutral-500 shadow-md dark:bg-neutral-600">
        <div className="flex w-full flex-wrap items-center justify-between px-6">
          <div>
            <div className="flex justify-center">
              <div>
                <div className="relative" data-te-dropdown-ref>
                  <button
                    className="flex items-center whitespace-nowrap rounded px-4"
                    type="button"
                    id="dropdownMenuButton1"
                    data-te-dropdown-toggle-ref
                    aria-expanded="false"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <span className="uppercase" id="category-name">
                      {location.pathname.split("/")[1] === "category"
                        ? `Category by ${location.pathname.split("/")[2]}`
                        : "Categories"}
                    </span>
                    <span className="ml-2 w-2">
                      <i className="fa-solid fa-chevron-down"></i>
                    </span>
                  </button>
                  <ul
                    id="category"
                    className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block h-60 overflow-y-auto"
                    aria-labelledby="dropdownMenuButton1"
                    data-te-dropdown-menu-ref
                  >
                    {category.map((cat, index) => {
                      return (
                        <li
                          onClick={() => categoryHandler(cat.strCategory)}
                          key={index}
                          id={cat.strCategory}
                          className="px-5 py-1 cursor-pointer hover:bg-gray font-thin"
                        >
                          {cat.strCategory}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading && <Spinner />}
      <div
        id="cart-container"
        className={
          loading
            ? "hidden"
            : "grid relative grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4 px-2"
        }
      >
        {meals &&
          meals.map((meal, index) => (
            <RecipeCart
              title={meal.strMeal}
              imageUrl={meal.strMealThumb}
              key={meal.idMeal}
              id={meal.idMeal}
            />
          ))}
      </div>
      {!meals && <p className="text-center mb-12 text-xl text-red-500 px-4">404 not found</p>}
    </>
  );
}

export default FoodRecipe;
