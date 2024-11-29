import { Link } from 'react-router-dom';
import home from "./home.png"
import './Homebutton.css'

function Homebutton() {
  return (
    <Link to="/">
      <img src={home} alt="home" className="homeimg"/>
    </Link>
  )
}

export default Homebutton