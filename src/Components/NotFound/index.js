import {Link} from 'react-router-dom'

import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <h1 className="not-found-heading">Page Not Found</h1>
    <p className="not-found-text">
      The page you are looking for does not exists
    </p>
    <Link to="/">
      <button className="not-found-home-button" type="button">
        Home
      </button>
    </Link>
  </div>
)

export default NotFound
