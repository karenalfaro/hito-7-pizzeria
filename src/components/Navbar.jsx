import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { UserContext } from '../context/UserContext'
import { formatPrice } from '../utils/formatPrice'

const Navbar = () => {
  const { total } = useContext(CartContext)
  const { token, logout } = useContext(UserContext)

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <div>
        <span className="navbar-brand">Pizzería Mamma Mia!</span>

        <Link to="/" className="btn btn-outline-light btn-sm me-2">🍕 Home</Link>

        {token ? (
          <>
            <Link to="/profile" className="btn btn-outline-light btn-sm me-2">🔓 Profile</Link>
            <button className="btn btn-outline-light btn-sm" onClick={logout}>🔒 Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline-light btn-sm me-2">🔐 Login</Link>
            <Link to="/register" className="btn btn-outline-light btn-sm">🔐 Register</Link>
          </>
        )}
      </div>

      <Link to="/cart" className="btn btn-outline-info btn-sm">
        🛒 Total: ${formatPrice(total)}
      </Link>
    </nav>
  )
}

export default Navbar