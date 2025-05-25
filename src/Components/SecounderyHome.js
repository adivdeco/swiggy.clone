

import Headerbar from "./Headerbar";
import { Outlet } from "react-router";

export default function SecounderyHome(){


    return(
        <>
          <Headerbar></Headerbar>
          <Outlet></Outlet>
        </>
    )
}