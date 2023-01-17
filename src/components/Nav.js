import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <ul>
            <ol className="flex">
                <li className="mx-5">
                    <Link to="/pages/PC01">PCO1</Link>
                </li>
                
                <li className="mx-5">
                    <Link to="/pages/PC02">PCO2</Link>
                </li>
            </ol>
        </ul>
    </nav>
  )
}

export default Nav