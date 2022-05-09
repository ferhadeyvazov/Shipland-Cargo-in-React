import React from "react";
import "./myprofile.scss";
import svgProfile from "../../../../assets/ProfileIconImages/myprofile.svg";
import editimg from "../../../../assets/ProfileIconImages/edit.svg";
import { useState } from "react";
import MyProfileBottom from "./MyProfileBottom";
import MyProfileTitle from "./MyProfileTitle";
import MyProfileMiddleInputs from "./MyProfileMiddleInputs";
const MyProfile = () => {
  const [english, setEnglish] = useState(true);

  return (
    <div className="profile_container my_profile_container">
      <MyProfileTitle
        english={english}
        editimg={editimg}
        svgProfile={svgProfile}
      />
      <div className="profile_body last-create">
        {/* //! radio buttons */}
        <MyProfileMiddleInputs />

        <MyProfileBottom />
      </div>
    </div>
  );
};

export default MyProfile;
