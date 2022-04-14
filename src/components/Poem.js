import React from "react";

function Poem({poem}) {
  const {title, content, author} = poem 
  // console.log('poem', poem)
  // console.log({title})

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>- {author}</strong>
      </p>
      {
        poem.map((element) => {
          return(
            <Poem key={element.id} title={element.title} content={element.content} author={author.title}/>
          )
        })
      }
      <button>Mark as read</button>
    </div>
  );
}

export default Poem;
