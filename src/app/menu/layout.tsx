"use client"
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import instagram from "@/app/public/instagram (1).png"
import telegram from "@/app/public/communication.png"
import twitter from "@/app/public/social-media (1).png"
import googlestore from "@/app/public/play.png"
import applestore from "@/app/public/app-store.png"
import bazar from "@/app/public/basket.png"
import menu from "@/app/public/menu-button.png"




export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    const[page,setpage] =useState("main")
    return(
        <div className=" bg-white flex flex-row">
            <div className="xl:w-[20%] xl:visible h-full bg-red-400 w-0 invisible"></div>
            <div className=" w-full xl:w-[80%] h- bg-white flex flex-col my-[10px] sm:my-[1rem] ">
                <div className=" bg-tertiary_color px-[3rem] md:px-[6rem] w-full h-[5rem] flex flex-row">
                    <div className="w-[25%] h-full flex flex-row items-center justify-start">
                        <div className="h-[60%] w-[8rem] sm:w-[60%] bg-secondary_color flex flex-row items-center justify-center rounded-[5px] font-semibold"><h1>ثبت نام</h1></div>
                    </div>
                    <div className="w-[50%] h-full flex flex-row items-center justify-evenly  invisible sm:visible ">
                        <Link onClick={()=>setpage("contact")} href={"/menu/contact-us"} className={` ${page == "contact" ? "text-white" : "text-gray-400"}`} ><h1>ارتباط با ما</h1></Link>
                        <Link onClick={()=>setpage("panel")} href={"/menu/panel"} className={` ${page == "panel" ? "text-white" : "text-gray-400"}`}> <h1>پنل شخصی</h1></Link>
                        <Link onClick={()=>setpage("products")} href={"/menu/products"} className={` ${page == "products" ? "text-white" : "text-gray-400"}`}><h1>محصولات</h1></Link>
                        <Link onClick={()=>setpage("main")} href={"/menu"} className={` ${page == "main" ? "text-white" : "text-gray-400"}`}><h1>صفحه اصلی</h1></Link>
                    </div>
                    <div className="w-[25%] h-full   flex flex-row items-center justify-end  ">
                        <h1 className="text-white font-semibold text-size1 pr-[1rem] sm:pr-0">MI<span className="text-black">D</span>M</h1>
                        <Image src={menu} alt="telegram" className="w-[35%] h-[50%] sm:w-0 sm:invisible"></Image> 


                    </div>

                    
                </div>
                <div className="w-full h- bg-white px-0 sm:px-[20px] md:px-[4rem]">
                    {children}
                </div>
                <div className="mt-[2rem] bg-tertiary_color w-full  h-[60rem] sm:h-[37rem] md:h-[15rem] flex flex-col space-y-6 md:space-y-0 md:flex-row py-[2rem] px-[3rem]">
                    <div className="w-full md:w-[55%] h-[50%] md:h-full flex flex-col sm:flex-row ">
                        <div className="w-full h-[60%] sm:w-[30%] sm:h-full flex flex-col items-start">
                            <div className="w-full h-[80%] flex flex-col">
                                <h1 className="text-white h-[20%] text-[45px] w-full text-center sm:text-left md:text-[36px] font-extrabold p">MI<span className="text-black">D</span>M</h1>
                                <div className="w-full h-[80%] flex flex-col items-start pt-[4rem] sm:pt-[2rem] space-y-4 sm:space-y-2">
                                    <h1 className="text-white text-[22px] w-full text-center sm:text-left md:text-size3">someEmail@gmail.com</h1>
                                    <h1 className="text-white text-[22px]  w-full text-center sm:text-left md:text-size3">+13 33833961</h1>
                                    <h1 className="text-white text-[22px] w-full text-center sm:text-left md:text-size3">+98 9036343062</h1>

                                </div>
                            </div>
                            <div className="w-full h-[20%] rounded-sadra2 flex flex-row  items-center sm:items-end justify-center sm:justify-normal space-x-3 pt-[4rem] sm:pt-0">
                                <Image src={instagram} alt="instagram" className=""></Image> 
                                <Image src={telegram} alt="telegram" className=""></Image> 
                                <Image src={twitter} alt="twitter" className=""></Image> 


                            </div>
                        </div>
                        <div className="w-full sm:w-[30%] md:w-[20%]  h-[10%] sm:h-full"></div>
                        <div className="w-full sm:w-[40%] h-[30%] sm:h-full bg-accent_color rounded-sadra2 flex items-center justify-center">
                            <h1 className="text-black text-size2">جای لوگو</h1>
                            
                        </div>
                    </div>
                    <div className="w-full md:w-[45%] h-[50%] md:h-full flex flex-col sm:flex-row">
                        <div className="w-full sm:w-[60%] h-[70%]  sm:h-full flex flex-col px-[1rem]  space-y-7 sm:space-y-4 md:space-y-2 pt-[1rem] ">
                            <h1 className="text-white text-[40px] sm:text-[32px]  w-full text-center sm:text-right md:text-[18px] font-semibold " style={{direction:"rtl"}}>دانلود نرم افزار</h1>
                            <div className="flex flex-row w-full h-[2rem] items-center justify-center sm:justify-end space-x-2">
                                <h1 className="text-white  text-size1 sm:text-size2 md:text-[11px] font-semibold" style={{direction:"rtl"}}>دانلود از play store</h1>
                                <Image src={googlestore} alt="instagram" className="w-[2rem] h-[2rem] sm:w-[1rem] sm:h-[1rem]"></Image> 

                            </div>
                            <div className="flex flex-row w-full h-[2rem] items-center justify-center sm:justify-end space-x-2">
                                <h1 className="text-white text-size1 sm:text-size2 md:text-[11px] font-semibold" style={{direction:"rtl"}}>دانلود از apple store</h1>
                                <Image src={applestore} alt="instagram" className="w-[2rem] h-[2rem] sm:w-[1rem] sm:h-[1rem]"></Image> 

                            </div>
                            <div className="flex flex-row w-full h-[2rem] items-center justify-center sm:justify-end space-x-2">
                                <h1 className="text-white  text-size1 sm:text-size2 md:text-[11px] font-semibold" style={{direction:"rtl"}}>دانلود از بازار</h1>
                                <Image src={bazar} alt="instagram" className="w-[2rem] h-[2rem] sm:w-[1rem] sm:h-[1rem]"></Image> 

                            </div>

                        </div>
                        <div className="w-full sm:w-[40%] h-[30%]  sm:h-full bg-accent_color rounded-sadra2 flex flex-row items-center justify-center">
                            <h1 className="text-black text-size2">جای نماد الکترونیک</h1>
                        </div>
                    </div>
                    

                </div>
            </div>
            <div className="xl:w-[20%] xl:visible h-full bg-red-400 w-0 invisible"></div>

            
        </div>
    )   
}