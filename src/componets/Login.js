import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";

function Login() {
    // const [token,setToken] = (false)
    const [email,setEmail] = useState([]);
    const [password,setPassword] = useState([]);
    const navigate = useNavigate();
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    
    const loginProfile = (e) => {
        e.preventDefault();
        let payload = {
            email: email,
            password: password
        }
        axios.post('https://dspapi.simplifysource.com/api/v1/login',payload)
        .then((data)=>{
            console.log(data.data.data.token);
            localStorage.setItem('token',data.data.data.token)
            if(data.data.data.token){
                // alert('now you are login')
                navigate('/Dashboard')
            }
            else{
                alert('please login.')
            }
        })
    }

    return (
        // <div className='bg-gradient-primary'>
            <div className="container">


                <div className="row justify-content-center">

                    <div className="col-xl-10 col-lg-12 col-md-9">

                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">

                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <form className="user">
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-control-user"
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="Enter Email Address..." onChange={handleEmail} />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control form-control-user"
                                                        id="exampleInputPassword" placeholder="Password" onChange={handlePassword} />
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                        <label className="custom-control-label" for="customCheck">Remember
                                                            Me</label>
                                                    </div>
                                                </div>
                                                <a href="#" className="btn btn-primary btn-user btn-block" onClick={loginProfile}>
                                                    Login
                                                </a>
                                                <hr />
                                                <a href="index.html" className="btn btn-google btn-user btn-block">
                                                    <i className="fab fa-google fa-fw"></i> Login with Google
                                                </a>
                                                <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                                    <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                                </a>
                                            </form>
                                            <hr />
                                            <div className="text-center">
                                                <a className="small" href="forgot-password.html">Forgot Password?</a>
                                            </div>
                                            <div className="text-center">
                                                <Link to='/SignUp' className="small" href="register.html">Create an Account!</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        // {/* </div> */}
    )
}

export default Login