import Nav from "./Nav"

const Header = () => {
  return (
    <header className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <p className="text-3xl text-gray-700 font-bold mb-5">
            Starters!
        </p>
        <Nav />
    </header>
  )
}

export default Header