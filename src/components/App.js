import React, { useState } from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {
  const [show, setShow]= useState(true)

  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={() => {
          setShow(!show)
        }}
        >Show/hide new poem form</button>
        {show ? <NewPoemForm /> : null}
      </div>
      <PoemsContainer />
    </div>
  );
}

export default App;












// import React from "react";
// import PoemsContainer from "./PoemsContainer";
// import NewPoemForm from "./NewPoemForm";
// import { useState } from "react";

// function App() {
// const [show, setShow] = useState(true)

//   return (
//     <div className="app">
//       <div className="sidebar">
//         <button onClick={() => {
//           setShow(!show)
//         }}>Show/hide new poem form</button>
//         {show ? <NewPoemForm /> : null}
//       </div>
//       <PoemsContainer />
//     </div>
//   );
// }

// export default App;
