import styled from "styled-components";

export const SocialSectionStyle = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px 0px;
  gap: 24px;

  width: 100%;
  height: 24px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 1;
`;

// export const SocialSectionWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 24px 0px;
//   gap: 64px;

//   width: 1216px;
//   height: 72px;

//   /* Base/White */

//   background: #ffffff;

//   /* Inside auto layout */

//   flex: none;
//   order: 1;
//   align-self: stretch;
//   flex-grow: 0;
// `;
