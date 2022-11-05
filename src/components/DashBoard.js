import { ProfileSection } from "./ProfileSection";
import LinkCard from "./LinkCard";
import { SocialSection } from "./SocialSection";
import { AppStyles } from "../AppStyles";
import { Footer } from "./Footer";

export const DashBoard = () => {
  return (
    <>
      <AppStyles>
        <ProfileSection />
        <LinkCard />
        <SocialSection />
        <Footer />
      </AppStyles>
    </>
  );
};
