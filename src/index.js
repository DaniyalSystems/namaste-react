import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Header from "./components/Layout/Header";
import Body from "./components/Layout/Body";
import Contact from "./components/Pages/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/Restaurants/Menu/RestaurantMenu";
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./components/Pages/Grocery"));
const About = lazy(() => import("./components/Pages/About"));

const AppLayout = () => {

    //Authentication Mock just for Context API
    const [userName, setUserName] = useState(null);

    useEffect(() => {
        const data = {
            name: "Daniyal"
        }
        setUserName(data.name);
    }, []);

    //For updating context name in child component we can pass setUserName as a value.
    return (
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
            <div className="app">
                <Header/>
                <Outlet/>
            </div>
        </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "about",
                element: <Suspense fallback={<h1>loading...</h1>}><About/></Suspense>, //lazy loading
            },
            {
                path: "contact",
                element: <Contact/>,
            },
            {
                path: "grocery",
                element: <Suspense fallback={<h1>loading...</h1>}><Grocery/></Suspense>, //lazy loading
            },
            {
                path: "restaurants/:resId",
                element: <RestaurantMenu/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
