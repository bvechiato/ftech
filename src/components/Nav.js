import { useState } from "react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";


function Nav() {
    const [pages, setClicked] = useState(["PC01", "PC02", "CreativeTech"]);


  return (
    <nav className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <ul>
            <ol className="flex">
                {pages.map((page) => <NavItem key={page} page={page}/>)}
            </ol>
        </ul>
    </nav>
  )
}

export default Nav