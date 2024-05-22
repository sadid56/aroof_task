import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/Main";
import Home from "../Pages/Home/Home/Home";


const Routers = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>
            }
        ]
    }
])
export default Routers;