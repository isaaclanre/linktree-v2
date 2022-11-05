import styled from "styled-components";


export const SocialSectionStyle = styled.div `
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 24px 0px;
gap: 24px;

width: 100%;
height: 24px;
/* Inside auto layout */

flex: none;
order: 0;
align-self: stretch;
flex-grow: 1;
@media only screen and (max-width: 600px){
    display:inline;
}
`