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
                            alt="tania andrew"
                            src="https://i.ibb.co/DfHL58g/doctor4.jpg"
                            className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center"
                        />
                        <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                            Tania Andrew
                        </h5>
                        <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                            How we design and code open-source projects?
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
                        <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                            How we design and code open-source projects?
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
                            src="https://i.ibb.co/DfHL58g/doctor4.jpg"
                            className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center"
                        />
                        <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                            Tania Andrew
                        </h5>
                        <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                            How we design and code open-source projects?
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
                            src="https://i.ibb.co/DfHL58g/doctor4.jpg"
                            className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center"
                        />
                        <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                            Tania Andrew
                        </h5>
                        <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                            How we design and code open-source projects?
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
                        <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                            How we design and code open-source projects?
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
                            src="https://i.ibb.co/DfHL58g/doctor4.jpg"
                            className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center"
                        />
                        <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                            Tania Andrew
                        </h5>
                        <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                            How we design and code open-source projects?
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
                        <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                            How we design and code open-source projects?
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
                            src="https://i.ibb.co/DfHL58g/doctor4.jpg"
                            className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center"
                        />
                        <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                            Tania Andrew
                        </h5>
                        <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                            How we design and code open-source projects?
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
                        <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                            How we design and code open-source projects?
                        </h2>
                        
                        
                    </div>
                </div>
            </div></SwiperSlide>
      </Swiper>



       </div>
 
    );
};

export default ClientReview;