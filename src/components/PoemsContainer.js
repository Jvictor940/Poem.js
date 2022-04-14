import React, {useState, useEffect} from "react";
import Poem from "./Poem";

function PoemsContainer() {
  const [poem, setPoem] = useState([])
  console.log('poem', poem)

  const request = async () => {
    let req = await fetch('http://localhost:8004/poems')
    let res= await req.json()
    setPoem(res)
  }
  useEffect(() => {
  request()
  }, [])

  return (
    <div className="poems-container">
      {/* render a list of <Poem> components in here */}
      <Poem poem={poem} />

    </div>
  );
}

export default PoemsContainer;
