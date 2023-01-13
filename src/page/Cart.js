import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../component/App";
import UnderConstruction from "../page/UnderConstruction";

function Cart()
{
    const { user } = useContext(UserContext);

    if(!user)
    {
        return <Navigate to="/redirect" />;
    }
    return <UnderConstruction pageName = "Cart"/>
}

export default Cart;