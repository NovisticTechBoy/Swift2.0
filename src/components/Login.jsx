import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        navigate('/', { replace: true })
    }
    return (
        <div className="auth-page">
            <div className="auth-card">
                <div className="auth-brand">
                    <div className="auth-logo">S</div>
                    <div>
                        <div style={{fontSize:12, color:'#6b21a8', fontWeight:700}}>SWIFT</div>
                    </div>
                </div>
                <h2>Welcome back!!</h2>
                <form onSubmit={handleSubmit} className="auth-form">
                    <input name="email" type="email" placeholder="Email or Phone number" required />
                    <input name="password" type="password" placeholder="Password" required />
                    <div className="auth-row">
                        <label className="remember"><input type="checkbox" /> Remember Me</label>
                        <a className="forgot" href="#">Forgot password?</a>
                    </div>
                    <button type="submit" className="primary-btn">Sign In</button>
                </form>

                <div className="divider">Login</div>
                <div className="social-row">
                    <button className="social-btn">Google</button>
                    <button className="social-btn">Apple</button>
                </div>
            </div>
        </div>
    )
}

export default Login