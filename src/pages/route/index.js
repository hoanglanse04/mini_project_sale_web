import About from "../About";
import Contact from "../Contact";
import News from "../News";
import Products from "../Products";
import Layout from "../Layout";
import Home from "../Home";
import Aticle_01 from "../Aticle_01";
import Aticle_02 from "../News/Aticle_02";
import Aticle_03 from "../News/Aticle_03";
import Aticle_04 from "../News/Aticle_04";
import Aticle_05 from "../News/Aticle_05";
import { Component } from "react";





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
                element: <News></News>,
                children: [
                    {
                        path :"Aticle_01",
                        element: <Aticle_01></Aticle_01>
                    },
                    {
                        path :"Aticle_02",
                        element: <Aticle_02></Aticle_02>,
                    },
                    {
                        path :"Aticle_03",
                        element: <Aticle_03></Aticle_03>
                    },
                    {
                        path :"Aticle_04",
                        element: <Aticle_04></Aticle_04>
                    },
                    {
                        path :"Aticle_05",
                        element: <Aticle_05></Aticle_05>
                    }
                ]
            },
            {
                path :"Contact",
                element: <Contact></Contact>
            },
        ]
    }
];


