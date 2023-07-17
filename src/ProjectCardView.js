import React from 'react';
import './project-cardview.css';

function ProjectCardView(props) {
    const { title, location, videoSrc, imgSrc } = props;
  
    return (
        <div className="cardview">
          {videoSrc && (
            <iframe
              className="img-card"
              src={videoSrc}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              style={{ float: 'left', marginRight: '10px' }}
            ></iframe>
          )}
          {imgSrc && (
            <img
              className="img-card"
              src={imgSrc}
              alt={title}
              style={{ float: 'left', marginRight: '10px' }}
            />
          )}
          <div>
            <h2 className="project-title">{title}</h2>
            <p className="project-link">{location}</p>
          </div>
        </div>
      );
  }
   
export default ProjectCardView;