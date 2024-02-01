import { useState } from "react";
import { Input } from "./Inputs/Input";
import { Button } from "./Buttons/Button";

export const Signin: React.FC = () =>{
    const [ inputValue, setInputValue ] = useState('')
    const [message, setMessage] = useState('')

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = () => {
        setMessage(inputValue);
    }

    return(
        <div>
            <Input
                placeholder="username"
                type="text"
                value={inputValue}
                onChange={handleOnChange}
            />
            <Button onClick={handleSubmit}> teste</Button>
            <h1>{message}</h1>
        </div>
    )
}