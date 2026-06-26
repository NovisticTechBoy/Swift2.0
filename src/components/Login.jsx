import { useEffect, useState } from 'react'
import { AtSign } from 'lucide-react'
import { UserRoundKey } from 'lucide-react'
import { LogIn } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

function Login() {
    const navigate = useNavigate()

    // Simple form state
    const [values, setValues] = useState({
        email: '',
        password: '',
        remember: false,
    })

    // UI state
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

  
    useEffect(() => {
        const savedEmail = window.localStorage.getItem('swift-login-email')
        if (savedEmail) {
            setValues((prev) => ({ ...prev, email: savedEmail }))
        }
    }, [])

   
    function handleChange(event) {
        const { name, value, type, checked } = event.target

        setValues((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }))

        if (error) {
            setError('')
        }
    }

  
    function handleSubmit(event) {
        event.preventDefault()

        const email = values.email.trim()
        const password = values.password

        if (!email) {
            setError('Please enter your email.')
            return
        }

        if (!password) {
            setError('Please enter your password.')
            return
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError('Please enter a valid email address.')
            return
        }

        if (password.length < 8 || password.length > 24) {
            setError('Password must be between 8 and 24 characters.')
            return
        }

        setLoading(true)
        setError('')

        window.setTimeout(() => {
            if (values.remember) {
                window.localStorage.setItem('swift-login-email', email)
            } else {
                window.localStorage.removeItem('swift-login-email')
            }

            setLoading(false)
            navigate('/', { replace: true })
        }, 600)
    }

    return (
        <div className="auth-page">
            <div className="auth-card">
                <div className="auth-brand">
                    <div className="auth-logo">S</div>
                    <div>
                        <div style={{ fontSize: 12, color: '#6b21a8', fontWeight: 700 }}>SWIFT</div>
                    </div>
                </div>

                <h2>Welcome back!</h2>

                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="auth-input-wrap">
                        <input
                            name="email"
                            type="email"
                            placeholder="Email address"
                            value={values.email}
                            onChange={handleChange}
                            required
                        />
                        <span className="auth-input-icon" aria-hidden="true">
                            <AtSign size={16} />
                        </span>
                    </div>
                    <div className="auth-input-wrap">
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                        required
                    />
                    <span className="auth-input-icon" aria-hidden="true">
                        <UserRoundKey size={16} />
                    </span>
                    </div>
                    <div className="auth-row">
                        <label className="remember">
                            <input
                                name="remember"
                                type="checkbox"
                                checked={values.remember}
                                onChange={handleChange}
                            />
                            Remember Me
                        </label>

                        <a className="forgot" href="#">Forgot password?</a>
                    </div>

                    {error ? <div className="auth-error">{error}</div> : null}

                 {/*<p className="auth-hint">
                        Demo: use any valid email and a password with at least 6 characters.
                    </p> */}

                    <button type="submit" className="primary-btn" disabled={loading}>
                        {loading ? 'Signing in...' : 'Sign In'}<LogIn size={16} />  
                    </button>
                </form>

                <div className="divider">Login</div>

                <div className="social-row">
                    <button className="social-btn" type="button">Google</button>
                    <button className="social-btn" type="button">Apple</button>
                </div>
            </div>
        </div>
    )
}

export default Login
