import { Signin } from "../components/Signin"
import { Signup } from "../components/Signup"

export const LayoutForm : React.FC = () => {
    return(
        <div>
            <Signin
                name="pricila"
                password="pric123"
            />
            <Signup
                name="pricila"
                password="pric123"
                email="pric@gmail.com"
            />
        </div>
    )
}