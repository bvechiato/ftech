import Definition from "./Definition"

function Term({ term }) {
  return (
    <div>
        {term.map((definition) => <Definition definition={term[definition]}/>)}
    </div>
  )
}

export default Term