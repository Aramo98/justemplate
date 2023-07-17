import {Helmet} from "react-helmet"
import BlogImage from "../istockphoto-887987150-612x612.jpg"
import Lesstext from "../Lesstext"
function Blog() {
    return(
        <>
        <Helmet>
        <meta charSet='utf-8'/>
  <meta name="description" content="home"/>
 <title>Welcome to Blog Page</title>
        </Helmet>
     <img src={BlogImage} alt="" />
     <div className="overlay">
     <div className="content">
      <h1>Hello Blog page</h1>

      <p style={{fontSize:"15px",textAlign:"center"}}>
      <Lesstext  text =" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, voluptatum. Adipisci, voluptatum cupiditate expedita minus atque porro voluptas illum illo, perferendis, fugit id voluptatem non hic facilis quia quibusdam! Laboriosam?
    Vel, repellat ullam sed nemo cum distinctio quaerat. Possimus, quibusdam corporis. "/>
      </p>
    
    </div>
     </div>
        </>
    )
}

export default Blog