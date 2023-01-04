import { Link } from 'react-router-dom';
import './SignupFormStyles.css';

function SignupForm() {
    return (
        <>
        <div className='signup-form'>
            <h1>Sign Up</h1>
            <form>
            <div><i class="fa-solid fa-envelope"></i><input type="email" placeholder="Email" required /></div>
            <div><i class="fa-solid fa-lock"></i><input type="password" placeholder="Password" required /></div>
                <Link to='/submit' className='signup-btn'>Sign Up</Link>
                <br></br>
                <p>Don't have an account? <span><Link to='/register' className='reg-link'>Register</Link></span></p>
            </form>
        </div>
        </>
    )
}
export default SignupForm;
