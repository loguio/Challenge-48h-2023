import { Outlet, useNavigate } from "react-router-dom";
import "../styles/layout.css";

const Layout = () => {
  
  let navigate = useNavigate();
  
  return (
    <div className="mainBody">
      <div className="header">
        <div className="buttonHeader">
          <button onClick={() => navigate("/login")}> Login </button>
          <button onClick={() => navigate("/register")}> Register </button>
        </div>
        <div className="title">
          <img className="jajaImg" src={process.env.PUBLIC_URL + "/jaja.png"} onClick={() => navigate("/home")}/>
          <h1 onClick={() => navigate("/home")}>JAJA</h1>
        </div>
        <div className="profile">
          <h1 className="email">Email</h1>
          <button onClick={() => navigate("/profile")}> Profile </button>
        </div>
      </div>
      <div className="content">
        <Outlet/>
      </div>
      <div className="footer">
        <p>Java Jaguars™ JaJa® - aucun droit reservé</p>
      </div>
    </div>
  )
};
  
export default Layout;