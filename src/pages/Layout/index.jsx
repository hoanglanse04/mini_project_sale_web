import Header from "../Header"
import  Footer  from "../Footer"
import { Outlet } from "react-router-dom"
import { VariContext } from "../../VariContext";  
import { useState } from "react";


export const initialVari = {
  q: '',
  sort: '',
  order: '',
  page: 1,
  limit: 10,
};

export default function Layout(){

  const [vari, setVari] = useState(initialVari);
    return(
      <>
      <VariContext.Provider value={{ vari, setVari }}>
        <div className="Layout" style={{ display: 'flex', flexDirection: 'column' }}>
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </VariContext.Provider>

      </>
    )

}