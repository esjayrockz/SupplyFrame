import axios from 'axios';
import moment from 'moment';

const api_key = process.env.API_KEY;
const url = 'https://api.hackaday.io/v1/projects';

export const fetchAllProjects = () => {

  return (dispatch) => {
        return axios({
        method: 'get',
        url: `${url}`,
        params: {
          api_key: `${api_key}`,
          page: '1'
        }
      }).then((response) => {
          return dispatch(saveAllProjects(response.data));
      }).catch((response) => {
          return dispatch(saveAllProjects(undefined));
      });
  };
}

export const saveAllProjects = (data) => {
  let projects;
  if(!data){
    projects = [];
  } else {
    projects = data.projects;
  }
  return {
    type: 'SAVE_ALL_PROJECTS',
    projects
  };
};
