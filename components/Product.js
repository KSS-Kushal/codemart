// import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Product = ({ category, name, price, sizes, img }) => {
    return (
        <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-md hover:shadow-xl rounded-md m-6">
            <Link href={`/product/${name}`} >
                <div className="flex flex-col justify-center items-center">
                    <div className="block relative rounded overflow-hidden">
                        <img alt={name} className="h-[20vh] block" src={img} />
                    </div>
                    <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">{name}</h2>
                        <p className="mt-1">{price}</p>
                        <p className="mt-1">{sizes}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Product
