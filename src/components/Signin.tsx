export interface User {
    name: string;
    password: string;
}

export const Signin: React.FC<User> = ({ name, password }) =>{
    return(
        <div>
            <p>{name +" "+ password}</p>
        </div>
    )
}