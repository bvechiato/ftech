import { useState } from "react";
import { useEffect } from "react";
import Term from "./Term"
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";

function Course({ name }) {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const query = ref(db, "Content");
        console.log(query);
        return onValue(query, (snapshot) => {
          const data = snapshot.val();
          console.log(Object.keys(data));
    
          if (snapshot.exists()) {
            Object.keys(data).map((course) => {
                setCourses((courses) => [...courses, course]);
            });
          }
        });
      }, []);
    

    return (
        <div>
            {courses.map((term) => <Term term={term}/>)}
        </div>
    )
}

export default Course