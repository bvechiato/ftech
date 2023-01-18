import { useState } from "react";

const ChangeColour = () => {
    
}


function Nav() {
    const [clicked, setClicked] = useState(false);


  return (
    <nav className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <ul>
            <ol className="flex">
                <li id="pc01" className="mx-5">
                    <Link onClick={() => ChangeColour} to="/pages/PC01">PCO1</Link>
                </li>
                <li id="pc02" className="mx-5">
                    <Link to="/pages/PC02">PCO2</Link>
                </li>
            </ol>
        </ul>
    </nav>
  )
}

export default Nav