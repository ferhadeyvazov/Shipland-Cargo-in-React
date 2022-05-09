import React from "react";
import "../../orders.scss";
import CommonInfoImage from "../../assets/ordersIcons/commonInfo.svg";
import { useTranslation } from "react-i18next";
const CommonInformation = () => {
  const {t}=useTranslation(["orders","orders/manorder"])

  return (
    <>
      <div className="common-information">
        <div className="common-info-content">
          <div className="common-info-top">
            <img src={CommonInfoImage} alt="" />
            <h1>{t("orders/manorder:commoninfo")}</h1>
          </div>
          <div className="common-info-bottom">
            <div className="common-info-bottom-content">
              <div className="info-groups">
                <div className="info-group">
                  <label htmlFor="">
                    {" "}
                    {t("orders/manorder:ios")}<span>*</span>
                  </label>{" "}
                  <br />
                  <input type="text" placeholder="498980948" />
                </div>
                <div className="info-group">
                  <label htmlFor="">
                    {" "}
                    {t("orders/manorder:vatt")}<span>*</span>
                  </label>{" "}
                  <br />
                  <input type="text" placeholder="49343875" />
                </div>
                <div className="info-group">
                  <label htmlFor="">
                    {" "}
                    {t("orders/manorder:currency")}<span>*</span>
                  </label>{" "}
                  <br />
                  <input type="text" placeholder="USD" />
                </div>
                <div className="info-group">
                  <label htmlFor="">
                    {t("orders/manorder:tobestorage")}<span>*</span>
                  </label>{" "}
                  <br />
                  <select name="" id="">
                    <option value="">Select something</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonInformation;
