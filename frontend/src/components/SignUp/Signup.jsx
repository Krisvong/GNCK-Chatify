import { useState, React } from 'react'
import './SignUp.css'

const SignUp = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        postMessage('', {name, email, password})
    }

    return (
        <div>
             <div className='signup'>
                <form className='signupform' onSubmit={handleSubmit}>
                    <div className='top'>
                        <h1>Sign Up</h1>
                        <p className='name'><input type="text" placeholder='Enter your name' onChange={(e) => setName(e.target.value)} /></p>
                        <p className='email'><input type="text" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} /></p>
                        <p className='password'><input type="password" placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} /></p>
                        <p className='password'><input type="text" placeholder='Confirm password' /></p>
                        <input className="submit" type="submit" value="Enter" />

                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;