import React from "react";
import Home from "./components/user/homePage/Home";
import AboutUs from "./components/user/aboutUsPage/AboutUs";
import News from "./components/user/newsPage/News";
import SignUp from "./components/admin/signupPage/SignUp"
import Vertification from "./components/admin/vertificationPage/Vertification";
import Login from "./components/admin/loginPage/Login";
import Forget from "./components/admin/forgetPage/Forget"
import Admin from "./components/admin/adminPage/Admin";
import Model from "./components/examples/model/model_reactstrap";
import ColorBox from "./components/examples/colorBox/ColorBox";
import TodoList from "./components/examples/todoList/TodoListParent";
import Ckeditor from "./components/examples/ckeditor/Ckeditor";
import New_detail from "./components/user/newsPage/content/new_detail";

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <Home />,
    },
    {
        path: "/aboutUs",
        exact: true,
        main: () => <AboutUs />,
    },
    {
        path: "/news",
        exact: true,
        main: () => <News />,
    },
    {
        path: "/new_detail",
        exact: true,
        main: () => <New_detail />,
    },
    {
        path: "/signUp",
        exact: true,
        main: () => <SignUp />,
    },
    {
        path: "/vertification",
        exact: true,
        main: () => <Vertification />,
    },
    {
        path: "/login",
        exact: true,
        main: () => <Login />,
    },
    {
        path: "/forget",
        exact: true,
        main: () => <Forget />,
    },
    {
        path: "/admin",
        exact: true,
        main: () => <Admin />,
    },
    {
        path: "/test/model",
        exact: true,
        main: () => <Model />,
    },
    {
        path: "/test/colorBox",
        exact: true,
        main: () => <ColorBox />,
    },
    {
        path: "/test/todoList",
        exact: true,
        main: () => <TodoList />,
    },
    {
        path: "/test/ckeditor",
        exact: true,
        main: () => <Ckeditor />,
    },
];

export default routes;
