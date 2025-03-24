import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Login = () => {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showpassword, setShowpassword] = useState(false)
  const [responseMessage, setResponsemessage] = useState('')
  useEffect(() => {
    const token = Cookies.get('jwt_token')
    if (token) {
      history.replace('/')
    }
  }, [history])
  const submitDataFound = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.push('/')
  }
  const submitData = async event => {
    event.preventDefault()

    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',

      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      setResponsemessage('login success')
      submitDataFound(data.jwt_token)
      history.push('/')
    } else {
      setResponsemessage(data.error_msg)
    }
  }
  const handleUsername = value => {
    setUsername(value)
  }
  const handlePassword = value => {
    setPassword(value)
  }

  const handleShowpassword = checked => {
    setShowpassword(checked)
  }
  return (
    <div className="login-container d-flex flex-row justify-content-center">
      <form className="login-form">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
          alt="website logo"
          className="logo"
        />
          <p>{'Hint > username : rahul ; password : rahul@2021'}</p>
        <label htmlFor="Username">USERNAME</label>
        <input
          type="text"
          placeholder="Username"
          className="form-control"
          id="Username"
          value={username}
          onChange={e => handleUsername(e.target.value)}
        />
        <label htmlFor="password">PASSWORD</label>
        <input
          type={showpassword ? 'text' : 'password'}
          id="password"
          placeholder="Password"
          className="form-control"
          value={password}
          onChange={e => handlePassword(e.target.value)}
        />
        <div className="showpassword-con">
          <input
            id="showpassword"
            type="checkbox"
            className="showpassword"
            value={showpassword}
            onChange={e => handleShowpassword(e.target.checked)}
          />
          <label htmlFor="showpassword">Show Password</label>
        </div>
        <button className="submitBtn" type="button" onClick={submitData}>
          Login
        </button>
        <p>{responseMessage}</p>
      </form>
    </div>
  )
}
export default Login
