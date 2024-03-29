import React from "react";

interface InputUser {
    "type": string;
    "value": string;
    "placeholder": string;
    "onChange":  (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputUser> = ({ type, value, onChange, placeholder}) =>{
    return(
        <input 
            className="rounded-md px-2 "
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
         />
    )
}