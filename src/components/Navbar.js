import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { DataContext } from '../App';

export default function Navbar() {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    const location = useLocation();


    const searchHandler = (e) => {
        e.preventDefault();
        const searchParams = new URLSearchParams(location.search);
        searchParams.set('q', searchTerm);
        navigate(`/search?${searchParams.toString()}`);
        setSearchTerm("");
    }
   

  return (
    <div className="fixed top-0 left-0 w-full z-10">
            <nav className="relative flex mx-auto w-full flex-wrap items-center justify-between bg-neutral-100 py-3 text-neutral-500 shadow-lg focus:text-neutral-700 dark:bg-neutral-600"
                style={{maxWidth:'1440px'}}>
                <div className="flex w-full flex-wrap items-center justify-between px-6">
                    <div>
                        <Link to="/" className="text-2xl font-bold text-orange dark:text-neutral-200"><i
                                className="fa-solid fa-basket-shopping text-blue"></i> SAM</Link>
                    </div>
                    <div className="inline-block sm:hidden fa-solid fa-bars text-3xl" data-te-collapse-init
                        data-te-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1"
                        aria-expanded="false" aria-label="Toggle navigation"></div>
                    <div className="hidden sm:block w-full sm:w-auto" id="navbarSupportedContent1" data-te-collapse-item>
                        <form id="search-field" onSubmit={(e)=>searchHandler(e)} className="relative flex flex-wrap items-stretch mt-6 sm:mt-0">
                            <input type="search" id="input-search" onChange={(e)=>setSearchTerm(e.target.value)} value={searchTerm}
                                className="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out dark:text-neutral-200 dark:placeholder:text-neutral-200"
                                placeholder="Search" aria-label="Search" aria-describedby="button-addon1" />

                            <button
                                className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                                type="submit" id="button-addon1" data-te-ripple-init data-te-ripple-color="light">
                                <i className="fa-solid fa-magnifying-glass text-base"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
  )
}
