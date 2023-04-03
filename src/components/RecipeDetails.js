import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const RecipeDetails = () => {
    const [meal, setMeal] = useState([]);
    const data = useLoaderData();
    const navigate = useNavigate();

    useEffect(() => {
        if (data) {
            setMeal(data.meals[0]);
        }
    }, [data])
    
    const ingredients = Object.keys(meal).filter(item=>item.includes("strIngredient")).map(item=>meal[item]).filter(item=>item);

    const measure = Object.keys(meal).filter(item=>item.includes("strMeasure")).map(item=>meal[item]).filter(item=>item);
    
    
  return (
    <div className="my-12 p-4">
      <h1 className="text-center text-4xl font-bold mb-6">{meal.strMeal}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="md:order-1">
          <img
            src={meal.strMealThumb}
            alt="Delicious Recipe"
            className="w-full rounded-md"
          />
          
        </div>

        <div className="md:order-0 lg:col-span-2 flex flex-col gap-4">
        <h4 className="text-lg font-medium">Category: {meal.strCategory}</h4>
          <h4 className="text-lg font-medium">Area: {meal.strArea}</h4>
          
          <div>
            <h2 className="text-xl font-bold mb-2">Ingredients</h2>
            <ul className="list-disc pl-4">
              {ingredients.map((item, i)=> <li>{item} - {measure[i]}</li>)}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">Instructions</h2>
            <p>
              {meal.strInstructions}
            </p>
          </div>
          <h4 className="text-lg font-medium">Youtube: <a href={meal.strYoutube} className="underline text-blue-600">{meal.strYoutube}</a></h4>
        </div>
      </div>
      <button onClick={()=>navigate(-1)} className="mt-12 text-[#ff9900] text-2xl font-semibold flex gap-x-2 items-center mx-auto hover:text-blue-600"><ion-icon name="arrow-back"></ion-icon> Go back</button>
    </div>
  );
};

export default RecipeDetails;
