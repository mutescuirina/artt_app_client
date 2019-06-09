import React from "react";
import { Parallax } from "react-parallax";
import { Link } from 'react-router-dom';


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  height: 100,
  width: 200,
  background: "rgba(255, 255, 255, .6)",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};
const image1 =
  "https://images.pexels.com/photos/1645634/pexels-photo-1645634.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
const image2 =
  "https://images.pexels.com/photos/2306277/pexels-photo-2306277.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500";
const image3 =
  "https://images.pexels.com/photos/362/marketing-man-person-communication.jpg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500";
const image4 =
"https://images.pexels.com/photos/166669/pexels-photo-166669.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500";

const Home = () => (
<div>
    <div className="divider"></div>
    <div className="container">
  <div style={styles}>
   
    <Parallax bgImage={image1} strength={500}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>Time together.<br></br> Learn what's new. <br></br>Discover the past.</div>
      </div>
    </Parallax>
   
    <h1>| | |</h1>
   
    <Parallax bgImage={image2} blur={{ min: -1, max: 3 }}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}><p className="sections"><Link to="/events">Events</Link></p></div>
      </div>
    </Parallax>
    <h1>| | |</h1>
    <Parallax bgImage={image3} strength={-100}>
      <div style={{ height: 500 }}>
      <div style={insideStyles}><p className="sections"><Link to="/news">News</Link></p></div>
      </div>
    </Parallax>
    <h1>| | |</h1>
    <Parallax
      bgImage={image4}
      strength={200}
      renderLayer={percentage => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `rgba(255, 125, 0, ${percentage * 1})`,
              left: "50%",
              top: "50%",
              borderRadius: "50%",
              transform: "translate(-50%,-50%)",
              width: percentage * 500,
              height: percentage * 500
            }}
          />
        </div>
      )}
    >
      <div style={{ height: 500 }}>
      <div style={insideStyles}><p className="sections"><Link to="/treasures">Treasures</Link></p></div>
      </div>
    </Parallax>
    <div style={{ height: 500 }} />
   
  </div>
  </div>
  </div>
);



export default Home