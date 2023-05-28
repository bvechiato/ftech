import { useState } from "react";
import { useEffect } from "react";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";
import Code from "./Code";

function Definition({ course, term, definition }) {
    const [definitionExp, setDefinition] = useState([]);

    useEffect(() => {
        const query = ref(db, `Content/${course}/${term}/${definition}`);
        return onValue(query, (snapshot) => {
          const data = snapshot.val();
          console.log(query);
    
          if (snapshot.exists()) {
            setDefinition(Object.values(data));
          }
        });
      }, []);

    return (
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100">
            <h5 className="mb-2 text-l font-bold tracking-tight text-gray-900">{definition}</h5>
            <p className="font-normal text-gray-700">{definitionExp}</p>
            <Code/>
        </div>
    )
}

export default Definition