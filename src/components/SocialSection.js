import slack from "../assets/slack.svg";
import gitbub from "../assets/github.svg";
import { SocialSectionStyle } from "./SocialSectionStyles";

export const SocialSection = () => {
  return (
    <SocialSectionStyle>
      <img src={slack} id="@isaacolanre" alt="slack-logo" />
      <img src={gitbub} id="github" alt="github-logo" />
    </SocialSectionStyle>
  );
};

export default SocialSection;
