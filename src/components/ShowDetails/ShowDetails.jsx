import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const ShowDetails = () => {
    const showData = useLoaderData()
    const{user} =useContext(AuthContext)

    const id = useParams()
    const [details, setDetails] = useState([])

    useEffect(() => {
        const findData = showData.find(show => show._id == id.id)
        console.log(findData);
        setDetails(findData)
    }, [showData, id])

    const myCart = {
        name: details.name,
        image: details.image,
        brand: details.brand,
        type: details.type,
        price: details.price,
        rating: details.rating,
        email: user.email
    }

    
    const handleDetails = () => {

        fetch(` https://fashion-and-apparel-server-site-2aszh855y.vercel.app/cart`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(myCart)
        })
            .then(res => res.json())
            .then(data => {
               
                if (data.insertedId) {
                    swal("Good job!", "Your product added successfully!", "success");

                }
            })
    }

    return (

        <div className="flex justify-center">
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={details.image} alt="image" /></figure>






                
                <div className="card-body">
                    <h3 className="card-title">Name: {details.name}</h3>
                    <div className="flex justify-between"><h2 className="card-title">Brand Name: {details.brand}</h2> <h2 className="card-title bg-pink-700 badge text-white">{details.rating}</h2></div>
                    <h5 className="font-bold text-lg">Type: {details.type}</h5>
                    <p className="text-lg"><span className="lg:font-medium">Description:</span> {details.description}</p>
                    <h5 className="font-bold text-lg">Price :$ {details.price}</h5>
                    <div className="card-actions justify-center">
                        <button onClick={handleDetails} className="btn bg-pink-800 text-white">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowDetails;