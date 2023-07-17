import {useState} from "react"
import backgroundImage from "../images.jpeg";
import "./register.scss";
import { Helmet } from "react-helmet";
import {FaCloudUploadAlt,FaUser,FaEye,FaEyeSlash} from "react-icons/fa"


function Register(){
    const [firstName,setFirstName] = useState("");
        const [lastName,setLastName] = useState("");
        const [email,setEmail] = useState("");
        const [password,setPassword] = useState("");
        const[confirmPassword,setConfirmPassword] = useState("")
    const [checked,setChecked] = useState(false)
    const [error,SetError] = useState(false)
        const [show , setShow] = useState(false) 
      const [showTwo ,setShowTwo] = useState(false)
      const [file,setFile] = useState(null)
      console.log(file);
        const validation = (e)=>{
    e.preventDefault()
    if (firstName.length === 0 || lastName.length === 0 || email.length === 0 || password.length === 0 || confirmPassword.length === 0) {
       SetError(true) 
    }
  
}
return(
<>
<Helmet>
         <meta charSet='utf-8'/>
   <meta name="description" content="register"/>
  <title>Lets Go to Register</title>
         </Helmet>
         <img src={backgroundImage} alt="" />
         <div className="overlay">
            <div className="registerBlock">
                <form action=""  className="regForm" onSubmit={validation}>
                <div className="inputBox">
             <input type="text"  placeholder="First Name"   onChange={e => setFirstName(e.target.value)}/>
             {error && firstName<=0 ? <label>FirnstName is Empty</label>:"" }
             </div>
             <div className="inputBox">
               <input type="text" placeholder="Last Name"  onChange={e => setLastName(e.target.value)}/>
              {error && lastName.length  <=0 ? <label>lastName is Empty</label>:"" }
                </div>
                 <div className="inputBox">
                 <input type="email" placeholder="Email"  onChange={e => setEmail(e.target.value)}/>
                {error && (email.indexOf("@") === -1 || email.indexOf(".") === -1 )?  <label>Email is invalid</label>:""}
                </div>
                <div className="inputBox">
  <span className="hideShow" onClick={()=>setShow(!show)}>{show?<FaEyeSlash/>:<FaEye />}</span>
   <input type={show?"text":"password"} placeholder="Password"  onChange={e => setPassword(e.target.value)}/>
   {error &&  password.length <=0 ? <label>Password is Empty</label>:""}
 </div>
 <div className="inputBox">
 <span className="hideShow" onClick={()=>setShowTwo(!showTwo)}>{showTwo?<FaEyeSlash />:<FaEye />}</span>
   <input type={showTwo? "text": "password"} placeholder="Confirm Password"  onChange={e => setConfirmPassword(e.target.value)}/>
   {error &&  confirmPassword !== password?<label>password does not Matched</label>:""}
</div>
<div className="inputBox  forImage">
{file&&(<div className="imageBox">
  <img src={URL.createObjectURL(file)} alt="not found" />
</div>)}
<div className="upload">

<input
        type="file"
        className="changeImage"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setFile(event.target.files[0]);
        }}
      />
<label htmlFor="changeImage" className="buttonAdd"> <FaCloudUploadAlt/> choose photo</label>
     
</div>
</div>
<div className="checkBoxes" >
{checked===false ? "choose your gender": `You Choose ${checked} Gender`}
<div className="checkDiv" style={{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"15px"}}>
           <input type="radio" name="gender"  value="Male" onChange={(e)=>setChecked(e.target.value)}/>Male
           <input type="radio" name="gender"   value="Female" onChange={(e)=>setChecked(e.target.value)}/>Female 
           </div>
          
             </div>
             <div className="buttonBlock">
            <button className="RegisterButtton" ><FaUser />Submit</button>
                        </div>
                </form>
            </div>
         </div>
</>

)
}

export default Register