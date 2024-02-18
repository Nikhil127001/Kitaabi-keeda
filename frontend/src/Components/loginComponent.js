import { TextField } from "@mui/material"
import image from '../images/keeda.png'
import '../Home.css';
import { useState } from "react";
import axios from 'axios';
import {useDispatch} from 'react-redux'
import {setIsUserLoggedIn} from "../Redux/reducer";
import { setloginComponent } from "../Redux/reducer";

const LoginComponent = () => {

  const dispatch = useDispatch()
  const [signUpClicked, setSignupClicked] = useState(false);
  const [loginPage, setLoginPage] = useState(true);
  const [SignUpPage, setSignUpPage] = useState(false);
  const [valid, setValid] = useState(true);
  const [User, setUser] = useState({ email: '', password: '', name: '', phoneNumber: '' })

  const handleSignUpClick = async () => {
    if (SignUpPage) {
      if(!valid){
        alert('please enter a valid Email Address')
      }
      else if (User.email && User.password && User.name && User.phoneNumber && valid) {
       
        try {
          const response = await axios.post('/api/apiRoutes/createUser',User)
          console.log(response);
          if (response.data.message == 'User already exists') {
            console.log(response);
            alert('User already exists')
          } else {
            alert('User Created success')
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        alert('All fields Required')
      }
    } else {
      setSignupClicked(true);
      setSignUpPage(true);
      setLoginPage(false);
    }
  }

  const handleChange = (e) => {
    const {value} = e.target
    setUser({ ...User, email: value })
    const isValidEmail = /\S+@\S+\.\S+/.test(value);
    setValid(isValidEmail);
  };

  const handleLogInClick = async () => {
    if (loginPage) {

      if(!valid){
        alert('please enter a valid Email Address')
      }
      else if (User.email && User.password) {
        try {
          const response = await axios.post('/api/apiRoutes/login', User);
          if (response.data.message == 'logged In') {
            alert('User Logged In Successfully');
            dispatch(setIsUserLoggedIn(true));
            dispatch(setloginComponent(false));
            localStorage.setItem('isUserLoggedIn' , true);
            localStorage.setItem('token', response.data.Token);
            localStorage.setItem('user' , JSON.stringify(response.data.User));
            window.location.reload();
          } else {
            alert(response.data.message);
          }
        } catch (err) {
          alert('Invalid credentials');
        }
      }
       else {
        alert('All fields Required')
      }
    } else {
      setSignupClicked(false);
      setLoginPage(true);
      setSignUpPage(false);
    }
  }

  return (
    // phone number enter page
    <>
      <div style={{
        display: 'flex', width: '100%', height: '70px', alignItems:
          'center', justifyContent: 'center'
      }}>
        <img height={'100px'} width={'150px'} src={image}>
        </img>
      </div>
      <>
        <div className='btnContainer'>

          <div style={{ display: 'flex', width: '100% ', alignItems: 'center', justifyContent: 'center' }}><b>
            {signUpClicked ? 'Sign up ' : 'Log in'}  with KitaabiKeeda.com</b></div></div>

        <div className='fieldsContainer'>

          <div className='btnContainer'>
            <TextField onChange={handleChange} style={{ width: '100%' }}
             variant="outlined"
             type="email"
             value={User.email}
             error={!valid}
             helperText={!valid ? "Please enter a valid email address" : ""}
              label="Email Address"
            />
          </div>

          <div className='btnContainer'>
            <TextField onChange={(e) => { setUser({ ...User, password: e.target.value }) }} style={{ width: '100%' }}
  inputProps={{ maxLength: 15 }}
  required
              id="outlined-required"
              label="Enter Password"
            />
          </div>
        </div>

        {signUpClicked ? <><div className='btnContainer'>
          <TextField onChange={(e) => { setUser({ ...User, name: e.target.value }) }} style={{ width: '100%' }}
  inputProps={{ maxLength: 15 }}
  required
            id="outlined-required"
            label="Full Name"
          />
        </div>
          <div className='fieldsContainer2'>
            <div className='btnContainer'>
              <TextField onChange={(e) => { setUser({ ...User, phoneNumber: e.target.value }) }} style={{ width: '100%' }}
                type="Number"
                inputProps={{ maxLength: 10 }}
                required
                id="outlined-required"
                label="Enter Phone Number"
              />
            </div>
          </div></> : <></>}

        <div className='btnContainer'>
          <button onClick={handleLogInClick} style={{ width: '100%', borderRadius: '5px', height: '50px', fontWeight: 550, backgroundColor: `${loginPage ? '#D32F2F' : 'grey'}`, color: 'white' }}>Log In</button>
        </div><div className='btnContainer'>
          <button onClick={handleSignUpClick} style={{ width: '100%', borderRadius: '5px', height: '50px', fontWeight: 550, backgroundColor: `${SignUpPage ? '#D32F2F' : 'grey'}`, color: 'white' }}>Sign Up</button>
        </div>

      </>
    </>

  )
}
export default LoginComponent