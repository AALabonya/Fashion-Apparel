import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const UpdateProduct = () => {

    const updateData = useLoaderData()

    const { _id, name, image, brand, type, price, rating } = updateData || {}

    const handleUpdateProduct = event => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const updateItems = {
            name: formData.get('name'),
            image: formData.get('image'),
            brand: formData.get('brand'),
            type: formData.get('type'),
            price: formData.get('price'),
            rating: formData.get('rating'),
        };
       

        fetch(`http://localhost:5000/product/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateItems)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    swal("Good job!", "You update product successfully!", "success");

                }
            })

    }


    return (
        <div className="mt-28">
            <div className="flex justify-center">
                <div className="bg-pink-300 p-12 w-[900px]">
                    <h2 className="text-3xl font-extrabold text-center">Update Product</h2>
                    <form onSubmit={handleUpdateProduct}>
                        <div className="md:flex gap-10 mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="name" defaultValue={name} placeholder="Name" className="w-full input input-bordered" />
                                </label>
                            </div>

                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="image" defaultValue={image} placeholder="image" className="w-full input input-bordered" />
                                </label>
                            </div>
                        </div>

                        <div className="md:flex gap-10 mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <select
                                    name="brand"
                                    required
                                    className="border p-2 w-full"

                                >
                                    <option value={brand}>{brand}</option>

                                </select>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Type</span>
                                </label>
                                <label className="input-group">
                                    <input name="type" defaultValue={type} required className="w-full input input-bordered" />
                                </label>
                            </div>

                        </div>
                        <div className="md:flex gap-10 mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <label className="input-group">
                                    <input type="number" name="rating" defaultValue={rating} step="0.1" className="w-full input input-bordered" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <label className="input-group">
                                    <input type="number" name="price" defaultValue={price} className="w-full input input-bordered" />
                                </label>
                            </div>
                        </div>
                        <input type="submit" value="Submit button" className="btn btn-block" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;