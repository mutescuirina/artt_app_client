import React from "react";
import { Parallax } from "react-parallax";
import { Link } from 'react-router-dom';


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  background: "rgba(255, 255, 255, .6)",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};
const image1 =
  "https://images.pexels.com/photos/166669/pexels-photo-166669.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500";
const image2 =
  "https://images.pexels.com/photos/163572/iron-gate-karparten-danube-gorge-abbey-163572.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
const image3 =
  "https://images.pexels.com/photos/166669/pexels-photo-166669.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500";
const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

const Home = () => (
    <div className="container">
  <div style={styles}>
   
    <Parallax bgImage={image1} strength={500}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>Time together. Learn what's new. Dicover what is past.</div>
      </div>
    </Parallax>
   
    <h1>| | |</h1>
   
    <Parallax bgImage={image3} blur={{ min: -1, max: 3 }}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}><h4><Link to="/news">News</Link></h4></div>
      </div>
    </Parallax>
    <h1>| | |</h1>
    <Parallax bgImage={image2} strength={-100}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>Reverse direction</div>
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
        <div style={insideStyles}>renderProp</div>
      </div>
    </Parallax>
    <div style={{ height: 500 }} />
   
  </div>
  </div>
);



export default Home