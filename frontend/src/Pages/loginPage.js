import {  useState } from 'react'
import LoginComponent from '../Components/loginComponent'

const LoginPage = () => {
    return (
        <div className='back'>
            <div className='logincompo' style={{width: '600px', padding: '70px'}}>
                <LoginComponent/>
            </div>
        </div>
    )
}
export default LoginPage