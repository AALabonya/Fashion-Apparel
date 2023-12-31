// import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import ClientReview from "../../ClientReview/ClientReview";
import SpecialCombo from "../../SpecialCombo/SpecialCombo";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
    const loaderData = useLoaderData()
    
    return (
        <div>
            <Banner />
            <div>
                <h1 className="text-center text-3xl mb-10 mt-10 font-bold">Our Brand</h1>
                </div>
            <div className="flex justify-center mt-10">
                
                <div className="grid grid-flow-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        loaderData?.map(data => <Link to={`/product/${data?.name}`} key={data.id}>
                        <div  className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
                            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                                <img src={data?.image} alt="profile-picture" className="h-[350px] w-[400px] lg:h-[350px] lg:w-[480px]" />
                            </div>
                            <div className="p-6 text-center">
                                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                    {data?.name}
                                </h4>
                            </div>

                        </div>
                        </Link>
                        )
                    }
                </div>
            </div>
            <div>
                <SpecialCombo></SpecialCombo>
            </div>
            <div>
                <ClientReview></ClientReview>
            </div>
        </div>
    );
};

export default Home;