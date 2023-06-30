'use client'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import islide1 from "../../assets/islide1.avif";
import islide2 from "../../assets/islide2.avif";
import islide3 from "../../assets/islide3.avif";
import islide4 from "../../assets/islide4.avif";
import Image from "next/image";
import Button from "./Button";

const categories = [
    {
        name: "Type1",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At deserunt ullam molestiae obcaecati facere quis dolorem illo in fugit ab, perspiciatis alias quas. Odit architecto mollitia ex praesentium tenetur! Temporal",
        image: islide1,
        btnText: "Explore more",
    },
    {
        name: "Type2",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At deserunt ullam molestiae obcaecati facere quis dolorem illo in fugit ab, perspiciatis alias quas. Odit architecto mollitia ex praesentium tenetur! Temporal",
        image: islide2,
        btnText: "Explore more",
    },
    {
        name: "Type3",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At deserunt ullam molestiae obcaecati facere quis dolorem illo in fugit ab, perspiciatis alias quas. Odit architecto mollitia ex praesentium tenetur! Temporal",
        image: islide3,
        btnText: "Explore more",
    },
    {
        name: "Type4",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At deserunt ullam molestiae obcaecati facere quis dolorem illo in fugit ab, perspiciatis alias quas. Odit architecto mollitia ex praesentium tenetur! Temporal",
        image: islide4,
        btnText: "Explore more",
    },
]

const CategorieSlider = () => {
  return (
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
            700: {
                slidesPerView: 1,
            },
        }} className="categorieSlider min-h-[660px]">
        {categories.map((categorie, index)=>{
            return (
                <>
                    <SwiperSlide
                        className="bg-slate-300 shadow-md min-h-[480px] rounded-md py-16 px-8 mt-10" 
                        key={index}>

                        <div className="flex flex-col gap-y-5 md:flex-row md:gap-x-16">
                            <Image src={categorie.image} height={900} width={1300}/>
                            <div className="flex flex-col gap-y-5">
                                <div className="text-2xl font-medium flex gap-x-2 items-center">
                                    {categorie.name}
                                </div>
                                    <div className="text-[20px] text-gray-600">
                                        {categorie.descripcion}</div>
                                    <div>
                                        <Button link="#" text={categorie.btnText}/>
                                    </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </>
            );
        })}
    </Swiper>
  );
};

export default CategorieSlider