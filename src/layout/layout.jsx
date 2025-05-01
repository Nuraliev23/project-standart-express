import React, { useEffect } from 'react'
import{ Link,  NavLink,  Outlet } from "react-router-dom"
import { useTranslation } from "react-i18next";
import Header from '../components/header';
import Footer from '../components/footer';
import ContrastIcon from '@mui/icons-material/Contrast';
const Layout = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };
    function handleClick() {
        if (localStorage.theme === "dark" || !("theme" in localStorage)) {
          //add class=dark in html element
          document.documentElement.classList.add("dark");
        } else {
          //remove class=dark in html element
          document.documentElement.classList.remove("dark");
        }
    
        if (localStorage.theme === "dark") {
          localStorage.theme = "light";
        } else {
          localStorage.theme = "dark";
        }
      }
useEffect(()=>{
    handleClick()
},[])

  return (
    
    <div>
        <div className="flex gap-[30px] md:justify-end md:pr-[10%] justify-center">
      <select
        name=""
        id=""
        onChange={(e) => changeLanguage(e.target.value)}
        className="w-[80px] h-[40px]"
      >
        <option value="ru">🇷🇺 RU</option>
        <option value="en">🇺🇸 EN</option>
        <option value="tj">🇹🇯 TJ</option>
      </select>
      <button onClick={()=>handleClick()}><ContrastIcon/></button>
    </div>

       <Header/>
        <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout