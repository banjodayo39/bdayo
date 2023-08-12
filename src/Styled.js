import styled from "styled-components";

export const ProjectContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  color: white;
  padding: 20px;
  padding-top: 60px; 
  z-index: 1;
  display: flex;
  align-items: center;
  width: 70%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;


export const HorizontalScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
`;

export const Section = styled.section`
  display: block;
  max-width: 80%;
  cursor: pointer;
  
  border-radius: 10px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);   }
  padding: 10px
`;

export const LinkWrapper = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const TitleText = styled.div`
  font-size: 20px;
  color: #000;
  font-weight: 800;
  font-weight: bold;
  transition: 0.2s all ease;
  text-align: left;
  margin-bottom: 8px;
  align-items: center; 
`;

export const BodyText = styled.div`
  font-size: 16px;
  color: #000;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 2px;
  margin-top: 2px;
  text-align: left;
  font-weight: semibold;
  align-items: center; /* Center items horizontally */
`;

export const Btn = styled.button`
  outline: none;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  transition: 0.2s all ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    border-radius: 4px;
  }
`

export const LinkText = styled.a`
  color: #ffffff;
  font-size: 18px;
  background-color: transparent;
  margin-top: 10px;
  display: block;
  text-decoration: underline;
  text-decoration-color: #ffffff; /* Optional: specify the underline color */
  text-align: left;
  font-weight: bold;
`;

export const Line = styled.hr`
  border: none;
  border-top: 1px solid #000;
  width: 100%; 
  margin: 10px auto; 
  opacity: 0.6;
`;

export const SocialLinkText = styled.a`
  color: #ffff;
  opacity: 0.5;
  font-size: 18px;
  background-color: transparent;
  margin-top: 10px;
  display: block;
  text-decoration: underline;
  text-decoration-color: #ffffff; /* Optional: specify the underline color */
  text-align: center;
  font-weight: bold;
  padding: 50px;
`;

export const ImageIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  opacity: 0.5;
  float: left;
`;

export const OverlayDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 20px;
  z-index: 1;
  display: flex;
  align-items: center;
`;

export const VerticalScrollContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* Single column */
  gap: 4px;
  width: 100%;
  margin-left: 40px;
  overflow-y: auto; 
  padding: 10px;
`;


export const CardView = styled.div`
  display: inline-block;
  margin: 20px;
  border-radius: 10px;
  text-align: left;
  transition: 0.15s transform ease;
  cursor: pointer;
  max-width: 400px;
`;

export const CardMediaContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin: 0 auto;
  display: block;
  width: 100%;
  max-width: 200px;
  height: auto;
`;

export const VideoCard = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
`;

export const ImageCard = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const ProjectTitle = styled.div`
  font-size: 18px;
  color: #FFF;
  margin-top: 0;
  text-align: left;
`;

export const CardContent = styled.div`
  padding: 10px;
`;

export const MobileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  max-height: 400px;
  overflow-y: auto;
`;
