import React, { useEffect } from 'react'

import { useState } from "react";
import { storage } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useDispatch } from 'react-redux';
import { act_post_newArrivals } from '../../redux/actions';
import { useLocation, useNavigate } from 'react-router-dom';
export default function CreateProduct() {
    
    const [imageUpload, setImageUpload] = useState("");
    const [imageUrls, setImageUrls] = useState("");
    // Upload ảnh
    // lấy ảnh về
    // hiển thị ảnh
    // Tạo storage lưu trữ từ dịch vụ của firebase
    const imagesListRef = ref(storage, "images/")
    // Viết hàm upload
    const uploadFile = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrls(url);
            });
        });
    };
    // Lấy dữ liệu trả về từ firebase
    // useEffect(() => {
    //     listAll(imagesListRef).then((res) => {
    //         res.items.forEach((item) => {
    //             getDownloadURL(item).then((url) => {
    //                 setImageUrls(url);
    //             });
    //         });
    //     });
    // }, []);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const handleCreate = () => {
        dispatch(act_post_newArrivals({ image: imageUrls, name, price }))
        navigate('/admin/listProduct')
    }
    return (
        <div className='m-auto text-center'>
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
                    <div><img src={imageUrls} width="100" /></div>
                    <button className='mb-3' onClick={uploadFile}> Upload Image</button>
                    {/*end*/}
                    <div className="input-group mb-3">
                        <span className="input-group-text">Name</span>
                        <input
                            onChange={(e) => setName(e.target.value)}
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
                        className="btn btn-primary menu_product-btn mb-3"
                    >
                        Creat
                    </button>
                </div>
            </div>
        </div>
    )
}
