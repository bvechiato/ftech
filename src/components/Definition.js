import { useState } from "react";
import { useEffect } from "react";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";

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
        <div>{ definition }: { definitionExp }</div>
    )
}

export default Definition