import React from "react";

const CartItem = () => {
  return (
    <div className="card card-side rounded-none items-stretch">
      <figure className="basis-1/3 overflow-hidden aspect-[100/134] flex-shrink-0">
        <img
          src="https://i8.amplience.net/i/jpl/jd_393111_a"
          alt=""
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="py-2 pl-2.5 pr-1 flex flex-col">
        <p className="uppercase text-black font-normal text-sm leading-5">
          lamerei
        </p>
        <span className="mt-1.5 capitalize font-normal text-xs leading-[18px] text-gray-scale-label">
          Recycle Boucle Knit Cardigan Pink
        </span>

        <div className="mt-auto flex items-center gap-2">
          <button className="border border-collapse rounded-full w-6 h-6 text-gray-scale-label flex items-center justify-center flex-shrink-0">
            -
          </button>
          <input
            type="number"
            defaultValue={1}
            min={0}
            max={99}
            className="w-12 text-center"
          />
          <button className="border border-collapse rounded-full w-6 h-6 text-gray-scale-label flex items-center justify-center flex-shrink-0">
            +
          </button>
        </div>
        <span className="mt-auto text-primary font-normal leading-6 text-[15px]">
          $205
        </span>
      </div>
    </div>
  );
};

export default CartItem;
