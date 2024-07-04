import Image from "next/image";
import React from "react";
import Button from "../components/elements/Button";

const Order = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              CODEMART.COM
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              Order Id: #89777
            </h1>
            <p className="leading-relaxed mb-4">
              Your order has been successfully placed
            </p>
            <div class="flex mb-4">
              <p class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                Item Description
              </p>
              <p class="flex-grow border-b-2 border-gray-300 py-2 text-center text-lg px-1">
                Quantity
              </p>
              <p class="flex-grow border-b-2 border-gray-300 py-2 text-end text-lg px-1">
                Item Total
              </p>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Wear the Code (XL/Black)</span>
              <span className="mx-auto text-gray-900">1</span>
              <span className="ml-auto text-gray-900">₹499</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Wear the Code (XL/Black)</span>
              <span className="mx-auto text-gray-900">1</span>
              <span className="ml-auto text-gray-900">₹499</span>
            </div>

            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Wear the Code (XL/Black)</span>
              <span className="mx-auto text-gray-900">1</span>
              <span className="ml-auto text-gray-900">₹499</span>
            </div>
            <div className="flex flex-col md:flex-row">
              <span className="title-font font-medium text-2xl text-gray-900">
                SubTotal: ₹1497
              </span>
              <div className="md:ml-auto">
                <Button text={"Track Order"} />
              </div>
            </div>
          </div>
          <img
            width={400}
            height={400}
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://dummyimage.com/400x400"
          />
        </div>
      </div>
    </section>
  );
};

export default Order;
