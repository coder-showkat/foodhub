import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLazyImage } from '../hook/LazyImage';

function RecipeCart (props) {
    const {imageUrl, title, id} = props;

    const {imageRef, shouldLoadImage} = useLazyImage();

    const navigate = useNavigate();
    const getDetails = (id) => {
        navigate(`/recipe/${id}`);
    }
    
    return (
        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-center">
                    <div data-te-ripple-init data-te-ripple-color="light">
                        <img ref={imageRef} src={shouldLoadImage ? imageUrl : "https://placehold.co/400"} className="rounded-t-lg w-full" alt="" />
                    </div>
                    <div className="p-6">
                        <h5 className="mb-4 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            {title}
                        </h5>
                        <button
                        onClick={()=>getDetails(id)}
                        type="button"
                            className="inline-block rounded border-2 border-orange px-6 pt-2 pb-[6px] text-xs uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-orange text-orange hover:bg-orange hover:text-blue font-semibold hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            data-te-ripple-init data-te-ripple-color="light">
                            SEE DETAILS
                        </button>
                    </div>
                </div>
      )
  }


export default RecipeCart


    
      


