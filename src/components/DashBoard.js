import { ProfileSection } from "./ProfileSection";
import { LinkSection } from "./LinkSection";
import { SocialSection } from "./SocialSection";
import { AppStyles } from "../AppStyles";
import { Footer } from "./Footer";

export const DashBoard = () => {
  return (
    <>
      <AppStyles>
        <ProfileSection />
        <LinkSection />
        <SocialSection />
        <Footer />
      </AppStyles>
    </>
  );
};
