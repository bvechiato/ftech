import content from "../pages/content.json";
import NavItem from "./NavItem";


function Nav() {
  return (
    <nav className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <ul>
            <ol className="flex">
                {Object.keys(content).map((page) => <NavItem key={page} page={page}/>)}
            </ol>
        </ul>
    </nav>
  )
}

export default Nav