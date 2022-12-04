
import { Link } from 'react-router-dom'

const Header = () => {

  return (
      <header>
          <div className="logo">
          <Link to="/">
                      <h2>CATINFO</h2>
                </Link>
          </div>
          <nav>
              <ul>
                <Link to="/">
                  <li><a href="#">HOME</a></li>
                </Link>
                <Link to="/about">
                  <li><a href="#">ABOUT</a></li>
                  </Link>
                <Link to="/contact">
                  <li><a href="#">CONTACT</a></li>
                </Link>
              </ul>
          </nav>
      </header>
  )
}

export default Header