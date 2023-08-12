import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const FullWidthDiv = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
`;

export const HalfWidthDiv = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
borderRadius: "10%",
background: "#000000"
position: relative;
align-items: center;
`;

export const LinkWrapper = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const BlurredBackground = styled.div`
position: absolute;
width: 100%;
height: 100%;
backdrop-filter: blur(100px); /* Add the blur effect */
pointer-events: none; /* Allow clicks to go through the overlay */
z-index: -1; /* Set a lower z-index to keep the background behind other content */
`;


export const TitleItemText = styled.div`
  margin: 20px; 

`;

export const StyledHeading = styled.h1`
  margin:80px 20px 5px;
  color: #000000;
`;

export const ImageContainerLeft = styled.p`
  float: left;
  width: 280px;
  height: auto;
  margin: 20px;
  flex-direction: column;
`;

export const ImageContainerRight = styled.p`
float: right;
width: 280px;
  height: auto;
  margin: 20px;
  flex-direction: column;
  align-self: flex-end;

`;

export const Image = styled.img`
  /* Set the size of the image */
  width: 100px;
  height: 100px; /* Automatically adjust the height to maintain the aspect ratio */
`;

export const ImageRight = styled.img`
  /* Set the size of the image */
  width: 100px;
  height: 100px; /* Automatically adjust the height to maintain the aspect ratio */
  float: right;
`;


export const StyledMessage = styled.p`
  max-width: 255px;
  word-wrap: break-word;
  margin-bottom: 12px;
  line-height: 24px;
  position: relative;
  padding: 10px 20px;
  border-radius: 25px;

  &:before,
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 25px;
  }
`;

export const SendMessage = styled(StyledMessage)`
  color:  #FFFFFF;
  background:  #0B93F6;
  align-self: flex-start;

  &:before {
    right: -7px;
    width: 20px;
    background-color:  #0B93F6;
    border-bottom-left-radius: 16px 14px;
  }

  &:after {
    right: -26px;
    width: 26px;
    background-color:  #FFFFFF;
    border-bottom-left-radius: 10px;
  }
`;

export const ReceiveMessage = styled(StyledMessage)`
  background:  #E5E5EA;
  color:  #000000;
  align-self: flex-start;
  float: end;

  &:before {
    left: -7px;
    width: 20px;
    background-color: #E5E5EA;
    border-bottom-right-radius: 16px 14px;
  }

  &:after {
    left: -26px;
    width: 26px;
    background-color:  #FFFFFF;
    border-bottom-right-radius: 10px;
  }
`;

// Global styles
export const BackgroundStyles = styled.div`
  :root {
    --send-bg: #0B93F6;
    --send-color: white;
    --receive-bg: #E5E5EA;
    --receive-text: black;
    --page-background: white;
  }

  body {
    font-family: "Helvetica Neue", Helvetica, sans-serif;
    font-size: 20px;
    font-weight: normal;
    max-width: 450px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    background-color: var(--page-background);
  }
`;

export const StudioMain=styled.div`
width:100%;
height:100vh;
padding:0;
margin:0;
box-sizing: border-box;
`;

export const ImageList = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  bottom: 20px;
  position: absolute;
`;

export const Image2 = styled.img`
  display: block;
  width: auto;
  height: 70px;
  object-fit: cover;
  margin: 0 auto; /* Center the image horizontally within itself */
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 0;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  transition: opacity 0.3s;
  padding: 0px 10px;

  img {
    width: 24px; 
    height: 24px; 
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0); /* Clear background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const FooterContainer = styled.div`
  width: 260px;
  background-color: rgba(255, 255, 255, 0.1); /* Slightly transparent white background */
  backdrop-filter: blur(10px); /* Apply blur effect to create glass-like effect */
  border: 1px solid rgba(255, 255, 255, 0.2); /* Light border */
  border-radius: 100px; /* Rounded corners */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 20px;
`;

export const BackgroundDiv = styled.div`
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  width: 100vw; /* Set the width to 100vw (viewport width) */
  height: 100vh; /* Set the height to 100vh (viewport height) */
  overflow: hidden; /* Overflow will be hidden to prevent scrollbars if the content overflows */
`;


export const HomeMain = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
