import React from 'react'

const TextArea = ({ name, placeholder, onChange, label, id }) => {
    return (
        <div className='flex flex-col'>
            {label &&
                <label htmlFor={id} className="my-1 text-sm font-medium leading-6 text-gray-900">{label}</label>}
            <textarea name={name} id={id} cols="30" rows="3" placeholder={placeholder} onChange={onChange} className="py-1 px-2 border-2 border-cyan-300 rounded-md focus:outline-cyan-500 focus:border-cyan-500 focus:ring-cyan-500 focus:ring-2 bg-cyan-50/50" />
        </div>
    )
}

export default TextArea