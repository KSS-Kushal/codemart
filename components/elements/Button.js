import React from 'react'

const Button = ({ bgColor="bg-cyan-300", hoverBg="hover:bg-cyan-500", color="text-black", text, arrow, size, onClick, type, extraClass }) => {
    return (
        <button type={type} onClick={onClick} className={`inline-flex items-center ${bgColor} border-0 ${color} ${size} py-1 px-5 focus:outline-none ${hoverBg} rounded text-base mt-4 md:mt-0 ${extraClass}`}>
            {text}
            {arrow ?
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                : ""}
        </button>
    )
}

export default Button
