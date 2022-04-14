import React, { useState } from "react";

function NewPoemForm({setPoem}) {
  const [form, setForm] = useState({title:'', authour:'',})

  return (
    <form className="new-poem-form" 
    onChange={ async(e) => {
      e.preventDefault()
      let req = await fetch('http://localhost:8004/poems', {
        method: "POST",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(form)
      })
      let res = await req.json()
      setPoem((prevState) => [...prevState, res])
    }}>

      <input placeholder="Title" value={form.title} onChange={(e)=>setForm({...form, title:e.target.value})}/>
      <input placeholder="Author" value={form.author} onChange={(e)=>setForm({...form, author:e.target.value})}/>
      <textarea placeholder="Write your masterpiece here..." rows={10} />
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;
