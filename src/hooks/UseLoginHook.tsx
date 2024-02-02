import { useState } from "react"

interface userLogin {

    dataInput: {
        username: string,
        password: string,
        age: string,
    }
    "handleDataInput":  (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UseHookLogin = ():userLogin => {
    const [ dataInput, setDataInput ] = useState({ username: '', password: '', age: '' })

    const handleDataInput = (event: React.ChangeEvent<HTMLInputElement>) => {  
        const { name, value} = event.target
        setDataInput((data) => ({
            ...data,
            [name]: value,
        }))
    }

    return({
        dataInput,
        handleDataInput, 
    })
}
