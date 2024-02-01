import { useState } from "react"

interface userLogin {
    "username": string;
    "password": string;
    "handlePasswordChange":  (event: React.ChangeEvent<HTMLInputElement>) => void;
    "handleUserNameChange":  (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UseHookLogin = ():userLogin => {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    return({
        handlePasswordChange, 
        handleUserNameChange, 
        username, 
        password
    })
}
