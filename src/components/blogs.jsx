import React from 'react'
import { useTranslation } from "react-i18next";
import mask8 from "../assets/IMG_3107 1.png";

import img1 from "../assets/VLAD8188 1.png";
import img2 from "../assets/Mask group (6).png";
import img3 from "../assets/Mask group (7).png";
import img4 from "../assets/Mask group (8).png";

const Blogs = ({img}) => {
      const { t, i18n } = useTranslation();
      const changeLanguage = (language) => {
        i18n.changeLanguage(language);
      };
  return (
<>
         <div className=" md:w-[23%] w-[90%] flex flex-col gap-[20px]">
                    <img src={img} className="rounded-4xl" alt="" />
                    <div className="flex justify-between">
                      <p>01.03.2023</p>
                      <p>4,8/5</p>
                    </div>
                    <h1 className="font-bold">{t("Как перевозить холодильник?")}</h1>
                    <p className="">
                      {t(
                        "Холодильник является крупногабаритной бытовой техникой, и его перевозка должна осуществляться по особенным правилам."
                      )}
                    </p>
                    <div>
                        
                    <button className="text-[#ED9121] p-[10px] border-[1px] border-[#ED9121] rounded-4xl">
                      {t("Читать далее")}
                    </button>
                    </div>
                  </div>
                 
                  </>
    )
}

export default Blogs