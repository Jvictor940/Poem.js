import React, { useState } from "react";

function Poem({poem}) {
  const {title, content, author}= poem 
  const [read, setRead] = useState(false)

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>- By {author}</strong>
      </p>
      {read ? <button onClick={() => {setRead(!read)}}>Mark as read</button> : <button onClick={() => {setRead(!read)}}>Mark as Unread</button>}
      
    </div>
  );
}

export default Poem;











// import React from "react";

// function Poem(props) {
//   const {title, content, author} = props 
//   // console.log('poem', poem)
//   // console.log({title})

//   return (
//     <div>
//       <h3>{title}</h3>
//       <p>{content}t</p>
//       <p>
//         <strong>- {author}</strong>
//       </p>
//       <button>Mark as read</button>
//     </div>
//   );
// }

// export default Poem;
