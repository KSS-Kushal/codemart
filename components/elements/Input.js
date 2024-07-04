import React from 'react'

const Input = ({ type, name, placeholder, onChange, label, id, ...otherProps }) => {
    return (
        <div className='flex flex-col'>
            {label &&
                <label htmlFor={id} className="my-1 text-sm font-medium leading-6 text-gray-900">{label}</label>}
            <input type={type} id={id} name={name} placeholder={placeholder} className="py-1 px-2 border-2 border-cyan-300 rounded-md focus:border-cyan-500 focus:outline-cyan-500 focus:ring-cyan-500 focus:ring-2 bg-cyan-50/50" onChange={onChange} {...otherProps} />
        </div>
    )
}

export default Input
