import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { act_asc_newArrivals, act_desc_newArrivals, act_get_newArrivals, act_paging1_newArrivals, act_paging2_newArrivals, act_paging3_newArrivals } from '../redux/actions'
export default function Shop() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(act_paging1_newArrivals())
    }, [])
    const listNewArrivals = useSelector(state => state.newArrivals)
    const handleChangePage = (pro) => {
        navigate("/product", { state: pro })
    }
    return (
        <div className=''>
            <div className="menu mx-4">
                <h2 className="my-5">SHOP ALL</h2>
                <div className="d-flex justify-content-between">
                    <div className="menu_btn ">
                        <button type="button" className="btn btn-outline-dark me-2">
                            Gender <i className="bi bi-chevron-compact-down" />
                        </button>
                        <button type="button" className="btn btn-outline-dark me-2">
                            Age Group <i className="bi bi-chevron-compact-down" />
                        </button>
                        <button type="button" className="btn btn-outline-dark me-2">
                            Style <i className="bi bi-chevron-compact-down" />
                        </button>
                        <button type="button" className="btn btn-outline-dark me-2">
                            Size <i className="bi bi-chevron-compact-down" />
                        </button>
                        <button type="button" className="btn btn-outline-dark me-2">
                            Color <i className="bi bi-chevron-compact-down" />
                        </button>
                        <button type="button" className="btn btn-outline-dark me-2">
                            Price <i className="bi bi-chevron-compact-down" />
                        </button>
                        <button type="button" className="btn btn-outline-dark me-2">
                            Sport <i className="bi bi-chevron-compact-down" />
                        </button>
                        <button type="button" className="btn btn-outline-dark me-2">
                            Collection <i className="bi bi-chevron-compact-down" />
                        </button>
                        <button type="button" className="btn btn-outline-dark me-2">
                            Team <i className="bi bi-chevron-compact-down" />
                        </button>
                        <button type="button" className="btn btn-outline-dark me-2">
                            Fit <i className="bi bi-chevron-compact-down" />
                        </button>
                    </div>
                    <div>
                        <div className="btn-group">
                            <button
                                type="button"
                                className="btn btn-outline-dark dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Sort by
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <a onClick={() => dispatch(act_asc_newArrivals())} className="dropdown-item" href="#">
                                        Giá từ thấp đến cao
                                    </a>
                                </li>
                                <li>
                                    <a onClick={() => dispatch(act_desc_newArrivals())} className="dropdown-item" href="#">
                                        Giá từ cao đến thấp
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <h5 className="my-4">PRODUCT</h5>
                <div className="list-card d-flex flex-wrap justify-content-center">
                    {listNewArrivals.map((newArrivals) => {
                        return <div key={newArrivals.id} className="card mx-2 my-2 border border-secondary" style={{ width: "21rem" }}>
                            <img
                                src={newArrivals.image}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title title-product">{newArrivals.name}</h5>
                                <p className="card-text">${newArrivals.price}</p>
                                <button onClick={() => handleChangePage(newArrivals)} className="btn btn-dark">
                                    view
                                </button>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <nav className='navigation my-4' aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">«</span>
                        </a>
                    </li>
                    <li className="page-item">
                        <a onClick={()=>dispatch(act_paging1_newArrivals())} className="page-link" href="#">
                            1
                        </a>
                    </li>
                    <li className="page-item">
                        <a onClick={()=>dispatch(act_paging2_newArrivals())} className="page-link" href="#">
                            2
                        </a>
                    </li>
                    <li className="page-item">
                        <a onClick={()=>dispatch(act_paging3_newArrivals())} className="page-link" href="#">
                            3
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">»</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
