import axios from 'axios';

const api_key = process.env.API_KEY;
const url = 'https://api.hackaday.io/v1/users';

export const fetchCurrentPageUsers = (currentPage, perPage) => {
  return (dispatch, getState) => {
    let currentPageUsers = [], promises = [];
    const start = (currentPage - 1) * perPage;
    const projects = getState().projects.data;
    const end = (perPage * currentPage) < projects.length ? (perPage * currentPage) : projects.length;
    for(let i = start; i < end; i++){
      currentPageUsers.push(projects[i].owner_id);
    }

    currentPageUsers.forEach((user_id) => {
      promises.push(axios({
        method: 'get',
        url: `${url}/${user_id}`,
        params: {
          api_key: `${api_key}`
        }
    }));
  });
  return axios.all(promises).then((results) => {
    let currentPageUserDetails = [];
    results.forEach((response) => {
      currentPageUserDetails.push(response.data);
    });
      return dispatch(saveCurrentPageUsers(currentPageUserDetails));
  }).catch((e) => {
      return dispatch(saveCurrentPageUsers(undefined));
  });
  };
}

export const saveCurrentPageUsers = (currentPageUserDetails) => {
  let users;
  if(!currentPageUserDetails){
    users = [];
  } else {
    users = currentPageUserDetails;
  }
  return {
    type: 'SAVE_CURRENT_USERS',
    users
  };
};
