import React from "react";
import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "../layout/MainLayout";
import {HomePage} from "../pages/HomePage";

import {UsersComponent} from "../components/UsersComponent";
import {Posts} from "../components/Posts/Posts";
import {Comments} from "../components/Comments/Comments";

 export const routerConfig = createBrowserRouter(
    [
        {
            path: '/',
            element: <MainLayout/>,
            children:[
                {index: true, element: <HomePage/>},
                {path: 'users', element: <UsersComponent/>},
                {path: 'posts', element: <Posts/>},
                {path: 'comments', element: <Comments/>}
            ]
        }
    ]
)