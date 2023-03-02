import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { act_delete_cart, act_patch_cart } from '../redux/actions'

export default function Cart(props) {
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)
    let { pro } = props
    useEffect(() => {
        setQuantity(pro.quantity)
    }, [pro])
    const handleEdit = () => {
        dispatch(act_patch_cart({ id: pro.id, quantity }))
    }
    return (
        <div className="row mb-4 d-flex justify-content-between align-items-center">

            <div className="col-md-2 col-lg-2 col-xl-2">

                <img
                    src={pro.image}
                    className="img-fluid rounded-3"
                    alt="Cotton T-shirt"
                />
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
                <h6 className="text-black mb-0">{pro.name}</h6>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                <button
                    className="btn btn-link px-2"

                >
                    <i className="fas fa-minus" />
                </button>
                <input
                    id="form1"
                    min={0}
                    name="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    type="number"
                    className="form-control form-control-sm"
                />
                <button
                    className="btn btn-link px-2"

                >
                    <i className="fas fa-plus" />
                </button>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h6 className="mb-0">${pro.price * quantity}</h6>
            </div>
            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                <button onClick={handleEdit} className='btn btn-success'><i className="bi bi-pencil-square"></i></button>
            </div>
            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                <button onClick={() => dispatch(act_delete_cart(pro.id))} className='btn btn-danger'><i className="bi bi-trash3"></i></button>
            </div>
        </div>
    )
}
