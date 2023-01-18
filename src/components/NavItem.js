import { useState } from "react";
import { Link } from "react-router-dom";


function NavItem({ page }) {
  const [clicked, setClicked] = useState(false);

  const Clicked = () => {
    setClicked(true);
  }
  
  if (clicked) {
    return (
      <li className="semibold mx-5">
        <Link onClick={Clicked} to={"/pages/" + page}>{ page }</Link>
      </li>
    )
  }
  return (
    <li className="mx-5">
      <Link onClick={Clicked} to={"/pages/" + page}>{ page }</Link>
    </li>
  )
  
}

export default NavItem