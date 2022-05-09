import React from "react";
import RemoveBtnImage from "../../../assets/ordersIcons/removeBtn.svg";
import { useTranslation } from "react-i18next";
const PackageInputGroups = () => {
  const {t}=useTranslation(["orders","orders/manorder"])

  return (
    // <>
    <div className="package-inputs">
      <div className="package-input-groups">
        <div className="package-input">
          <label htmlFor="">
            {t("orders/manorder:count")}:<span>*</span>
          </label>{" "}
          <br />
          <input type="text" />
        </div>
        <div className="package-input">
          <label htmlFor="">
            {t("orders/manorder:type")}:<span>*</span>
          </label>{" "}
          <br />
          <input type="text" />
        </div>
        <div className="package-input">
          <label htmlFor="">
            {t("orders/manorder:length")}:<span>*</span>
          </label>{" "}
          <br />
          <div className="separate-input">
            <input type="text" />
            <span>cm</span>
          </div>
        </div>
        <div className="package-input">
          <label htmlFor="">
            {t("orders/manorder:width")}:<span>*</span>
          </label>{" "}
          <br />
          <div className="separate-input">
            <input type="text" />
            <span>cm</span>
          </div>
        </div>
        <div className="package-input">
          <label htmlFor="">
            {t("orders/manorder:height")}:<span>*</span>
          </label>{" "}
          <br />
          <div className="separate-input">
            <input type="text" />
            <span>cm</span>
          </div>
        </div>
        <div className="package-input">
          <label htmlFor="">
            {t("orders/manorder:weight")}:<span>*</span>
          </label>{" "}
          <br />
          <div className="separate-input">
            <input type="text" />
            <span>cm</span>
          </div>
        </div>
      </div>
      <div className="remove-package">
        <div className="remove-btn">
          <button className="delete-btn">
            <img src={RemoveBtnImage} alt="" />
          </button>
        </div>
      </div>
    </div>
    // </>
  );
};

export default PackageInputGroups;
