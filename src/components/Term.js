import { useState } from "react";
import { useEffect } from "react";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";
import Definition from "./Definition"

function Term({ course, term }) {
    const [terms, setTerms] = useState([]);

    useEffect(() => {
        const query = ref(db, `Content/${course}/${term}`);
        return onValue(query, (snapshot) => {
          const data = snapshot.val();
          console.log(Object.keys(data));
    
          if (snapshot.exists()) {
            Object.keys(data).map((term) => {
                setTerms((terms) => [...terms, term]);
            });
          }
        });
      }, []);

    return (
        <div>
            <h2>- { term }</h2>
            {terms.map((definition, index) => <Definition key={index} course={course} term={term} definition={definition}/>)}
        </div>
    )
}

export default Term