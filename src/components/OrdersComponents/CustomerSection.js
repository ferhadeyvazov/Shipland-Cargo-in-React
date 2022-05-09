import React from "react";
import CustomerHeaderImage from "../../assets/ordersIcons/iCustomer.svg";
import "../../orders.scss";
import { useTranslation } from "react-i18next";
const CustomerSection = () => {
  const{t} = useTranslation(["orders","orders/manorder"])

  return (
    <div className="customer-section">
      <div className="customer-items">
        <div className="customer-head">
          <div className="customer-head-content">
            <img src={CustomerHeaderImage} alt="" />
            <h1>{t("orders/manorder:customer")}</h1>
          </div>
        </div>
        <div className="customer-info">
          <div className="customer-info-content">
            <div className="customer-info-top">
              <select name="" id="">
                <option value="">{t("orders/manorder:addressbook")}</option>
              </select>
            </div>
            <div className="customer-info-bottom">
              <div className="address-info">
                <div className="address-info-head">
                  <h1>{t("orders/manorder:addressinfo")}</h1>
                </div>
                <div className="address-groups">
                  <div className="address-group">
                    <label htmlFor="">
                      {t("orders/manorder:country")}<span>*</span>{" "}
                    </label>{" "}
                    <br />
                    <select name="" id="">
                      <option value="">US</option>
                      <option value="">UK</option>
                      <option value="">Norway</option>
                    </select>
                  </div>
                  <div className="address-group">
                    <label htmlFor="">
                      {t("orders/manorder:city")}<span>*</span>{" "}
                    </label>{" "}
                    <br />
                    <select name="" id="">
                      <option value="">New York</option>
                      <option value="">UK</option>
                      <option value="">Norway</option>
                    </select>
                  </div>
                  <div className="address-group">
                    <label htmlFor="">
                      {t("orders/manorder:state")}<span>*</span>{" "}
                    </label>{" "}
                    <br />
                    <select name="" id="">
                      <option value="">Californiya</option>
                      <option value="">UK</option>
                      <option value="">Norway</option>
                    </select>
                  </div>
                  <div className="address-group">
                    <label htmlFor="">
                      {t("orders/manorder:adres")}<span>*</span>{" "}
                    </label>{" "}
                    <br />
                    <input type="text" placeholder="Bergen street 57" />
                  </div>
                  <div className="address-group">
                    <label htmlFor="">
                      {t("orders/manorder:zip")}<span>*</span>{" "}
                    </label>{" "}
                    <br />
                    <input type="text" placeholder="745844" />
                  </div>
                </div>
              </div>
              <div className="contact-info">
                <div className="address-info-head">
                  <h1>{t("orders/manorder:contactinfo")}</h1>
                </div>
                <div className="address-groups">
                  <div className="address-group">
                    <label htmlFor="">
                      {t("orders/manorder:fullname")}<span>*</span>{" "}
                    </label>{" "}
                    <br />
                    <input type="text" placeholder="Emma John" />
                  </div>
                  <div className="address-group">
                    <label htmlFor="">
                      {t("orders/manorder:phone")}<span>*</span>{" "}
                    </label>{" "}
                    <br />
                    <input type="text" placeholder="+9383830834" />
                  </div>
                  <div className="address-group">
                    <label htmlFor="">
                      Email<span>*</span>{" "}
                    </label>{" "}
                    <br />
                    <input type="text" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="save-btn">
                  <div className="save-btn-content">
                    <input
                      className="styled-checkbox"
                      id="styled-checkbox-1"
                      type="checkbox"
                      value="value1"
                    />
                    <label htmlFor="styled-checkbox-1">
                      {t("orders/manorder:save")}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSection;
