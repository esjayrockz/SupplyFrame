export default (state = {}, action) => {
  switch(action.type){
    case 'SAVE_ALL_PROJECTS':
    return {
      data: action.projects
    }
    default:
    return state;
  };
};
