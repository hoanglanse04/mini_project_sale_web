import Header from "../Header"
import  Footer  from "../Footer"
import { Outlet } from "react-router-dom"

export default function Layout(){

    return(
        <>
        <div className="Layout" style={{ display: 'flex', flexDirection: 'column' }}>
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
        </>
    )

}