import About from "../About";
import Contact from "../Contact";
import News from "../News";
import Products from "../Products";
import Layout from "../Layout";
import Home from "../Home";


export const route = [
    {
        path: "/",
        element : <Layout></Layout>,
        children :[
            {
                index: true,
                element: <Home></Home>
              },
            {
                path :"About",
                element: <About></About>
            },
            {
                path :"Products",
                element: <Products></Products>
            },
            {
                path :"News",
                element: <News></News>
            },
            {
                path :"Contact",
                element: <Contact></Contact>
            },
        ]
    }
];


