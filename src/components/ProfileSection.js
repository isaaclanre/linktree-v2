import avatar from "../assets/kehinde.jpg";
import sharedbutton from "../assets/sharedbutton.svg";
import sharedbuttonmobile from "../assets/sharedbuttonmobile.svg";

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
      <TitleStyle id="twitter"> @KehindeDimeji </TitleStyle>
      <p id="slack">kehinde-dimeji</p>
    </MainProfileWrapper>
  );
};
