import leftlogo from "../assets/leftlogo.svg";
import rightlogo from "../assets/rightlogo.svg";
import { FooterStyle, FooterText, FooterWrapper } from "./FooterStyle";


export const Footer = () => {
    return (
        <FooterWrapper>
            <FooterStyle>
                <img src={leftlogo} alt="slack-logo" />
                <FooterText>HNG Internship 9 Frontend Task</FooterText>
                <img src={rightlogo} alt="github-logo" />
            </FooterStyle>
        </FooterWrapper>
    )
}
