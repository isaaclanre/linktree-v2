import styled from "styled-components";
export const HeaderStyle = styled.div`
  width: 100%;
  height: 94px;
  margin-bottom: 48px;
  @media only screen and (max-width: 600px) {
    margin-bottom: 75px;
  }
`;
export const Heading = styled.div`
  width: 100%;
  height: 44px;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
`;
export const SupportingText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #475467;
  height: 30px;
`;
export const Label = styled.label`
  height: 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #344054;
`;
export const Input = styled.input`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 10px 14px;
  width: 100%;
  height: 44px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  background: #ffffff;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
`;
export const Names = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 100%;
  padding-bottom: 30px;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;
    padding-bottom: 25px;

    width: 100%;
  }
`;
export const Name = styled.div`
  padding: 0px;
  width: 50%;
  height: 70px;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
export const EmailStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  width: 100%;

  padding-bottom: 30px;
`;
export const Email = styled.label`
  height: 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #344054;
`;
export const EmailInput = styled.input`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 10px 14px;
  width: 100%;
  height: 44px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  background: #ffffff;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
`;
export const MessageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 6px;

  width: 100%;
`;
export const MessageLabel = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #344054;

  /* Text sm/Medium */

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */
`;
export const MessageInput = styled.textarea`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  padding: 12px 14px;
  width: 100%;
  height: 132px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  background: #ffffff;

  border-radius: 8px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;
export const CheckBoxStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  width: 100%;
  padding-top: 24px;
  padding-bottom: 32px;
  @media only screen and (max-width: 600px) {
    height: 100px;
  }
`;
export const CheckBox = styled.input.attrs({ type: "checkbox" })`
  box-sizing: border-box;
  height: 20px;
  background: #ffffff;
  border: 1px solid #d0d5dd;

  border-radius: 6px;
`;
export const CheckBoxLabel = styled.label`
  width: 100%;
  height: 24px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #475467;
`;
export const Button = styled.button`
  box-sizing: border-box;
  width: 100%;
  cursor: pointer;
  height: 48px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  background: #1570ef;
  border: 1px solid #1570ef;
  border-radius: 8px;
`;
export const FormWrapper = styled.form`
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
`;
export const MainWrapper = styled.div`
  padding: 64px 0px 96px;
  width: 100vw;
  height: 85%;
  align-items: center;
`;
export const SubWrapper = styled.div`
  width: 90%;
  height: 90%;
`;
export const SubWrapper2 = styled.div`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10%;
`;
export const Container = styled.div`
  height: auto;
  width: 100vw;
`;
