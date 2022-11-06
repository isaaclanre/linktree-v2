import { ProfileSection } from "./ProfileSection";
import LinkCard from "./LinkCard";
import { SocialSection } from "./SocialSection";
import { MainWrapper } from "./LandingPageStyle";
import { Footer } from "./Footer";

export const LandingPage = () => {
  return (
    <>
      <MainWrapper>
        <ProfileSection />
        <LinkCard />
        <SocialSection />
      </MainWrapper>
      <Footer />
    </>
  );
};
