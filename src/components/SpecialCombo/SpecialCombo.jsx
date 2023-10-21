import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle'
const SpecialCombo = () => {
    const [specialProduct, setSpecialProduct] = useState([])

    useEffect(()=>{
        fetch("/specialData.json")
        .then(res=>res.json())
        .then(data=>setSpecialProduct(data))
    },[])
    return (
        <div>
             <div className='overflow-x-hidden'>
            <p className="text-center font-bold">New Arrivals</p>
            <h1 className="text-center font-bold mt-2 text-4xl mb-2">Special Combo Set</h1>

            <section className='col-span-2 overflow-x-hidden' data-aos="zoom-in" data-aos-delay="0"
        data-aos-easing="ease" data-aos-duration="500">
                <Swiper

                    breakpoints={{
                        570: { slidesPerView: 1, spaceBetween: 40 },
                        768: { slidesPerView: 2, spaceBetween: 10 },
                        1152: { slidesPerView: 3.5, spaceBetween: 50 }
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Navigation, Pagination, A11y]}
                >
                    {
                        specialProduct?.map(product => <SwiperSlide key={product.id}>
                            <div className="card bg-base-100 shadow-xl  mb-4">
                                <figure className="px-10 pt-10 h-70">
                                    <img src={product.image} alt="Shoes" className="rounded-xl h-52" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{product.brandName}</h2>
                                    <p>${product.price}</p>
                                    <div className="card-actions">
                                        <button className="btn bg-pink-600 text-white">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }



                </Swiper>



            </section>


        </div>
        </div>
    );
};

export default SpecialCombo;