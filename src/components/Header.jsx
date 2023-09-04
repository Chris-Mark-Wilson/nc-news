import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../contexts/user-context';

export const Header=()=>{
    const {user} = useContext(UserContext)
    return(
        <nav>
  <div className="nav-buttons">
  <Link to="/"><button className="nav-button">Home</button></Link>
  </div>
  <p>Logged in as:{user}</p>
  </nav>
    )
}