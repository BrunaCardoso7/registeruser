import { Input } from "./Inputs/Input";
import { Button } from "./Buttons/Button";
import { UseHookLogin } from "../hooks/UseLoginHook";

export const Signin: React.FC = () =>{
    const { username, password, message, handlePasswordChange, handleSubmit, handleUserNameChange } = UseHookLogin()

    return(
        <div  className="bg-slate-900 h-screen w-screen  flex items-center justify-center flex-col gap-5">
            <Input
                placeholder="username"
                type="text"
                value={username}
                onChange={handleUserNameChange}
            />
            <Input
                placeholder="password"
                type="text"
                value={password}
                onChange={handlePasswordChange}
            />
            <Button onClick={handleSubmit}> teste</Button>
            <h1>{message}</h1>
        </div>
    )
}