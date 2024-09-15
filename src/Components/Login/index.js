import {useEffect, useState} from 'react'
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

    const response = await fetch(logInAPIUrl, options)
    const data = await response.json()
    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token)
      setUserName('')
      setPassword('')
      history.push('/')
    } else {
      // console.log(data)
      setErrorMessage(data.error_msg)
    }
  }

  useEffect(() => {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      history.push('/')
    }
    // eslint-disable-next-line
  }, [])

  return (
    <div className="login-contianer">
      <form className="login-from" onSubmit={authenticateUser}>
        <h1 className="login-heading">Restaurant App </h1>

        <label htmlFor="UserName" className="login-label">
          USERNAME
        </label>
        <input
          id="UserName"
          type="text"
          className="login-input"
          value={userName}
          onChange={event => {
            setUserName(event.target.value)
            setErrorMessage('')
          }}
        />

        <label className="login-label" htmlFor="Password">
          PASSWORD
        </label>
        <input
          id="Password"
          type={showPassword ? 'text' : 'password'}
          className="login-input"
          value={password}
          onChange={event => {
            setPassword(event.target.value)
            setErrorMessage('')
          }}
        />
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
      </form>
      {errorMessage && <p className="login-error-message">{errorMessage}</p>}
    </div>
  )
}

export default Login
