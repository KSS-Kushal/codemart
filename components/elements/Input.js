import React from 'react'

const Input = ({ type, name, placeholder, onChange }) => {
    return (
        <div>
            <input type={type} name={name} placeholder={placeholder} className="py-1 px-2 border-2 border-cyan-300 rounded-md focus:border-cyan-500 bg-cyan-50/50" onChange={onChange} />
        </div>
    )
}

export default Input
