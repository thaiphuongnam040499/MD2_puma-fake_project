import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { act_get_cart } from '../redux/actions'
import Cart from './Cart';
export default function ShoppingCart() {
    let product = useSelector(state => state.carts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(act_get_cart())
    }, [])
    let total= product.reduce((sum,cart)=>sum+cart.quantity*cart.price,0)

    return (
        <div className='shopping_cart'>
            <section className="h-100 h-custom" style={{ backgroundColor: "#d2c9ff" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12">
                            <div
                                className="card card-registration card-registration-2"
                                style={{ borderRadius: 15 }}
                            >
                                <div className="card-body p-0">
                                    <div className="row g-0">
                                        <div className="col-lg-8">
                                            <div className="p-5">
                                                <div className="d-flex justify-content-between align-items-center mb-5">
                                                    <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                                                </div>
                                                <hr className="my-4" />
                                                {
                                                    product.map((pro) => {
                                                        return <Cart key={pro.id} pro={pro}/>
                                                    })
                                                }
                                                <hr className="my-4" />
                                                <div className="pt-5">
                                                    <h6 className="mb-0">
                                                        <NavLink to={"/shop"} href="#!" className="text-body">
                                                            <i className="fas fa-long-arrow-alt-left me-2" />
                                                            Back to shop
                                                        </NavLink>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 bg-grey">
                                            <div className="p-5">
                                                <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                                                <hr className="my-4" />
                                                <div className="d-flex justify-content-between mb-4">
                                                    <h5 className="text-uppercase">items {product.length}</h5>
                                                </div>
                                                <hr className="my-4" />
                                                <div className="d-flex justify-content-between mb-5">
                                                    <h5 className="text-uppercase">Total price</h5>
                                                    <h5>{total}$</h5>
                                                </div>
                                                <button
                                                    type="button"
                                                    className="btn btn-dark btn-block btn-lg"
                                                    data-mdb-ripple-color="dark"
                                                >
                                                    BUY
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
