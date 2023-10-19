import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
// import Login from "../Login/Login";

const MyCart = () => {

    const cart = useLoaderData()
    console.log(cart);
    const[users, setUsers] = useState(cart)
    const handleDelete= id =>{
        fetch(`http://localhost:5000/cart/${id}`,{
            method:"DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount >0){
               swal("Good job!", "Deleted Successfully!", "success");
                const remainingUsers = users.filter(user=> user._id !== id)
                setUsers(remainingUsers)
            }
        })
    }


    return (
        <div className="mt-32">
                 <div className="overflow-x-auto p-5">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Image</th>
        <th>Brand</th>
        <th>Type</th>
        <th>Price</th>
        <th>Rating</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
       {
        users.map(add=> <tr key={add._id}>
            <th>{add.name}</th>
            <td>{add.image}</td>
            <td>{add.brand}</td>
            <td>{add.type}</td>
            <td>{add.price}</td>
            <td>{add.rating}</td>
            <td>
                <button onClick={()=>handleDelete(add._id)} className="btn"><img src="https://i.ibb.co/2k7vTG4/delete-icon-image-15.png" className="w-8" alt="" /></button>
            </td>
          </tr>)
       }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyCart;