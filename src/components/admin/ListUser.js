
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { act_get_user } from '../../redux/actions'
export default function ListUser() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(act_get_user())
    }, []);
    const listUser = useSelector(state => state.users)
    return (
        <div className=' text-center w-100 mt-5'>
            <div className="container admin-list">
                <h2>List User</h2>
                <div className="showListUser">
                    <table className="table table-product">
                        <tbody>
                            <tr className="table-primary">
                                <th scope="col">STT</th>
                                <th scope="col">Tên người dùng</th>
                                <th scope="col">Địa chỉ email</th>
                                <th scope="col">Địa chỉ</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Block</th>
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
                                        <td><button className='btn btn-warning'>Block</button></td>
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
