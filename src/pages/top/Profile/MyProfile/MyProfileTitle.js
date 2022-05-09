import React from "react";

const MyProfileTitle = ({ svgProfile, english, editimg }) => {
  return (
    <div className="profile_title">
      <div className="left">
        <img src={svgProfile} alt="" />
        <span>{english ? "My Profile" : "Profilim"}</span>
      </div>
      <div className="right">
        <img src={editimg} alt="" />
      </div>
    </div>
  );
};

export default MyProfileTitle;
