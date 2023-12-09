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


  const [display, setDisplay] = useState([])

  useEffect(() => {
    const detailData = loaderData?.filter(data => data.brand == loadedId.name)
    console.log(detailData);
    setDisplay(detailData)
  }, [loaderData, loadedId])



  return (
    <div className='overflow-x-hidden' data-aos="zoom-in" >
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

                  <h1 className='font-bold text-pink-700 text-xl lg:text-5xl mb-2'>Perfect Fusion of Style</h1>
                  <p className='font-semibold overflow-x-hidden text-white text-xs lg:text-xl'>Discover the perfect blend of style and performance with iconic brands like Nike and Adidas.<br /> Elevate your fashion game with the luxury of Gucci and the latest trends from Zara, H&M, and Levis. </p>
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
                <h1 className='font-bold text-pink-700 text-xl lg:text-5xl mb-2'>Perfect Fusion of Style</h1>
                  <p className='font-semibold overflow-x-hidden text-white text-xs lg:text-xl'>Discover the perfect blend of style and performance with iconic brands like Nike and Adidas.<br /> Elevate your fashion game with the luxury of Gucci and the latest trends from Zara, H&M, and Levis. </p>
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
                <h1 className='font-bold text-pink-700 text-xl lg:text-5xl mb-2'>Perfect Fusion of Style</h1>
                  <p className='font-semibold overflow-x-hidden text-white text-xs lg:text-xl'>Discover the perfect blend of style and performance with iconic brands like Nike and Adidas.<br /> Elevate your fashion game with the luxury of Gucci and the latest trends from Zara, H&M, and Levis. </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
      <div className='flex justify-center mt-10'>

        <p className='text-6xl font-bold'>{display?.length > 0 ? "" : "No data found"}</p>

        <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-10 '>
        {
         display?.map(data => <div key={data._id}>
            
            <div className="card bg-base-100 shadow-xl">
              <figure><img src={data?.image} alt="Shoes" className='w-[200px] h-[180px] md:w-[280px] md:h-[250px] lg:w-[400px] lg:h-[300px] rounded-md'/></figure>
              <div className="card-body">
                <h2 className="card-title text-lg flex justify-between">
                <div> Brand: {data?.brand}</div>
                 <div className="badge bg-pink-800 text-white ">{data?.rating}</div>
                </h2>
                <div>
                <p ><span className='font-bold'>Name:</span> {data?.name}</p>
                <p className=''><span className='font-bold' >Type :</span> {data?.type}</p>
                <p className=''><span className='font-bold' >Price : $</span> {data?.price}</p>
                </div>
                <div className="card-actions justify-between">
                  <Link to={`/showDetails/${data._id}`}><div className="btn bg-pink-700 text-white">Details Button </div></Link>
                  <Link to={`/updateProduct/${data._id}`}> <div className="btn bg-pink-700 text-white">Update button</div></Link>
                </div>
              </div>
            </div>

          </div>)
        }

        </div>
      </div>


    </div>
  );
};

export default DynamicProducts;