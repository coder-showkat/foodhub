import React from "react";
import banner from "../assets/image/banner.png";

export default function Banner() {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-no-repeat h-[500px] sm:h-96 mt-16"
      style={{
        backgroundPosition: "50%",
        backgroundImage: `url(${banner})`,
      }}
    >
      <div
        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
      >
        <div className="flex h-full items-center justify-center">
          <div className="px-6 text-center text-white md:px-12">
            <h1 className="mb-6 text-4xl sm:text-5xl text-white font-bold px-6 max-w-2xl mx-auto">
              Fresh And Organic Food Recipe for you
            </h1>
            <p className="mb-8 font-normal max-w-4xl mx-auto px-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
              nesciunt quo temporibus, totam fuga aperiam dicta nihil beatae
              rem, quis nemo vel
            </p>
            <button
              type="button"
              className="inline-block rounded border-2 border-neutral-50 px-6 pt-2 pb-[6px] text-xs uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-orange hover:bg-orange hover:text-blue font-semibold hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
