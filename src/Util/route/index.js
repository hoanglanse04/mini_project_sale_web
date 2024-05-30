import About from "../../pages/About";
import Contact from "../../pages/Contact";
import News from "../../pages/News";
import Products from "../../pages/Products";
import Layout from "../../pages/Layout";
import Home from "../../pages/Home";
import Aticle_01 from "../../pages/Aticle_01";
import Aticle_02 from "../../pages/Aticle_02";
import Aticle_03 from "../../pages/Aticle_03";
import Aticle_04 from "../../pages/Aticle_04";
import Aticle_05 from "../../pages/Aticle_05";
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
            },
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
            },
            {
                path :"Contact",
                element: <Contact></Contact>
            },
        ]
    }
];


