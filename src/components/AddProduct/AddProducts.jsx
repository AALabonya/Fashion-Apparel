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
      

        fetch("  https://fashion-and-apparel-server-site-2aszh855y.vercel.app/product", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal("Good job!", "Your product added successfully!", "success");

                }
            })

        e.target.reset()
    };


    return (
        <div className="">
            <div className="flex justify-center">
            <div className="bg-pink-300 p-12">
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
        
    );
};


export default AddProducts;

<div className="">
<div className="flex justify-center">
<div className="bg-pink-300 p-12">
<h2 className="text-3xl font-extrabold text-center">Add Product</h2>
<form>
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
