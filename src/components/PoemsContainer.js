import React, {useState, useEffect} from "react";
import Poem from "./Poem";

function PoemsContainer() {
  const [poems, setPoems] = useState([])

  const request = async () => {
    let req = await fetch('http://localhost:8004/poems')
    let res = await req.json() 
    setPoems(res)
  }
  useEffect(request, [])

  return (
    <div className="poems-container">
      {
        poems.map((element) => {
          return (
          <Poem key={element.id} poem={element} />
          )
        })
      }
    </div>
  );
}

export default PoemsContainer;











// import React, {useState, useEffect} from "react";
// import Poem from "./Poem";

// function PoemsContainer() {
//   const [poems, setPoems] = useState([])
//   console.log('poem', poem)

//   const request = async () => {
//     let req = await fetch('http://localhost:8004/poems')
//     let res= await req.json()
//     setPoems(res)
//   }
//   useEffect(request, [])

//   return (
//     <div className="poems-container">
//       {
//         poems.map((element) => {
//           return(
//             <Poem {...element} />
//           )
//         })
//       }
//       {/* <Poem poem={poem} /> */}

//     </div>
//   );
// }

// export default PoemsContainer;
