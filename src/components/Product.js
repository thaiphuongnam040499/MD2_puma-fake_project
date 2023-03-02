import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { act_post_cart } from '../redux/actions'

export default function Product() {
 const products = useLocation().state
 const dispatch = useDispatch()
 const navigate = useNavigate()
 const handleCreate = ()=>{
  let user = JSON.parse(localStorage.getItem("users"))
  if (user == null){
    alert('hãy đăng nhập để mua sản phẩm')
    navigate("/login")
  }else{
  dispatch(act_post_cart(user.id,products))
  navigate("/shoppingCart")
 }
}
  return (
    <div className='products'>
      <div className="container  mt-5 mb-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10">
               <div key={products.id} className="card">
                <div className="row  border border-secondary">
  
                  <div className="col-md-6 d-flex justify-content-center align-items-center">
  
                    <div className="images p-3">
  
                      <div className="text-center p-4">
                        <img
                          id="main-image"
                          src={products.image}
                          width='100%'
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="product p-4">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          
                          <i className="fa fa-long-arrow-left" />
                          <span className="ml-1">Back</span>
                        </div>
                        <i className="fa fa-shopping-cart text-muted" />
                      </div>
                      <div className="mt-4 mb-3">
                        
                        <span className="text-uppercase text-muted brand">product</span>
                        <h5 className="text-uppercase">{products.name}</h5>
                        <div className="price d-flex flex-row align-items-center">
                          
                          <span className="act-price">${products.price}</span>
            
                        </div>
                      </div>
                      <p className="about">
                        Shop from a wide range of  shoes from PUMA. Pefect for your
                        everyday use, you could pair it with a stylish pair of jeans or
                        trousers complete the look.
                      </p>
                      <div className="sizes mt-5">
                        <h6 className="text-uppercase">Size</h6>
                        <label className="radio me-2 mb-2">
                          
                          <input
                            type="radio"
                            name="size"
                            
                            defaultChecked=""
                          />
                          <span>4</span>
                        </label>
                        <label className="radio me-2 mb-2">
                          <input type="radio" name="size"  />
                          <span>5</span>
                        </label>
                        <label className="radio me-2 mb-2">
                          
                          <input type="radio" name="size"  />
                          <span>6</span>
                        </label>
                        <label className="radio me-2 mb-2">
                          
                          <input type="radio" name="size"  />
                          <span>7</span>
                        </label>
                        <label className="radio me-2 mb-2">
                          
                          <input type="radio" name="size"  />
                          <span>8</span>
                        </label>
                        <label className="radio me-2 mb-2">
                          
                          <input type="radio" name="size"  />
                          <span>9</span>
                        </label>
                        <label className="radio me-2 mb-2">
                          
                          <input type="radio" name="size"  />
                          <span>10</span>
                        </label>
                        <label className="radio me-2 mb-2">
                          
                          <input type="radio" name="size"  />
                          <span>11</span>
                        </label>
                        <label className="radio me-2 mb-2">
                          
                          <input type="radio" name="size"  />
                          <span>12</span>
                        </label>
                        <label className="radio me-2 mb-2">
                          
                          <input type="radio" name="size"  />
                          <span>13</span>
                        </label>
                        <label className="radio me-2 mb-2">
                          
                          <input type="radio" name="size"  />
                          <span>14</span>
                        </label>
                        <label className="radio me-2 mb-2">
                          
                          <input type="radio" name="size"  />
                          <span>15</span>
                        </label>
                        <label className="radio me-2 mb-2">
                          
                          <input type="radio" name="size"  />
                          <span>16</span>
                        </label>
                        <label className="radio me-2 mb-2">
                          
                          <input type="radio" name="size"  />
                          <span>17</span>
                        </label>
                        <label className="radio me-2 mb-2">
                          
                          <input type="radio" name="size"  />
                          <span>18</span>
                        </label>
                      </div>
                      <div className="cart mt-4 align-items-center">
                        
                        <button 
                         onClick={handleCreate}
                        className="btn btn-danger text-uppercase mr-2 px-4">
                          Add to cart
                        </button>
                        <i className="fa fa-heart text-muted" />
                        <i className="fa fa-share-alt text-muted" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
          </div>
        </div>
      </div>

    </div>
  )
}
