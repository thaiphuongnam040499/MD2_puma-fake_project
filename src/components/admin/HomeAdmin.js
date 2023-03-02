import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HomeAdmin() {
    return (
        <div>
            <div
                className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark admin navbar-admin'"
                style={{ width: 280 ,height:"100%"}}
            >
                <a
                    href="/"

                    className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                >
                    <svg className="bi me-2" width={40} height={32}>
                        <use xlinkHref="#bootstrap" />
                    </svg>
                    <span className="fs-4">Admin</span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <NavLink to={'/'} className="nav-link text-white" aria-current="page">
                            <svg className="bi me-2" width={16} height={16}>
                                <use xlinkHref="#home" />
                            </svg>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/admin/createProduct'} className="nav-link text-white">
                            <svg className="bi me-2" width={16} height={16}>
                                <use xlinkHref="#speedometer2" />
                            </svg>
                            Create Product
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/admin/listProduct'} href="#" className="nav-link text-white">
                            <svg className="bi me-2" width={16} height={16}>
                                <use xlinkHref="#table" />
                            </svg>
                            ListProduct
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/admin/listUser'} href="#" className="nav-link text-white">
                            <svg className="bi me-2" width={16} height={16}>
                                <use xlinkHref="#grid" />
                            </svg>
                            List User
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/admin/updateProduct'} className="nav-link text-white">
                            <svg className="bi me-2" width={16} height={16}>
                                <use xlinkHref="#people-circle" />
                            </svg>
                            Update Product
                        </NavLink>
                    </li>
                </ul>
                <hr />
            </div>
        </div>
    )
}
