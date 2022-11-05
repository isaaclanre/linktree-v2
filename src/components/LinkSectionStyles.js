import styled from "styled-components";

export const LinkSectionStyle = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 32px;
  gap: 16px;
  font-weight: 600;
  font-size:18px;
  margin: 15px;
  width: 100%;
  height: 76px;
  background: #eaecf0;
  border: 1px solid #eaecf0;
  border-radius: 8px;
  @media only screen and (max-width:600px) {
    font-size:14px;
  }
`;

export const HoverStyle = styled.div`
  div:hover {
    background: #d0d5dd;
    color: #101828;
    border-radius: 16px;
  }
  a:link {
    text-decoration: none;
    color: #101828;
  }
  a:visited {
    text-decoration: none;
    color: #101828;
  }
  a:hover {
    text-decoration: none;
    color: #101828;
  }
  a:active {
    text-decoration: none;
    color: #101828;
  }
`;
