"use client"
import { useState } from "react"
export default function contactUs(){
    const [sunbjects, setSubjects] = useState(['عدم اتصال' , 'مشکلات شبکه' , 'وجود خطا' , 'اختلال سرور'])
    return(
            <div className="w-full bg-white px-0 sm:px-[2rem]">
                <div className=" flex flex-col items-center w-full h-[10rem] mt-[3rem]  space-y-2">
                    <h1 className="text-[30px] sm:text-[38px] text-black font-semibold">نحوه برقراری ارتباط با ما</h1>
                    <p className="text-size6 sm:text-size5 text-gray-700 max-w-[42rem] w-full text-center font-semibold px-[2rem] sm:px-0" style={{direction:"rtl"}}>ما 24 ساعت شبانه روز در 7 روز هفته در تمامی اوقاتی که شما نیازمند باشید در کنار شما هستیم،هر اتفاقی که برای دستگاه شما پیش آمده باشد تیم حرفه ای ما در اولیت فرصت به کنک شما خواهد آمد</p>

                </div>
                <div className="w-full h-[63rem] md:h-[25rem] flex flex-col md:flex-row justify-between">
                    <div className="w-full h-[45%] md:w-[45%] md:h-full flex flex-col  pt-[5px] pb-[5px] items-end justify-between space-y-6 md:space-y-0">
                        <div className="w-full h-[20%] flex flex-col   items-center md:items-end justify-between space-y-2 md:space-y-0">
                            <h1 className="text-black text-size8 md:text-[22px] font-semibold" style={{direction:"rtl"}}>آدرس دفتر مرکزی:</h1>
                            <div className="flex flex-row w-full justify-center md:justify-end items-center space-x-1">
                                <p className=" text-size6 sm:text-[18px] md:text-size3 text-gray-700 font-semibold pl-0 lg:pl-[4rem] xl:pl-[7rem]" style={{direction:"rtl"}}>گیلان - رشت - خیابان شهدا - خیابان شهدای اسلام - کوچه 22</p>

                                <div className="w-[2rem] h-[2rem] bg-gray-500"></div>
                            </div>
                        </div>
                        <div className="w-full h-[20%] flex flex-col   items-center md:items-end justify-between space-y-2 md:space-y-0">
                            <h1 className="text-black text-[28-sizetext-size8 md:text-[22px] font-semibold" style={{direction:"rtl"}}>تلفن دفتر مرکزی:</h1>
                            <div className="flex flex-row w-full justify-center md:justify-end items-center space-x-1">
                                <p className="text-[18px] md:text-size3 text-gray-700 font-semibold" style={{direction:"rtl"}}>01333833961</p>

                                <div className="h-[2rem] w-[2rem] bg-gray-500"></div>
                            </div>
                        </div>
                        <div className="w-full h-[20%] flex flex-col    items-center md:items-end justify-between space-y-2 md:space-y-0">
                            <h1 className="text-black text-[28-sizetext-size8 md:text-[22px] font-semibold" style={{direction:"rtl"}}>شماره موبایل همراه:</h1>
                            <div className="flex flex-row w-full justify-center md:justify-end items-center space-x-1">
                                <p className="text-[18px] md:text-size3 text-gray-700 font-semibold" style={{direction:"rtl"}}>09036343062</p>

                                <div className="h-[2rem] w-[2rem] bg-gray-500"></div>
                            </div>
                        </div>
                        <div className="w-full h-[25%] md:h-[20%] flex flex-col    items-center md:items-end justify-between space-y-2 md:space-y-0"  >
                            <h1 className="text-black text-[28-sizetext-size8 md:text-[22px] font-semibold" style={{direction:"rtl"}}>تلگرام و اینستاگرام:</h1>
                            <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row w-full justify-center md:justify-end items-center  space-x-0 md:space-x-2">
                                <div className="w-full h-full flex flex-row items-center justify-center md:justify-end ">
                                    <p className="text-[18px] md:text-size3 text-gray-700 font-semibold pr-[1rem] "  style={{direction:"ltr"}}>@something</p>

                                    <div className="h-[2rem] w-[2rem] bg-gray-500"></div>
                                </div>
                                <div className="w-full h-full flex flex-row items-center justify-center  md:justify-end">
                                    <p className="text-[18px] md:text-size3 text-gray-700 font-semibold pr-[1rem]" style={{direction:"ltr"}}>@something</p>

                                    <div className="h-[2rem] w-[2rem] bg-gray-500"></div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="w-full md:w-[50%] h-[50%] md:h-full md:bg-tertiary_color sm:px-[3rem] py-[2rem] rounded-sadra flex items-center justify-center">
                        <div className="w-[40rem] h-full md:w-full bg-tertiary_color flex flex-col px-[3rem] md:p-0 rounded-sadra py-[2rem] md:py-0 ">
                            <div className="w-full h-full  flex flex-col space-y-2">
                                <div className="w-full h-[19%] bg-white rounded-sadra flex justify-between px-[10px] ">
                                    <select name="" id="" className="text-black bg-transparent outline-none w-full text-[18px] pl-[7rem] font-semibold focus:ring-secondary_color focus:border-secondary_color " style={{direction:"rtl"}}>
                                        {
                                            sunbjects.map((sunbject => {
                                                return(
                                                    <option value="" className="bg-tertiary_color text-white border-[2px] border-white">{sunbject}</option>

                                                )
                                            }))
                                        }
                                    </select>
                                </div>
                                <div className="w-full h-[60%] bg-white rounded-sadra justify-end text-right px-[1rem]"style={{direction:"rtl"}} >
                                        <textarea name="" id="" placeholder="توضیحات..." className="w-full h-full text-black placeholder-black placeholder:font-semibold outline-none"></textarea>
                                </div>
                                <div className="w-full h-[15%] flex items-center justify-center">
                                    <div className="bg-secondary_color w-[7rem] h-full flex justify-center items-center rounded-[5px]">
                                        <h1 className="text-size2 text-white ">ارسال</h1>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>



                </div>
                <div className="w-full h-[2px] bg-black mt-[2rem]"></div>
                <div className=" flex flex-col items-center w-full h-[8rem] mt-[3rem]  space-y-2">
                    <h1 className="text-[30px] sm:text-[38px] text-black font-semibold">پیگیری پیام های قبلی</h1>
                    <p className="text-size6 sm:text-size5 text-gray-700 max-w-[42rem] w-full text-center font-semibold px-[2rem] sm:px-0" style={{direction:"rtl"}}>میتوانید در قسمت پایین سوالات خود را ببینید و در صورت داشتن سوال بیشتر اغدام کنید</p>

                </div>

                <div className="w-full h-[45rem] md:h-[20rem] bg-transparent md:bg-tertiary_color pt-[1rem] flex items-center justify-center rounded-sadra ">
                    <div className="w-[40rem] sm:w-[35rem]  md:w-full h-full flex  flex-col-reverse md:flex-row justify-between pb-[5px] bg-tertiary_color px-[2rem] pt-[1rem] rounded-sadra">
                        <div className="w-full md:w-[59%]  h-[59%] md:h-full rounded-sadra flex flex-col space-y-1">
                            <div className="w-full h-[8%] flex flex-col items-center justify-center ">
                                <h1 className="font-semibold">تیکت انتخاب شده</h1>
                            </div>
                            <div className="w-full h-[88%] bg-white rounded-sadra px-[1rem] py-[1rem] flex flex-col justify-between">
                                <div className="w-full h-[74%]  overflow-y-scroll flex flex-col justify-between">
                                    <div className="w-full flex h-[30%] justify-end items-center ">
                                        <div className="w-[70%] h-full flex justify-end items-center bg-tertiary_color pl-[1rem] pr-[5px] rounded-sadra">
                                            <h1 className="text-size6 text-white" style={{direction:"rtl"}}>متن کامل پیام ارسال شده توسط کاربر اینجا نمایش داده میشود</h1>
                                        </div>
                                    </div>
                                    <div className="w-full flex h-[30%] justify-start items-center">
                                        <div className="w-[70%] h-full flex justify-end items-center bg-primary_color pl-[1rem] pr-[5px] rounded-sadra">
                                            <h1 className="text-size6 text-white" style={{direction:"rtl"}}>متن کامل پیام ارسال شده توسط کاربر اینجا نمایش داده میشود</h1>
                                        </div>
                                    </div>
                                    <div className="w-full flex h-[30%] justify-end items-center ">
                                        <div className="w-[70%] h-full flex justify-end items-center bg-tertiary_color pl-[1rem] pr-[5px] rounded-sadra">
                                            <h1 className="text-size6 text-white" style={{direction:"rtl"}}>متن کامل پیام ارسال شده توسط کاربر اینجا نمایش داده میشود</h1>
                                        </div>
                                    </div>


                                </div>
                                <div className="w-full h-[20%] bg-accent_color rounded-[5px] flex flex-row justify-evenly py-[5px] px-[5px] sm:px-0">
                                    <div className="w-[25%] h-full bg-primary_color rounded-[5px] flex items-center justify-center">
                                        <h1 className="text-white ">ارسال</h1>
                                    </div>
                                    <div className="w-[70%] h-full bg-white rounded-[5px] flex flex-row items-center px-[5px] ">
                                        <div className="w-[85%] h-full items-center justify-end">
                                            <input type="text" placeholder="متن پیام" style={{direction:"rtl"}} className="w-full h-full items-center justify-end pr-[7px] placeholder-gray-500 outline-none text-right text-gray-700"/>
                                        </div>
                                        <div className="w-[14%] h-[2rem] bg-gray-700 rounded-[5px]"></div>
                                    </div>

                                    
                                </div>

                            </div>

                        </div>
                        <div className="w-full md:w-[39%] bg-tertiary_color h-[39%] md:h-full rounded-sadra flex-col space-y-2">
                            <div className="w-full h-[8%] flex flex-row items-center justify-end ">
                                <h1 className="font-semibold text-right text-[18px] text-white" style={{direction:"rtl"}}>لیست تیکت های باز شده :</h1>
                            </div>
                            <div className="w-full h-[22%] bg-gray-300 rounded-sadra px-[12px] py-[12px] flex flex-row  justify-between">
                                <div className="w-[30%] h-full bg-primary_color rounded-[5px] flex items-center justify-center">
                                    <h1 className="text-white  text-size3">بیشتر</h1>
                                </div>
                                <div className="w-[70%] h-full items-end flex flex-col justify-between">
                                    <h1 className="text-black text-[17px] w-full font-semibold" style={{direction:"rtl"}}>عدم اتصال به دستگاه</h1>
                                    <p className="text-gray-700 text-[9px] font-semibold" style={{direction:"rtl"}}>یه سری ریز جزییات از توضیحات ...</p>
                                </div>


                            </div>
                            <div className="w-full h-[22%] bg-gray-300 rounded-sadra px-[12px] py-[12px] flex flex-row  justify-between">
                                <div className="w-[30%] h-full bg-primary_color rounded-[5px] flex items-center justify-center">
                                    <h1 className="text-white  text-size3">بیشتر</h1>
                                </div>
                                <div className="w-[70%] h-full items-end flex flex-col justify-between">
                                    <h1 className="text-black text-[17px] w-full font-semibold" style={{direction:"rtl"}}>عدم اتصال به دستگاه</h1>
                                    <p className="text-gray-700 text-[9px] font-semibold" style={{direction:"rtl"}}>یه سری ریز جزییات از توضیحات ...</p>
                                </div>


                            </div>
                            <div className="w-full h-[22%] bg-gray-300 rounded-sadra px-[12px] py-[12px] flex flex-row  justify-between">
                                <div className="w-[30%] h-full bg-primary_color rounded-[5px] flex items-center justify-center">
                                    <h1 className="text-white  text-size3">بیشتر</h1>
                                </div>
                                <div className="w-[70%] h-full items-end flex flex-col justify-between">
                                    <h1 className="text-black text-[17px] w-full font-semibold" style={{direction:"rtl"}}>عدم اتصال به دستگاه</h1>
                                    <p className="text-gray-700 text-[9px] font-semibold" style={{direction:"rtl"}}>یه سری ریز جزییات از توضیحات ...</p>
                                </div>


                            </div>
                        </div>
                    </div>


                </div>
            </div>
    )
}