import React from "react";
import { useTranslation } from "react-i18next";
import headimg from "../assets/Mask group.png";
import outline from "../assets/Outline.png";
import clip from "../assets/Clip path group.png";
import layer from "../assets/Layer_1.png";
import mask1 from "../assets/Mask group (1).png";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import mask2 from "../assets/Mask group (2).png";
import mask3 from "../assets/IMG_4375 1.png";
import mask4 from "../assets/Mask group (8).png";
import mask5 from "../assets/Mask group (3).png";
import mask6 from "../assets/Mask group (4).png";
import mask7 from "../assets/Mask group (5).png";
import mask8 from "../assets/IMG_3107 1.png";
import mask9 from "../assets/image 2.png";
import mask10 from "../assets/image 3.png";
import mask11 from "../assets/image 4.png";
import mask12 from "../assets/image 5.png";
import mask13 from "../assets/DSCF9619 2.png";
import AddIcon from "@mui/icons-material/Add";
import MinimizeIcon from "@mui/icons-material/Minimize";


const About = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <section className="flex gap-[20px] items-center md:gap-[0px] md:justify-between max-w-[1200px] mx-auto py-[36px] flex-col md:flex-row">
        <aside className="flex flex-col gap-[20px] items-start">
          <h1 className="text-[50px]">
            {t("Услуги грузчиков в Москве")}
            <span className="bg-[#ED9121] text-white p-[10px_17px] rounded-3xl">
              от 249₽/час
            </span>
          </h1>
          <p>{t("Ваш заказ будет курировать персональный менеджер")}</p>
          <p className="bg-black text-white p-[10px_17px] rounded-3xl">
            {t("Рассчитать стоимость")}
          </p>
        </aside>
        <img src={headimg} alt="" />
      </section>
      <section className=" bg-[#EBEBEB]">
        <div className="flex gap-[20px] items-center md:gap-[0px] md:justify-between max-w-[1200px] mx-auto py-[36px] flex-col md:flex-row bg-[#EBEBEB]">
          <div className="flex items-center gap-[16px]">
            <img src={outline} alt="" />
            <p className="font-bold dark:text-[black]">{t("Скидка 10% на первый заказ")}</p>
          </div>
          <div className="flex items-center gap-[16px]">
            <img src={clip} alt="" />
            <p className="font-bold dark:text-[black]">{t("Будем у вас через 60 минут")}</p>
          </div>
          <div className="flex items-center gap-[16px]">
            <img src={layer} alt="" />
            <p className="font-bold dark:text-[black]">{t("Более 300 постоянных клиентов")}</p>
          </div>
        </div>
      </section>
      <section className="flex gap-[20px]  items-center md:gap-[0px] md:justify-between max-w-[1200px] mx-auto py-[36px] flex-col md:flex-row">
        <img src={mask1} alt="" />
      </section>
      <section className="flex gap-[20px] items-center md:gap-[0px] md:justify-between max-w-[1200px] mx-auto py-[36px] flex-col text-center w-[40%]">
        <h1 className="font-bold text-[30px]">
          {t(
            "По вашей заявке услуга «Грузчики» будет выполнена точно в срок и по цене, которую вы можете рассчитать на нашем сайте"
          )}
        </h1>
        <p className="">
          {t("Работаем круглосуточно! Выезжаем на объекты в Москве")}
        </p>
      </section>
      <section className="max-w-[1200px] mx-auto py-[36px]  text-center">
        <p className="font-bold text-[40px]">
          {t("Популярные услуги с ценами")}
        </p>
        <div className="flex items-center justify-between w-[80%] mx-auto border-[1px] border-[#ED9121] p-[15px] rounded-3xl mt-[16px]">
          <p className="font-bold text-[#ED9121]">
            {t("Услуги грузчиков для юридических лиц")}
          </p>
          <div className="flex items-center gap-[16px]">
            <p className="font-bold ">{t("от")} 149₽</p>
            <button className="bg-[#ED9121] text-white rounded-3xl p-[10px]">
              {" "}
              {t("Заказать")}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between w-[80%] mx-auto border-[1px] p-[15px] rounded-3xl mt-[16px] ">
          <p className="font-bold ">
            {t("Услуги грузчиков для юридических лиц")}
          </p>
          <div className="flex items-center gap-[16px]">
            <p className="font-bold ">{t("от")} 149₽</p>
            <button className="bg-[#ED9121] text-white rounded-3xl p-[10px]">
              {" "}
              {t("Заказать")}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between w-[80%] mx-auto border-[1px] p-[15px] rounded-3xl mt-[16px] ">
          <p className="font-bold ">
            {t("Услуги грузчиков для юридических лиц")}
          </p>
          <div className="flex items-center gap-[16px]">
            <p className="font-bold ">{t("от")} 149₽</p>
            <button className="bg-[#ED9121] text-white rounded-3xl p-[10px]">
              {" "}
              {t("Заказать")}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between w-[80%] mx-auto border-[1px] p-[15px] rounded-3xl mt-[16px] ">
          <p className="font-bold ">
            {t("Услуги грузчиков для юридических лиц")}
          </p>
          <div className="flex items-center gap-[16px]">
            <p className="font-bold ">{t("от")} 149₽</p>
            <button className="bg-[#ED9121] text-white rounded-3xl p-[10px]">
              {" "}
              {t("Заказать")}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between w-[80%] mx-auto border-[1px] p-[15px] rounded-3xl mt-[16px] ">
          <p className="font-bold ">
            {t("Услуги грузчиков для юридических лиц")}
          </p>
          <div className="flex items-center gap-[16px]">
            <p className="font-bold ">{t("от")} 149₽</p>
            <button className="bg-[#ED9121] text-white rounded-3xl p-[10px]">
              {" "}
              {t("Заказать")}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between w-[80%] mx-auto border-[1px] p-[15px] rounded-3xl mt-[16px] ">
          <p className="font-bold ">
            {t("Услуги грузчиков для юридических лиц")}
          </p>
          <div className="flex items-center gap-[16px]">
            <p className="font-bold ">{t("от")} 149₽</p>
          </div>
        </div>
        <button className="bg-[#ED9121] text-white rounded-3xl p-[10px] mt-[20px]">
          {" "}
          {t("Заказать")}
        </button>
      </section>
      <section className=" bg-black text-[white]">
        <div className="max-w-[1200px] mx-auto py-[36px]  text-center mt-[100px]">
        <p className="font-bold text-[42px]">{t("Онлайн калькулятор")}</p>
        <p className="font-bold ">
          {t(
            "Введите данные для предварительного расчета стоимости заказа услуги «Грузчики» и получите скидку   до 10%  на первый заказ."
          )}
        </p>
        <div className="flex items-center justify-between w-[90%] md:w-[40%] mx-auto  p-[15px] mt-[16px] ">
          <p className="font-bold text-[#ED9121]">{t("Грузчики")}</p>
          <p className="font-bold ">{t("Такелаж")}</p>
          <p className="font-bold ">{t("Переезд")}</p>
          <p className="font-bold ">{t("Разнорабочие")}</p>
        </div>

        <div className="flex flex-col gap-[20px] md:flex-row items-center md:justify-between w-[80%] mx-auto  p-[15px] mt-[16px]">
          <div className="bg-white  text-black w-[90%] md:w-[31%] p-[15px] rounded-3xl">
            <div className="flex items-center justify-between ">
              <p className="font-bold ">{t("Грузчики")}</p>
              <AddCircleIcon />
            </div>
            <div className="flex items-center justify-between pt-[10px]">
              <p className="font-bold ">2</p>
              <RemoveCircleIcon />
            </div>
          </div>
          <div className="bg-white  text-black w-[90%] md:w-[31%] p-[15px] rounded-3xl">
            <p className="font-bold ">
              {t("Дата/время")}
              <p className="pt-[10px]">08/04/2024, 12:00</p>
            </p>
          </div>
          <div className="bg-white  text-black w-[90%] md:w-[31%] p-[15px] rounded-3xl">
            <div className="flex items-center justify-between ">
              <p className="font-bold ">{t("Кол-во часов")}</p>
              <AddCircleIcon />
            </div>
            <div className="flex items-center justify-between pt-[10px]">
              <p className="font-bold ">10</p>
              <RemoveCircleIcon />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[20px] md:flex-row items-center md:justify-between w-[80%] mx-auto  p-[15px] mt-[16px]">
          <div className="bg-white  text-black w-[90%] md:w-[31%] p-[15px] rounded-3xl">
            <div className="flex items-center justify-between ">
              <p className="font-bold ">{t("Дополнительные услуги")}</p>
              <p>4</p>
            </div>
          </div>
          <div className="bg-white  text-black w-[90%] md:w-[31%] p-[15px] rounded-3xl">
            <p className="font-bold ">{t("Тип работ")}</p>
          </div>
          <div className="bg-white  text-black w-[90%] md:w-[31%] p-[15px] rounded-3xl">
            <div className="flex items-center justify-between ">
              <p className="font-bold ">{t("Выберите автомобиль")}</p>
              <ExpandCircleDownIcon />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[20px] md:flex-row items-center md:justify-between w-[80%] mx-auto  p-[15px] mt-[16px]">
          <div className="bg-white  text-black w-[90%] md:w-[31%] p-[15px] rounded-3xl">
            <div className="flex items-center justify-between ">
              <p className="font-bold ">{t("Имя")}</p>
              <p>4</p>
            </div>
          </div>
          <div className="bg-white  text-black w-[90%] md:w-[31%] p-[15px] rounded-3xl">
            <p className="font-bold ">{t("")}+7</p>
          </div>
          <div className="bg-[#ED9121]   text-white w-[90%] md:w-[31%] p-[15px] rounded-3xl">
            <div className="flex items-center justify-between ">
              <p className="font-bold b">{t("Рассчитать стоимость")}</p>
              <ExpandCircleDownIcon />
            </div>
          </div>
        </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto py-[36px]  text-center  mt-[100px]">
        <p className="font-bold text-[40px]">{t("Фотогалерея")}</p>
        <div className="w-[90%] p-[15px] flex justify-between flex-col md:flex-row">
          <img src={mask2} className="w-[32%]" alt="" />
          <img src={mask3} className="w-[32%]" alt="" />
          <img src={mask4} className="w-[32%]" alt="" />
        </div>
      </section>
      <section className=" bg-black text-[white]">
        <div  className="max-w-[1200px] mx-auto py-[36px]  text-center">
        <div className="w-[90%] md:w-[80%] mx-auto  p-[15px] mt-[16px] ">
          <p className="font-bold text-[42px]">{t("Отзывы")}</p>
          <p className="font-bold ">
            {t(
              "Грузчики от компании с опытом работы в Москве с 2013 года. Для нас ценно, что за это время у нас сформировалась большая база постоянных клиентов, рекомендующих нас другим."
            )}
          </p>
        </div>
        <div className="flex items-center justify-between w-[90%] md:w-[80%] mx-auto  p-[15px] mt-[16px] ">
          <p className="font-bold text-[#ED9121]">{t("Видео отзывы")}</p>
          <p className="font-bold ">{t("Аудио отзывы")}</p>
          <p className="font-bold ">{t("Отзывы из интернета")}</p>
          <p className="font-bold ">{t("Отзывы из TenChat")}</p>
          <p className="font-bold ">{t("Ваши отзывы")}</p>
        </div>
        <div className="flex flex-col gap-[20px] md:flex-row items-center md:justify-between w-[90%] mx-auto  p-[15px] mt-[16px]">
          <img src={mask5} className="md:w-[32%] w-[90%]" alt="" />
          <img src={mask6} className="md:w-[32%] w-[90%]" alt="" />
          <img src={mask7} className="md:w-[32%] w-[90%]" alt="" />
        </div>
        </div>
      </section>
      <section className="flex gap-[20px] items-center md:gap-[0px] md:justify-between max-w-[1200px] mx-auto py-[36px] flex-col md:flex-row">
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

      <section className="max-w-[1200px] mx-auto py-[36px]  text-center">
        <div className="w-[90%] md:w-[80%] mx-auto  p-[15px] mt-[16px] text-center">
          <p className="font-bold text-[42px]">{t("Дополнительные услуги")}</p>
        </div>
        <div className="flex flex-col gap-[20px] md:flex-row items-center md:justify-between w-[90%] mx-auto  p-[15px] mt-[16px]">
          <p className=" border-[1px] rounded-4xl p-[15px]">
            {t("Грузчики для офисного переезда")}
          </p>
          <p className=" border-[1px] rounded-4xl p-[15px]">
            {t("Квартирный переезд с грузчиками")}
          </p>
          <p className=" border-[1px] rounded-4xl p-[15px]">
            {t("Перевозка мебели с грузчиками")}
          </p>
        </div>
        <div className="flex flex-col gap-[20px] md:flex-row items-center md:justify-between w-[90%] mx-auto  p-[15px] mt-[16px] text-center">
          <p className=" border-[1px] rounded-4xl p-[15px]">
            {t("Грузчики на производство")}
          </p>
          <p className=" border-[1px] rounded-4xl p-[15px]">
            {t("Переезд дома с грузчиками")}
          </p>
          <p className=" border-[1px] rounded-4xl p-[15px]">
            {t("Грузчики для вывоза мусора")}
          </p>
          <p className=" border-[1px] rounded-4xl p-[15px]">
            {t("Грузчики в Москве на разовые работы")}
          </p>
        </div>
        <div className="flex flex-col gap-[20px] md:flex-row items-center md:justify-between w-[90%] mx-auto  p-[15px] mt-[16px] text-center">
          <p className=" border-[1px] rounded-4xl p-[15px]">
            {t("Погрузочно-разгрузочные работы")}
          </p>
          <p className=" border-[1px] rounded-4xl p-[15px]">
            {t("Нанять грузчиков на такелаж")}
          </p>
          <p className=" border-[1px] rounded-4xl p-[15px]">
            {t("Грузчики с машиной")}
          </p>
          <p className=" border-[1px] rounded-4xl p-[15px]">
            {t("Демонтаж дома")}
          </p>
        </div>
        <div className="flex flex-col gap-[20px] md:flex-row items-center md:justify-between w-[90%] mx-auto  p-[15px] mt-[16px] text-center">
          <p className=" border-[1px] rounded-4xl p-[15px]">
            {t("Услуги грузчиков в Москве")}
          </p>
          <p className=" border-[1px] rounded-4xl p-[15px]">
            {t("Грузчики в Москве")}
          </p>
          <p className=" border-[1px] rounded-4xl p-[15px]">
            {t("Дачный переезд")}
          </p>
          <p className=" border-[1px] rounded-4xl p-[15px]">
            {t("Подъем на этаж в домах без лифта")}
          </p>
        </div>
        <div className="flex flex-col gap-[20px] md:flex-row items-center md:justify-between w-[90%] mx-auto  p-[15px] mt-[16px] text-center">
          <p className=" border-[1px] rounded-4xl p-[15px]">
            {t("Перевозка пианино")}
          </p>
        </div>
      </section>

      <section className=" bg-black text-[white]">
        <div className="max-w-[1200px] mx-auto py-[36px]  text-center">
        <div className="w-[90%] md:w-[80%] mx-auto  p-[15px] mt-[16px] ">
          <p className="font-bold md:text-[42px] text-[25px]">
            {t("Рекомендательные письма от крупных клиентов")}
          </p>
        </div>
        <div className="flex flex-col gap-[20px] md:flex-row items-center md:justify-between w-[90%] mx-auto  p-[15px] mt-[16px]">
          <img src={mask9} className="md:w-[32%] w-[90%]" alt="" />
          <img src={mask10} className="md:w-[32%] w-[90%]" alt="" />
          <img src={mask11} className="md:w-[32%] w-[90%]" alt="" />
          <img src={mask12} className="md:w-[32%] w-[90%]" alt="" />
        </div>
        </div>
        
      </section>
      <section className="max-w-[1200px] mx-auto py-[36px]  text-center">
        <p className="font-bold text-[40px]">{t("Часто задаваемые вопросы")}</p>
        <div className="flex items-center justify-between w-[80%] mx-auto border-[1px] p-[15px] rounded-3xl mt-[16px]">
          <p className="font-bold ">
            {t("Как узнать стоимость погрузочно-разгрузочных работ?")}
          </p>
          <div className="flex items-center gap-[16px]">
            <MinimizeIcon />
          </div>
        </div>
        <div className="flex items-center justify-between w-[80%] mx-auto border-[1px] p-[15px] rounded-3xl mt-[16px]">
          <p className="font-bold ">
            {t("Услуги грузчиков для юридических лиц")}
          </p>
          <div className="flex items-center gap-[16px]">
            <AddIcon />
          </div>
        </div>
        <div className="flex items-center justify-between w-[80%] mx-auto border-[1px] p-[15px] rounded-3xl mt-[16px] ">
          <p className="font-bold ">
            {t("Услуги грузчиков для юридических лиц")}
          </p>
          <div className="flex items-center gap-[16px]">
            <AddIcon />
          </div>
        </div>
        <div className="flex items-center justify-between w-[80%] mx-auto border-[1px] p-[15px] rounded-3xl mt-[16px] ">
          <p className="font-bold ">
            {t("Услуги грузчиков для юридических лиц")}
          </p>
          <div className="flex items-center gap-[16px]">
            <AddIcon />
          </div>
        </div>
        <div className="flex items-center justify-between w-[80%] mx-auto border-[1px] p-[15px] rounded-3xl mt-[16px] ">
          <p className="font-bold ">
            {t("Услуги грузчиков для юридических лиц")}
          </p>
          <div className="flex items-center gap-[16px]">
            <AddIcon />
          </div>
        </div>
        <div className="flex items-center justify-between w-[80%] mx-auto border-[1px] p-[15px] rounded-3xl mt-[16px] ">
          <p className="font-bold ">
            {t("Услуги грузчиков для юридических лиц")}
          </p>
          <div className="flex items-center gap-[16px]">
            <AddIcon />
          </div>
        </div>
        <div className="flex items-center justify-between w-[80%] mx-auto border-[1px] p-[15px] rounded-3xl mt-[16px] ">
          <p className="font-bold ">
            {t("Услуги грузчиков для юридических лиц")}
          </p>
          <div className="flex items-center gap-[16px]">
            <AddIcon />
          </div>
        </div>
        <button className="bg-[#ED9121] text-white rounded-3xl p-[10px] mt-[30px]">
          {" "}
          {t("Заказать")}
        </button>
      </section>
      <section className="flex gap-[20px] items-center md:gap-[0px] md:justify-between max-w-[1200px] mx-auto py-[36px] flex-col md:flex-row">
        <aside className="flex flex-col gap-[20px] items-start">
          <h1 className="text-[50px]">
            {t("Я - Рустам, руководитель отдела по работе с клиентами.")}
          </h1>
          <p>{t("Спасибо, что просмотрели сайт до конца!")}</p>
          <p>{t("Оставьте заявку в этой форме и получите скидку")}</p>
          <p>
            {t(
              "Укажите номер телефона, мы перезвоним вам в течение 1-ой минуты"
            )}
          </p>
          <p className="bg-[#ED9121] text-white p-[10px_17px] rounded-3xl">
            {t("Рассчитать стоимость")}
          </p>
          <p>
            {t(
              "Отправляя заявку, вы соглашаетесь с политикой обработки персональных данных"
            )}
          </p>
        </aside>
        <img src={mask13} alt="" />
      </section>

      <section className="max-w-[1200px] mx-auto py-[36px] mt-[50px]">
        <p className="font-bold text-[40px] text-center">
          {t("Услуги грузчиков в Москве")}
        </p>
        <p className="">
          {t(
            "Независимо от того, грузоперевозка каких грузов и на какое расстояние вам требуется, вы всегда можете рассчитывать на нашу помощь. Перевозим мебель, сейфы, торговое оборудование, банкоматы и т.д. Выезжаем в любую точку области, просто сообщите свой адрес. Время подачи машины лучше согласовать заранее с нашим оператором. Выберите дату, час и оставьте заявку по телефону или напишите обращение. Наши грузчики выполняют широкий спектр услуг – разбирают и упаковывают мебель и технику, выполняют снос и вынос на этаж, могут помочь разобрать склад. Перенесут тяжелую мебель или оборудование. Звоните, предоставим профессионалов под любые задачи. Сотрудники нашей фирмы проходят инструктаж и владеют проф. инструментом. Рабочие пунктуальные, к выполнению заказов подходят ответственно. Если сомневаетесь с выбором машины и количестве грузчиков - обратитесь к нам за консультацией. Если вы представляете юридическое лицо - расскажите нам о вашей задаче и мы вышлем вам свое коммерческое предложение. Кроме того, грузчики в Москве проводят погрузочно-разгрузочные работы с соблюдением техники безопасности и несут ответственность за сохранность и целостность вещей. После переезда по вашему желанию сделаем уборку на старом месте, соберем мебель на новом. Бригады наших грузчиков оснащены необходимыми аксессуарами и инвентарем для качественного выполнения своей работы. Поэтому, если вам нужны опытные, профессиональные грузчики, услуги которых стоят недорого, приглашаем к сотрудничеству с нашей компанией. Сделать заказ на помощь такелажника или грузчиков для перевозки личных вещей вы можете как предварительно, так и срочно. Мы найдем взаимовыгодное и удобное для всех решение. Оказываем услуги частным лицам и компаниям, помогаем избавиться от любых хлопот, связанных с организацией переезда и перевозкой грузов. Наши <минимальные цены вас приятно удивят. Предлагаем различные способы оплаты - карта, наличные, по безналу."
          )}
        </p>
        <p className=" mt-[30px]">
          {t("Заказать услугу «Грузчики» Вы можете круглосуточно по всей территории Москвы и Московской области: Балашиха, Бронницы, Видное, Волоколамск, Воскресенск, Дзержинский, Дмитров, Долгопрудный, Домодедово, Дубна, Егорьевск, Жуковский, Зарайск, Истра, Кашира, Клин, Коломна, Королёв, Котельники, Красногорск, Лобня, Лосино-Петровский, Лотошино, Луховицы, Лыткарино, Люберцы, Можайск, Мытищи, Наро-Фоминск, Ногинск, Одинцово, Орехово-Зуево, Павловский Посад, Подольск, Пушкино, Раменское, Реутов, Руза, Сергиев Посад, Серебряные Пруды, Серпухов, Солнечногорск, Ступино, Талдом, Фрязино, Химки, Черноголовка, Чехов, Шатура, Шаховская, Щёлково, Электросталь, Боброво, Бутово, Горки Ленинские, Дрожжино, Лопатино, Измайлово, Новодрожжино, Сычёво, Осташёво, Белоозёрский, Яхрома, ")}
        </p>
      </section>
     
    </div>
  );
};

export default About;
