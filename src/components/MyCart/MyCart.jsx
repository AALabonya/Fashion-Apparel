import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../AuthProvider/AuthProvider";
// import Login from "../Login/Login";

const MyCart = () => {
 const{user}=useContext(AuthContext)
    const cart = useLoaderData()
    console.log(cart);
    const[users, setUsers] = useState([])

    useEffect(()=>{
      const findData =cart.filter(data=> data.email === user.email)
      setUsers(findData)
    },[cart, user.email])

    const handleDelete= id =>{
        fetch(` https://fashion-and-apparel-server-site-1qk4q61kx.vercel.app/cart/${id}`,{
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
        <div className="mt-5 md:mt-32 lg:mt-32 flex justify-center">

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                users.map(select => <div key={select._id} className="card lg:w-96 bg-base-100 shadow-xl">
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