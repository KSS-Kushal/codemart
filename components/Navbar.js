import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment, useRef } from 'react'
import Button from './elements/Button'
import { AiOutlineShoppingCart, AiOutlineClose, AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const Navbar = () => {
  const ref = useRef()
  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.remove('hidden')
      ref.current.classList.add('translate-x-0')
    } else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
      ref.current.classList.add('hidden')
    }
  }
  return (
    <Fragment>
      <header className="w-[100vw]">
        <div className="mx-auto max-w-[90%] md:mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src={'/logo2.png'} srcSet="" alt='Codemart' width={175} height={26} />
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-semibold md:text-xl">
            <Link href={'/tshirts'} className="mr-5 hover:text-cyan-400">T-Shirts</Link>
            <Link href={'/hoodies'} className="mr-5 hover:text-cyan-400">Hoodies</Link>
            <Link href={'/mugs'} className="mr-5 hover:text-cyan-400">Mugs</Link>
            <Link href={'/caps'} className="hover:text-cyan-400">Caps</Link>
          </nav>
          <div className="flex">
            <div onClick={toggleCart} className="mr-4 absolute md:static right-0 top-5">
              <AiOutlineShoppingCart className='text-3xl text-cyan-400 cursor-pointer' />
            </div>
            <Link href={'/login'}>
              <Button
                bgColor={"bg-cyan-300"}
                color={"text-black"}
                text={"Login"}
                hoverBg={"hover:bg-cyan-500"}
                arrow={true} />
            </Link>
          </div>

        </div>
      </header>
      {/* Sidebar */}
      <div ref={ref} className="absolute z-10 w-80 top-0 right-0 bg-cyan-100 p-10 transform transition-transform translate-x-full hidden">
        <h1 className="font-bold text-xl text-center">Shopping Cart</h1>
        <span onClick={toggleCart} className="absolute top-5 right-3 cursor-pointer text-2xl text-cyan-400"><AiOutlineClose /></span>
        <ol className="list-decimal font-semibold">
          <li>
            <div className="flex my-4">
              <div className="w-2/3 font-semibold">Tshirt - Wear the code</div>
              <div className="w-1/3 flex font-semibold items-center justify-center text-lg">
                <AiFillMinusCircle className='text-cyan-400' />
                <span className="mx-2">1</span>
                <AiFillPlusCircle className='text-cyan-400' />
              </div>
            </div>
          </li>
          <li>
            <div className="flex my-4">
              <div className="w-2/3 font-semibold">Tshirt - Wear the code</div>
              <div className="w-1/3 flex font-semibold items-center justify-center text-lg">
                <AiFillMinusCircle className='text-cyan-400' />
                <span className="mx-2">1</span>
                <AiFillPlusCircle className='text-cyan-400' />
              </div>
            </div>
          </li>
          <li>
            <div className="flex my-4">
              <div className="w-2/3 font-semibold">Tshirt - Wear the code</div>
              <div className="w-1/3 flex font-semibold items-center justify-center text-lg">
                <AiFillMinusCircle className='text-cyan-400' />
                <span className="mx-2">1</span>
                <AiFillPlusCircle className='text-cyan-400' />
              </div>
            </div>
          </li>
          <li>
            <div className="flex my-4">
              <div className="w-2/3 font-semibold">Tshirt - Wear the code</div>
              <div className="w-1/3 flex font-semibold items-center justify-center text-lg">
                <AiFillMinusCircle className='text-cyan-400' />
                <span className="mx-2">1</span>
                <AiFillPlusCircle className='text-cyan-400' />
              </div>
            </div>
          </li>
        </ol>
        <div className="flex justify-between">
          <Button
            bgColor={"bg-cyan-500"}
            color={"text-black"}
            text={"Checkout"}
            hoverBg={"hover:bg-cyan-600"}
            arrow={true} />
          <Button
            bgColor={"bg-cyan-500"}
            color={"text-black"}
            text={"Clear Cart"}
            hoverBg={"hover:bg-cyan-600"}
            arrow={false} />
        </div>
      </div>
    </Fragment>
  )
}

export default Navbar
