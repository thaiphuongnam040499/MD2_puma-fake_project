import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { act_post_user } from '../redux/actions'
import axios from 'axios'
export default function Register() {
    const [newUser, setNewUser] = useState({
        userName: "",
        email: "",
        password: "",
        rePassword: "",
        address: "",
        phone: ""
    })
    const [errMessage, setErrMessage] = useState({
        userName: "",
        email: "",
        password: "",
        rePassword: "",
        address: "",
        phone: ""
    })
    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setNewUser({ ...newUser, [name]: value })
        if (name === "userName") {
            if (value.trim() === "") {
                setErrMessage({ ...errMessage, [name]: "không được để trống!" })
            } else if (value.trim().length <= 4) {
                setErrMessage({ ...errMessage, [name]: "vui lòng nhập đầy đủ tên của bạn!" })
            } else {
                setErrMessage({ ...errMessage, [name]: "" })
            }
        }
        if (name === "email") {
            const EMAIL_PATTERN = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/
            if (value.trim() === "") {
                setErrMessage({ ...errMessage, [name]: "không được để trống" })
            } else if (!EMAIL_PATTERN.test(value)) {
                setErrMessage({ ...errMessage, [name]: "email không đúng định dạng" })
            } else {
                checkEmailExist(value).then((res) => {
                    if (res) {
                        setErrMessage({ ...errMessage, [name]: "Email đã tồn tại" })
                    } else {
                        setErrMessage({ ...errMessage, [name]: "" })
                    }
                });

            }
        }
        if (name === "password") {
            if (value.trim() === "") {
                setErrMessage({ ...errMessage, [name]: "mật khẩu không được để trống" })
            } else if (value.trim().length < 6) {
                setErrMessage({ ...errMessage, [name]: "mật khẩu phải ít nhất 6 kí tự" })
            } else {
                setErrMessage({ ...errMessage, [name]: "" })
            }
        }
        if (name === "rePassword") {
            if (newUser.password !== value) {
                setErrMessage({ ...errMessage, [name]: "mật khẩu không trùng khớp" })
            } else {
                setErrMessage({ ...errMessage, [name]: "" })
            }
        }
    }
    const dispatch = useDispatch()
    const handleAdd = () => {
        dispatch(act_post_user(newUser))
    }
    const checkEmailExist = () => {
        return axios
            .get(`http://localhost:3001/users?email=${newUser.email}`)
            .then((res) => res.data.length > 0)
            .catch((err) => console.log(err));
    };
    return (
        <div className='form_login d-flex justify-content-center '>
            <form className='form-register'>
                <h2 className='text-center mb-4'>REGISTER</h2>
                {/* Email input */}
                <div className="form-outline mb-2">
                    <label className="form-label" >
                        User name
                    </label>
                    <input
                        name='userName'
                        value={newUser.userName}
                        onChange={handleChange}
                        type="text"
                        className="form-control border border-success" />
                    <p className='text-danger'>{errMessage.userName}</p>

                </div>
                <div className="form-outline mb-2">
                    <label className="form-label" >
                        Email address
                    </label>
                    <input name='email' value={newUser.email} onChange={handleChange} type="email" className="form-control border border-success" />
                    <p className='text-danger'>{errMessage.email}</p>
                </div>
                {/* Password input */}
                <div className="form-outline mb-2">
                    <label className="form-label" htmlFor="form2Example2">
                        Password
                    </label>
                    <input name='password' value={newUser.password} onChange={handleChange} type="password" className="form-control border border-success" />
                    <p className='text-danger'>{errMessage.password}</p>
                </div>
                <div className="form-outline mb-2">
                    <label className="form-label" htmlFor="form2Example2">
                        Repeat Password
                    </label>
                    <input name='rePassword' value={newUser.rePassword} onChange={handleChange} type="password" className="form-control border border-success" />
                    <p className='text-danger'>{errMessage.rePassword}</p>
                </div>
                <div className="form-outline mb-2">
                    <label className="form-label" >
                        Address
                    </label>
                    <input name='address' value={newUser.address} onChange={handleChange} type="text" className="form-control border border-success" />
                    <p className='text-danger'>{errMessage.address}</p>
                </div>
                <div className="form-outline mb-2">
                    <label className="form-label" >
                        Phone
                    </label>
                    <input name='phone' value={newUser.phone} onChange={handleChange} type="number" className="form-control border border-success" />
                    <p className='text-danger'>{errMessage.phone}</p>
                </div>
                {/* 2 column grid layout for inline styling */}
                <div className="row mb-2">
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
                </div>
                {/* Submit button */}
                <button onClick={handleAdd} type="button" className="btn btn-primary btn-block mb-2 w-100">
                    Register
                </button>
                {/* Register buttons */}
                <div className="text-center mb-5">
                    <p>
                        You already have an account? <a href="#!">Login</a>
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
