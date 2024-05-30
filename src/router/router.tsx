import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "../layouts/MainLayout";

import {HomePage} from "../pages/HomePage";
import {UsersPage} from "../pages/UsersPage";
import {PostsPage} from "../pages/PostsPage";
import {CommentsPage} from "../pages/CommentsPage";

const routerConfig = createBrowserRouter(
    [
        {path: '/', element: <MainLayout/>,
            children:[
                {index: true, element: <HomePage/>},
                {path: 'users', element: <UsersPage />},
                {path: 'users/:id', element: <PostsPage />},
                {path: 'posts', element: <PostsPage/>},
                {path: 'posts/:id', element: <CommentsPage/>},
                {path: 'comments', element: <CommentsPage/>}
            ]
        }
    ]
)

export {
    routerConfig
}