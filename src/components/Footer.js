import { FooterStyle, FooterWrapper, FooterText } from "./FooterStyle";
import I4G from "../assets/I4G.svg";
import zuri from "../assets/zuri.svg";

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterStyle>
        <img src={zuri} id="zuri" alt="zuri" />
        <FooterText>HNG Internship 9 Frontend Task</FooterText>
        <img src={I4G} id="I4G" alt="I4G" />
      </FooterStyle>
    </FooterWrapper>
  );
};

export default Footer;
