import { useState } from "react"
import { FaMapMarker, FaPhone,FaEnvelope,FaRegCopyright } from "react-icons/fa"
import officeLogo from "./png-clipart-building-computer-icons-office-building-angle-building.png"
function Footer(){
    const [email,setEmail] = useState("");
    const  [message,setMessage] = useState("");


    const changeValue = (e)=>{
        setEmail(e.target.value)
    }
    const validation = ()=>{
        if (email === "" || email ===" ") {
           setMessage("input is Required")
            return false
        }
        if (email.indexOf("@") === -1 || email.indexOf(".") === -1 ) {
            setMessage("input is invalid")
            return false
        }
        else{
            setMessage("you Send your email address!! thank You :)")
        }
    }
return(
    <>
    <div className="MutualFooter">
        <div className=" FooterBlock FooterBlock1">
            <h1> About Us</h1>
            <h2><FaMapMarker/> North Avenue 21 / 1</h2>
          
            <h2><FaPhone/>+123 456 789 </h2>
        </div>
        <div className=" FooterBlock FooterBlock2"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d984.4750092209276!2d44.45415750078608!3d40.1740161268811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2sam!4v1680635535743!5m2!1sru!2sam"   style={{width:100 +  "%",height: 100 + "%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
        <div className="FooterBlock FooterBlock3">
            <div className="emailBlock">
                <form onSubmit={(e)=>{
                    e.preventDefault()
                }}>
                    <input type="text" value={email} className="emailInput" placeholder="Enter Your Email" onChange={changeValue}/>
                    <button onClick={validation}><FaEnvelope/> Send Email</button>
                </form>
                <p className="Message">{message}</p>
            </div>
        </div>
    </div>
    <div className="lastFooter" >
        <div className="left" >
            <p><FaRegCopyright />CopyRight {new Date().getFullYear()}</p>
            <p> All Rights reserved</p>
            </div>
            <div className="center">
                <div className="imgLogo">
                <img src={officeLogo} alt="logo" />
                </div>
               
            </div>
        <div className="right">
            <ul>
                <li><a href="">Configuration</a></li>
                <li><a href="">Service</a></li>
                <li><a href="">About us</a></li>
                <li><a href="">Other</a></li>
            </ul>
        </div>
    </div>
    </>
)
}

export default Footer