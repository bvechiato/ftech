import content from "../pages/content.json";
import NavItem from "./NavItem";


function Nav() {
  return (
    <nav className="text-gray-500 mt-10 text-lg">
        <ul>
            <ol className="flex">
                {Object.keys(content).map((page) => <NavItem key={page} page={page}/>)}
            </ol>
        </ul>
    </nav>
  )
}

export default Nav