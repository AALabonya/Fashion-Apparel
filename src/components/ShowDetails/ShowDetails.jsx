import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ShowDetails = () => {
    const showData = useLoaderData()
    const id = useParams()
    const [details, setDetails] = useState([])

    useEffect(() => {
        const findData = showData.find(show => show._id == id.id)
        setDetails(findData)
    }, [showData, id])

    console.log(details);

    const handleDetails = (data) => {

        fetch(`http://localhost:5000/cart`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })


    }


    return (

        <div className="mt-32 flex justify-center">
            <div className="card card-compact w-96 lg:w-[500px] bg-base-100 shadow-xl">
                <figure><img src={details.image} alt="image" /></figure>
                <div className="card-body">
                    <h3 className="card-title">{details.brand}</h3>
                    <div className="flex justify-between"><h2 className="card-title">{details.name}</h2> <h2 className="card-title">{details.rating}</h2></div>
                    <p>{details.description}</p>
                    <h5 className="font-bold text-lg">Price :$ {details.price}</h5>
                    <div className="card-actions justify-center">

                        <button onClick={() => handleDetails(details)} className="btn bg-pink-800 text-white">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowDetails;