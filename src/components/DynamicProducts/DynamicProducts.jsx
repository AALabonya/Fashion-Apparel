/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

AOS.init();
const DynamicProducts = () => {

const loaderData = useLoaderData()

const loadedId = useParams()


const [display, setDisplay]= useState([])
     
       useEffect(()=>{
         const detailData = loaderData.filter(data=> data.brand == loadedId.name )
        setDisplay(detailData)
       },[loaderData, loadedId])
    


    return (
        <div className='overflow-x-hidden lg:mt-20 mt-10' data-aos="zoom-in" >
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        navigation={true}
        modules={[Navigation, A11y]}
        className="mySwiper">

        <SwiperSlide>
          <div className='overflow-x-hidden' data-aos="zoom-in">
            <div className="relative mx-auto overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                src="https://i.ibb.co/rsVk3Cg/composition-black-friday-elements-black-background-23-2148665517.jpg "
                alt="img-blur-shadow" className="w-[1600px] h-[600px]" />
            </div>
            <div>
              <div className='text-center flex justify-center overflow-x-hidden'>
                <div data-aos="zoom-in"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine" data-aos-duration="1000" className='absolute top-60 overflow-x-hidden'>

                  <h1 className='font-bold text-white text-xl lg:text-5xl mb-2'>Welcome To Our Yoga and and Fitness Retreats center.</h1>
                  <p className='font-semibold overflow-x-hidden text-white text-xs lg:text-xl'>You are welcome to visit our center where every person is treated with high attention</p>
                </div>

              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div data-aos="zoom-in-left">
            <div className="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                src="https://i.ibb.co/kgWB3tZ/5f79ec265c5fc82bf5c237f9e41aabf2.jpg"
                alt="img-blur-shadow" className="w-[1600px] h-[600px]" />
            </div>
            <div>
              <div className='text-center flex justify-center '>
                <div className='absolute top-60'>
                  <h1 className='font-bold text-white lg:text-5xl mb-2'> A complete Workout from head to toes.</h1>
                  <p className='font-semibold text-white lg:text-xl'>If you need advice on therapies , please contact use and we will be happy to assist you.</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                src="https://i.ibb.co/0B2y2vK/men-s-accessories-160204-1734.jpg"
                alt="img-blur-shadow" className="w-[1600px] h-[600px]" />
            </div>
            <div>
              <div className='text-center flex justify-center '>
                <div className='absolute top-60'>
                  <h1 className='font-bold text-white lg:text-5xl mb-2'> Keeping Your Mind in Best Condition.</h1>
                  <p className='font-semibold text-white lg:text-xl'>We offer diverse health programs that included physical exercise, nutrition plans, yoga and meditation classes.</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
       
       
        

      </Swiper>

         <p>{display.length >0 ? "" : "No data found"}</p>

      {
        display.map(data=><div className='grid grid-cols-2 gap-10'>
        <div  className="card w-96 bg-base-100 shadow-xl">
          <figure><img src={data.image} alt="Shoes" /></figure>
          <div className="card-body">
           <h2 className="card-title">
           {data.brand}
             <div className="badge badge-secondary ml-32">{data.rating}</div>
           </h2>
           <p>{data.name} <br/><span className=''>{data.type}</span></p>
           <div className="card-actions justify-between">
             <Link to={`/showDetails/${data._id}`}><div className="badge badge-outline">Details Button </div></Link> 
            <Link to={`/updateProduct/${data._id}`}> <div className="badge badge-outline">Update button</div></Link>
           </div>
         </div>
       </div>
   
    </div>)
      }

   

    </div>
  );
};

export default DynamicProducts;