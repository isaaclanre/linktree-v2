import avatar from "../assets/isaac_pic.jpeg";
import image from "../assets/Icon.svg";
import shareIcon from "../assets/share-06.svg";
import shareIconMobile from "../assets/dots-horizontal.svg";

import {
  Avatar,
  HiddenSlack,
  NameTitle,
  ProfileSectionStyle,
} from "./ProfileSectionStyle";
import { SharedButton } from "./ProfileSectionStyle";
export const ProfileSection = () => {
  return (
    <>
      <ProfileSectionStyle>
        <SharedButton>
          <img src={shareIcon} alt="sharedbutton" className="bigScreen" />
          <img
            src={shareIconMobile}
            alt="sharedbutton"
            className="mobileScreen"
          />
        </SharedButton>
        <Avatar>
          <img src={image} id="icon" alt="Icon" />
          <img src={avatar} id="profile__img" alt="Profile" />
        </Avatar>
        <NameTitle id="twitter">@isaacolanre</NameTitle>
      </ProfileSectionStyle>
      <HiddenSlack id="slack">isaacolanre</HiddenSlack>
    </>
  );
};
