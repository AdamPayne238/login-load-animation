import React, {useState, useEffect} from 'react'

import './Login.scss'

// ANIMATION EXAMPLE TRY TO RE CREATE //
// https://codepen.io/Rplus/pen/lEDBj //
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ //


const Login = (props) => {

    const [ login, setLogin ] = useState(true)
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    // const saveUserData = token => {
    //     localStorage.setItem(AUTH_TOKEN, token)
    // }

    // const confirm = async data => {
    //     const { token } = data.login
    //     saveUserData(token)
    //     props.history.push(`/ciao/home`)
    // }

    return(
        <div className="auth-form-container">
            <div className="auth-header">
                <h1>Login</h1>
            </div>
            <div>
                <input
                    value={email}
                    // onChange={e => setEmail( e.target.value )}
                    type="text"
                    placeholder="Email"
                />
            </div>
            <div>
                <input
                    value={password}
                    // onChange={e => setPassword( e.target.value )}
                    type="text"
                    placeholder="Password"
                />
            </div>
            
            <div className="button">
                <button>Click Me!</button>
            </div>

        </div>
    )
}

export default Login
