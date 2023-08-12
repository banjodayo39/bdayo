import React from 'react';
import { CardView, CardMediaContainer,VideoCard,ImageCard, ProjectTitle, CardContent  } from './Styled';

function ProjectCardView(props) {
  const { title, location, videoSrc, imgSrc } = props;

  return (
    <CardView>
      <CardMediaContainer>
        {videoSrc ? (
          <VideoCard
            src={videoSrc}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          ></VideoCard>
        ) : (
          <ImageCard src={imgSrc} alt={title} />
        )}
      </CardMediaContainer>
      <CardContent>
        <ProjectTitle>{title}</ProjectTitle>
        <p className="project-link">{location}</p>
      </CardContent>
    </CardView>
  );
}

export default ProjectCardView;
