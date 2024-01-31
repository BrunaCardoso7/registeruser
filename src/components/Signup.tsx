import React from "react";
import { User } from "./Signin";

export interface ExtendsUser extends User {
    email: string
}
export const Signup: React.FC<ExtendsUser> = ({ name, password, email }) =>{
    return(
        <div>
            <p>{name +" "+ password +" "+ email}</p>
        </div>
    )
}

