import styled from "styled-components";

export const Main=styled.div`
width:100%;
height:100vh;
background:#2c2c2c;
display: flex;
flex-direction: column;
`;

export const TitleText = styled.div`
  font-size: 24px;
  color: #ffffff;
  font-weight: 800;
  font-weight: bold;
  transition: 0.2s all ease;
  text-align: center;
  margin-bottom: 30px;
  align-items: center; /* Center items horizontally */
`;

export const BodyText = styled.div`
  font-size: 18px;
  color: #80ffffff;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 10px;
  margin-top: 10px;
  text-align: center;
  font-weight: bold;
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
  border-top: 1px solid #ffffff;
  margin: 50px 0 50px 0;
  opacity: 0.3;
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
