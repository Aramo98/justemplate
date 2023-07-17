
import { useState } from "react";


function LessText({text,max=55}) {
  const [showLess,setShowLess] = useState(true);
  if (text.length <= max) {
  return(
    <span>{text}</span>
  )
  }

  return(
    <span>
      {showLess?`${text.substring(0,max)} ...` : text}
      <button onClick={(evt)=>{
        evt.preventDefault()
        setShowLess(!showLess)
      }}>{showLess ? "Read more" : "Back"}</button>
    </span>
  )
}

export default LessText