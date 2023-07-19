import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import { Main, TitleText, BodyText, LinkText, Line, SocialLinkText, ImageIcon } from './Styled';
import ProjectCardView from './ProjectCardView.js';
import projectData, { WritingData } from './data.js'
import logoSrc from "../src/images/favicon.svg";

function App() {
  return (
    <div className="App">
      <Main>
        <Section><ImageIcon src={logoSrc} alt="Logo" className="image" />
        </Section>
        <Section>
          <TitleText>Hello, my name is Dayo.</TitleText>
          <BodyText>I'm an iOS and Graphics engineer. <br></br>An experienced software engineer skilled in graphics, mobile app development, and computer vision.</BodyText>
        </Section>
        <Section>
          <TitleText>Projects</TitleText>
          <div className="grid-container">
            {projectData.map((project, index) => (
              <ProjectCardView
                key={index}
                title={project.title}
                location={project.description}
                videoSrc={project.videoSrc}
              />
            ))}
          </div>
        </Section>
        <Section>
          <TitleText>Writings</TitleText>
          {WritingData.map((item, index) => (
            <LinkText key={index} href={item.link}>
              {item.title}
            </LinkText>
          ))}
        </Section>
        <Line />
        <SocialLinkText href='https://twitter.com/banjo_dayo'>@dayobanjo</SocialLinkText>
      </Main>

    </div>
  );
}

export const Section = styled.section`
  margin: 30px 30px;
  display: block;
`;

export default App;
