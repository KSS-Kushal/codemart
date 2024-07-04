import React from 'react'
import Input from '../components/elements/Input'
import TextArea from '../components/elements/TextArea'
import Button from '../components/elements/Button'
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import Link from 'next/link';

const Checkout = ({ cart, addToCart, removeFromCart, subTotal }) => {
  return (
    <div className='mx-3 md:mx-auto md:max-w-[80%]'>
      <h1 className="font-semibold text-3xl my-7 text-center">Checkout</h1>
      <h2 className="font-medium text-xl">1. Delivery Details</h2>
      <div className="mx-auto flex flex-col md:flex-row">
        <div className="px-2 md:w-1/2 w-full">
          <Input
            label={"Name :"}
            type={"text"}
            id={"name"}
            name={"name"}
            placeholder={"Full Name"} />
        </div>
        <div className="px-2 md:w-1/2 w-full">
          <Input
            label={"Email :"}
            type={"email"}
            id={"email"}
            name={"email"}
            placeholder={"Email"} />
        </div>
      </div>
      <div className="px-2 w-full">
        <TextArea
          label={"Address :"}
          id={"address"}
          name={"address"}
          placeholder={"Address"} />
      </div>
      <div className="mx-auto flex flex-col md:flex-row">
        <div className="px-2 md:w-1/2 w-full">
          <Input
            label={"Phone :"}
            type={"phone"}
            id={"phone"}
            name={"phone"}
            placeholder={"Phone No."} />
        </div>
        <div className="px-2 md:w-1/2 w-full">
          <Input
            label={"City :"}
            type={"text"}
            id={"city"}
            name={"city"}
            placeholder={"City"} />
        </div>
      </div>
      <div className="mx-auto flex flex-col md:flex-row">
        <div className="px-2 md:w-1/2 w-full">
          <Input
            label={"State :"}
            type={"text"}
            id={"state"}
            name={"state"}
            placeholder={"State"} />
        </div>
        <div className="px-2 md:w-1/2 w-full">
          <Input
            label={"Pincode :"}
            type={"text"}
            id={"pincode"}
            name={"pincode"}
            placeholder={"Pincode"} />
        </div>
      </div>
      {/* Review Cart Items & Pay */}
      <h2 className="font-medium text-xl mt-5 mb-3">2. Review Cart Items &amp; Pay</h2>
      <div className="bg-cyan-100 rounded-md py-3 px-7 m-3">
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length === 0 && <div className='my-4 font-medium'>Your cart is empty!</div>}
          {Object.keys(cart).map((item, i) => (
            <li key={i}>
              <div className="flex my-4">
                <div className="font-semibold">{cart[item].name}</div>
                <div className="w-1/3 flex font-semibold items-center justify-center text-lg">
                  <AiFillMinusCircle
                    className='text-cyan-400 cursor-pointer'
                    onClick={
                      () => {
                        removeFromCart(item, 1)
                      }
                    } />
                  <span className="mx-2">{cart[item].qty}</span>
                  <AiFillPlusCircle
                    className='text-cyan-400 cursor-pointer'
                    onClick={
                      () => {
                        addToCart(item, 1, 499, "T-Shirt(XL, Red)", "XL", "Red")
                      }
                    } />
                </div>
              </div>
            </li>
          ))}
        </ol>
        <span className="font-medium">Subtotal : {subTotal}</span>
      </div>
      <div className="md:m-3 mx-3 flex justify-between">
        <Link href={'/order'}>
          <Button
            text={"Pay ₹"+subTotal}
            arrow={true} />
        </Link>
      </div>
    </div>
  )
}

export default Checkout
