import { Link } from "react-router-dom";


function NavItem({ page }) {
  return (
    <li className="mx-5">
      <Link to={"/pages/" + page}>{ page }</Link>
    </li>
  )
  
}

export default NavItem