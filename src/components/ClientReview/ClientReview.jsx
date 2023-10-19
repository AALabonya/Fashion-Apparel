import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle'


const ClientReview = () => {
    return (

        
       <div className='mt-10'>
 
          <h2 className='text-center mb-4 font-bold text-2xl'>Happy Customers Review</h2>
          
    
      
   

 
  <Swiper
   breakpoints={{
    570: { slidesPerView: 1, spaceBetween: 70 },
    768: { slidesPerView: 2, spaceBetween: 10 },
    1152: { slidesPerView: 2, spaceBetween: 50 }
}}
         centeredSlides={true}
         autoplay={{
           delay: 2500,
           disableOnInteraction: false,
         }}
         pagination={{
           clickable: true,
         }}
         modules={[Autoplay, Pagination,]}
         className="mySwiper"
      >
        <SwiperSlide> <div className="flex justify-center">
                <div className="relative grid h-[20rem] w-full max-w-[40rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-pink-900  bg-clip-border text-center text-gray-700">
                    <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-pink-900  bg-clip-border bg-center text-gray-700 shadow-none">
                        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                    </div>
                    <div className="relative p-6 px-6 py-14 md:px-12">

                    <img
                            alt="Labonya"
                            src="https://i.ibb.co/gFgPGYF/labonya-Copy.jpg"
                            className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center"
                        />
                        <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                            Labonya
                        </h5>
                        <h2 className="mb-6 block font-sans text-lg tracking-normal text-white antialiased">
                        VersatileStyles affordable dresses remind me of the Zara and H&M aesthetics. They are trendy, well-priced, and perfect for updating your wardrobe. I love the variety!
                        </h2>
                        
                        
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide><div className="flex justify-center">
                <div className="relative grid h-[20rem] w-full max-w-[40rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-pink-900  bg-clip-border text-center text-gray-700">
                    <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-pink-900  bg-clip-border bg-center text-gray-700 shadow-none">
                        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                    </div>
                    <div className="relative p-6 px-6 py-14 md:px-12">

                    <img
                            alt="Ikram Ul Sadi"
                            src="https://i.ibb.co/b6SNXZB/image.png"
                            className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center"
                        />
                        <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                            Ikram Ul Sadi
                        </h5>
                        <h2 className="mb-6 block font-sans text-lg tracking-normal text-white antialiased">
                        TopShops Tailored Blazer offers a Zara-esque style with a slight edge. It is well-tailored, versatile, and suitable for both work and casual occasions. A great addition to any wardrobe.
                        </h2>
                        
                        
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide><div className="flex justify-center">
                <div className="relative grid h-[20rem] w-full max-w-[40rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-pink-900  bg-clip-border text-center text-gray-700">
                    <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-pink-900  bg-clip-border bg-center text-gray-700 shadow-none">
                        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                    </div>
                    <div className="relative p-6 px-6 py-14 md:px-12">

                    <img
                            alt="Senjenaa"
                            src="https://i.ibb.co/DfHL58g/doctor4.jpg"
                            className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center"
                        />
                        <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                            Senjenaa
                        </h5>
                        <h2 className="mb-6 block font-sans text-lg tracking-normal text-white antialiased">
                        Louis Coutures Luxury Handbag is a statement piece that can rival any Gucci creation. The quality and craftsmanship are exquisite. It is a must-have for fashion-forward individuals
                        </h2>
                        
                        
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide><div className="flex justify-center">
                <div className="relative grid h-[20rem] w-full max-w-[40rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-pink-900  bg-clip-border text-center text-gray-700">
                    <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-pink-900  bg-clip-border bg-center text-gray-700 shadow-none">
                        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                    </div>
                    <div className="relative p-6 px-6 py-14 md:px-12">

                    <img
                            alt="Denial"
                            src="https://i.ibb.co/nCsNfNW/doctor1.webp"
                            className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center"
                        />
                        <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                            Denial
                        </h5>
                        <h2 className="mb-6 block font-sans text-lg tracking-normal text-white antialiased">
                        Levis enthusiasts out there, Wrangler Retro Straight jeans are a close match. They fit well, have that classic denim feel, and are durable.
                        </h2>
                        
                        
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide><div className="flex justify-center">
                <div className="relative grid h-[20rem] w-full max-w-[40rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-pink-900  bg-clip-border text-center text-gray-700">
                    <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-pink-900  bg-clip-border bg-center text-gray-700 shadow-none">
                        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                    </div>
                    <div className="relative p-6 px-6 py-14 md:px-12">

                    <img
                            alt="tania andrew"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                            className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center"
                        />
                        <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                            Tania Andrew
                        </h5>
                        <h2 className="mb-6 block font-sans text-lg tracking-normal text-white antialiased">
                        Levis enthusiasts out there, Wrangler Retro Straight jeans are a close match. They fit well, have that classic denim feel, and are durable. A reliable choice.
                        </h2>
                        
                        
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide><div className="flex justify-center">
                <div className="relative grid h-[20rem] w-full max-w-[40rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-pink-900  bg-clip-border text-center text-gray-700">
                    <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-pink-900  bg-clip-border bg-center text-gray-700 shadow-none">
                        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                    </div>
                    <div className="relative p-6 px-6 py-14 md:px-12">

                    <img
                            alt=" Conway"
                            src="https://i.ibb.co/9qM1Jyv/doctor2.webp"
                            className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center"
                        />
                        <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                            Conway
                        </h5>
                        <h2 className="mb-6 block font-sans text-lg tracking-normal text-white antialiased">
                         leather handbag is a stylish rival to Gucci offerings. The craftsmanship and design are impeccable. I love the attention to detail, and it a statement piece for any outfit
                        </h2>
                        
                        
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide><div className="flex justify-center">
                <div className="relative grid h-[20rem] w-full max-w-[40rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-pink-900  bg-clip-border text-center text-gray-700">
                    <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-pink-900  bg-clip-border bg-center text-gray-700 shadow-none">
                        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                    </div>
                    <div className="relative p-6 px-6 py-14 md:px-12">

                    <img
                            alt="tania andrew"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                            className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center"
                        />
                        <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                            Tania Andrew
                        </h5>
                        <h2 className="mb-6 block font-sans text-lg tracking-normal text-white antialiased">
                        The Reebok FlexiRun shoes are a fantastic alternative to the big brands. They provide excellent comfort and support for my runs. They are lightweight and stylish, making them a winner in my book!
                        </h2>
                        
                        
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide><div className="flex justify-center">
                <div className="relative grid h-[20rem] w-full max-w-[40rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-pink-900  bg-clip-border text-center text-gray-700">
                    <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-pink-900  bg-clip-border bg-center text-gray-700 shadow-none">
                        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                    </div>
                    <div className="relative p-6 px-6 py-14 md:px-12">

                    <img
                            alt="Senjenaa"
                            src="https://i.ibb.co/DfHL58g/doctor4.jpg"
                            className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center"
                        />
                        <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                        Senjenaa
                        </h5>
                        <h2 className="mb-6 block font-sans text-lg tracking-normal text-white antialiased">
                        slim-fit suit is an affordable alternative to Zara. It fits well, looks sharp, and the quality is surprisingly good for the price. A solid choice for fashion-conscious men.
                        </h2>
                        
                        
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide><div className="flex justify-center">
                <div className="relative grid h-[20rem] w-full max-w-[40rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-pink-900  bg-clip-border text-center text-gray-700">
                    <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-pink-900  bg-clip-border bg-center text-gray-700 shadow-none">
                        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                    </div>
                    <div className="relative p-6 px-6 py-14 md:px-12">

                    <img
                            alt=" Akila karim"
                            src="https://i.ibb.co/mbXDcNH/doctor3.jpg"
                            className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center"
                        />
                        <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                        Akila karim
                        </h5>
                        <h2 className="mb-6 block font-sans text-lg tracking-normal text-white antialiased">
                        Sustainable collection is giving H&M a run for its money. The range of eco-friendly options is impressive. They are trendy, affordable, and contribute to a greener planet.
                        </h2>
                        
                        
                    </div>
                </div>
            </div></SwiperSlide>
      </Swiper>



       </div>
 
    );
};

export default ClientReview;