import {
  Button,
  Email,
  EmailInput,
  Input,
  Label,
  MainWrapper,
  MessageInput,
  MessageLabel,
  Name,
  FormWrapper,
  Heading,
  SupportingText,
  NameRow,
  EmailStyle,
  CheckBoxStyle,
  SubWrapper,
  HeaderStyle,
  CheckBoxLabel,
  CheckBox,
  SubWrapper2,
  Container,
  MessageStyle,
} from "./ContactStyle";
import { Footer } from "./Footer";
export const Contact = () => {
  return (
    <>
      <Container>
        <MainWrapper>
          <SubWrapper>
            <SubWrapper2>
              <HeaderStyle>
                <Heading> Contact Us</Heading>
                <SupportingText>
                  Hi there, contact me to ask me about anything you have in
                  mind.
                </SupportingText>
              </HeaderStyle>
              <FormWrapper>
                <NameRow>
                  <Name>
                    <Label for="first_name">First name</Label>
                    <Input
                      type="text"
                      placeholder="Enter your first name"
                      id="first_name"
                    />
                  </Name>
                  <Name>
                    <Label for="last_name">Last name</Label>
                    <Input
                      type="text"
                      placeholder="Enter your last name"
                      id="last_name"
                    />
                  </Name>
                </NameRow>
                <EmailStyle>
                  <Email for="email">Email</Email>
                  <EmailInput
                    type="text"
                    placeholder="yourname@email.com"
                    id="email"
                  />
                </EmailStyle>
                <MessageStyle>
                  <MessageLabel for="message">Message</MessageLabel>
                  <MessageInput
                    type="text"
                    placeholder="Send me a message and I'll reply you as soon as possible..."
                    id="message"
                  />
                </MessageStyle>
                <CheckBoxStyle>
                  <CheckBox
                    type="checkbox"
                    name="cheese"
                    id="check__box"
                  ></CheckBox>
                  <CheckBoxLabel for="check__box">
                    You agree to providing your data to Dimeji who may contact
                    you.
                  </CheckBoxLabel>
                </CheckBoxStyle>
                <Button type="button" id="btn__submit">
                  Send message
                </Button>
              </FormWrapper>
            </SubWrapper2>
          </SubWrapper>
        </MainWrapper>
        <Footer />
      </Container>
    </>
  );
};
