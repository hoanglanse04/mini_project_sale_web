import { route } from "../../pages/route";
import { useRoutes } from "react-router-dom";


function AllRoute() {
    const elements =useRoutes(route);

    return(
        <>
        {elements}
        </>
    )
}
export default AllRoute;