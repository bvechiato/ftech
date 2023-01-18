import content from "../pages/content.json"
import Term from "./Term"
import { db } from "../firebase";
import { get } from "firebase/database";

function Course({ name }) {
    console.clear();
    console.log("hi");
    console.log(get(db, "Content"));
    return (
        <div>
            {Object.keys(content[name]).map((term) => <Term term={content[name][term]}/>)}
        </div>
    )
}

export default Course