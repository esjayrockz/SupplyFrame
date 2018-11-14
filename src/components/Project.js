import React from 'react';

const Project = ({ name, url, summary, description, image_url, views, comments, followers, skulls, components, created })=> (
      <div className="box-layout__box">
        <h3>{name}</h3>
      {summary !== undefined ? <span><strong>Summary:&nbsp; </strong>{summary}</span> : ''}
        <div className="box-layout__tooltip">
        {views !== undefined ? <span>Views:&nbsp;&nbsp; {views}</span> : ''}
        {comments !== undefined ? <span>Comments:&nbsp;&nbsp; {comments}</span> : ''}
        {followers !== undefined ? <span>Followers:&nbsp;&nbsp; {followers}</span> : ''}
        {skulls !== undefined ? <span>Skulls:&nbsp;&nbsp; {skulls}</span> : ''}
        {components !== undefined ? <span>Components:&nbsp;&nbsp; {components}</span> : ''}
        </div>
      </div>
);

export default Project;
