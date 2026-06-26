import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import { AtSign } from 'lucide-react';
import { UserRoundKey } from 'lucide-react'
import { SavePen } from 'lucide-react'
import { UserRoundPlus } from 'lucide-react'


function Signup() {
    const navigate = useNavigate()

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
    })

    const [error, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const alreadySavedEmail = window.localStorage.getItem('swift-saved-email')
        if (alreadySavedEmail) {
            setValues((prev) => ({ ...prev, email: alreadySavedEmail }))
        }
    }, [])

    function handleChange(event) {
        const { name, value } = event.target

        setValues((prev) => ({
            ...prev,
            [name]: value,
        }))

        if (error) {
            setErrorMessage('')
        }
    }

    function handleSubmit(event) {
        event.preventDefault()

        const name = values.name.trim()
        const email = values.email.trim()
        const password = values.password

        if (!name) {
            setErrorMessage('Please enter your full name.')
            return
        }

        if (!email) {
            setErrorMessage('Please enter your email address.')
            return
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setErrorMessage('Please enter a valid email address.')
            return
        }

        if (!password) {
            setErrorMessage('Please enter a password.')
            return
        }

        if (password.length < 8 || password.length > 24) {
            setErrorMessage('Password must be between 8 and 24 characters long.')
            return
        }

        setLoading(true)
        setErrorMessage('')

        window.setTimeout(() => {
            window.localStorage.setItem('swift-saved-email', email)
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

                <h2>Create Swift account..</h2>

                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="auth-input-wrap">
                    <input
                        name="name"
                        type="text"
                        placeholder="Full Name"
                        value={values.name}
                        onChange={handleChange}
                        required
                    />
                    <span className="auth-input-icon" aria-hidden="true">
                        <SavePen size={16} />
                    </span>
                    </div>

                    <div className="auth-input-wrap">
                        <input 
                        name="email"
                        type="email"
                        placeholder="Email"
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
                        <div />
                        <a className="forgot" href="#">Already have an account?</a>
                    </div>

                    {error ? <div className="auth-error">{error}</div> : null}

                    <button type="submit" className="primary-btn" disabled={loading}>
                        {loading ? 'Creating account...' : 'Create account'} <UserRoundPlus size={16} />
                    </button>
                </form>

                <div className="divider">Or sign up with</div>
                <div className="social-row">
                    <button className="social-btn" type="button">Google</button>
                    <button className="social-btn" type="button">Apple</button>
                </div>
            </div>
        </div>
    )
}

export default Signup
