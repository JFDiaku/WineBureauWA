import logo from "../assets/images/logo.jpg"
import './loader.css'
const Loader = () => {
  return (
    <div className="loader-container" >
      <img src={logo} alt="" />
    </div>
  );
};

export default Loader;