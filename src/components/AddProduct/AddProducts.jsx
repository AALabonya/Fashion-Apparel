/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import swal from 'sweetalert';
const AddProducts = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const product = {
            image: formData.get('image'),
            name: formData.get('name'),
            brand: formData.get('brand'),
            type: formData.get('type'),
            price: formData.get('price'),
            description: formData.get('description'),
            rating: formData.get('rating'),
        };
      

        fetch("http://localhost:5000/product", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    swal("Good job!", "Your product added successfully!", "success");

                }
            })

        e.target.reset()
    };


    return (
        <div className="lg:mt-28">
            <div className="flex justify-center">
            <div className="bg-pink-300 p-12 w-[900px]">
            <h2 className="text-3xl font-extrabold text-center">Add Product</h2>
            <form onSubmit={handleSubmit}>
               <div className="md:flex gap-10 mb-8">
               <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" placeholder="Name" className="w-full input input-bordered" />
                    </label>
                </div>

                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="image" placeholder="image" className="w-full input input-bordered" />
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
                            <option value="Nike">Nike</option>
                            <option value="Adidas">Adidas</option>
                            <option value="Gucci">Gucci</option>
                            <option value="Zara">Zara</option>
                            <option value="H&M">H&M</option>
                            <option value="Levis">Levis</option>
                            
                        </select>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Type</span>
                    </label>
                    <label className="input-group">
                        <input name="type" required className="w-full input input-bordered" />
                    </label>
                </div>
                
               </div>
               {/* from category and details row */}
               <div className="md:flex gap-10 mb-8">
               <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">
                        <input type="number" name="rating" step="0.1" className="w-full input input-bordered" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
                        <input type="number" name="price" className="w-full input input-bordered" />
                    </label>
                </div>
                
               </div>
               <div className="form-control md:w-full mb-6">
                    <label className="label">
                        <span className="label-text"> Short Description:</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="description" className="w-full input input-bordered" />
                    </label>
                </div>
               <input type="submit" value="Add Button"  className="btn btn-block"/>
               
            </form>
        </div>
            </div>
        </div>
        // <div className="max-w-lg mx-auto p-4 lg:mt-32 border bg-pink-800 rounded-md">
        //     <h1 className="text-3xl font-bold mb-4 text-center text-white">Add Product</h1>
        //     <form onSubmit={handleSubmit}>
        //         <div className='flex justify-between '>
        //             <div className="mb-4">
        //                 <label className="block text-sm font-medium text-white">Image:
        //                 </label>
        //                 <input type="text" name="image" required className="border p-2 w-full" />
        //             </div>

        //             <div className="mb-4">
        //                 <label className="block text-sm font-medium text-white">
        //                     Name:
        //                 </label>
        //                 <input type="text" name="name" required className="border p-2 w-full"
        //                 />
        //             </div>
        //         </div>

        //         <div className='flex justify-between'>
        //             <div className="mb-4">
        //                 <label className="block text-sm font-medium text-white">
        //                     Brand Name:
        //                 </label>
        //                 <select
        //                     name="brand"
        //                     required
        //                     className="border p-2 w-full"

        //                 >
        //                     <option value="Nike">Nike</option>
        //                     <option value="Adidas">Adidas</option>
        //                     <option value="Gucci">Gucci</option>
        //                     <option value="Zara">Zara</option>
        //                     <option value="H&M">H&M</option>
        //                     <option value="Levis">Levis</option>
                           
        //                 </select>
        //             </div>

        //             <div className="mb-4">
        //                 <label className="block text-sm font-medium text-white">
        //                     Type:
        //                 </label>
        //                 <input name="type" required className="border p-2 w-full " />
        //             </div>
        //         </div>

        //         <div className="mb-4">
        //             <label className="block text-sm font-medium text-white">
        //                 Price:
        //             </label>
        //             <input type="number" name="price" required className="border p-2 w-full" />
        //         </div>

        //         <div className="mb-4">
        //             <label className="block text-sm font-medium text-white">
        //                 Short Description:
        //             </label>
        //             <textarea name="description" required className="border p-2 w-full" />
        //         </div>

        //         <div className="mb-4">
        //             <label className="block text-sm font-medium text-white">
        //                 Rating:
        //             </label>
        //             <input type="number" name="rating" step="0.1" required className="border p-2 w-full"
        //             />
        //         </div>

        //         <div className="mb-4 text-center">
        //             <button type="submit" className="bg-white text-black px-4 py-2 rounded-md">
        //                 Add Button
        //             </button>
        //         </div>
        //     </form>
        // </div>
    );
};


export default AddProducts;


