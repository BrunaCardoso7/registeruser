import { useState } from "react"

interface userLogin {
    "username": string;
    "password": string;
    "message": string;
    "handlePasswordChange":  (event: React.ChangeEvent<HTMLInputElement>) => void;
    "handleUserNameChange":  (event: React.ChangeEvent<HTMLInputElement>) => void;
    "handleSubmit": () => void;
}

export const UseHookLogin = ():userLogin => {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [message, setMessage] = useState('')

    const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }
    const handleSubmit = () => {
        setMessage(username);
    }
    return({
        handleSubmit, 
        handlePasswordChange, 
        handleUserNameChange, 
        username, 
        password, 
        message
    })
}
