import React from 'react'
import { useTranslation } from "react-i18next";
import MailIcon from "@mui/icons-material/Mail";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import logo from "../assets/_Ð¡Ð»Ð¾Ð¹_1.png";


const Footer = () => {
     const { t, i18n } = useTranslation();
      const changeLanguage = (language) => {
        i18n.changeLanguage(language);
      };
  return (
    <footer>
 <section className=" bg-black text-white ">
    <div className="max-w-[1200px] mx-auto py-[36px] mt-[50px  p-[0px_20px]">
    <div className=" md:w-[40%] w-[90%] mx-auto  p-[15px] mt-[16px]">
        <p className="font-bold text-[20px] text-center">
          {t("Чтобы не потерять наш сайт добавьте его в избранное (закладки)  или сохраните")}
        </p>
        <div className="flex  gap-[20px] items-center mx-auto mt-[30px]">
        <p className="">
          {t("Нажмите сочетание клавиш в браузере")}
        </p>
        <p className="bg-white text-black p-[20px] rounded-3xl">
          {t("Ctrl + D")}
        </p>
        </div>
        </div>
        <div className="flex gap-[20px] items-center md:gap-[0px] md:justify-between max-w-[1200px] mx-auto py-[36px] flex-col md:flex-row border-b-[1px] border-[#cdcccc]">
            <img src={logo} alt="" />
          <ul  className="flex-col gap-[35px] md:flex-row flex items-center">
              <li >
                <p >{t("О компании")}</p>
              </li>
            
           
              <li>{t("Вакансии")}</li>
       
         
              <li>{t("Новости")}</li>
          
                <li>{t("Контакты")}</li>
         
          </ul>
          <div className="flex gap-[6px] items-start">
            <MailIcon />
            <div>
              <p>info@standart-express.ru</p>
              <p>{t("Выполняем заказы")}</p>
            </div>
          </div>
          <div className="flex gap-[6px] items-start">
            <PhoneEnabledIcon />
            <div>
              <p> 8 (800) 700-51-53</p>
              <p>+7 (965) 226-57-90</p>
            </div>
          </div>
          <button className="text-[white] bg-[#ED9121] p-[10px_5px] rounded-3xl">
          {t("Заказать консультацию")}
          </button>
        </div>
        <div className="flex gap-[20px] items-center md:gap-[0px] md:justify-between max-w-[1200px] mx-auto py-[36px] flex-col md:flex-row ">
            <p> © 2024 Стандарт Экспресс. Все права защищены</p>
            <p>Политика конфиденциальности</p>
            <p>Пользовательское соглашение</p>
            <p>ООО «Стандарт Экспресс»ОГРН 1141690046871ИНН 1657143487</p>
        </div>
    </div>

      </section>
    </footer>
  )
}

export default Footer