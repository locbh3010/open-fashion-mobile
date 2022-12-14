import clsx from "clsx";
import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import CartItem from "./components/CartItem";

const Cart = () => {
  return (
    <div className="font-tenor h-full flex flex-col relative px-4">
      <div className="flex-shrink-0 uppercase leading-345 text-gray-scale-body text-sm">
        <span>cart</span>
      </div>
      <div className="flex-1 overflow-y-scroll py-1 flex flex-col gap-4">
        {/* <div className="flex h-full items-center justify-center">
          <span className="text-gray-scale-placeholder leading-5">
            You have no items in your Shopping Bag
          </span>
        </div> */}
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="sticky mt-auto bottom-0 w-full left-0 flex-shrink-0">
        <div className="w-full pt-3 pb-8 border-t border-t-black/20 bg-white">
          <div className="mb-4 flex items-center justify-between">
            <span className="uppercase text-gray-scale-body text-sm leading-5">
              Sub Total
            </span>
            <span className="text-primary leading-345 ">$240</span>
          </div>
          <span className="text-sm leading-6 text-gray-scale-placeholder">
            <span className="text-primary">*</span>shipping charges, taxes and
            discount codes are calculated at the time of accounting.
          </span>
        </div>
        <button className="w-full bg-black text-white py-4 flex items-center gap-6 justify-center uppercase">
          <HiOutlineShoppingBag className="w-5 h-5"></HiOutlineShoppingBag>
          <span>Continue shopping</span>
        </button>
      </div>
    </div>
  );
};

export default Cart;
