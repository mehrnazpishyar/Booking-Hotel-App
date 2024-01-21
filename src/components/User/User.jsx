import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { HiLogout } from "react-icons/hi";


const User = () => {
    const navigate = useNavigate()
    const { user, isAuthenticated, logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/')
      };
  return (
    <div className="log">
          <NavLink to="/bookmark">Bookmarks</NavLink>
    {isAuthenticated ? (
      <div>
        <div className="user_name">{user.name}</div>
        <button>
          <HiLogout onClick={handleLogout} className="icon" />
        </button>
      </div>
    ) : (
      <NavLink to="/login">login</NavLink>
    )}
 
  </div>
  )
}

export default User

