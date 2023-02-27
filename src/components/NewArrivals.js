import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { act_get_newArrivals } from '../redux/actions'
export default function NewArrivals() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(act_get_newArrivals())
    },[])
    const listNewArrivals = useSelector(state=>state.newArrivals)
    return (
        <div className=''>
            <div className="menu mx-4">
                <h2 className="my-5">SHOP ALL NEW ARRIVALS</h2>
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
                        <button type="button" className="btn btn-outline-dark me-2">
                            Sort by <i className="bi bi-chevron-compact-down" />
                        </button>
                    </div>
                </div>
                <h5 className="my-4">PRODUCT</h5>
                <div className="list-card d-flex flex-wrap justify-content-center">
                    {listNewArrivals.map((newArrivals)=>{
                        return <div className="card mx-2 my-2 border border-secondary" style={{ width: "21rem" }}>
                        <img
                            src={newArrivals.image}
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">{newArrivals.productName}</h5>
                            <p className="card-text">{newArrivals.price}</p>
                            <NavLink to={'/product'} href="#" className="btn btn-dark">
                                new
                            </NavLink>
                        </div>
                    </div>
                    })}
                </div>
            </div>
        </div>
    )
}
