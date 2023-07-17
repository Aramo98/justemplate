import LessText from "../Lesstext"
import ServiceImage from "../images.jpeg"
import { Helmet } from 'react-helmet';
function Service() {

    return(
      <>
      <Helmet>
      <meta charSet='utf-8'/>
  <meta name="description" content="home"/>
 <title>Welcome to Service Page</title>
      </Helmet>
              <img src={ServiceImage} alt="" />
<div className="overlay">
    <div className="content">
      <h1>Hello Service page</h1>
    <p>Subscribe Our pageComponents</p>
   <span className="lessText">
    <LessText text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolorem exercitationem eligendi dolorum obcaecati, optio voluptates nulla ducimus vero veniam aliquam quibusdam non architecto nemo officiis at accusantium asperiores molestiae." 
     />
   </span>
    <button className='SubscribeButton' >Subscribe</button>
    </div>
</div>
      </>
    )
}

export default Service