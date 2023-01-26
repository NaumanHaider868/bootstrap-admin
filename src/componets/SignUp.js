import axios from 'axios';
import React, { useState } from 'react'
import { Link,useNavigate } from "react-router-dom";

function SignUp() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const navigate = useNavigate();

    const handleSign = (e) => {
        e.preventDefault();
        let payload = {
            email: email,
            first_name: firstName,
            last_name: lastName,
            type: 'candidate',
            company_name: null
        }
        axios.post('https://dspapi.simplifysource.com/api/v1/signup', payload)
            .then((resp) => {
                console.log(resp);
                navigate('/dashboard');
            }).catch((error)=>{
                console.log(error);
            })
    }
    return (
        <>
            <div className="container">

                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        {/* <!-- Nested Row within Card Body --> */}
                        <div className="row">
                            <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                            <div className="col-lg-7">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                    </div>
                                    <form className="user">
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                                    placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control form-control-user" id="exampleLastName"
                                                    placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                                                placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                        <a href="#" className="btn btn-primary btn-user btn-block" onClick={handleSign}>
                                            Register Account
                                        </a>
                                        <hr />
                                        <a href="index.html" className="btn btn-google btn-user btn-block">
                                            <i className="fab fa-google fa-fw"></i> Register with Google
                                        </a>
                                        <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                            <i className="fab fa-facebook-f fa-fw"></i> Register with Facebook
                                        </a>
                                    </form>
                                    <hr />
                                    <div className="text-center">
                                        <a className="small" href="forgot-password.html">Forgot Password?</a>
                                    </div>
                                    <div className="text-center">
                                        <Link className="small" to='/'>Already have an account? Login!</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SignUp