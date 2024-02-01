import { Input } from "./Inputs/Input";
import { Button } from "./Buttons/Button";
import { UseHookLogin } from "../hooks/UseLoginHook";
import { TitlePrimary } from "./Text/TitlePrimary";
import { Link } from "react-router-dom";
export const Signin: React.FC = () =>{
    const { 
        username, 
        password, 
        handlePasswordChange, 
        handleUserNameChange 
    } = UseHookLogin()

    return(
        <div  className="bg-slate-400 w-fit p-10 flex items-center justify-center flex-col gap-5 rounded-xl">
            <TitlePrimary
                title="Login"
            />
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
            <Link to={'/'}>
                <Button
                    title="login"
                />
            </Link>
        </div>
    )
}