

import React, { Component } from 'react';
import { ProjectContainer, TitleText, BodyText, LinkWrapper, VerticalScrollContainer, Line, Section, ImageIcon } from '../Styled';
import ProjectCardView from '../ProjectCardView.js';
import projectData from '../data.js'

export function HomeOverlay() {
  return (
    <ProjectContainer>
      <TitleText>Projects</TitleText>
      <Line />
      <VerticalScrollContainer>
        {projectData.map((project, index) => (
          <LinkWrapper href={project.link}>
            <Section>
              <TitleText>{project.title}</TitleText>
              <BodyText>{project.description}</BodyText>
            </Section>
          </LinkWrapper>
        ))}
      </VerticalScrollContainer>
    </ProjectContainer>
  );
}



