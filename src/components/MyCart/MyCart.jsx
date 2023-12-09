import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
// import Login from "../Login/Login";

const MyCart = () => {
 const{user}=useContext(AuthContext)
    const cart = useLoaderData()
    const[users, setUsers] = useState([])

    useEffect(()=>{
      const findData =cart.filter(data=> data.email === user.email)
      console.log(findData);
      setUsers(findData)
    },[cart, user.email])

    const handleDelete= id =>{
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
        fetch(`  https://fashion-and-apparel-server-site-2aszh855y.vercel.app/cart/${id}`,{
            method:"DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount >0){
             Swal.fire(
                'Deleted!',
                'Your Product has been deleted.',
                 'success')
                const remainingUsers = users.filter(user=> user._id !== id)
                setUsers(remainingUsers)
            }
          
        })

      }
    })
    }


    return (
        <div className="mt-5 flex justify-center">

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                users?.map(select => <div key={select._id} className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img src={select.image} alt="Shoes" className="rounded-xl h-[200px]" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Name: {select.name}</h2>
                  <div className="flex gap-14"> <p>Brand Name: {select.brand}</p>
                  <p>Type:{select.type}</p>
                  </div>
                  <div className="flex gap-14"> <p>Price: {select.price}</p>
                  <p>Rating:{select.rating}</p></div>
                  <div className="">
                  <button onClick={()=>handleDelete(select._id)} className="btn"><img src="https://i.ibb.co/2k7vTG4/delete-icon-image-15.png" className="w-8" alt="" /></button>
                  </div>
                </div>
              </div>)
            }
           </div>

        </div>
    );
};

export default MyCart;