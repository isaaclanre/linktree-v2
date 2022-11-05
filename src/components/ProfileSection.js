import avatar from "../assets/isaac_pic.jpeg";
import sharedbutton from "../assets/share-06.svg";
import sharedbuttonmobile from "../assets/dots-horizontal.svg";

import {
  MainProfileWrapper,
  SharedButton,
  TitleStyle,
} from "./ProfileSectionStyles";

export const ProfileSection = () => {
  return (
    <MainProfileWrapper>
      <SharedButton>
        <img src={sharedbutton} alt="sharedbutton" className="bigScreen" />
        <img
          src={sharedbuttonmobile}
          alt="sharedbutton"
          className="mobileScreen"
        />
      </SharedButton>
      <img src={avatar} alt="profile-img" id="profile__img" />
      <TitleStyle id="twitter"> @isaacolanre </TitleStyle>
      <p id="slack">isaacolanre</p>
    </MainProfileWrapper>
  );
};
