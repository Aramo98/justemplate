import {useRef,useState} from 'react';
import oficePicture from "../6e1fa504-d765-47b5-ba8c-ac101ff5ff7e.jpg"
import{FaTimes} from 'react-icons/fa';
import { Helmet } from 'react-helmet';
function Home() {


    const [subscribe,setSubscribe]= useState("")
const [message,setMessage] = useState("")
 
  const SubscribeRef = useRef();
 

const ShowSubblock = ()=>{
  SubscribeRef.current.classList.add("active")
}
const HideSubblock = ()=>{
  SubscribeRef.current.classList.remove("active")
}

const subValidation = () =>{

  if(subscribe === "" || subscribe === " "){
setMessage("input is Required");
return false
  }
 if(subscribe.indexOf("@")  === -1 || subscribe.indexOf(".")  === -1){
  setMessage("input is INCORRECT");
  return false
 }
 else{
  setMessage("You Subscribe this page thank you");
 }

}

    return(
        <>
<Helmet>
  <meta charSet='utf-8'/>
  <meta name="description" content="home"/>
 <title>Welcome to Home Page</title>
</Helmet>
        <img src={oficePicture} alt="" />
<div className="overlay">
    <div className="content">
      <h1>Hello Office World</h1>
    <p>Subscribe Our pageComponents</p>

    <button className='SubscribeButton' onClick={ShowSubblock}>Subscribe</button>
    </div>
</div>
<div className="subBlock" ref={SubscribeRef}>
  <span className='closebutton' onClick={HideSubblock}><FaTimes/></span>
  <h1>Subscribe Here</h1>
<form onSubmit={(e)=>{
        e.preventDefault()
    }}>
    <input type="text" placeholder="Search Here" value={subscribe} onChange={(e)=>{
setSubscribe(e.target.value)
    }}/>
    <button className="searchBtn" onClick={subValidation}>
        Subscribe 
        </button>
    </form>
    <p>{message}</p>
</div>
        </>
    )
}

export default Home