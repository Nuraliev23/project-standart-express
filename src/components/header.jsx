import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu } from "@mui/material";
import { NavLink } from "react-router-dom";
import MailIcon from "@mui/icons-material/Mail";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import logo from "../assets/_Ð¡Ð»Ð¾Ð¹_1.png";
import { useTranslation } from "react-i18next";
const Header = () => {
     const { t, i18n } = useTranslation();
        const changeLanguage = (language) => {
          i18n.changeLanguage(language);
        };
  return (
    <div>
      <header>
        <nav className="flex gap-[20px] items-center md:gap-[0px] md:justify-between max-w-[1200px] mx-auto py-[36px] flex-col md:flex-row border-b-[1px] border-[#cdcccc]">
          <MenuIcon />
          <ul  className="flex-col gap-[35px] md:flex-row flex items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-gray-500"
              }
            >
              <li >
                <p >{t("О компании")}</p>
              </li>
            </NavLink>
            <NavLink
              to="/vacansies"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-gray-500"
              }
            >
              <li>{t("Вакансии")}</li>
            </NavLink>
            <NavLink
              to="/news"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-gray-500"
              }
            >
              <li>{t("Новости")}</li>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-gray-500"
            }
            >
                <li>{t("Контакты")}</li>
            </NavLink>
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
          <div className="flex items-center gap-[6px]">
            <WhatsAppIcon />
            <TelegramIcon />
          </div>
          <button className="text-[white] bg-[#ED9121] p-[10px_5px] rounded-3xl">
          {t("Перезвоните мне")}
          </button>
          <p>Санкт - Петербург</p>
        </nav>
        <section className="flex gap-[20px] items-center md:gap-[0px] md:justify-between max-w-[1200px] mx-auto py-[36px] flex-col md:flex-row border-b-[1px] border-[#cdcccc]">
          <img src={logo} alt="" />
          <p>{t("Грузчики")}</p>
          <p>{t("Переезды")}</p>
          <p>{t("Такелажные работы")}</p>
          <p>{t("Грузоперевозки")}</p>
          <p>{t("Разнорабочие")}</p>
          <p>{t("Юридическим лицам")}</p>
        </section>
      </header>
    </div>
  );
};

export default Header;
