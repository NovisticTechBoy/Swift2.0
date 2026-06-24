import { useNavigate } from 'react-router-dom'

function Signup() {
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        // TODO: implement registration
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
                <h2>Create Swift account..</h2>
                <form onSubmit={handleSubmit} className="auth-form">
                    <input name="name" type="text" placeholder="Full name" required />
                    <input name="email" type="email" placeholder="Email" required />
                    <input name="password" type="password" placeholder="Password" required />
                    <div className="auth-row">
                        <div />
                        <a className="forgot" href="#">Already have an account?</a>
                    </div>
                    <button type="submit" className="primary-btn">Create account</button>
                </form>

                <div className="divider">Or sign up with</div>
                <div className="social-row">
                    <button className="social-btn">Google</button>
                    <button className="social-btn">Apple</button>
                </div>
            </div>
        </div>
    )
}

export default Signup