import { Input } from "./Inputs/Input";
import { Button } from "./Buttons/Button";
import { UseHookLogin } from "../hooks/UseLoginHook";
import { TitlePrimary } from "./Text/TitlePrimary";
import { Link } from "react-router-dom";
export const Signin: React.FC = () =>{
    const { 
        dataInput,
        handleDataInput 
    } = UseHookLogin()

    return(
        <div  className="bg-slate-400 w-fit p-10 m-32 flex items-center justify-center flex-col gap-5 rounded-xl">
            <TitlePrimary
                title="Login"
            />
            <Input
                placeholder="username"
                type="text"
                value={dataInput.username}
                onChange={handleDataInput}
            />
            <Input
                placeholder="idade"
                type="text"
                value={dataInput.password}
                onChange={handleDataInput}
            />
            <Input
                placeholder="password"
                type="text"
                value={dataInput.age}
                onChange={handleDataInput}
            />
            <Link to={'/'}>
                <Button
                    title="login"
                />
            </Link>
        </div>
    )
}