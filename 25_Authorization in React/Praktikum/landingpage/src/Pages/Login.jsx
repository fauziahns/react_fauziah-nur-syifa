import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"
const Login = () => {
    const [user, setUser] = useState({
        email : '',
        password : ''
    })

    const navigate = useNavigate()

    const onLogin = () =>{
        const url = "https://reqres.in/api/login"

        axios.post(url, user)
            .then(res => {
                const token = res.data.token
                localStorage.setItem('token', token)
                navigate('/Product')
                console.log(res.data);
            })
            .catch(err => {
                console.log('error login =>', err);
            })
    }

    return(
        <div>
            <div className="my-5 mx-5">
                <label htmlFor="" className="m-2">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={user.email} 
                    onChange = {(e) => setUser({...user, email: e.target.value})}
                />

                <label htmlFor="" className="m-2">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    value={user.password} 
                    onChange = {(e) => setUser({...user, password: e.target.value})}
                />

                <button onClick={onLogin}>Login</button>
            </div>
        </div>
    )
}
export default Login