// How to set up React with Firebase/Firestore v9 (Part 3 | setDoc)
// https://youtu.be/TNTMTJrxIY0

import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "./firebase";
import Dot from "./Dot";
import { handleNew, handleEdit } from "./utils";

export default function App() {
  const [colors, setColors] = useState([{ name: "Loading...", id: "initial" }]);

  useEffect(
    () =>
      onSnapshot(collection(db, "colors"), (snapshot) =>
        setColors(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  return (
    <div className="root">
      <button className="button" onClick={handleNew}>
        New
      </button>

      <ul>
        {colors.map((color) => (
          <li key={color.id}>
            <a href="#" onClick={() => handleEdit(color.id)}>
              edit
            </a>{" "}
            <Dot color={color.value} /> {color.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

