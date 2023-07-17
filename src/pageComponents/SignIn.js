import image from "../images.jpeg"
import "../pageComponents/signIn.scss";
import { useState } from "react";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";
function SignIn(){
    let [name,setName] = useState("");
    let[password,setPassword] = useState("");
    const [loginMessage,setLoginMessage] = useState("")
    const [passwordMessage,setPasswordMessage] = useState("")
const[show,setShow] = useState(false)
const [checked,setChecked] = useState(false)
    const changeNameValues = (evt)=>{
        setName(evt.target.value)
    }
    const changePasswordValues = (evt)=>{
      setPassword(evt.target.value)
    }

    function Validation(e){
e.preventDefault();
if (name === "" || password === "") {
    setLoginMessage("write Your Login");
    setPasswordMessage("Write Your Password")
    return false
}else{
    setLoginMessage("Thanks");
    setPasswordMessage("thanks")
}
    }


return(
    <>

<Helmet>
  <meta charSet='utf-8'/>
  <meta name="description" content="home"/>
 <title>Sign in this Page</title>
</Helmet>
    <img src={image} alt="" />

    <div className="overlay" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
    <h2>Sign In</h2>
    <div className="signInUpBlock">
        <form action="">
            <div className="inputBox">
                
                <input type="text"  required onChange={changeNameValues}/>
                <span className="placeHolder">
                    write your name
                </span>
                <p>{loginMessage}</p>
            </div>
            <div className="inputBox">
            <span className="hideShowButton" onClick={()=>{
                    setShow(!show)
                }}>{show?<FaEyeSlash/>: <FaEye />}</span>
                <input type={show?"text":"password"} required onChange={changePasswordValues}/>
     
                <span className="placeHolder">
                    write your Password
                </span>
   
                <p>{passwordMessage}</p>
            </div>
            <div className="otherBlcok">
                <a href="/" className="Link">Forgot Your Password? Click Here</a>
               <span style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
               }}><input type="checkbox" checked={checked} onChange={()=>setChecked(!checked)}/>Remember Me</span>
            </div>
            <div className="buttonsBlock">
                <button className="SignInBtn" onClick={Validation}>Log in</button>
                <a className="registerBtn"  href="/register">Register Now</a>
            </div>
        </form>
    </div>

    </div>
  
    </>
)
}

export default SignIn