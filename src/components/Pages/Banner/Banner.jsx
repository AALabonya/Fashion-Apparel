import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


const Banner = () => {
    return (
<div className="overflow-x-hidden">
<div data-aos="zoom-in" className="relative grid h-[40rem] w-full lg:mt-16 flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
  <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/X4CVCRZ/fashion1.webp')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
    <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
  </div>
  <div className="relative p-6 px-6 py-60 md:px-12">
    <h2 data-aos="fade-right" data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000" className="mb-6 block font-sans text-2xl  md:text-4xl  lg:text-6xl font-bold leading-[1.5] tracking-normal text-pink-800 antialiased">
      Welcome to Fashion Memoir
    </h2>
    <h5 data-aos="fade-left" data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000" className="block mb-4 font-sans text-base  md:text-lg lg:text-xl antialiased font-semibold leading-snug tracking-normal text-white">
      Where style becomes a story. Explore a world of curated fashion memories, find inspiration,<br/> and celebrate the unique tales we tell through clothing. Join us as we turn wardrobes into chapters and embrace the art of self-expression, one outfit 
    </h5>
  </div>
</div>
</div>


    );
};

export default Banner;