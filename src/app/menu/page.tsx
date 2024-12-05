import arrow from "@/app/public/arrow.png"
import Image from "next/image"
export default function contactUs(){

    return(
        <div className="flex flex-col bg-white w-full h-">
            <div className=" w-full px-[2rem] h-[52rem] sm:h-[35rem] md:h-[18rem] mt-[4rem] flex flex-col-reverse md:flex-row">
                <div className="w-full md:w-[40%] h-full  flex flex-row items-center justify-center">
                    <div className="md:w-[70%] w-[80%] h-full flex flex-col pt-[1rem] sm:pt-0 ">
                        <div className="w-full h-[50%] sm:h-full bg-tertiary_color rounded-[60px]"></div>
                        <div className="w-full h-[50%] sm:h-[25%] flex flex-col sm:flex-row items-center justify-evenly md:justify-center space-y-5 sm:space-y-3">
                            <div className="w-full h-[25%] flex flex-col items-center   mt-[10px] ">
                                <div className="w-[10rem] flex flex-row  items-center justify-end space-x-2">
                                    <h1 className="text-black text-size5 font-semibold">صرفه جویی در زمان</h1>
                                    <div className="w-[2rem] h-[2rem] bg-gray-300"></div>
                                </div>
                                <div className="w-[10rem]  items-center justify-center space-x-2">
                                    <h1 className="text-gray-600 font-semibold text-[10px]" style={{direction:"rtl"}}>با دستکاه های MIDM از راه دور گلخونه خودتو زیر نظر داشته باش</h1>
                                </div>
                                

                            </div>
                            <div className="w-full h-[25%] flex flex-col items-center   pt-[20px] sm:pt-[0] sm:mt-[10px] visible md:w-0 md:invisible">
                                <div className="w-[10rem] flex flex-row  items-center justify-end space-x-2">
                                    <h1 className="text-black text-size5 font-semibold">صرفه جویی در زمان</h1>
                                    <div className="w-[2rem] h-[2rem] bg-gray-300"></div>
                                </div>
                                <div className="w-[10rem]  items-center justify-center space-x-2">
                                    <h1 className="text-gray-600 font-semibold text-[10px]" style={{direction:"rtl"}}>با دستکاه های MIDM از راه دور گلخونه خودتو زیر نظر داشته باش</h1>
                                </div>
                                

                            </div>
                        </div>
                    </div>


                    
                    <div className="md:w-[30%] md:visible h-full flex flex-row justify-center items-start w-0 invisible pt-[6rem] pl-[1rem]">
                    <div className=" flex flex-col items-center   -rotate-90 ">
                            <div className=" w-[10rem] flex flex-row  items-center justify-end space-x-2">
                                <h1 className="text-black text-size5 font-semibold " style={{direction:"rtl"}}>یهینه سازی گلخونه</h1>
                                <div className="w-[2rem] h-[2rem] bg-gray-300"></div>
                            </div>
                            <div className="w-[10rem] flex flex-col  items-center justify-center ">
                                <h1 className="text-gray-600 text-[10px] font-semibold"  style={{direction:"rtl"}} >با دستگاه های MIDM از راه دور گلخونه خودتو زیر نظر داشته باش</h1>
                            </div>
                            

                        </div>
                    </div>
                </div>
                <div className="w-full md:w-[60%] h-full flex flex-col  space-y-1 bg-white">
                    <h1 className=" text-black text-[25px]  h-[10%] text-center sm:text-right" style={{direction:"rtl"}}>اتوماسیون مدیریت گلخونه</h1>
                    <div className="w-full h-full flex flex-row pt-[2rem] sm:pt-[1rem]">
                        <div className="w-0 sm:w-[10%] h-full"></div>
                        <div className="w-full sm:w-[90%] h-full">
                            <h1 className="text-black text-[38px]  h-[80%] w-full font-semibold text-center sm:text-right " style={{direction:"rtl"}}>اگه میخای گلخونه خودتو بدون نیاز به حضور فیزیکی مدیریت کنی دستگاه xxx مخصوص خودته</h1>
                        </div>
                    </div>
                    <div className="w-full h-[5rem] md:h-[9rem] flex flex-row pl-0 md:pl-[7rem] pt-0 pb-[2rem] sm:pb-0 md:pt-[3rem] lg:pt-[1rem]">
                        <div className="w-0 lg:w-[40%] h-full  flex flex-row items-center justify-center sm:justify-normal ">
                            <Image src={arrow} alt="instagram" className="w-0 md:w-[30%] h-[45%] invisible lg:visible"></Image> 

                        </div>
                        <div className="w-0 md:w-[40%] h-full "></div>
                        <div className="w-full md:w-[18%] h-full  flex flex-row items-center justify-center md:justify-end md:pl-[15rem]"><h1 className="text-size2 text-gray-600">بیشتر</h1></div>
                        <div className="w-0 md:w-[3%] h-full"></div>

                    </div>
                </div>

                
            </div>
            <div className="w-full h-[55rem]  md:h-[35rem] flex flex-col mt-[4rem] sm:mt-[8rem] ">
                <div className="w-full h-[10rem]  flex flex-col items-center space-y-1">
                    <h1 className="text-gray-500 text-size6 font-semibold">؟MDIM چرا گروه </h1>
                    <h1 className="text-[22px] sm:text-size8 md:text-[35px] text-black font-semibold">    چیست   ؟    MDIM   دلایل انتخاب دستگاه های </h1>
                    <p className="max-w-[20rem] sm:max-w-[30rem] md:max-w-[38rem] items-center flex flex-row text-center text-black font-semibold text-size3 sm:text-size5 md:text-size4 pt-[1rem]"  style={{direction:"rtl"}}>  سالها تحفیق و توسعه پشت محصولات MIDM  وجود دارد تا توانایی این موضوع حاصل شود که امروز ما میتوانیم با اطمینان بگیم بهترین و کامل ترین دستکاه های مدیریت خانه و آشپزخانه در داخل کشور را گروه ما تویلد میکند</p>

                </div>
                <div className="w-full h-[41rem] md:h-[20rem] flex flex-col pt-[3rem]">
                    <div className="w-full h-1/2 flex flex-col md:flex-row md:space-y-0 space-y-1">
                        <div className="w-[8%] "></div>
                        <div className="w-full md:w-[26%] h-[8rem]  flex flex-col items-center"  >
                                <div className="md:h-[45%] md:w-[25%] h-[60%] w-[10%] bg-gray-800"></div>
                                <h1 className="text-black text-size2 font-semibold pt-[10px]">Multi Platform</h1>
                                <div className="w-full h-[5rem] flex flex-row items-center justify-center">
                                    <h1 className="text-gray-600 text-size3 font-semibold" style={{textAlign:"center"}} > روزی هر نوع دستگاهی که مد نظر شما هست میتوانید از خدمات ما استفاده کنید</h1>
                                </div>
                        </div>
                        <div className="w-[3%] h-[8rem]" ></div>
                        <div className="w-full md:w-[26%] h-full  flex flex-col items-center"  >
                                <div className="md:h-[45%] md:w-[25%] h-[60%] w-[10%] bg-gray-800"></div>

                                <h1 className="text-black text-size2 font-semibold pt-[10px]">Durability</h1>
                                <div className="w-full h-[5rem] flex flex-row items-center justify-center">
                                    <h1 className="text-gray-600 text-size3 font-semibold" style={{textAlign:"center"}} > دوام و ماندگاری بالای دستگاه های ساخته شده تضمینی است</h1>
                                </div>
                        </div>
                        <div className="w-[3%] h-full" ></div>

                        <div className="w-full md:w-[26%] h-[8rem] flex flex-col items-center"  >
                                <div className="md:h-[45%] md:w-[25%] h-[60%] w-[10%] bg-gray-800"></div>

                                <h1 className="text-black text-size2 font-semibold pt-[10px]">Support</h1>
                                <div className="w-full h-[5rem] flex flex-row items-center justify-center">
                                    <h1 className="text-gray-600 text-eize3 font-semibold" style={{textAlign:"center"} }> 24 ساعت شبانه روز در صورت بروز هرگونه مشکل ما در کنار شما هستیم  </h1>
                                </div>
                        </div>

                        <div className=""></div>


                    </div>
                    <div className="w-full h-1/2 flex flex-col md:flex-row  mt-[5rem] md:mt-[3rem] md:space-y-0 space-y-1">
                        <div className="w-[21%] h-full"></div>
                        <div className="w-full md:w-[26%] h-[8rem]  flex flex-col items-center"  >
                                <div className="md:h-[45%] md:w-[25%] h-[60%] w-[10%] bg-gray-800"></div>
                                
                                <h1 className="text-black text-size2 font-semibold pt-[10px]"> Precision</h1>
                                <div className="w-full h-[5rem] flex flex-row items-center justify-center px-[10px]">
                                    <h1 className="text-gray-600 text-size3 font-semibold" style={{textAlign:"center"} }>دقت بالای دستکاه در اندازه گیری و تصمیم گیری در کوتاه ترین زمان ممکن</h1>
                                </div>
                        </div>
                        <div className="w-[3%] h-[8rem]"></div>
                        <div className="w-full md:w-[26%] h-full  flex flex-col items-center"  >
                                <div className="md:h-[45%] md:w-[25%] h-[60%] w-[10%] bg-gray-800"></div>

                                <h1 className="text-black text-size2 font-semibold pt-[10px]">Portable</h1>
                                <div className="w-full h-[5rem] flex flex-row items-center justify-center px-[10px]">
                                    <h1 className="text-gray-600 text-size3 font-semibold" style={{textAlign:"center"} }>راحتی جابه جایی و به کارگیری دستگاه های ساخته شده برای کاربر</h1>
                                </div>
                        </div>
                        <div className="w-[21%] h-full"></div>


                    </div>
                </div>

            </div>
            <div className="w-full h-[80rem] sm:h-[65rem] md:h-[38rem]  bg-tertiary_color flex flex-col md:flex-row py-[2rem] px-[2rem] mt-[2rem] ">
                <div className="h-[55%] md:h-full w-full md:w-[55%] flex flex-col justify-center items-center ">
                    <div className="w-[95%] sm:w-[80%] h-[85%] bg-white rounded-sadra2 flex flex-col px-[1rem] py-[1rem] relative">
                        <div className="w-full h-[60%] bg-tertiary_color rounded-sadra2 flex justify-center items-center">
                            <h1 className="text-size8 font-semibold text-black">عکس از دستگاه</h1>
                        </div>
                        <div className="w-[8rem] sm:w-[8rem] h-[9rem] sm:h-[7rem] bg-black absolute top-[13rem] sm:top-[11rem] -left-[25px] sm:-left-[4rem] rounded-sadra2 flex flex-col items-center py-[10px] px-[10px]">

                            <div className="w-full h-[35%]">
                                <h1 className="text-[9px] text-white text-center ">مدیریت دستگاه با استفاده از ابزار پیشرفته در پنل شخصی شما</h1>
                            </div>
                            <div className="w-full h-[60%] sm:h-[65%] flex flex-row  justify-between items-end">
                                <div className="w-[11%] h-[80%] rounded-[30px] bg-yellow-100"></div>
                                <div className="w-[11%] h-[30%] rounded-[30px] bg-green-200"></div>
                                <div className="w-[11%] h-[50%] rounded-[30px] bg-yellow-100"></div>
                                <div className="w-[11%] h-[90%] rounded-[30px] bg-yellow-100"></div>
                                <div className="w-[11%] h-[60%] rounded-[30px] bg-green-200"></div>
                                <div className="w-[11%] h-[40%] rounded-[30px] bg-yellow-100"></div>

                            </div>

                        </div>
                        <div className="h-[30%] w-full  flex flex-col ">
                            <h1 className="text-black text-[18px] font-semibold pt-[5px]" style={{direction:"rtl"}}>دستگاه xxx</h1>
                            <h1 className="text-gray-600 text-size3 font-semibold" style={{direction:"rtl"}}>بهترین و کامل ترین دستگاه موجود تو بازار برای مدیریت گلخونه عزیزتون.داری سنسور های رطوبت،خاک،اکسیژن،دی اکسید کربن و تابش نور که میتواند به طور کامل به طور کامل با توجه به انتخاب شما در پنل گیاه شما را در سلامت کامل نگه دارد</h1>
                        </div>
                        <div className="w-[45%] h-[10%] flex items-end justify-center ">
                        <div className="w-full h-[36px]  bg-tertiary_color rounded-sadra2 flex flex-row items-center justify-center space-x-1 ">
                                <h1 className="text-white text-size3 font-semibold" style={{direction:"rtl"}}> تومان </h1>
                                <h1 className="text-white text-size6 font-semibold">10.000.000</h1>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-white text-size5 mt-[5px] " style={{direction:"rtl"}}>دارای یک سال پشتیبانی و قابل تعویض درصورت خراب شدن</h1>


                </div>
                <div className=" h-[45%] md:h-full w-full md:w-[45%]">
                    <h1 className="w-full text-[17px] text-white font-semibold text-center sm:text-right" style={{direction:"rtl"}}>محصولات</h1>
                    <h1 className="w-full text-size8 text-black font-semibold text-center sm:text-right" style={{direction:"rtl"}}>هرکدام از محصولات MIDB دارای چه کاربردی است ؟</h1>
                    <div className="w-full h-[72%] mt-[2rem] flex flex-col  pr-[1rem] space-y-1">
                        <div className="flex flex-col w-full h-[27%] ">
                            <h1 className="text-black font-extrabold text-size4 pr-[1rem] text-center sm:text-right" style={{direction:"rtl"}}>کنترل نیاز آب</h1>
                            <h1 className="text-white text-size5 font-semibold text-center sm:text-right" style={{direction:"rtl"} }> با این دستگاه دیگر نیازی نیست نگران کم یا زیاد بودن آبدهی گیاه باشید - دستگاه xxx خود با خواندن رطوبت خاک و انتخاب گیاه مورد نظر توسط شما در پنل ، نیاز آب گیاه را مدیریت میکند</h1>

                        </div>
                        <div className="flex flex-col w-full h-[27%]">
                            <h1 className="text-black font-extrabold text-size4 pr-[1rem] text-center sm:text-right" style={{direction:"rtl"}}>کنترل تابش نور</h1>
                            <h1 className="text-white text-size5 font-semibold text-center sm:text-right" style={{direction:"rtl"} }>با دستکاه xxx در صورت داشتن کر کره های برقی برای پنجره یا لامپ های هوشمند در گلخانه خود دیگر نیازی نیست نگران کم یا زیاد بودن میزان تابش نور به گیاه خود باشید</h1>

                        </div>
                        <div className="flex flex-col w-full h-[27%] ">
                            <h1 className="text-black font-extrabold text-size4 pr-[1rem] text-center sm:text-right" style={{direction:"rtl"}}>کنترل هوای اطراف</h1>
                            <h1 className="text-white text-size5 font-semibold text-center sm:text-right" style={{direction:"rtl"} }>با وجود سنسور های اکسیژن و دی اکسید کربن موجود در دستگاه در هرثانیه از شبانه روز میتوانید کنترل کافی بر روی روند زندگی گیاه خود داشته باشید</h1>

                        </div>
                        <div className="w-full sm:w-[38%] h-[55px] rounded-[10px] b-white mt-[1rem] flex flex-row items-center justify-center">
                            <div className="w-[50%] h-full flex flex-row items-center justify-center bg-white rounded-sadra  sm:w-full ">
                                <h1 className="text-black text-[22px] font-semibold">خرید</h1>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>


            </div>
            <div className="w-full h-[80rem] sm:h-[65rem] md:h-[38rem] bg-white flex flex-col md:flex-row py-[2rem] px-[2rem] mt-[2rem] ">
                <div className="h-[55%] md:h-full w-full md:w-[55%] flex flex-col justify-center items-center ">
                    <div className="w-[95%] sm:w-[80%] h-[85%] bg-tertiary_color rounded-sadra2 flex flex-col px-[1rem] py-[1rem] relative">
                        <div className="w-full h-[60%] bg-accent_color rounded-sadra2 flex justify-center items-center">
                            <h1 className="text-size8 font-semibold text-black">عکس از دستگاه</h1>
                        </div>
                        <div className="w-[8rem] sm:w-[8rem] h-[9rem] sm:h-[7rem] bg-black absolute top-[13rem] sm:top-[11rem] -left-[25px] sm:-left-[4rem] rounded-sadra2 flex flex-col items-center py-[10px] px-[10px]">


                            <div className="w-full h-[35%]">
                                <h1 className="text-[9px] text-white text-center ">مدیریت دستگاه با استفاده از ابزار پیشرفته در پنل شخصی شما</h1>
                            </div>
                            <div className="w-full h-[65%] flex flex-row  justify-between items-end">
                                <div className="w-[11%] h-[80%] rounded-[30px] bg-yellow-100"></div>
                                <div className="w-[11%] h-[30%] rounded-[30px] bg-green-200"></div>
                                <div className="w-[11%] h-[50%] rounded-[30px] bg-yellow-100"></div>
                                <div className="w-[11%] h-[90%] rounded-[30px] bg-yellow-100"></div>
                                <div className="w-[11%] h-[60%] rounded-[30px] bg-green-200"></div>
                                <div className="w-[11%] h-[40%] rounded-[30px] bg-yellow-100"></div>

                            </div>

                        </div>

                        <div className="h-[30%] w-full  flex flex-col ">
                            <h1 className="text-white text-[18px] font-semibold pt-[5px]" style={{direction:"rtl"}}>دستگاه xxx</h1>
                            <h1 className="text-white text-size3 font-semibold" style={{direction:"rtl"}}>بهترین و کامل ترین دستگاه موجود تو بازار برای مدیریت گلخونه عزیزتون.داری سنسور های رطوبت،خاک،اکسیژن،دی اکسید کربن و تابش نور که میتواند به طور کامل به طور کامل با توجه به انتخاب شما در پنل گیاه شما را در سلامت کامل نگه دارد</h1>
                        </div>
                        <div className="w-[45%] h-[10%] flex items-end justify-center ">
                            <div className="w-full h-[36px]  bg-white rounded-sadra2 flex flex-row items-center justify-center space-x-1 ">
                                <h1 className="text-black text-size3 font-semibold" style={{direction:"rtl"}}> تومان </h1>
                                <h1 className="text-black text-size6 font-semibold">10.000.000</h1>
                            </div>
                        </div>

                    </div>
                    <h1 className="text-black text-size5 mt-[5px] " style={{direction:"rtl"}}>دارای یک سال پشتیبانی و قابل تعویض درصورت خراب شدن</h1>



                </div>
                <div className=" h-[45%] md:h-full w-full md:w-[45%]">
                    <h1 className="w-full text-[17px] text-gray-600 font-semibold text-center sm:text-right" style={{direction:"rtl"}}>محصولات</h1>
                    <h1 className="w-full text-size8 text-black font-semibold text-center sm:text-right" style={{direction:"rtl"}}>هرکدام از محصولات MIDB دارای چه کاربردی است ؟</h1>
                    <div className="w-full h-[72%] mt-[2rem] flex flex-col  pr-[1rem] space-y-1">
                        <div className="flex flex-col w-full h-[27%] ">
                            <div className="flex flex-row justify-center sm:justify-end items-center space-x-2">
                                <h1 className="text-black font-extrabold text-size4 text-center sm:text-right " style={{direction:"rtl"}}>کنترل نیاز آب</h1>
                                <div className="w-[2rem] h-[2rem] bg-gray-700"></div>

                            </div>
                            <h1 className="text-gray-500 text-size5 font-semibold text-center sm:text-right" style={{direction:"rtl"} }> با این دستگاه دیگر نیازی نیست نگران کم یا زیاد بودن آبدهی گیاه باشید - دستگاه xxx خود با خواندن رطوبت خاک و انتخاب گیاه مورد نظر توسط شما در پنل ، نیاز آب گیاه را مدیریت میکند</h1>

                        </div>
                        <div className="flex flex-col w-full h-[27%]">
                            <div  className="flex flex-row  justify-center sm:justify-end items-center space-x-2">
                                <h1 className="text-black font-extrabold text-size4 text-center sm:text-right" style={{direction:"rtl"}}>کنترل تابش نور</h1>
                                <div className="w-[2rem] h-[2rem] bg-gray-700"></div>

                            </div>
                            <h1 className="text-gray-500 text-size5 font-semibold" style={{direction:"rtl"} }>با دستکاه xxx در صورت داشتن کر کره های برقی برای پنجره یا لامپ های هوشمند در گلخانه خود دیگر نیازی نیست نگران کم یا زیاد بودن میزان تابش نور به گیاه خود باشید</h1>

                        </div>

                        <div className="flex flex-col w-full h-[27%] ">
                            <div className="flex flex-row justify-center sm:justify-end items-center space-x-2">
                                <h1 className="text-black font-extrabold text-size4 text-center sm:text-right" style={{direction:"rtl"}}>کنترل هوای اطراف</h1>
                                <div className="w-[2rem] h-[2rem] bg-gray-700"></div>

                            </div>
                            <h1 className="text-gray-500 text-size5 font-semibold text-center sm:text-right" style={{direction:"rtl"} }>با وجود سنسور های اکسیژن و دی اکسید کربن موجود در دستگاه در هرثانیه از شبانه روز میتوانید کنترل کافی بر روی روند زندگی گیاه خود داشته باشید</h1>

                        </div>
                        <div className="w-[38%] h-[55px] bg-black rounded-sadra mt-[1rem] flex flex-row items-center justify-center">
                            <h1 className="text-white text-[22px] font-semibold">خرید</h1>
                        </div>
                        
                    </div>
                    
                </div>


            </div>
            
        </div>
        
    )
}