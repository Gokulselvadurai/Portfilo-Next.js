"use client"
import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/5496461/pexels-photo-5496461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="a-img"
            width={640}
            height={480}
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <h2 className="a-sub">
          Who is Gokul?
        </h2>
        <p className="a-desc">
        Gokul is a final year postgrad student who got intrigued by the tech and developments. His curiosity pulls him towards learning and solving cutting-edge enterprise solutions. His desire to explore the evolving technology and understand its workings is unstoppable.        </p>
        <br></br>
        <p className="a-desc">
        Basically he can code, design and manage to make things work the way they need to be! 
        </p>
        <br></br>
        <p className="a-desc">
        While you're here, be sure to take a look on his projects,experiences and try to be in touch with him!
        </p>
      </div>
    </div>
  );
};

export default About;
