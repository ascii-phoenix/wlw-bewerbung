import profilePic from "../assets/Eloi_Knecht.png";
import asciiArt from "../assets/ascii-art.png";

export default function HeroImage() {
  return (
    <div className="hero-image-wrap">
      <img src={profilePic} alt="Eloi Knecht" className="hero-image hero-photo" />
      <img src={asciiArt} alt="Eloi Knecht ASCII" className="hero-image hero-ascii" />
    </div>
  );
}