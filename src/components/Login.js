import React, { useState } from 'react'

export default function Login() {
  const [userLogin,setUserLogin] = useState({
    email:"",
    password:""
  })
  const [errMessage,setErrMessage] = useState({
    email:"",
    password:""
  })
  const handleLogin =()=>{
    
  }
  return (
    <div className='form_login d-flex justify-content-center '>
      <form className='form-login'>
        <h2 className='text-center'>LOGIN</h2>
        {/* Email input */}
        <div className="form-outline mb-4">
          <input onChange={(e)=>setUserLogin(e.target.value)} type="email" id="form2Example1" className="form-control border border-success" />
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
        </div>
        {/* Password input */}
        <div className="form-outline mb-4">
          <input onChange={(e)=>setUserLogin(e.target.value)} type="password" id="form2Example2" className="form-control border border-success" />
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
          
        </div>
        <p className='text-danger'>{errMessage}</p>
        {/* 2 column grid layout for inline styling */}
        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            {/* Checkbox */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="form2Example31"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="form2Example31">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>
          <div className="col">
            {/* Simple link */}
            <a href="#!">Forgot password?</a>
          </div>
        </div>
        {/* Submit button */}
        <button onClick={handleLogin} type="button" className="btn btn-primary btn-block mb-4 w-100">
          Sign in
        </button>
        {/* Register buttons */}
        <div className="text-center mb-5">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
          <p>or sign up with:</p>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="bi bi-facebook"></i>
          </button>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="bi bi-google"></i>
          </button>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="bi bi-twitter"></i>
          </button>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="bi bi-github"></i>
          </button>
        </div>
      </form>

    </div>
  )
}
