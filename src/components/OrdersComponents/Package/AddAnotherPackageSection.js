import React from "react";
import packagePlus from "../../../assets/ordersIcons/packagePlus.svg";
import PackageImage from "../../../assets/ordersIcons/package.svg";
import RemoveBtnImage from "../../../assets/ordersIcons/removeBtn.svg";
import AddPackageInputGroups from "./AddPackageInputGroups";
import { useTranslation } from "react-i18next";

const AddAnotherPackageSection = () => {
  const {t}=useTranslation(["orders","orders/manorder"])

  return (
    <>
      <div className="package-section product-section">
        <div className="package-head">
          <div className="package-head-top">
            <img src={PackageImage} alt="Package" />
            <h4>{t("orders/manorder:package")}</h4>
          </div>
          <div className="add-package">
            <button>
              <i className="fas fa-plus"></i>
            </button>
            <h4>{t("orders/manorder:addpack")}</h4>
          </div>
        </div>
        <AddPackageInputGroups />
      </div>
    </>
  );
};

export default AddAnotherPackageSection;
