import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { act_delete_newArrivals, act_get_product, act_get_user, act_post_newArrivals } from '../redux/actions'
import { useState } from "react";
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
export default function Admin() {
    const [imageUpload, setImageUpload] = useState(null);
    // Upload ảnh
    // lấy ảnh về
    // hiển thị ảnh
    // Tạo storage lưu trữ từ dịch vụ của firebase
    const imagesListRef = ref(storage, "images/");
    // Viết hàm upload
    const uploadFile = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrls((prev) => [...prev, url]);
            });
        });
    };
    // Lấy dữ liệu trả về từ firebase
    useEffect(() => {
        listAll(imagesListRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageUrls((prev) => [...prev, url]);
                });
            });
        });
    }, []);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(act_get_user())
    }, []);
    useEffect(() => {
        dispatch(act_get_product())
    }, []);
    const listUser = useSelector(state => state.users)
    const listProduct = useSelector(state => state.newArrivals)
    const [imageUrls, setImageUrls] = useState([]);
    const [name, setNameProduct] = useState("")
    const [price, setPrice] = useState("")
    const handleCreate = () => {
        dispatch(act_post_newArrivals({name, price }))
    }
    return (
        <div className='d-flex'>
            <div
                className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark admin"
                style={{ width: 280 }}
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
                        <a href="#" className="nav-link active" aria-current="page">
                            <svg className="bi me-2" width={16} height={16}>
                                <use xlinkHref="#home" />
                            </svg>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <svg className="bi me-2" width={16} height={16}>
                                <use xlinkHref="#speedometer2" />
                            </svg>
                            ListUser
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <svg className="bi me-2" width={16} height={16}>
                                <use xlinkHref="#table" />
                            </svg>
                            ListProduct
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <svg className="bi me-2" width={16} height={16}>
                                <use xlinkHref="#grid" />
                            </svg>
                            Products
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <svg className="bi me-2" width={16} height={16}>
                                <use xlinkHref="#people-circle" />
                            </svg>
                            Customers
                        </a>
                    </li>
                </ul>
                <hr />
                <div className="dropdown">
                    <a
                        href="#"
                        className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                        id="dropdownUser1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <img
                            src="https://github.com/mdo.png"
                            alt=""
                            width={32}
                            height={32}
                            className="rounded-circle me-2"
                        />
                        <strong>mdo</strong>
                    </a>
                    <ul
                        className="dropdown-menu dropdown-menu-dark text-small shadow"
                        aria-labelledby="dropdownUser1"
                    >
                        <li>
                            <a className="dropdown-item" href="#">
                                New project...
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Settings
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Profile
                            </a>
                        </li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Sign out
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container admin-list">
                <div className="row showList">
                    <div
                        className="rounded col-12"

                        id="list-product"
                    >
                        <h3 style={{ color: "#311818" }}>Thêm sản phẩm vào cửa hàng</h3>
                        {/*update image*/}
                        <input
                            type='file'
                            onChange={(e) => {
                                setImageUpload(e.target.files[0]);
                            }}
                        />
                        <button onClick={uploadFile}> Upload Image</button>
                        {/*end*/}
                        <div className="input-group mb-3">
                            <span className="input-group-text">Name</span>
                            <input
                                onChange={(e) => setNameProduct(e.target.value)}
                                type="text"
                                className="form-control"
                                id="nameProduct"
                                placeholder="name product"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text">Price</span>
                            <input
                                onChange={(e) => setPrice(e.target.value)}
                                type="number"
                                className="form-control"
                                id="price"
                                placeholder="price"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                        <button
                            onClick={handleCreate}
                            type="button"
                            className="btn btn-primary menu_product-btn"
                        >
                            Creat
                        </button>
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
                                            <td>{product.image}</td>
                                            <td>{product.name}</td>
                                            <td>{product.price}</td>
                                            <td><button className='btn btn-success'>Edit</button></td>
                                            <td><button onClick={()=>dispatch(act_delete_newArrivals(product.id))} className='btn btn-danger'>Delete</button></td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="showListUser">
                    <table className="table table-product">
                        <tbody>
                            <tr className="table-primary">
                                <th scope="col">STT</th>
                                <th scope="col">Tên người dùng</th>
                                <th scope="col">Địa chỉ email</th>
                                <th scope="col">Địa chỉ</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </tbody>
                        <tbody>
                            {
                                listUser.map((user, index) => {
                                    return <tr key={user.id}>
                                        <td>{index + 1}</td>
                                        <td>{user.userName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.address}</td>
                                        <td>{user.phone}</td>
                                        <td><button>Delete</button></td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>

    )
}
