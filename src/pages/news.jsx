import React from "react";
import { useTranslation } from "react-i18next";
import img1 from "../assets/VLAD8188 1.png";
import img2 from "../assets/Mask group (6).png";
import img3 from "../assets/Mask group (7).png";
import img4 from "../assets/Mask group (8).png";
import mask8 from "../assets/IMG_3107 1.png";

import Blogs from "../components/blogs";

const News = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <section className="max-w-[1200px] mx-auto py-[36px]  mt-[100px">
        <p className="font-bold text-[40px]">{t("Блог")}</p>
        <div className=" p-[15px] flex gap-[20px] md:justify-between flex-col md:flex-row ">
    <Blogs img={img1}/>               
    <Blogs img={img2}/>               
    <Blogs img={img3}/>               
    <Blogs img={img4}/>               
                 
    
        </div>
        <div className=" p-[15px] flex gap-[20px] md:justify-between flex-col md:flex-row ">
    <Blogs img={img1}/>               
    <Blogs img={img2}/>               
    <Blogs img={img3}/>               
    <Blogs img={img4}/>               
                 
    
        </div>
      </section>
      <section className="flex gap-[20px] items-center md:gap-[20px] md:justify-between max-w-[1200px] mx-auto py-[36px] flex-col md:flex-row">
                          <aside className="flex flex-col gap-[20px] items-start">
                            <h1 className="text-[50px]">
                              {t("У вас есть вопросы?")}
                            </h1>
                            <p>{t("Оставьте телефон и мы вам перезвоним")}</p>
                           
                            <div className="flex items-center gap-[16px]">
                              <input type="text" placeholder="+7" className="border-[1px] rounded-2xl p-[10px_5px]"/>
                              <p className="bg-[#ED9121] text-white p-[10px_17px] rounded-3xl">
                              {t("Перезвоните мне")}
                            </p>
                            </div>
                            <p className="">
                              {t("Отправляя заявку, вы соглашаетесь с политикой обработки персональных данных")}
                            </p>
                          </aside>
                          <img src={mask8} alt="" />
                        </section>
    </div>
  );
};

export default News;
