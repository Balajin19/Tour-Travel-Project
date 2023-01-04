import './Register.css'
import { Link } from 'react-router-dom';
function Register() {
    return (
      <>
       <div className='reg-form'>
            <h1>Register</h1>
                <form >
                    <div ><i class="fa-solid fa-user"></i><input type="text" placeholder="Enter your Name" required /></div>
            <div >   <i class="fa-solid fa-envelope"></i><input type="email" placeholder="Enter your Email" required /></div>
            <div > <i class="fa-solid fa-lock"></i><input type="password" placeholder="Create a Password" required /></div>
            <div > <i class="fa-solid fa-lock"></i><input type="password" placeholder="Confirm a Password" required /></div>
            <Link to='/registered' className=" reg-btn">Register</Link>
                <p>Already have an account? <span><Link to='/signup' className='signup-link'>Sign Up</Link></span></p>
            </form>
            </div>
            </>     
    )
}
export default Register;