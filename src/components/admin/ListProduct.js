
import React, { useEffect, useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { act_delete_newArrivals, act_get_product, act_search_newArrivals} from '../../redux/actions'
export default function ListProduct() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [search,setSearch] = useState()
    useEffect(() => {
        dispatch(act_get_product())
    }, []);
    const listProduct = useSelector(state => state.newArrivals)
    const handleEdit=(product)=>{
        navigate('/admin/updateProduct',{state:product})
        
    }
  return (
    <div className=' text-center w-100 mt-5'>
        <h2>List Product</h2>
        <div className='mb-3'>
        
          <input
          onChange={(e)=>setSearch(e.target.value)}
            className=""
            type="text"
            placeholder="SEARCH PUMA.COM"
          />
          <button onClick={()=>dispatch(act_search_newArrivals(search))}>SEARCH</button>
        </div>
        <div className="rounded col-12" id="list-product">
                        <table className="table table-product">
                            <thead>
                                <tr className="table-primary">
                                    <th scope="col">STT</th>
                                    <th scope="col">Img</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th colSpan={'2'} scope="col">Actions</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    listProduct.map((product, index) => {
                                        return <tr key={product.id}>
                                            <td>{index + 1}</td>
                                            <td><img width={50} src={product.image} /></td>
                                            <td>{product.name}</td>
                                            <td>${product.price}</td>
                                            <td><button onClick={()=>handleEdit(product)} className='btn btn-success'>Edit</button></td>
                                            <td><button onClick={() => dispatch(act_delete_newArrivals(product.id))} className='btn btn-danger'>Delete</button></td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
    </div>
  )
}
