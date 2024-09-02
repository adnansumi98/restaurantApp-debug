import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'
import {MdVisibility, MdVisibilityOff} from 'react-icons/md'
import {logInAPIUrl} from '../../Utility/Constants'

import './index.css'

const Login = () => {
  const size = '20'
  const color = '#b3b3b3'
  const history = useHistory()

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const authenticateUser = async event => {
    event.preventDefault()
    const credentials = {username: userName, password}
    const options = {method: 'POST', body: JSON.stringify(credentials)}

    try {
      const response = await fetch(logInAPIUrl, options)
      const data = await response.json()
      if (response.ok) {
        Cookies.set('jwt_token', data.jwt_token)
        setUserName('')
        setPassword('')
        history.push('/')
      } else if (userName === '' || password === '') {
        setErrorMessage('Enter a valid username or password')
      } else {
        setErrorMessage('Authentication Failure')
      }
    } catch (error) {
      setErrorMessage('Something went wrong')
      console.log(`LoginAPI: ${error}`)
    }
  }

  return (
    <div className="login-contianer">
      <form className="login-from" onSubmit={authenticateUser}>
        <h1 className="login-heading">Restaurant App </h1>
        <div className="input-contianer">
          <p className="login-label">User Name</p>
          <input
            type="text"
            className="login-input"
            value={userName}
            onChange={event => {
              setUserName(event.target.value)
              setErrorMessage('')
            }}
          />
        </div>
        <div className="input-contianer">
          <p className="login-label">Password</p>
          <input
            type={showPassword ? 'text' : 'password'}
            className="login-input"
            value={password}
            onChange={event => {
              setPassword(event.target.value)
              setErrorMessage('')
            }}
          />
        </div>
        {showPassword ? (
          <MdVisibility
            size={size}
            color={color}
            className="toggle-visibility-icon"
            onClick={() => setShowPassword(false)}
          />
        ) : (
          <MdVisibilityOff
            size={size}
            color={color}
            className="toggle-visibility-icon"
            onClick={() => setShowPassword(true)}
          />
        )}

        <div className="login-button-container">
          <button className="login-button" type="submit">
            Login
          </button>
        </div>
        {errorMessage && <p className="login-error-message">{errorMessage}</p>}
      </form>
    </div>
  )
}

export default Login
