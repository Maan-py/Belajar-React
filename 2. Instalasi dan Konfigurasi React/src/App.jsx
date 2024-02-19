/* eslint-disable react/prop-types */
import { useState } from "react";

function Header({ name }) {
  return <h1>Belajar React Bareng {name ? name : "WPU"} 🚀 </h1>;
}

function App() {
  const students = ["Luqmaan", "Fauzan", "Rifki"];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <>
      <Header name="Luqmaan" />
      <ul>
        {students.map((student) => (
          <li key="{student}">{student}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Like ({likes})</button>
    </>
  );
}

export default App;
