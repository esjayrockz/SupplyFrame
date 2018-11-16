import React from 'react';

const Project = ({project, users})=> {
  let name,
      summary,
      views,
      comments,
      followers,
      skulls,
      components,
      screenName,
      username,
      rank,
      userFollowers,
      userFollowing,
      userSkulls,
      projects,
      location;

  name = project.name;
  summary = project.summary;
  views = project.views;
  comments = project.comments;
  followers = project.followers;
  skulls = project.skulls;
  components = project.components;
  if(users){
    screenName = users.screen_name;
    username = users.username;
    rank = users.rank;
    userFollowers = users.followers;
    userFollowing = users.following;
    userSkulls = users.skulls;
    projects = users.projects;
    location = users.location;
  }

  return (
      <div className="box-layout__box">
        <h3>{name}</h3>
        {screenName !== undefined ? <span className="owner"><strong>Owner:&nbsp; </strong>{screenName}
        <span className="owner__tooltip">
          <span>Owner details</span>
          {username !== undefined ? <span>Username:&nbsp;&nbsp; {username}</span> : ''}
          {rank !== undefined ? <span>Rank:&nbsp;&nbsp; {rank}</span> : ''}
          {userFollowers !== undefined ? <span>Followers:&nbsp;&nbsp; {userFollowers}</span> : ''}
          {userFollowing !== undefined ? <span>Following:&nbsp;&nbsp; {userFollowing}</span> : ''}
          {userSkulls !== undefined ? <span>Skulls:&nbsp;&nbsp; {userSkulls}</span> : ''}
          {projects !== undefined ? <span>Projects:&nbsp;&nbsp; {projects}</span> : ''}
          {location ? <span>Location:&nbsp;&nbsp; {location}</span> : ''}
          </span>
        </span> : 'Fetching Owner details...'}
        {summary !== undefined ? <span><strong>Summary:&nbsp; </strong>{summary}</span> : ''}
        {views !== undefined ? <span><strong>Views:&nbsp;&nbsp; </strong>{views}</span> : ''}
        {comments !== undefined ? <span><strong>Comments:&nbsp;&nbsp; </strong>{comments}</span> : ''}
        {followers !== undefined ? <span><strong>Followers:&nbsp;&nbsp; </strong>{followers}</span> : ''}
        {skulls !== undefined ? <span><strong>Skulls:&nbsp;&nbsp; </strong>{skulls}</span> : ''}
        {components !== undefined ? <span><strong>Components:&nbsp;&nbsp; </strong>{components}</span> : ''}
      </div>
)};

export default Project;
