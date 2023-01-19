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
        <div className="container mx-auto bg-gray-100 rounded-xl p-8 m-10 pb-6">
            <p className="text-lg pb-4 font-semibold text-gray-700">{ term }</p>
            <div className="grid grid-cols-4 gap-4 ">
            {terms.map((definition, index) => <Definition key={index} course={course} term={term} definition={definition}/>)}
            </div>
        </div>
    )
}

export default Term