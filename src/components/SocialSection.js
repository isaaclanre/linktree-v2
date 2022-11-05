import slack from "../assets/slack.svg";
import github from "../assets/github.svg";
import { SocialSectionStyle } from "./SocialSectionStyles";


export const SocialSection = () => {
  return (
    <SocialSectionStyle>
        <img src={slack} alt="slack-logo"/>
        <img src={github} alt="github-logo"/>
    </SocialSectionStyle>
  )
}
