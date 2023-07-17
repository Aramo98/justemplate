import videoPic from "../The Unexpected Beauty of Traveling Solo _ Short Film Showcase.mp4"
import '../aboutPage.scss';
import { Helmet } from "react-helmet";
function About() {

    return(
        <>
        <Helmet> 
        <meta charSet='utf-8'/>
  <meta name="description" content="home"/>
 <title>About Us</title>

        </Helmet>
     <div className="backVideo">
        <video src={videoPic} autoPlay muted loop></video>
        <div className="overlay">
            <div className="aboutContent">
            <h1>About US</h1>
    <p>Subscribe Our pageComponents</p>

    <button className='SubscribeButton'>Subscribe</button>
            </div>
        </div>
     </div>
        </>
    )
}

export default About